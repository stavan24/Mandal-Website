import { useState } from "react";

function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/90 backdrop-blur border-b border-orange-500/40">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-500" />
          <div>
            <div className="text-xl font-bold text-orange-500">Shivaji Mandal</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Serving our village with unity</div>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#" className="text-orange-500">Home</a>
          <a href="#about" className="hover:text-orange-500">About</a>
          <a href="#events" className="hover:text-orange-500">Events</a>
          <a href="#members" className="hover:text-orange-500">Members</a>
          <a href="#contact" className="hover:text-orange-500">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setDark(!dark)} className="border border-orange-500 px-3 py-1 rounded text-orange-500">
            {dark ? "☀" : "🌙"}
          </button>
          <button className="hidden md:block border border-orange-500 px-4 py-2 rounded text-orange-500">
            Join Us
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden text-orange-500 text-2xl">☰</button>
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-center gap-5 py-6 bg-white dark:bg-black border-t border-orange-500">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#members">Members</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar