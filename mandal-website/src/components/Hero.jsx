function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center text-center overflow-hidden">
      {/* HERO IMAGE */}
      <img src="/banner.jpg" className="absolute inset-0 w-full h-full object-cover scale-110" />

      {/* LIGHT MODE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white dark:from-black/80 dark:via-black/70 dark:to-black" />

      {/* ORANGE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.25),transparent_60%)]" />

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-4 drop-shadow-lg">
          Shivaji Mandal
        </h1>
        <p className="text-gray-800 dark:text-gray-200 mb-8">
          Serving our village with unity and pride
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <HeroBtn label="About Us" link="#about" />
          <HeroBtn label="Our Events" link="#events" />
          <HeroBtn label="Our Members" link="#members" />
          <HeroBtn label="Contact Us" link="#contact" />
        </div>
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

export default Hero