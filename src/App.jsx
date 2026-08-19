import Navbar from './components/layout/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import LiveDemoCard from './components/sections/LiveDemoCard.jsx'
import BentoGrid from './components/sections/BentoGrid.jsx'
import Architecture from './components/sections/Architecture.jsx'
import InstantFeedback from './components/sections/InstantFeedback.jsx'
import Workflow from './components/sections/Workflow.jsx'
import Footer from './components/layout/Footer.jsx'
import { DottedGlowBackground } from './components/ui/DottedGlow.jsx'
function App() {
  return (
    <div className="relative min-h-screen bg-[#09090b] w-full">
      <DottedGlowBackground className="pointer-events-none "/>
      <Navbar />
      <main className="flex flex-col gap-12 md:gap-20 items-center justify-center py-16 md:py-40 [&>*:not(.full-bleed)]:w-full [&>*:not(.full-bleed)]:md:w-2/3 [&>*:not(.full-bleed)]:px-4 [&>*:not(.no-pad)]:md:px-0">
        <Hero/>
        <LiveDemoCard/>
        <BentoGrid />
        <Architecture/>
        <InstantFeedback/>
        <Workflow/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
