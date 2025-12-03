import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-metamask-cream/95 backdrop-blur-md border-b border-metamask-purple/10 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center cursor-pointer"
            >
              <span className="text-3xl font-black text-metamask-purple tracking-tight">
                AKCHHYA
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 text-metamask-purple font-bold text-sm uppercase tracking-wide hover:text-metamask-orange transition-colors rounded-lg hover:bg-metamask-purple/5"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: '#1F0F3D' }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-metamask-purple text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-black transition-all shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </motion.button>

            {/* Mobile Hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="md:hidden text-metamask-purple p-2 rounded-lg hover:bg-metamask-purple/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-metamask-cream z-50 shadow-2xl md:hidden"
            >
              <div className="p-6">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMenu}
                    className="text-metamask-purple p-2 rounded-lg hover:bg-metamask-purple/10"
                  >
                    <FiX size={28} />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col gap-4">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                      onClick={toggleMenu}
                      className="text-2xl font-bold text-metamask-purple hover:text-metamask-orange transition-colors py-3 border-b border-metamask-purple/10"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-8 bg-metamask-purple text-white px-6 py-4 rounded-full font-bold text-lg uppercase tracking-wide hover:bg-black transition-all shadow-lg"
                  onClick={toggleMenu}
                >
                  Get in Touch
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;