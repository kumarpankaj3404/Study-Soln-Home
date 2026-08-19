import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { IoMdMicOff, IoMdMic, IoMdSettings } from "react-icons/io";
import { MdCallEnd } from "react-icons/md";
import { MdOutlineMicNone } from "react-icons/md";
import SoundWave from '../ui/SoundWave.jsx'

const LiveDemoCard = () => {
    const [isMicOn, setIsMicOn] = useState(false);
    return (
        <div className='z-10 flex flex-col items-center gap-10'>
            <button className="flex items-center gap-2 bg-cyan-400  text-zinc-950 py-3 sm:py-4 px-5 rounded-md hover:bg-cyan-600 hover:text-cyan-200 transition-all duration-200 text-sm sm:text-base">
                <MdOutlineMicNone className="text-xl" />
                Start Voice Session
            </button>
            <SoundWave />
            <div className="flex flex-col gap-5 items-center border border-white/10 rounded-xl p-5 bg-zinc-800/80 backdrop-blur-md w-full no-pad">
                <div className="flex  justify-between w-full">
                    <span className="flex gap-3">
                        <img
                            src="https://i.pinimg.com/736x/a9/81/38/a9813879abda246ea5f2e4b31a73d1a7.jpg"
                            alt="Professor"
                            className="w-16 h-12 sm:w-20 sm:h-15 rounded-2xl object-top-left object-cover"
                        />
                        <span className="">
                            <h3 className="text-sm font-bold">Professor R.K.S</h3>
                            <p className="text-sm text-zinc-400">AI Tutor</p>
                        </span>

                    </span>
                    <span className="text-green-400 bg-green-400/50 h-fit px-2 rounded-md flex items-center gap-1 text-sm">
                        <motion.span
                            className="rounded-full w-1 h-1 bg-white/50 "
                            animate={{ scale: [1, 2, 1] }}
                            transition={{ repeat: Infinity, duration: 1 }}>

                        </motion.span>
                        Live 120MS
                    </span>
                </div>
                <div className="bg-zinc-700/80 rounded-xl p-5 w-full flex flex-col gap-3 text-zinc-300">
                    <p>"Let's break down the Schrödinger equation—remember, it's about probability amplitudes..."</p>
                </div>
                <div className="flex justify-between items-center text-zinc-300 gap-4 sm:gap-10 [&>*:nth-child(odd)]:bg-zinc-700/80 *:rounded-xl *:p-3 *:px-4 sm:*:px-5 border-t border-zinc-700/50 px-2 sm:px-5 py-2 w-full">
                    <span >
                        {isMicOn ? <IoMdMicOff /> : <IoMdMic />}
                    </span>
                    <span className="flex gap-2 sm:gap-3 items-center bg-red-600/20 backdrop-blur-sm  border border-red-600/50 text-sm">
                        <MdCallEnd />
                        End Session
                    </span>
                    <span>
                        <IoMdSettings />
                    </span>
                </div>
            </div>
        </div>

    )
}

export default LiveDemoCard