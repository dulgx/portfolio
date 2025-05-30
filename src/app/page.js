import Image from "next/image";
import ThreeDCard from "./components/3DCard";
export default function Home() {
  return (
    <div>
      <ThreeDCard 
        className="w-full h-screen" 
        cardColor="white" 
        ropeColor="silver" 
        cardOpacity={0.8}
        gravity={-90}
      />
    </div>
  );
}
