import { motion } from 'framer-motion';

function FloatingElements() {
  const shapes = [
    {
      id: 1,
      size: 'w-32 h-32',
      color: 'bg-metamask-orange/10',
      position: 'top-20 left-10',
      duration: 20,
    },
    {
      id: 2,
      size: 'w-24 h-24',
      color: 'bg-metamask-purple/10',
      position: 'top-40 right-20',
      duration: 25,
    },
    {
      id: 3,
      size: 'w-40 h-40',
      color: 'bg-metamask-orange/5',
      position: 'bottom-32 left-1/4',
      duration: 30,
    },
    {
      id: 4,
      size: 'w-28 h-28',
      color: 'bg-metamask-purple/15',
      position: 'bottom-20 right-1/3',
      duration: 22,
    },
    {
      id: 5,
      size: 'w-36 h-36',
      color: 'bg-metamask-orange/8',
      position: 'top-1/3 right-10',
      duration: 28,
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.color} ${shape.position} rounded-full blur-3xl`}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-20 h-20 border-4 border-metamask-orange/20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 border-4 border-metamask-purple/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

export default FloatingElements;