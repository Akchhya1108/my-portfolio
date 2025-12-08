import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiArrowDown } from 'react-icons/fi';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-metamask-cream via-orange-50 to-purple-50">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, #F97316 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, #1F0F3D 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, #F97316 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, #F97316 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-metamask-orange/20 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-metamask-purple/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-300/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Small Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-metamask-purple/10 rounded-full text-metamask-purple font-semibold text-sm uppercase tracking-wider">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Heading - HUGE like MetaMask */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-metamask-purple leading-[0.9] mb-6"
          style={{
            letterSpacing: '-0.05em',
            textTransform: 'uppercase',
          }}
        >
          Hi, its
          <br />
          <span className="bg-gradient-to-r from-metamask-orange via-metamask-purple to-metamask-orange bg-clip-text text-transparent">
            Akchhya!
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-metamask-purple/80 mb-4 max-w-4xl mx-auto"
        >
          Tech | Design | Writing
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-base sm:text-lg text-metamask-purple/60 mb-12 max-w-2xl mx-auto"
        >
          Crafting beautiful digital experiences with code, design, and a touch of magic ✨
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(31, 15, 61, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-metamask-purple text-white font-bold rounded-full text-lg shadow-xl hover:bg-black transition-all duration-300 flex items-center gap-2"
          >
            View My Work
            <FiArrowDown className="animate-bounce" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-metamask-purple font-bold rounded-full text-lg shadow-lg border-2 border-metamask-purple/20 hover:border-metamask-purple transition-all duration-300"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Interactive Cursor Effect (Mouse parallax on shapes) */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-20 h-20 border-4 border-metamask-orange/30 rounded-lg"
        animate={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
          rotate: mousePosition.x,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-16 h-16 border-4 border-metamask-purple/30 rounded-full"
        animate={{
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      />
    </section>
  );
}

export default Hero;