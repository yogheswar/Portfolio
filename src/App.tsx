import React from 'react';
import { motion } from 'motion/react';
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
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#050505] text-[#F5F5F5] antialiased selection:bg-[#E50914] selection:text-white relative">
      {/* Precision Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Cinematic Custom Precision Cursor (Non-touch screens only) */}
      <CustomCursor />

      {/* Minimal Sticky Navigation */}
      <Navbar />

      {/* Editorial Narrative Flow */}
      <main className="w-full max-w-full overflow-x-hidden">
        {/* HOME / HERO (Cinematic entry with scroll-fade photograph) */}
        <Hero />

        {/* 01 ABOUT (More than just code) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <About />
        </motion.div>

        {/* 02 PROJECTS & EXPERIENCE (Things I've Built) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Projects />
        </motion.div>

        {/* 03 SKILLS & KNOWLEDGE (What I Work With) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Skills />
        </motion.div>

        {/* 04 ACHIEVEMENTS (Real Visual Red Timeline Journey) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Achievements />
        </motion.div>

        {/* 05 GET IN TOUCH (Let's Build Something) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Contact />
        </motion.div>
      </main>

      {/* Editorial Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
