import React, { useState } from 'react'
import { LuBrainCircuit } from "react-icons/lu";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-zinc-600 px-4 py-2 relative">
      <div className="flex justify-between items-center">
        <article className="flex items-center gap-6">
          <h1 className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-cyan-300/80">
            <LuBrainCircuit />
            Study Solutions
          </h1>
          <ul className="hidden md:flex items-center gap-4 text-sm">
            <li><a href="/" className="hover:text-cyan-300 transition-colors duration-200">Tutors</a></li>
            <li><a href="/" className="hover:text-cyan-300 transition-colors duration-200">Features</a></li>
            <li><a href="/" className="hover:text-cyan-300 transition-colors duration-200">Curriculum</a></li>
          </ul>
        </article>

        <div className="flex items-center gap-3">
          <button className="text-cyan-300 border font-light border-zinc-600 px-2 py-1 rounded-md hover:bg-cyan-400 hover:text-zinc-950 hover:scale-105 transition-all duration-200 text-sm">
            <a href="">Enter App</a>
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

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-3 py-3 border-t border-zinc-700 mt-2 text-sm text-zinc-300">
          <li><a href="/" className="hover:text-cyan-300 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Tutors</a></li>
          <li><a href="/" className="hover:text-cyan-300 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="/" className="hover:text-cyan-300 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Curriculum</a></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar