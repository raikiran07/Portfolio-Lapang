import { motion } from 'framer-motion';
import { Trophy, Target, Heart, Zap } from 'lucide-react';
import { Fighter } from '../types';

interface AboutProps {
  fighter: Fighter;
}

const About = ({ fighter }: AboutProps) => {
  const stats = [
    { label: 'Height', value: fighter.stats.height, icon: Target },
    { label: 'Weight', value: fighter.stats.weight, icon: Zap },
    { label: 'Reach', value: fighter.stats.reach, icon: Target },
    { label: 'Stance', value: fighter.stats.stance, icon: Heart },
    { label: 'Experience', value: `${fighter.stats.experience} Years`, icon: Trophy },
    { label: 'Home Gym', value: fighter.stats.homeGym, icon: Heart },
  ];

  return (
    <section id="about" className="section-padding section-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text-dark mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Fighter Photo */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div 
                className="w-full h-96 md:h-[500px] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/573945/pexels-photo-573945.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="relative py-8 px-4 md:px-8">
                <span className="absolute -top-4 -left-2 md:-top-8 md:-left-6 text-accent-blue text-7xl md:text-9xl font-bold select-none opacity-30 leading-none">"</span>
                <p className="font-dancing text-xl md:text-2xl text-text-dark italic z-10 relative leading-relaxed">
                  {fighter.bio}
                </p>
                <span className="absolute -bottom-4 right-2 md:-bottom-8 md:-right-6 text-accent-blue text-7xl md:text-9xl font-bold select-none opacity-30 leading-none">"</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-lg text-center p-6 border-2 border-gray-200 hover:border-accent-blue transition-all duration-300 rounded-xl"
              >
                <IconComponent className="w-8 h-8 text-accent-blue mx-auto mb-4" />
                <h4 className="text-text-dark font-bold text-lg mb-2">{stat.value}</h4>
                <p className="text-text-gray text-sm font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">
              My <span className="text-accent-blue">Philosophy</span>
            </h3>
            <p className="text-text-gray text-lg max-w-3xl mx-auto leading-relaxed">
              "Every fight is a battle not just against your opponent, but against your own limitations. 
              The true warrior is one who never stops learning, never stops growing, and never gives up 
              on the pursuit of excellence. In the ring and in life, we rise by lifting others."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 