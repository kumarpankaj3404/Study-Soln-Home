import React,{useState} from 'react'
import StaticWave from '../ui/StativWave.jsx';

const BentoGrid = () => {
    const personas = [
        {id: 1, name: "Dr. Elina", field: "Statistics"},
        {id: 2, name: "Dr. Marcus", field: "Neuroscience"},
        {id: 3, name: "Dr. Yuki", field: "Astrophysics"},
    ]
    const [currentPersona, setCurrentPersona] = useState(personas[0].id);
  return (
    <div className="flex flex-col gap-5 items-center py-10 full-bleed no-pad px-4 md:px-8 lg:px-20 z-10">
        <h1 className='text-2xl md:text-3xl font-bold text-center'>Engineered for Flow</h1>
        <section className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4 w-full *:bg-zinc-800/80 *:rounded-xl *:p-3 *:px-5 *:border *:border-zinc-700 ">
            <article className="md:col-span-2 flex flex-col gap-2">
                <h2 className='text-xl font-semibold'>Sub-500ms Real-Time Audio</h2>
                <p className='text-sm text-zinc-300/80'>Our proprietary streaming architecture minimizes cognitive load. Conversations feel instantaneous.</p>
                <span className='flex justify-between items-center text-sm'>
                    <h5 className='w-1/4 md:w-1/6 text-xs'>Traditional AI</h5>
                    <span className='w-1/2 md:w-2/3 h-2 bg-zinc-500 rounded-full relative'>
                        <span className='absolute w-1/3 h-2 bg-cyan-300 rounded-full'></span>
                    </span>
                    <p className='w-1/10 text-xs'>1800ms</p>
                </span>
                <span className='flex justify-between items-center text-sm '>
                    <h5 className='w-1/4 md:w-1/6 text-xs'>Study Solutions</h5>
                    <span className='w-1/2 md:w-2/3 h-2 bg-zinc-500 rounded-full relative'>
                        <span className='absolute w-3/4 h-2 bg-cyan-300 rounded-full'></span>
                    </span>
                    <p className='w-1/10 text-xs'>320ms</p>
                </span>
            </article>
            <article className="md:col-span-1 flex flex-col gap-2 items-center justify-center text-center">
                <StaticWave/>
                <h2 className='text-xl font-semibold'>Anywhere, Anytime</h2>
                <p className='text-sm text-zinc-300/80'>
                    Seamlessly transition from desktop focus sessions to mobile walk-and-talks.
                </p>
            </article>
        </section>
        <section className="w-full bg-zinc-800/80 rounded-xl p-3 px-5 border border-zinc-700 flex flex-col md:flex-row gap-4 justify-between">
            <div>
                <h3 className='text-xl font-semibold'>Specialized AI Personas</h3>
                <p className="text-zinc-300/80 text-sm">Choose from highly calibrated models fine-tuned for specific disciplines</p>
            </div>
            <div className="grid grid-cols-3 gap-2 *:h-fit text-sm md:w-2/3">
                {personas.map(({id, name, field}) => (
                    <span key={id} className={`flex flex-col gap-1 px-2 py-2 rounded-md cursor-pointer relative border  ${currentPersona === id ? 'border-cyan-400/80' : 'border-zinc-300/80'}`} onClick={() => setCurrentPersona(id)}>
                        {currentPersona === id && <span className="w-2 h-2 bg-cyan-400 rounded-full absolute top-1 right-1"></span>}
                        <h6 className='text-xs md:text-sm'>{name}</h6>
                        <p className={`text-xs ${currentPersona === id ? 'text-cyan-400/80' : 'text-zinc-300/80'}`}>{field}</p>
                    </span>
                ))}
            </div>
        </section>
    </div>
)
}

export default BentoGrid