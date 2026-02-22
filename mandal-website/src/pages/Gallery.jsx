import { Link } from "react-router-dom";
import { useState } from "react";

const images = [
  "/ram.png",
  "/murti.png",
  "/trees.png",
  "/village.png",
  "/murti.png",
  "/ram.png",
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  const nextImage = () => {
    setSelected((selected + 1) % images.length);
  };

  const prevImage = () => {
    setSelected((selected - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#070707] text-gray-900 dark:text-white pt-28 px-6">

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold text-orange-500 text-center mb-12">
        Mandal Photo Gallery
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <div
            key={i}
            onClick={() => setSelected(i)}
            className="cursor-pointer group overflow-hidden rounded-xl shadow-lg border border-orange-500/20"
          >
            <img
              src={src}
              alt="mandal"
              className="w-full h-52 object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* BACK BUTTON */}
      <div className="flex justify-center mt-12">
        <Link
          to="/"
          className="bg-white/10 backdrop-blur border border-orange-500 px-8 py-3 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-black transition duration-300"
        >
          ← Back to Home
        </Link>
      </div>

      {/* LIGHTBOX VIEWER */}
      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          <img
            src={images[selected]}
            alt="preview"
            className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* CLOSE */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* PREVIOUS */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 text-white text-4xl"
          >
            ‹
          </button>

          {/* NEXT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}