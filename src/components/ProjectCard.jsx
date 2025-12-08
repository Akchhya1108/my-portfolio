import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiExternalLink, FiGithub, FiLock } from 'react-icons/fi';
import { SiKubernetes, SiNodedotjs, SiPython, SiReact, SiRust } from 'react-icons/si';

const iconMap = {
  kubernetes: SiKubernetes,
  rust: SiRust,
  python: SiPython,
  nodejs: SiNodedotjs,
  react: SiReact,
  security: FiLock,
};

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[project.icon] || SiKubernetes;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-20">
        <motion.span
          whileHover={{ scale: 1.1 }}
          className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            project.status === 'Active' 
              ? 'bg-green-500 text-white' 
              : project.status === 'Ongoing'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-500 text-white'
          }`}
        >
          {project.status}
        </motion.span>
      </div>

      {/* Gradient Header */}
      <div className={`h-48 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center relative overflow-hidden`}>
        <motion.div
          animate={isHovered ? { scale: 1.2, rotate: 360 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <IconComponent className="w-20 h-20 text-white drop-shadow-2xl" />
        </motion.div>
        
        {/* Animated Background Pattern */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 opacity-10"
        >
          <div className="grid grid-cols-4 gap-4 p-4">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="aspect-square bg-white rounded-lg" />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Title & Date */}
        <div className="mb-4">
          <h3 className="text-2xl font-black text-metamask-purple mb-2 leading-tight">
            {project.title}
          </h3>
          <p className="text-xs text-metamask-purple/50 font-semibold uppercase tracking-wider">
            {project.date}
          </p>
        </div>

        {/* Description */}
        <p className="text-metamask-purple/70 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-6 space-y-2">
          {project.highlights.slice(0, 2).map((highlight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-metamask-orange" />
              <span className="text-metamask-purple/80 font-medium">{highlight}</span>
            </motion.div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-metamask-purple/5 text-metamask-purple text-xs font-bold rounded-full border border-metamask-purple/10"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-metamask-purple text-white font-bold rounded-full hover:bg-black transition-all duration-300"
          >
            <FiGithub className="w-4 h-4" />
            Code
          </motion.a>
          <motion.a
            href={project.demo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-metamask-purple text-metamask-purple font-bold rounded-full hover:bg-metamask-purple hover:text-white transition-all duration-300"
          >
            <FiExternalLink className="w-4 h-4" />
            Demo
          </motion.a>
        </div>
      </div>

      {/* Hover Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        animate={isHovered ? {
          boxShadow: '0 0 0 3px rgba(249, 115, 22, 0.5)'
        } : {
          boxShadow: '0 0 0 0px rgba(249, 115, 22, 0)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default ProjectCard;