import { motion } from 'framer-motion';
import { Fighter } from '../types';

interface HeroProps {
  fighter: Fighter;
}

const Hero = ({ fighter }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Faded Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6296012/pexels-photo-6296012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-combat font-bold text-text-dark tracking-wide">
              Welcome to my <span className="relative inline-block">
                <span className="relative z-10">portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-orange-200 to-orange-400 opacity-70 transform -rotate-2 scale-110 rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200 opacity-50 transform rotate-1 scale-105 rounded-full"></div>
              </span>
            </h3>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-combat font-black text-text-dark tracking-wider"
          >
            {fighter.name}
          </motion.h1>

          {/* Nickname */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-sport font-bold text-text-dark tracking-wide">
              "<span className="relative inline-block group">
                <span className="relative z-10">{fighter.nickname}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200 opacity-60 transform rotate-2 scale-110 rounded-full blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-orange-200 to-orange-400 opacity-40 transform -rotate-1 scale-105 rounded-full"></div>
                {/* Animated Underline */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 transform scale-x-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </span>"
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-fighter text-text-gray leading-relaxed font-medium">
              {fighter.tagline}
            </h2>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8"
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
        transition={{ duration: 1, delay: 1.2 }}
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