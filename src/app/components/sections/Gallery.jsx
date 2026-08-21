"use client";

import { useState, useEffect, useCallback } from "react";

// -----------------------------------------------------------------------------
// Photography. Files live in public/gallery/. `ratio` = height / width — it sets
// each frame's shape so the masonry stays asymmetric. To add a photo: optimize
// it for web (~1600px long edge), drop it in public/gallery/, add a line here.
// Optional: give any frame a `title` and it will show in the lightbox.
// -----------------------------------------------------------------------------
const photos = [
  { src: "/gallery/E4DADB0F-86B0-43CC-BD12-908BC444FE16.jpg", ratio: 0.606 },
  { src: "/gallery/DSC00254.jpg", ratio: 0.666 },
  { src: "/gallery/D3F708D9-12DF-4F6B-9448-C2F0B69C9458.jpg", ratio: 1.1 },
  { src: "/gallery/IMG_6650.jpg", ratio: 1.778 },
  { src: "/gallery/DSC00266_Original.jpg", ratio: 0.556 },
  { src: "/gallery/IMG_2708.jpg", ratio: 1.778 },
  { src: "/gallery/_DSC0359_Original.jpg", ratio: 1.501 },
  { src: "/gallery/IMG_2614.jpg", ratio: 0.562 },
  { src: "/gallery/IMG_3052.jpg", ratio: 1.778 },
  { src: "/gallery/E038A69D-7DC1-42D9-BE9A-264C5616A097.jpg", ratio: 0.562 },
  { src: "/gallery/IMG_6413.jpg", ratio: 0.75 },
  { src: "/gallery/IMG_0866.jpg", ratio: 1.778 },
  { src: "/gallery/IMG_2690.jpg", ratio: 0.562 },
  { src: "/gallery/IMG_5854.jpg", ratio: 1.5 },
  { src: "/gallery/IMG_5359.jpg", ratio: 1.778 },
  { src: "/gallery/IMG_4246.jpg", ratio: 0.562 },
  { src: "/gallery/IMG_6125.jpg", ratio: 1.778 },
  { src: "/gallery/IMG_0736_Original.jpg", ratio: 1.333 },
  { src: "/gallery/IMG_8008.jpg", ratio: 0.562 },
  { src: "/gallery/IMG_7335.jpg", ratio: 1.778 },
  { src: "/gallery/IMG_5700_Original.jpg", ratio: 1.333 },
  { src: "/gallery/IMG_5506.jpg", ratio: 0.562 },
  { src: "/gallery/IMG_8135.jpg", ratio: 1.778 },
  { src: "/gallery/IMG_6776_Original.jpg", ratio: 1.333 },
  { src: "/gallery/IMG_5519.jpg", ratio: 1.778 },
  { src: "/gallery/IMG_5331.jpg", ratio: 0.562 },
  { src: "/gallery/IMG_8456.jpg", ratio: 1.778 },
  { src: "/gallery/IMG_7687.jpg", ratio: 1.333 },
  { src: "/gallery/IMG_5641_SnapseedCopy.jpg", ratio: 1.778 },
  { src: "/gallery/IMG_7787.jpg", ratio: 1.333 },
];

export default function Gallery() {
  const [active, setActive] = useState(null); // index of open lightbox, or null
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir) =>
      setActive((i) =>
        i === null ? i : (i + dir + photos.length) % photos.length
      ),
    []
  );

  // Keyboard control for the lightbox: Esc closes, arrows navigate.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden"; // lock scroll while open
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, step]);

  const photo = isOpen ? photos[active] : null;
  const counter = (n) => String(n).padStart(2, "0");

  return (
    <>
      <div className="sect-head">
        <span className="glyph">##</span>
        <h2>
          <span className="dim">06 /</span> gallery
          <span className="dim">/</span>{" "}
          <span className="accent">photography</span>
        </h2>
        <span className="count">{photos.length} frames</span>
      </div>

      <div className="prompt" style={{ marginBottom: "32px" }}>
        <span className="user">dulguun</span>
        <span className="path">~/photos $</span>
        <span className="cmd">ls --gallery --sort=recent</span>
      </div>

      <div className="gallery">
        {photos.map((p, i) => (
          <figure
            className="gcard"
            key={p.src}
            onClick={() => setActive(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(i)}
            aria-label={p.title || `Open frame ${counter(i + 1)}`}
          >
            <div className="gframe" style={{ aspectRatio: `1 / ${p.ratio}` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.title || `Frame ${counter(i + 1)}`} loading="lazy" />
              <span className="gindex">{counter(i + 1)}</span>
              <span className="gexpand">⤢</span>
            </div>
          </figure>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox" onClick={close}>
          <button className="lb-close" onClick={close} aria-label="Close">
            [esc] ✕
          </button>
          <button
            className="lb-nav lb-prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous"
          >
            ‹
          </button>

          <figure className="lb-stage" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo.src} alt={photo.title || `Frame ${counter(active + 1)}`} />
            <figcaption>
              <span className="gtitle">{photo.title || "untitled"}</span>
              <span className="gmeta">
                {counter(active + 1)} / {counter(photos.length)}
              </span>
            </figcaption>
          </figure>

          <button
            className="lb-nav lb-next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
