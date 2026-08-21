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
            <a href="https://studysolution.pankajkumar.app" target="_blank" rel="noopener noreferrer" className='w-fit flex justify-center'>
                <button
                    className="flex items-center gap-2 bg-cyan-400  text-zinc-950   py-3 sm:py-4 px-5 rounded-md hover:bg-cyan-600 hover:text-cyan-200 transition-all duration-200 text-base sm:text-lg hover:cursor-pointer"
                >
                    <MdOutlineMicNone className="text-xl" />
                    Try Voice Session
                </button>
            </a>

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
                            <h3 className="text-base font-bold">Professor R.K.S</h3>
                            <p className="text-base text-zinc-400">AI Tutor</p>
                        </span>

                    </span>
                    <span className="text-green-400 bg-green-400/50 h-fit px-2 rounded-md flex items-center gap-1 text-base">
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
                    <span onClick={() => setIsMicOn(!isMicOn)} className={`cursor-pointer ${isMicOn ? `text-green-400 ` : `text-red-500`}`} title={isMicOn ? 'turn off' : 'turn on'}>
                        {isMicOn ? <IoMdMicOff title='turn off' /> : <IoMdMic title='turn on' />}
                    </span>
                    <span className="flex gap-2 sm:gap-3 items-center bg-red-600/20 backdrop-blur-sm  border border-red-600/50 text-base">
                        <motion.span
                            whileHover={{ rotate: [20, -20, 20, -20, 20, -20, 20, 0], scale: 1.2 }}
                            transition={{ type: "tween", duration: 1 }}
                            className=" "
                        >
                            <MdCallEnd />
                        </motion.span>
                        End Session
                    </span>
                    <span>
                        <motion.span
                            whileHover={{ rotate: 180, scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="flex gap-2 sm:gap-3 items-center bg-zinc-700/20 backdrop-blur-sm  border border-zinc-700/50 text-base "
                        >

                            <IoMdSettings />
                        </motion.span>

                    </span>
                </div>
            </div>
        </div>

    )
}

export default LiveDemoCard