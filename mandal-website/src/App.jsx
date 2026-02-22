import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Members from "./components/Members";
import GalleryContact from "./components/GalleryContact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-[linear-gradient(149deg,_rgba(69,30,0,1)_0%,_rgba(0,0,0,1)_100%)]  text-gray-900 dark:text-white transition-colors duration-500">
        
        <Navbar dark={dark} setDark={setDark} />
        <Hero />
        <About />
        <Events />
        <Members />
        <GalleryContact />
        <Footer />

      </div>
    </div>
  );
}