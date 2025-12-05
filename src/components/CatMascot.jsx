import { motion } from 'framer-motion';

function CatMascot() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
      viewport={{ once: true }}
      className="relative w-64 h-64 mx-auto"
    >
      {/* Glowing background circle */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-metamask-orange/20 rounded-full blur-3xl"
      />

      {/* Cat SVG */}
      <motion.svg
        viewBox="0 0 200 200"
        className="relative z-10"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Cat Body */}
        <motion.ellipse
          cx="100"
          cy="120"
          rx="50"
          ry="45"
          fill="#1F0F3D"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        />

        {/* Cat Head */}
        <motion.circle
          cx="100"
          cy="80"
          r="35"
          fill="#1F0F3D"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        />

        {/* Left Ear */}
        <motion.path
          d="M 75 60 L 65 30 L 85 55 Z"
          fill="#1F0F3D"
          initial={{ rotate: -45, originX: 0.5, originY: 1 }}
          animate={{ rotate: 0 }}
          transition={{ delay: 0.4, type: 'spring' }}
        />

        {/* Right Ear */}
        <motion.path
          d="M 125 60 L 135 30 L 115 55 Z"
          fill="#1F0F3D"
          initial={{ rotate: 45, originX: 0.5, originY: 1 }}
          animate={{ rotate: 0 }}
          transition={{ delay: 0.4, type: 'spring' }}
        />

        {/* Inner Left Ear */}
        <motion.path
          d="M 77 55 L 70 35 L 83 53 Z"
          fill="#F97316"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        {/* Inner Right Ear */}
        <motion.path
          d="M 123 55 L 130 35 L 117 53 Z"
          fill="#F97316"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        {/* Left Eye */}
        <motion.circle
          cx="88"
          cy="75"
          r="4"
          fill="#F6E9DA"
          animate={{
            scaleY: [1, 0.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Right Eye */}
        <motion.circle
          cx="112"
          cy="75"
          r="4"
          fill="#F6E9DA"
          animate={{
            scaleY: [1, 0.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Nose */}
        <motion.path
          d="M 100 85 L 95 90 L 105 90 Z"
          fill="#F97316"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />

        {/* Whiskers - Left */}
        <motion.line
          x1="65"
          y1="85"
          x2="40"
          y2="80"
          stroke="#1F0F3D"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        />
        <motion.line
          x1="65"
          y1="90"
          x2="35"
          y2="90"
          stroke="#1F0F3D"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />

        {/* Whiskers - Right */}
        <motion.line
          x1="135"
          y1="85"
          x2="160"
          y2="80"
          stroke="#1F0F3D"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        />
        <motion.line
          x1="135"
          y1="90"
          x2="165"
          y2="90"
          stroke="#1F0F3D"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />

        {/* Tail */}
        <motion.path
          d="M 145 130 Q 170 120 180 140"
          stroke="#1F0F3D"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            d: [
              "M 145 130 Q 170 120 180 140",
              "M 145 130 Q 170 140 180 130",
              "M 145 130 Q 170 120 180 140"
            ]
          }}
          transition={{ 
            pathLength: { delay: 0.9, duration: 0.5 },
            d: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
        />

        {/* Orange Spot on chest */}
        <motion.circle
          cx="100"
          cy="130"
          r="8"
          fill="#F97316"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring' }}
        />
      </motion.svg>

      {/* Floating particles around cat */}
      <motion.div
        className="absolute top-10 left-10 w-2 h-2 bg-metamask-orange rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0,
        }}
      />
      <motion.div
        className="absolute top-20 right-10 w-2 h-2 bg-metamask-purple rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1,
        }}
      />
    </motion.div>
  );
}

export default CatMascot;