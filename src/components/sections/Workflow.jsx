import React from 'react'
import { GiWifiRouter } from "react-icons/gi";
import { RiSpeakAiLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
const Workflow = () => {
    const workflowSteps = [
        {
            id: 1,
            name: "Vapi Web SDK",
            desc: "Robust orchestration for real-time WebRTC management and audio streaming"
        },
        {
            id:2,
            name:"ElevenLabs & Azure",
            desc:"State-of-the-art voice synthesis providing lifelike, responsive AI personas"
        },
        {
            id: 3,
            name: "Next.js 16 & React 19",
            desc:" The modern, performant foundation powering your entire learning experience"
        }
    ]
  return (
    <section className="flex flex-col gap-5 items-center z-10" id="workflow">
        <h1 className='text-2xl font-bold text-center'>Seamless Workflow</h1>
        <p className='text-center text-zinc-300/80'>Built on a performant foundation for frictionless study routines.</p>
        <article 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
        >
            {workflowSteps.map(({id, name, desc}) => (
                <div key={id} className="flex flex-col items-center text-center gap-2 bg-zinc-800/80 px-5 py-10 rounded-xl border border-zinc-700/50">
                    <span className="text-2xl">
                        {id == 1 ? <GiWifiRouter /> : id == 2 ? <RiSpeakAiLine /> : <FaCode />}
                    </span>
                    <h5 className="text-lg font-light">{name}</h5>
                    <p className="text-zinc-300/80 text-sm">{desc}</p>
                </div>
            ))}
        </article>
    </section>
  )
}

export default Workflow