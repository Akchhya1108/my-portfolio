import { motion } from 'framer-motion';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="min-h-screen bg-metamask-cream relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen px-4 pt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-6xl"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-metamask-purple leading-none mb-4 tracking-tighter"
            style={{
              textTransform: 'uppercase',
              letterSpacing: '-0.05em'
            }}
          >
            hi, its Akchhya.
          </motion.h1>

          {/* Second Line */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-metamask-purple leading-none mb-12 tracking-tighter"
            style={{
              textTransform: 'uppercase',
              letterSpacing: '-0.05em'
            }}
          >
            Dev, Design and everything nice.
          </motion.h2>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-black text-white font-bold rounded-full text-lg hover:bg-metamask-purple transition-all duration-300 shadow-lg"
            >
              GET METAMASK
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;