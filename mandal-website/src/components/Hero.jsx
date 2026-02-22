import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Hero() {
  const images = [
    "./public/shreeram.png",
    "./public/hero2.jpg",
    "./public/hero3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen relative flex items-center justify-center text-center overflow-hidden">
      
      {/* HERO IMAGES (carousel) */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover scale-110 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* LIGHT MODE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white dark:from-black/80 dark:via-black/70 dark:to-black" />

      {/* ORANGE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.25),transparent_60%)]" />

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-4 drop-shadow-lg">
          श्री राम सेवा मंडळ, रामवाडी
        </h1>
        <p className="text-gray-800 dark:text-gray-200 mb-8">
          Serving our village with unity and pride
        </p>
         {/* 🔥 GALLERY BUTTON */}
        <Link
          to="/gallery"
          className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          View Gallery
        </Link>
      </div>
    </section>
  );
}

function HeroBtn({ label, link }) {
  return (
    <a href={link} className="bg-white/10 backdrop-blur border border-orange-500 px-6 py-3 rounded hover:bg-orange-500 hover:text-black transition">
      {label}
    </a>
  );
}

export default Hero;