import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-3 px-4 border-t border-zinc-600 py-4 *:z-10">
        <article className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <h1 className="flex justify-center items-center gap-2 text-xl font-medium ">
                Study Solutions
            </h1>
            <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-sm text-zinc-300/80 font-light *:hover:text-cyan-400/80 *:transition-all *:duration-200">
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms of Service</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Support</a></li>
            </ul>
        </article>
        <span className="text-zinc-400 text-sm text-center">
            &copy; 2026 Study Solutions. All rights reserved.
        </span>
    </footer>
  )
}

export default Footer