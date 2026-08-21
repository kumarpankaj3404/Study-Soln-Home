import React from 'react'
import { BsLightningCharge } from "react-icons/bs";
import { FaAssistiveListeningSystems } from "react-icons/fa";

const InstantFeedback = () => {
    const features = [
        {
            id: 1,
            name: "Adaptive Latency",
            desc: "Sub-300ms response times for natural flow and effortless communication"
        },
        {
            id: 2,
            name: "Contextual Listening",
            desc: "AI understands intent even during mid-sentence pauses or natural speech patterns"
        }
    ]
  return (
    <section className="flex flex-col gap-5 items-center z-10">
        <h1 className='text-2xl font-bold text-center'>Engineered for Instant Feedback</h1>
        <p className='text-center text-zinc-300/80'>Experience zero-lag conversational learning powered by our specialized voice-first infrastructure</p>
        <article 
            className="rounded-lg border border-zinc-700/50 bg-zinc-800/80 backdrop-blur-sm w-full"
        >
            <img src="https://res.cloudinary.com/drksg4rho/image/upload/v1787299062/voice_jh6stw.png" alt="Voice Wave" className="w-full" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-700/50 p-5 ">
                {features.map(({id, name, desc}) => (
                    <span key={id} className="flex gap-2   z-10">
                        <span className ="bg-cyan-400/20 backdrop-blur-sm  border border-cyan-400/50  rounded-md text-xl w-fit h-fit p-2 text-cyan-400">
                            {id == 1 ? <BsLightningCharge/> : <FaAssistiveListeningSystems/>}
                        </span>
                        <span>
                            <h3 className="text-lg font-medium">{name}</h3>
                            <p className="text-sm text-zinc-300/80">{desc}</p>
                        </span>
                    </span>
                ))}
            </div>
        </article>
    </section>
  )
}

export default InstantFeedback