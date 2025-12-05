import { motion } from 'framer-motion';
import { FiCode, FiServer, FiZap } from 'react-icons/fi';
import CatMascot from './CatMascot';

function About() {
  const stats = [
    { icon: FiCode, value: '15+', label: 'Projects Shipped' },
    { icon: FiServer, value: 'MLOps', label: 'Specialization' },
    { icon: FiZap, value: '99.5%', label: 'Uptime Achieved' },
  ];

  return (
    <section id="about" className="min-h-screen py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-metamask-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-metamask-purple/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-metamask-orange font-bold text-sm uppercase tracking-widest">
            Who I Am
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-metamask-purple mt-4 tracking-tight">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Side - Cat Mascot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <CatMascot />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-metamask-purple">
                Building the Future, One Line at a Time
              </h3>
              
              <p className="text-lg text-metamask-purple/70 leading-relaxed">
                Computer Science student specializing in <span className="text-metamask-orange font-semibold">Kubernetes</span>, 
                <span className="text-metamask-orange font-semibold"> MLOps</span>, and cloud-native technologies.
              </p>

              <p className="text-lg text-metamask-purple/70 leading-relaxed">
                Passionate about building <span className="text-metamask-orange font-semibold">distributed systems</span> and 
                shipping production-grade applications. Active contributor to open-source communities.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-metamask-purple/10 hover:border-metamask-orange/30 transition-all"
                >
                  <stat.icon className="w-8 h-8 text-metamask-orange mx-auto mb-3" />
                  <div className="text-2xl font-black text-metamask-purple">
                    {stat.value}
                  </div>
                  <div className="text-xs text-metamask-purple/60 font-medium uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-metamask-purple text-white font-bold rounded-full hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Let's Work Together →
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-metamask-purple/5 to-metamask-orange/5 border border-metamask-purple/10">
            <p className="text-xl font-bold text-metamask-purple mb-2">
              Currently Exploring
            </p>
            <p className="text-metamask-orange font-semibold">
              OpenShift • Kubeflow • Post-Quantum Cryptography
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;