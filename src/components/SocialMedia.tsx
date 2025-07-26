import { motion } from 'framer-motion';
import { Instagram, Youtube, Twitter, Facebook, ExternalLink } from 'lucide-react';
import { SocialMedia as SocialMediaType } from '../types';

interface SocialMediaProps {
  socialMedia: SocialMediaType;
}

const SocialMedia = ({ socialMedia }: SocialMediaProps) => {
  const platforms = [
    {
      name: 'Instagram',
      handle: socialMedia.instagram,
      followers: socialMedia.followers.instagram,
      icon: Instagram,
      color: 'from-purple-500 to-pink-500',
      url: '#'
    },
    {
      name: 'YouTube',
      handle: socialMedia.youtube,
      followers: socialMedia.followers.youtube,
      icon: Youtube,
      color: 'from-red-500 to-red-600',
      url: '#'
    },
    {
      name: 'Twitter',
      handle: socialMedia.twitter,
      followers: socialMedia.followers.twitter,
      icon: Twitter,
      color: 'from-blue-400 to-blue-500',
      url: '#'
    },
    {
      name: 'Facebook',
      handle: socialMedia.facebook,
      followers: socialMedia.followers.facebook,
      icon: Facebook,
      color: 'from-blue-600 to-blue-700',
      url: '#'
    }
  ];

  const formatFollowers = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <section id="social" className="section-padding section-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text-dark mb-4">
            <span className="text-gradient">Social</span> Media
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto"></div>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card text-center"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-text-dark font-bold text-xl mb-2">{platform.name}</h3>
                  <p className="text-accent-blue font-bold text-2xl mb-2">
                    {formatFollowers(platform.followers)}
                  </p>
                  <p className="text-text-gray text-sm mb-4">Followers</p>
                  <p className="text-text-gray text-sm mb-4">{platform.handle}</p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-indigo transition-colors duration-300"
                  >
                    <span className="text-sm font-bold">Follow</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Latest Video */}
          <div className="card">
            <h3 className="text-text-dark font-bold text-xl mb-4">Latest Fight Highlights</h3>
            <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-center">
                <Youtube className="w-16 h-16 text-accent-blue mx-auto mb-4" />
                <p className="text-text-gray">Latest fight highlights and training videos</p>
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="btn-primary w-full text-center"
            >
              Watch on YouTube
            </motion.a>
          </div>

          {/* Instagram Feed */}
          <div className="card">
            <h3 className="text-text-dark font-bold text-xl mb-4">Instagram Stories</h3>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center"
                >
                  <Instagram className="w-6 h-6 text-accent-blue" />
                </div>
              ))}
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="btn-secondary w-full text-center"
            >
              Follow on Instagram
            </motion.a>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <div className="card bg-gradient-to-r from-accent-blue/5 to-accent-purple/5 border-accent-blue/20">
            <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">
              Stay <span className="text-accent-blue">Connected</span>
            </h3>
            <p className="text-text-gray text-lg mb-6 max-w-2xl mx-auto">
              Follow my journey, get behind-the-scenes content, training tips, and exclusive fight updates. 
              Join the Thunder community and be part of the action!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((platform) => {
                const IconComponent = platform.icon;
                return (
                  <motion.a
                    key={platform.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary-charcoal border border-primary-gray hover:border-accent-red text-text-white hover:text-accent-red transition-all duration-300 rounded-none shadow-lg"
                  >
                    <IconComponent size={20} />
                    <span className="font-bold">{platform.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia; 