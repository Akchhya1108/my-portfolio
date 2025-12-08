import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCloud, FiCode, FiCpu, FiDatabase, FiServer, FiZap } from 'react-icons/fi';
import {
  SiAmazonaws,
  SiC,
  SiCplusplus,
  SiDocker,
  SiFlask,
  SiGit, SiGithub,
  SiGooglecloud,
  SiJava,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPycharm,
  SiPython,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiSpringboot,
  SiTensorflow,
  SiVisualstudiocode
} from 'react-icons/si';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    {
      id: 'languages',
      name: 'Languages',
      icon: FiCode,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', icon: SiPython, level: 95, color: '#3776AB' },
        { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#F7DF1E' },
        { name: 'C++', icon: SiCplusplus, level: 85, color: '#00599C' },
        { name: 'Java', icon: SiJava, level: 85, color: '#007396' },
        { name: 'C', icon: SiC, level: 80, color: '#A8B9CC' },
        { name: 'SQL', icon: FiDatabase, level: 85, color: '#4479A1' },
      ]
    },
    {
      id: 'frameworks',
      name: 'Frameworks & Libraries',
      icon: FiServer,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React.js', icon: SiReact, level: 92, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, level: 88, color: '#339933' },
        { name: 'Flask', icon: SiFlask, level: 85, color: '#000000' },
        { name: 'Spring Boot', icon: SiSpringboot, level: 80, color: '#6DB33F' },
        { name: 'OpenCV', icon: SiOpencv, level: 82, color: '#5C3EE8' },
        { name: 'TensorFlow', icon: SiTensorflow, level: 85, color: '#FF6F00' },
      ]
    },
    {
      id: 'databases',
      name: 'Databases',
      icon: FiDatabase,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 88, color: '#336791' },
        { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47A248' },
        { name: 'Redis', icon: SiRedis, level: 82, color: '#DC382D' },
        { name: 'MySQL', icon: SiMysql, level: 85, color: '#4479A1' },
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: FiCloud,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', icon: SiAmazonaws, level: 87, color: '#FF9900' },
        { name: 'GCP', icon: SiGooglecloud, level: 80, color: '#4285F4' },
        { name: 'Docker', icon: SiDocker, level: 90, color: '#2496ED' },
        { name: 'Kubernetes', icon: SiKubernetes, level: 85, color: '#326CE5' },
      ]
    },
    {
      id: 'tools',
      name: 'Development Tools',
      icon: FiZap,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Git', icon: SiGit, level: 92, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, level: 90, color: '#181717' },
        { name: 'VS Code', icon: SiVisualstudiocode, level: 95, color: '#007ACC' },
        { name: 'PyCharm', icon: SiPycharm, level: 85, color: '#000000' },
      ]
    },
    {
      id: 'ml',
      name: 'ML & AI',
      icon: FiCpu,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Scikit-learn', icon: SiScikitlearn, level: 88, color: '#F7931E' },
        { name: 'TensorFlow', icon: SiTensorflow, level: 85, color: '#FF6F00' },
        { name: 'NumPy', icon: SiNumpy, level: 90, color: '#013243' },
        { name: 'Pandas', icon: SiPandas, level: 92, color: '#150458' },
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(cat => 
    cat.skills.map(skill => ({ ...skill, category: cat.id, categoryName: cat.name }))
  );

  const displayedSkills = activeCategory === 'all' 
    ? allSkills 
    : allSkills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="min-h-screen py-32 px-4 bg-gradient-to-br from-metamask-cream via-orange-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-20 w-96 h-96 bg-metamask-orange/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-metamask-purple/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-6 py-3 bg-metamask-purple/10 border-2 border-metamask-purple/20 rounded-full text-metamask-purple font-bold text-sm uppercase tracking-widest mb-6"
            whileHover={{ scale: 1.05 }}
          >
            ⚡ Tech Stack
          </motion.span>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-metamask-purple tracking-tighter mb-6">
            Skills &
            <br />
            <span className="bg-gradient-to-r from-metamask-orange via-metamask-purple to-metamask-orange bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          
          <p className="text-xl text-metamask-purple/70 font-medium max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-metamask-purple text-white shadow-xl'
                : 'bg-white text-metamask-purple border-2 border-metamask-purple/20 hover:border-metamask-purple/40'
            }`}
          >
            All Skills
          </motion.button>
          
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-metamask-purple text-white shadow-xl'
                  : 'bg-white text-metamask-purple border-2 border-metamask-purple/20 hover:border-metamask-purple/40'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {displayedSkills.map((skill, index) => (
            <motion.div
              key={`${skill.category}-${skill.name}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-metamask-orange/30"
            >
              {/* Icon */}
              <motion.div
                className="flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <skill.icon 
                    className="w-8 h-8" 
                    style={{ color: skill.color }}
                  />
                </div>
              </motion.div>

              {/* Skill Name */}
              <h3 className="text-center font-bold text-metamask-purple mb-3">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="relative h-2 bg-metamask-purple/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ delay: index * 0.05 + 0.2, duration: 1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>

              {/* Level Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.05 + 0.4 }}
                viewport={{ once: true }}
                className="text-center mt-2 text-xs font-bold text-metamask-purple/60"
              >
                {skill.level}%
              </motion.div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: `0 0 30px ${skill.color}40`
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Programming Languages', value: '6+', color: 'from-blue-500 to-cyan-500' },
            { label: 'Frameworks & Tools', value: '15+', color: 'from-purple-500 to-pink-500' },
            { label: 'Cloud Platforms', value: '3+', color: 'from-orange-500 to-red-500' },
            { label: 'Years Experience', value: '3+', color: 'from-green-500 to-teal-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 text-white text-center shadow-xl`}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                viewport={{ once: true }}
                className="text-5xl font-black mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm font-semibold uppercase tracking-wide opacity-90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;