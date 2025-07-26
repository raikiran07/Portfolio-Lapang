import { motion } from 'framer-motion';
import { Fighter } from '../types';

interface HeroProps {
  fighter: Fighter;
}

const Hero = ({ fighter }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-light to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-blue rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent-purple rounded-full"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-accent-indigo rounded-full"></div>
        <div className="absolute top-1/3 right-8 w-20 h-20 bg-accent-blue rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Name and Nickname */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-kudo font-black text-text-dark"
            >
              {fighter.name}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block"
            >
              <span className="text-2xl md:text-3xl font-kudo font-bold text-accent-blue bg-white px-6 py-2 border-2 border-accent-blue">
                "{fighter.nickname}"
              </span>
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-fighter text-text-gray max-w-3xl mx-auto leading-relaxed">
              {fighter.tagline}
            </h2>
            <div className="w-24 h-1 bg-accent-blue mx-auto"></div>
          </motion.div>

          {/* Disciplines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {fighter.disciplines.map((discipline, index) => (
              <motion.span
                key={discipline}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="bg-accent-blue text-white font-bold px-4 py-2 text-sm md:text-base border-2 border-accent-blue hover:bg-transparent hover:text-accent-blue transition-all duration-300"
              >
                {discipline}
              </motion.span>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View Fights
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-accent-blue"
        >
          <div className="w-6 h-10 border-2 border-accent-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent-blue rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 