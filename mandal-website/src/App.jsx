import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Members from "./components/Members";
import GalleryContact from "./components/GalleryContact";
import Footer from "./components/Footer";

import Gallery from "./pages/Gallery";

function MainLayout({ dark, setDark }) {
  const location = useLocation();
  const isGalleryPage = location.pathname === "/gallery";

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-[linear-gradient(149deg,_rgba(69,30,0,1)_0%,_rgba(0,0,0,1)_100%)] text-gray-900 dark:text-white transition-colors duration-500">

        {/* ✅ Hide Navbar on Gallery page */}
        {!isGalleryPage && <Navbar dark={dark} setDark={setDark} />}

        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Events />
                <Members />
                <GalleryContact />
                <Footer />
              </>
            }
          />

          {/* GALLERY PAGE */}
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

      </div>
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <Router>
      <MainLayout dark={dark} setDark={setDark} />
    </Router>
  );
}