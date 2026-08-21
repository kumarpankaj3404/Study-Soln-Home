import React, { useState } from 'react'

const Footer = () => {
    const [showEaster, setShowEaster] = useState(false);

    const handleEasterEggClick = () => {
        setShowEaster(true);
        setTimeout(() => setShowEaster(false), 2000);
    }
    return (
        <>
            {showEaster &&
                <section className='fixed top-8 left-1/2 z-99999 bg-green-800/80 backdrop-blur-sm border border-green-400/50 w-fit rounded-xl px-6 py-3.5  whitespace-nowrap animate-fadeInUp text-white font-light'>
                    <h4>Click brain logo 5 times.</h4>
                </section>}
            <footer className="flex flex-col md:flex-row justify-between items-center gap-3 px-4 border-t border-zinc-600 py-4 *:z-10">
                <article className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                    <h1 className="flex justify-center items-center gap-2 text-xl font-medium ">
                        Study Solutions
                    </h1>
                    <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-sm text-zinc-300/80 font-light *:hover:text-cyan-400/80 *:transition-all *:duration-200">
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Support</a></li>
                        <li><p onClick={handleEasterEggClick}>Reveal EasterEgg</p></li>
                    </ul>
                </article>
                <span className="text-zinc-400 text-sm text-center">
                    &copy; 2026 Study Solutions. All rights reserved.
                </span>
            </footer>
        </>

    )
}

export default Footer