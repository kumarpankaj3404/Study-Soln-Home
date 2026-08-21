import React from 'react'
import { PiSpeedometerLight } from "react-icons/pi";
import { FaMicrochip } from "react-icons/fa6";
import { FaHeadSideVirus } from "react-icons/fa";
const Architecture = () => {
    const architecturePoints = [
        {
            id: 1,
            name: "Deepgram",
            desc: "Powered by Nova-3 for unparalleled accuracy and sub-500ms latency, enabling instant comprehension."
        },
        {
            id : 2,
            name: "Supabase Persistence",
            desc: "Robust PostgreSQL backend for secure session history, personalized embeddings, and bookmarking."
        },
        {
            id: 3,
            name: "GPT-4 Reasoning",
            desc: "Orchestrating complex educational logic to guide you via Socratic questioning rather than just giving answers."
        }
    ];
  return (
    <div className="flex flex-col gap-5 z-10" id="architecture">
        <h1 className="text-2xl font-bold text-center">Cognitive Architecture</h1>
        <p className="text-md font-light text-center text-zinc-300/80">
            A purpose-built inference pipeline designed for real-time educational dialogue
        </p>
        <section className="relative">
            <article className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4 w-full *:bg-zinc-700 *:rounded-xl *:p-3 *:px-5 *:border *:border-zinc-700 -z-30">
                {architecturePoints.map(({id, name, desc}) => (
                    <span key={id} className="px-4 flex flex-col gap-2 items-center justify-center z-10 text-center">
                        <span className ="bg-cyan-400/20 backdrop-blur-sm  border border-cyan-400/50  rounded-md text-xl w-fit p-2">
                            {id == 1 ? <PiSpeedometerLight/> : id == 2 ? <FaMicrochip/> : <FaHeadSideVirus/>}
                        </span>
                        
                        <h3 className="text-lg font-bold">{name}</h3>
                        <p className="text-sm text-zinc-300/80">{desc}</p>
                    </span>
                ))}
            </article>
            <span className="w-full h-1 bg-cyan-400/80 absolute top-1/2 hidden md:block"></span>
        </section>
    </div>
  )
}

export default Architecture