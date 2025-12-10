import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import About from './components/About';
import FloatingElements from './components/FloatingElements';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-metamask-cream"
          >
            {/* Floating Background Elements */}
            <FloatingElements />

            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
              <div className="flex items-center justify-center min-h-screen px-4 pt-20 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-center max-w-6xl"
                >
                  {/* Animated Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="inline-block mb-8"
                  >
                    <span className="px-6 py-3 bg-metamask-purple/5 border-2 border-metamask-purple/20 rounded-full text-metamask-purple font-bold text-sm uppercase tracking-widest backdrop-blur-sm">
                      ✨ Available for Work
                    </span>
                  </motion.div>

                  {/* Main Heading - Line 1 */}
                  <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-metamask-purple leading-none mb-4 tracking-tighter"
                    style={{
                      textTransform: 'uppercase',
                      letterSpacing: '-0.05em'
                    }}
                  >
                    Hi, it's{' '}
                    <motion.span
                      className="inline-block"
                      animate={{
                        backgroundImage: [
                          'linear-gradient(45deg, #1F0F3D, #F97316)',
                          'linear-gradient(45deg, #F97316, #1F0F3D)',
                          'linear-gradient(45deg, #1F0F3D, #F97316)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                      }}
                    >
                      Akchhya
                    </motion.span>
                  </motion.h1>

                  {/* Main Heading - Line 2 */}
                  <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 tracking-tighter"
                    style={{
                      textTransform: 'uppercase',
                      letterSpacing: '-0.05em'
                    }}
                  >
                    <span className="text-metamask-purple">Dev</span>
                    <span className="text-metamask-orange">, </span>
                    <span className="text-metamask-purple">Design </span>
                    <span className="text-metamask-orange">& </span>
                    <span className="text-metamask-purple">Everything Nice</span>
                  </motion.h2>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-lg md:text-xl text-metamask-purple/70 font-medium max-w-2xl mx-auto mb-12 leading-relaxed"
                  >
                    Cloud-Native Engineer specializing in Kubernetes, MLOps, and building
                    scalable distributed systems.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  >
                    <motion.a
                      href="#about"
                      whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(31, 15, 61, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-5 bg-metamask-purple text-white font-bold rounded-full text-lg hover:bg-black transition-all duration-300 shadow-lg"
                    >
                      View My Work
                    </motion.a>

                    <motion.a
                      href="/Akchhya_Resume_Main.pdf"
                      download
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-5 bg-transparent border-2 border-metamask-purple text-metamask-purple font-bold rounded-full text-lg hover:bg-metamask-purple hover:text-white transition-all duration-300"
                    >
                      Download Resume
                    </motion.a>
                  </motion.div>

                  {/* Scroll Indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                  >
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex flex-col items-center gap-2"
                    >
                      <span className="text-metamask-purple/60 text-sm font-medium uppercase tracking-wider">
                        Scroll Down
                      </span>
                      <div className="w-6 h-10 border-2 border-metamask-purple/30 rounded-full flex justify-center pt-2">
                        <motion.div
                          animate={{ y: [0, 12, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-1.5 h-3 bg-metamask-orange rounded-full"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* About Section */}
            <About />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;