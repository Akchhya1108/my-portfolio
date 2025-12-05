import { motion } from 'framer-motion';
import { FiFacebook, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiInstagram, SiLeetcode, SiMedium } from 'react-icons/si';

function SocialLinks({ variant = 'default' }) {
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: FiGithub, 
      url: 'https://github.com/Akchhya1108', 
      color: '#333',
      hoverColor: '#000'
    },
    { 
      name: 'LinkedIn', 
      icon: FiLinkedin, 
      url: 'https://www.linkedin.com/in/akchhya-singh11/', 
      color: '#0077B5',
      hoverColor: '#006399'
    },
    { 
      name: 'Instagram', 
      icon: SiInstagram, 
      url: 'https://instagram.com/_aish.ish', // Replace with your actual URL
      color: '#E4405F',
      hoverColor: '#C13584'
    },
    { 
      name: 'Facebook', 
      icon: FiFacebook, 
      url: 'https://facebook.com/yourusername', 
      color: '#1877F2',
      hoverColor: '#166FE5'
    },
    { 
      name: 'Medium', 
      icon: SiMedium, 
      url: 'https://medium.com/@akchhya1108', 
      color: '#000',
      hoverColor: '#333'
    },
    { 
      name: 'LeetCode', 
      icon: SiLeetcode, 
      url: 'https://leetcode.com/u/Akchhya/', 
      color: '#FFA116',
      hoverColor: '#FF9100'
    },
    { 
      name: 'Email', 
      icon: FiMail, 
      url: 'akchhya1108@gmail.com', 
      color: '#EA4335',
      hoverColor: '#D93025'
    },
  ];

  // Default style for hero section
  if (variant === 'default') {
    return (
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 + index * 0.1, duration: 0.3 }}
            whileHover={{ 
              scale: 1.2, 
              rotate: 360,
              backgroundColor: social.color,
              color: '#fff'
            }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg text-metamask-purple hover:shadow-xl transition-all duration-300"
            aria-label={social.name}
            style={{ color: social.color }}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
      </div>
    );
  }

  // Floating style for sidebar or footer
  if (variant === 'floating') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.2, 
              x: 10,
              backgroundColor: social.color,
              color: '#fff'
            }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative"
            aria-label={social.name}
            style={{ color: social.color }}
          >
            <social.icon size={20} />
            
            {/* Tooltip */}
            <span className="absolute left-16 bg-black text-white px-3 py-1 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {social.name}
            </span>
          </motion.a>
        ))}
      </motion.div>
    );
  }

  // Minimal style for footer
  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center gap-6">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.15,
              color: social.color
            }}
            whileTap={{ scale: 0.9 }}
            className="text-metamask-purple/60 hover:text-metamask-purple transition-colors duration-300"
            aria-label={social.name}
          >
            <social.icon size={24} />
          </motion.a>
        ))}
      </div>
    );
  }

  // Colorful cards style
  if (variant === 'cards') {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: `0 20px 40px ${social.color}40`
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center gap-3 group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl"
              style={{ backgroundColor: social.color }}
            >
              <social.icon />
            </motion.div>
            <span className="font-bold text-metamask-purple group-hover:text-metamask-orange transition-colors duration-300">
              {social.name}
            </span>
          </motion.a>
        ))}
      </div>
    );
  }

  return null;
}

export default SocialLinks;