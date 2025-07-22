import React, { useState } from "react";
import SectionHeader from "../ui/SectionHeader";

const photos = [
  { src: "/profile.png", alt: "Portrait Photography" },
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", alt: "Mountain Landscape" },
  { src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", alt: "City Street" },
  { src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80", alt: "Wildlife" },
  { src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80", alt: "Night Sky" },
  { src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", alt: "Macro Flower" },
];

const aspectRatios = ["aspect-[4/5]", "aspect-[3/2]", "aspect-[1/1]", "aspect-[16/9]", "aspect-[5/7]", "aspect-[2/3]"];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
      <SectionHeader
        title="Art Gallery"
        subtitle="Curated in rhythm, not symmetry"
        description="Each frame speaks on its own, naturally."
        alignment="center"
        decoratorColor="gray"
      />

      {/* Masonry-style layout using CSS columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mt-12 [column-fill:_balance]">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(photo)}
            className={`overflow-hidden rounded-xl break-inside-avoid cursor-zoom-in transition-transform duration-300 hover:scale-[1.02] bg-zinc-100 dark:bg-zinc-800 ${aspectRatios[idx % aspectRatios.length]}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-opacity duration-300 hover:opacity-90"
            />
          </div>
        ))}
      </div>

      {/* Full view lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-w-[90%] max-h-[90%] object-contain transition-opacity duration-300"
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl font-light hover:opacity-80"
            onClick={() => setSelected(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;