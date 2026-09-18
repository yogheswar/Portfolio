import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CustomCursor } from './components/CustomCursor';

export function App() {
  return (
    <div id="app" className="min-h-screen w-full bg-[#050505] text-[#F5F5F5] antialiased selection:bg-[#E50914] selection:text-white relative">
      {/* Precision Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Cinematic Custom Precision Cursor (Non-touch screens only) */}
      <CustomCursor />

      {/* Minimal Sticky Navigation */}
      <Navbar />

      {/* Editorial Narrative Flow */}
      <main id="main" className="w-full">
        {/* HOME / HERO (Cinematic entry with scroll-fade photograph) */}
        <Hero />

        {/* 01 ABOUT (More than just code) */}
        <About />

        {/* 02 PROJECTS & EXPERIENCE (Things I've Built) */}
        <Projects />

        {/* 03 SKILLS & KNOWLEDGE (What I Work With) */}
        <Skills />

        {/* 04 ACHIEVEMENTS (Real Visual Red Timeline Journey) */}
        <Achievements />

        {/* 05 GET IN TOUCH (Let's Build Something) */}
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
