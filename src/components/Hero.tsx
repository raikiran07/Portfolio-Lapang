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
      <div className="relative z-10 container-custom px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-8xl lg:text-9xl font-combat font-black text-text-dark tracking-wider"
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
            <span className="text-3xl md:text-4xl font-sport font-bold text-accent-blue tracking-wide">
              "{fighter.nickname}"
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl font-fighter text-text-gray leading-relaxed font-medium">
              {fighter.tagline}
            </h2>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
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