import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star } from 'lucide-react';
import { Achievement, FighterStats } from '../types';

interface AchievementsProps {
  achievements: Achievement[];
  stats: FighterStats;
}

const Achievements = ({ achievements, stats }: AchievementsProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'championship':
        return Trophy;
      case 'tournament':
        return Medal;
      case 'award':
        return Award;
      case 'record':
        return Star;
      default:
        return Trophy;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'championship':
        return 'text-accent-blue';
      case 'tournament':
        return 'text-accent-purple';
      case 'award':
        return 'text-accent-indigo';
      case 'record':
        return 'text-accent-blue';
      default:
        return 'text-accent-blue';
    }
  };

  const winRate = ((stats.record.wins / (stats.record.wins + stats.record.losses)) * 100).toFixed(1);

  return (
    <section id="achievements" className="section-padding section-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text-dark mb-4">
            <span className="text-gradient">Achievements</span> & Records
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto"></div>
        </motion.div>

        {/* Record Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <div className="card text-center">
            <div className="text-3xl font-bold text-accent-blue mb-2">{stats.record.wins}</div>
            <div className="text-text-gray">Wins</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-accent-indigo mb-2">{stats.record.losses}</div>
            <div className="text-text-gray">Losses</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-accent-purple mb-2">{stats.record.draws}</div>
            <div className="text-text-gray">Draws</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-accent-blue mb-2">{winRate}%</div>
            <div className="text-text-gray">Win Rate</div>
          </div>
        </motion.div>

        {/* Win/Loss Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="card">
            <h3 className="text-xl font-bold text-text-dark mb-4">Fight Record</h3>
            <div className="flex h-4 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(stats.record.wins / (stats.record.wins + stats.record.losses)) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-accent-blue h-full"
              ></motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(stats.record.losses / (stats.record.wins + stats.record.losses)) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="bg-accent-indigo h-full"
              ></motion.div>
            </div>
            <div className="flex justify-between text-sm text-text-gray mt-2">
              <span>Wins: {stats.record.wins}</span>
              <span>Losses: {stats.record.losses}</span>
            </div>
          </div>
        </motion.div>

        {/* Achievements Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = getIcon(achievement.type);
            const iconColor = getColor(achievement.type);
            
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center gap-8`}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary-light border-2 border-accent-blue/30 rounded-full flex items-center justify-center">
                    <IconComponent className={`w-10 h-10 ${iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="card border-l-4 border-accent-blue">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-text-dark">{achievement.title}</h3>
                      <span className="text-accent-blue font-bold">{achievement.date}</span>
                    </div>
                    <p className="text-text-gray">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="card bg-gradient-to-r from-accent-blue/5 to-accent-purple/5 border-accent-blue/20">
            <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">
              Ready for the <span className="text-accent-blue">Next Challenge</span>
            </h3>
            <p className="text-text-gray text-lg mb-6 max-w-2xl mx-auto">
              Every achievement is a stepping stone to greatness. The journey never ends, 
              and the pursuit of excellence continues with every training session and every fight.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Book a Fight
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements; 