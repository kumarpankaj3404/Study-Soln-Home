import React from 'react'

import { LayoutTextFlip } from '../ui/Text-Flip.jsx'
const Hero = () => {
  return (
    <div className="flex flex-col gap-5 items-center text-center z-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center flex gap-2 ">

        <LayoutTextFlip text="AI tutor that actually" words={["listen.", "thinks.", "help."]} duration={3000} />
      </h1>
      <p className="text-center text-zinc-300 text-sm sm:text-base max-w-lg">
        Experience the next generation of conversational learning. Ultra-low latency, perfectly synthesized voices, ready to engage.
      </p>
    </div>
  )
}

export default Hero