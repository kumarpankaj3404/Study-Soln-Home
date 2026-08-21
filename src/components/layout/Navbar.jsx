import React, { useState, useEffect, useRef } from 'react'
import { LuBrainCircuit } from "react-icons/lu";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const [clickCount, setClickCount] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    const next = clickCount + 1;
    setClickCount(next);

    if (next >= 5) {
      setClickCount(0);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3500);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
        setVisible(true);
      } else {
        setVisible(false);
        setMenuOpen(false);
      }
      setScrolled(currentScrollY > 10);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: 50, x: "-50%", opacity: 0, scale: 0.2 }}
            animate={{ y: 0, x: "-50%", opacity: 1, scale: 1 }}
            exit={{ y: 50, x: "-50%", opacity: 0, scale: 0.2 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-8 left-1/2 z-99999 bg-linear-to-br from-cyan-700 to-cyan-900 border border-cyan-400/40  w-fit rounded-xl px-6 py-3.5 text-cyan-100  whitespace-nowrap">
            <p>&#127793; You found the easter egg! Happy studying &#127881;</p>
          </motion.div>
        )}
      </AnimatePresence>


      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b border-zinc-600 px-4 py-2 backdrop-blur-md transition-all duration-300 ease-in-out
          ${visible ? 'translate-y-0' : '-translate-y-full'}
          ${scrolled ? 'bg-zinc-950/95 shadow-lg shadow-black/30' : 'bg-zinc-950/80'}
        `}
      >
        <div className="flex justify-between items-center">
          <article className="flex items-center gap-6">
            <a
              href='#'
              onClick={handleLogoClick}
              className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-cyan-300/80 select-none"
            >
              <LuBrainCircuit />
              Study Solutions
            </a>
            <ul className="hidden md:flex items-center gap-4 text-base">
              <li><a href="#flow" className="hover:text-cyan-300 transition-colors duration-200">Flow</a></li>
              <li><a href="#architecture" className="hover:text-cyan-300 transition-colors duration-200">Architecture</a></li>
              <li><a href="#workflow" className="hover:text-cyan-300 transition-colors duration-200">Workflow</a></li>
            </ul>
          </article>

          <div className="flex items-center gap-3">
            <button className="text-cyan-300 border font-light border-zinc-600 px-2 py-1 rounded-md hover:bg-cyan-400 hover:text-zinc-950 hover:scale-105 transition-all duration-200 text-base">
              <a href="https://studysolution.pankajkumar.app/" target="_blank" rel="noopener noreferrer">Enter App</a>
            </button>
            <button
              className="md:hidden text-zinc-300 text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-3 py-3 border-t border-zinc-700 mt-2 text-base text-zinc-300">
            <li><a href="/" className="hover:text-cyan-300 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Tutors</a></li>
            <li><a href="/" className="hover:text-cyan-300 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Features</a></li>
            <li><a href="/" className="hover:text-cyan-300 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Curriculum</a></li>
          </ul>
        )}
      </nav>
    </>
  )
}

export default Navbar