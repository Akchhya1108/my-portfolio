import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCode, FiCpu, FiExternalLink, FiGithub, FiServer, FiZap } from 'react-icons/fi';
import { SiPython, SiReact } from 'react-icons/si';
import ProjectCard from './ProjectCard';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Kubernetes ML Model Deployment Operator',
      category: 'mlops',
      description: 'Custom Kubernetes operator in Go that automates ML model lifecycle management with one-command deployments, auto-scaling, and health monitoring.',
      tags: ['Go', 'Kubernetes', 'Docker', 'Prometheus', 'MLOps'],
      highlights: [
        'Reduced deployment failures by 85%',
        '99.5% uptime under variable load',
        'Handles 10+ concurrent model deployments',
        'Custom CRDs with rolling updates'
      ],
      icon: 'kubernetes',
      color: 'from-blue-500 to-purple-600',
      github: 'https://github.com/Akchhya1108',
      demo: '#',
      status: 'Active',
      date: 'Dec 2024 - Present'
    },
    {
      id: 2,
      title: 'Production-Grade Distributed Rate Limiter',
      category: 'distributed-systems',
      description: 'High-performance rate limiter in Rust achieving 100,000+ req/s with <1ms P99 latency, delivering 10x performance improvement over alternatives.',
      tags: ['Rust', 'Redis', 'Docker', 'Distributed Systems'],
      highlights: [
        '100,000+ requests per second',
        '<1ms P99 latency',
        '99.9% uptime with circuit breakers',
        '4 production-ready algorithms'
      ],
      icon: 'rust',
      color: 'from-orange-500 to-red-600',
      github: 'https://github.com/Akchhya1108',
      demo: '#',
      status: 'Ongoing',
      date: 'Nov 2025 - Present'
    },
    {
      id: 3,
      title: 'Sprout - AI-Powered Git Assistant',
      category: 'ai',
      description: 'Intelligent CLI tool using RAG system with ChromaDB and Groq API, automating commit message generation and code analysis with 85% relevance score.',
      tags: ['Python', 'Groq API', 'ChromaDB', 'Tree-sitter', 'RAG'],
      highlights: [
        'Reduced commit time by 60%',
        '85% relevance score for suggestions',
        'Supports 8+ programming languages',
        '90%+ duplicate code detection'
      ],
      icon: 'python',
      color: 'from-green-500 to-teal-600',
      github: 'https://github.com/Akchhya1108',
      demo: '#',
      status: 'Completed',
      date: 'Jun 2025 - Aug 2025'
    },
    {
      id: 4,
      title: 'E-Commerce Product Recommendation System',
      category: 'ai',
      description: 'Scalable recommendation engine using collaborative filtering and content-based algorithms, processing 5,000+ product interactions with ML models.',
      tags: ['Python', 'Scikit-learn', 'Flask', 'AWS', 'Machine Learning'],
      highlights: [
        '70% prediction accuracy',
        '<200ms response time',
        'Processes 5,000+ interactions',
        'RESTful API with Flask'
      ],
      icon: 'python',
      color: 'from-purple-500 to-pink-600',
      github: 'https://github.com/Akchhya1108',
      demo: '#',
      status: 'Active',
      date: 'Nov 2025 - Present'
    },
    {
      id: 5,
      title: 'Smart Debug Console',
      category: 'distributed-systems',
      description: 'Real-time log monitoring dashboard with AI-powered error classification, processing 500+ log entries per minute through WebSocket streaming.',
      tags: ['Node.js', 'Socket.io', 'React', 'Python', 'Machine Learning'],
      highlights: [
        '500+ logs per minute',
        '88% classification accuracy',
        '30% reduced debugging time',
        'Real-time WebSocket streaming'
      ],
      icon: 'nodejs',
      color: 'from-green-600 to-blue-600',
      github: 'https://github.com/Akchhya1108',
      demo: '#',
      status: 'Active',
      date: 'Sept 2025 - Present'
    },
    {
      id: 6,
      title: 'TaskGenie - AI Task Management',
      category: 'ai',
      description: 'Intelligent task completion system leveraging NLP and context-aware classification, improving workflow efficiency by 40% through automation.',
      tags: ['Python', 'Node.js', 'React', 'NLP', 'REST APIs'],
      highlights: [
        '40% workflow efficiency gain',
        '35% reduced user input time',
        'Context-aware classification',
        'Production-ready application'
      ],
      icon: 'react',
      color: 'from-cyan-500 to-blue-600',
      github: 'https://github.com/Akchhya1108',
      demo: '#',
      status: 'Completed',
      date: 'Jan 2025 - Mar 2025'
    },
    {
      id: 7,
      title: 'Hand Tracking System',
      category: 'ai',
      description: 'Real-time hand detection and tracking system using MediaPipe framework, achieving 30+ FPS performance with 21-point landmark detection.',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
      highlights: [
        '30+ FPS performance',
        '21 hand keypoints tracked',
        'Real-time gesture recognition',
        'Scalable CV solution'
      ],
      icon: 'python',
      color: 'from-indigo-500 to-purple-600',
      github: 'https://github.com/Akchhya1108',
      demo: '#',
      status: 'Completed',
      date: '2024'
    },
    {
      id: 8,
      title: 'Smart Campus Navigator',
      category: 'algorithms',
      description: 'Interactive campus navigation app implementing advanced pathfinding algorithms (Dijkstra & A*) for optimal route planning across 50+ nodes.',
      tags: ['Python', 'Graph Algorithms', 'Data Structures', 'A*'],
      highlights: [
        'Optimal route planning',
        '50+ node graph model',
        'Real-time path computation',
        'Multiple concurrent users'
      ],
      icon: 'python',
      color: 'from-yellow-500 to-orange-600',
      github: 'https://github.com/Akchhya1108',
      demo: '#',
      status: 'Completed',
      date: 'Aug 2022 - Oct 2022'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: FiCode },
    { id: 'mlops', label: 'MLOps', icon: FiServer },
    { id: 'distributed-systems', label: 'Distributed Systems', icon: FiZap },
    { id: 'ai', label: 'AI/ML', icon: SiReact },
    { id: 'algorithms', label: 'Algorithms', icon: FiCpu },
    { id: 'research', label: 'Research', icon: SiPython }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="min-h-screen py-32 px-4 bg-metamask-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-metamask-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-metamask-purple/5 rounded-full blur-3xl" />

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
            className="inline-block px-6 py-3 bg-metamask-orange/10 border-2 border-metamask-orange/20 rounded-full text-metamask-orange font-bold text-sm uppercase tracking-widest mb-6"
            whileHover={{ scale: 1.05 }}
          >
            💼 My Work
          </motion.span>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-metamask-purple tracking-tighter mb-6">
            Featured
            <br />
            <span className="bg-gradient-to-r from-metamask-orange via-metamask-purple to-metamask-orange bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-xl text-metamask-purple/70 font-medium max-w-2xl mx-auto">
            Building scalable, production-grade solutions from concept to deployment
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? 'bg-metamask-purple text-white shadow-xl'
                  : 'bg-white text-metamask-purple border-2 border-metamask-purple/20 hover:border-metamask-purple/40'
              }`}
            >
              <filter.icon className="w-4 h-4" />
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="https://github.com/Akchhya1108"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(31, 15, 61, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-metamask-purple text-white font-bold rounded-full text-lg hover:bg-black transition-all duration-300 shadow-lg"
          >
            <FiGithub className="w-6 h-6" />
            View All Projects on GitHub
            <FiExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;