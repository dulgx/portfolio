"use client";

import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { Text } from "@react-three/drei";

extend({ MeshLineGeometry, MeshLineMaterial });

export default function ThreeDCard({
  className = "w-full h-screen",
  cardColor = "white",
  ropeColor = "grey",
  cardOpacity = 0.5,
  gravity = -40,
  width = 0.8,
  height = 1.125,
  position = [2, 0, 0],
  displayPosition = [0, 4, 0],
}) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Physics interpolate gravity={[0, gravity, 0]} timeStep={1 / 60}>
          <Band
            cardColor={cardColor}
            ropeColor={ropeColor}
            cardOpacity={cardOpacity}
            width={width}
            height={height}
            position={position}
            displayPosition={displayPosition}
          />
        </Physics>
      </Canvas>
    </div>
  );
}

function createGradientTexture() {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  // Create a more sophisticated gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, size);
  gradient.addColorStop(0, "rgba(79, 172, 254, 0.8)");
  gradient.addColorStop(0.5, "rgba(0, 242, 254, 0.6)");
  gradient.addColorStop(1, "rgba(79, 172, 254, 0.8)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  // Add overlay for better text contrast
  const overlayGradient = ctx.createLinearGradient(0, size * 0.6, 0, size);
  overlayGradient.addColorStop(0, "rgba(0, 0, 0, 0)");
  overlayGradient.addColorStop(1, "rgba(0, 0, 0, 0.4)");

  ctx.fillStyle = overlayGradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createProfileTexture() {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  // Create background
  ctx.fillStyle = "#f0f0f0";
  ctx.fillRect(0, 0, size, size);

  // Try to load profile image
  const img = new Image();
  img.crossOrigin = "anonymous";

  return new Promise((resolve) => {
    img.onload = () => {
      // Draw profile image
      ctx.drawImage(img, 0, 0, size, size);
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      resolve(texture);
    };

    img.onerror = () => {
      // Fallback: create a simple avatar
      const gradient = ctx.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2
      );
      gradient.addColorStop(0, "#4facfe");
      gradient.addColorStop(1, "#00f2fe");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);

      // Add initial
      ctx.fillStyle = "white";
      ctx.font = `${size / 4}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("D", size / 2, size / 2);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      resolve(texture);
    };

    img.src = "/profile.png";
  });
}

function Band({
  cardColor,
  ropeColor,
  cardOpacity,
  width,
  height,
  position,
  displayPosition,
}) {
  const band = useRef(),
    fixed = useRef(),
    j1 = useRef(),
    j2 = useRef(),
    j3 = useRef(),
    card = useRef();
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  const { width: canvasWidth, height: canvasHeight } = useThree(
    (state) => state.size
  );
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );
  const [dragged, drag] = useState(false);
  const [gradientMap] = useState(() => createGradientTexture());
  const [profileTexture, setProfileTexture] = useState(null);

  // Load profile texture
  useEffect(() => {
    createProfileTexture().then(setProfileTexture);
  }, []);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1, 0],
  ]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (fixed.current) {
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.translation());
      curve.points[2].copy(j1.current.translation());
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  return (
    <>
      <group position={displayPosition}>
        <RigidBody
          ref={fixed}
          angularDamping={2}
          linearDamping={2}
          type="fixed"
        />
        <RigidBody
          position={[0.5, 0, 0]}
          ref={j1}
          angularDamping={2}
          linearDamping={2}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1, 0, 0]}
          ref={j2}
          angularDamping={2}
          linearDamping={2}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1.5, 0, 0]}
          ref={j3}
          angularDamping={2}
          linearDamping={2}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={position}
          ref={card}
          angularDamping={2}
          linearDamping={2}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[width, height, 0.01]} />
          <group>
            {/* Main card background */}
            <mesh
              onPointerUp={(e) => (
                e.target.releasePointerCapture(e.pointerId), drag(false)
              )}
              onPointerDown={(e) => (
                e.target.setPointerCapture(e.pointerId),
                drag(
                  new THREE.Vector3()
                    .copy(e.point)
                    .sub(vec.copy(card.current.translation()))
                )
              )}
            >
              <planeGeometry args={[width * 2, height * 2]} />
              <meshPhysicalMaterial
                transparent
                opacity={0.95}
                color="white"
                map={gradientMap}
                roughness={0.1}
                metalness={0.05}
                transmission={0.1}
                ior={1.5}
                thickness={0.5}
                clearcoat={1}
                clearcoatRoughness={0.1}
                envMapIntensity={1}
                reflectivity={0.5}
              />
            </mesh>

            {/* Profile image area */}
            <mesh position={[0, 0.2, 0.011]}>
              <circleGeometry args={[0.25, 32]} />
              <meshBasicMaterial
                map={profileTexture}
                transparent
                opacity={0.9}
              />
            </mesh>

            {/* Verification badge */}
            <mesh position={[0.2, 0.35, 0.012]}>
              <circleGeometry args={[0.04, 16]} />
              <meshBasicMaterial color="white" />
            </mesh>
            <mesh position={[0.2, 0.35, 0.013]}>
              <circleGeometry args={[0.03, 16]} />
              <meshBasicMaterial color="#1DA1F2" />
            </mesh>

            {/* Name */}
            <Text
              position={[0, -0.2, 0.01]}
              fontSize={0.15}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              Dulguun ✓
            </Text>

            {/* Description */}
            <Text
              position={[0, -0.4, 0.01]}
              fontSize={0.08}
              color="rgba(255, 255, 255, 0.9)"
              anchorX="center"
              anchorY="middle"
              maxWidth={1.4}
              textAlign="center"
            >
              A Software Developer focused on{"\n"}full-stack development and
              Odoo customization.
            </Text>

            {/* Stats */}
            <group position={[-0.4, -0.65, 0.01]}>
              <Text
                position={[0, 0, 0]}
                fontSize={0.06}
                color="rgba(255, 255, 255, 0.8)"
                anchorX="left"
                anchorY="middle"
              >
                👥 312
              </Text>
            </group>

            <group position={[0, -0.65, 0.01]}>
              <Text
                position={[0, 0, 0]}
                fontSize={0.06}
                color="rgba(255, 255, 255, 0.8)"
                anchorX="center"
                anchorY="middle"
              >
                📋 48
              </Text>
            </group>

            {/* Follow button */}
            <mesh position={[0.4, -0.65, 0.012]}>
              <planeGeometry args={[0.25, 0.08]} />
              <meshPhysicalMaterial
                transparent
                opacity={0.8}
                color="white"
                roughness={0.2}
                metalness={0.1}
                clearcoat={0.5}
              />
            </mesh>
            <Text
              position={[0.4, -0.65, 0.02]}
              fontSize={0.05}
              color="#333333"
              anchorX="center"
              anchorY="middle"
            >
              Follow +
            </Text>
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          transparent
          opacity={0.8}
          color={ropeColor}
          depthTest={false}
          resolution={[canvasWidth, canvasHeight]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
