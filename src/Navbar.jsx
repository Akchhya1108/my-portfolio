import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-metamask-cream/90 backdrop-blur-sm border-b border-metamask-purple/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black text-metamask-purple cursor-pointer"
          >
            YourName
          </motion.div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-metamask-purple font-semibold hover:text-metamask-orange transition-colors">
              About
            </a>
            <a href="#projects" className="text-metamask-purple font-semibold hover:text-metamask-orange transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-metamask-purple font-semibold hover:text-metamask-orange transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-metamask-purple font-semibold hover:text-metamask-orange transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-metamask-purple text-white px-6 py-3 rounded-full font-bold hover:bg-black transition-all"
          >
            GET IN TOUCH
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;