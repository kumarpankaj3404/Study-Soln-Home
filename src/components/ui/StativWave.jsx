import { motion } from 'framer-motion';

export default function StaticWave() {
  const bars = [
    { 
      id: 1, 
      backgroundColor: ['rgba(232,121,249,0.7)', 'rgba(232,121,249,0.2)', 'rgba(232,121,249,1)'], 
      height: 'h-4', 
      duration: 1.5 
    },
    { 
      id: 2, 
      backgroundColor: ['rgba(232,121,249,0.7)', 'rgba(232,121,249,0.2)', 'rgba(232,121,249,1)'], 
      height: 'h-6', 
      duration: 1.85 
    },
    { 
      id: 3, 
      backgroundColor: ['rgba(232,121,249,0.7)', 'rgba(232,121,249,0.2)', 'rgba(232,121,249,1)'], 
      height: 'h-5', 
      duration: 1.25 
    },
    { 
      id: 4, 
      backgroundColor: ['rgba(232,121,249,0.7)', 'rgba(232,121,249,0.2)', 'rgba(232,121,249,1)'], 
      height: 'h-3', 
      duration: 1.95 
    },
    { 
      id: 5, 
      backgroundColor: ['rgba(232,121,249,0.7)', 'rgba(232,121,249,0.2)', 'rgba(232,121,249,1)'], 
      height: 'h-6', 
      duration: 1.15 
    },
  ];

  return (
    <div className="flex items-end justify-center gap-1.5 h-12">
      {bars.map((bar) => (
        <motion.span
          key={bar.id}
          animate={{
            backgroundColor: bar.backgroundColor,
          }}
          transition={{
            duration: bar.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className={`w-1 rounded-full ${bar.height} shadow-[0_0_12px_rgba(232,121,249,0.7)]`}
        />
      ))}
    </div>
  );
}