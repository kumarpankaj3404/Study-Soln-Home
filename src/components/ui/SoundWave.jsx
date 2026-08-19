import { motion } from 'framer-motion';

export default function Soundwave() {
  const bars = [
    { id: 1, heights: ["6px", "20px", "10px", "24px", "6px"], duration: 1.5 },
    { id: 2, heights: ["10px", "32px", "14px", "28px", "10px"], duration: 1.85 },
    { id: 3, heights: ["14px", "40px", "18px", "36px", "14px"], duration: 1.25 },
    { id: 4, heights: ["8px", "30px", "12px", "26px", "8px"], duration: 1.95 },
    { id: 5, heights: ["6px", "18px", "8px", "22px", "6px"], duration: 1.15 },
  ];

  return (
    <div className="flex items-center justify-center gap-1.5 h-12">
      {bars.map((bar) => (
        <motion.span
          key={bar.id}
          animate={{
            height: bar.heights,
          }}
          transition={{
            duration: bar.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="w-1 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
        />
      ))}
    </div>
  );
}