import { motion } from 'framer-motion';
import { Instagram, Youtube, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Fighter } from '../types';

interface FooterProps {
  fighter: Fighter;
}

const Footer = ({ fighter }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-custom px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-accent-blue font-display font-bold text-2xl mb-4">
                {fighter.name}
              </h3>
              <p className="text-text-gray mb-6 max-w-md">
                Professional fighter dedicated to excellence in combat sports. 
                Join the journey and witness the power of determination and skill.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.2, color: '#3b82f6' }}
                      href={social.href}
                      className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center text-text-gray hover:text-accent-blue hover:border-accent-blue transition-all duration-300"
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-text-dark font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-gray hover:text-accent-blue transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-text-dark font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-blue" />
                <span className="text-text-gray text-sm">{fighter.contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-blue" />
                <span className="text-text-gray text-sm">{fighter.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent-blue" />
                <span className="text-text-gray text-sm">{fighter.contact.location}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-200 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-gray text-sm">
              © {currentYear} {fighter.name}. All rights reserved.
            </p>
            <p className="text-text-gray text-sm mt-2 md:mt-0">
              Built with passion for combat sports
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 