import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { ContactInfo } from '../types';

interface ContactProps {
  contact: ContactInfo;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = ({ contact }: ContactProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone}`
    },
    {
      icon: MapPin,
      label: 'Gym',
      value: contact.gym,
      href: '#'
    },
    {
      icon: Clock,
      label: 'Location',
      value: contact.location,
      href: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding section-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text-dark mb-4">
            <span className="text-gradient">Contact</span> Me
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-6">
                Get in <span className="text-accent-blue">Touch</span>
              </h3>
              <p className="text-text-gray text-lg leading-relaxed">
                Ready to book a fight, discuss sponsorship opportunities, or just want to connect? 
                I'm always open to new challenges and collaborations. Let's make something great happen!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    href={method.href}
                    className="flex items-center gap-4 p-4 bg-white border border-gray-200 hover:border-accent-blue transition-all duration-300 rounded-lg shadow-lg group"
                  >
                    <div className="w-12 h-12 bg-accent-blue/20 rounded-full flex items-center justify-center group-hover:bg-accent-blue transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-accent-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-text-dark font-bold">{method.label}</h4>
                      <p className="text-text-gray">{method.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Business Hours */}
            <div className="card">
              <h4 className="text-text-dark font-bold text-lg mb-4">Training Hours</h4>
              <div className="space-y-2 text-text-gray">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>6:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card"
          >
            <h3 className="text-2xl font-bold text-text-dark mb-6">Send a Message</h3>
            
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/20 border border-green-500/30 p-4 mb-6 rounded-lg flex items-center gap-2"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-500 font-bold">Message sent successfully!</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-dark font-bold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-3 bg-gray-50 border rounded-lg ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  } text-text-dark focus:border-accent-blue focus:outline-none transition-colors duration-300`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-text-dark font-bold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-3 bg-gray-50 border rounded-lg ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  } text-text-dark focus:border-accent-blue focus:outline-none transition-colors duration-300`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-text-dark font-bold mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full p-3 bg-gray-50 border rounded-lg ${
                    errors.subject ? 'border-red-500' : 'border-gray-200'
                  } text-text-dark focus:border-accent-blue focus:outline-none transition-colors duration-300`}
                >
                  <option value="">Select a subject</option>
                  <option value="fight-booking">Fight Booking</option>
                  <option value="sponsorship">Sponsorship Opportunity</option>
                  <option value="media-request">Media Request</option>
                  <option value="training">Training Inquiry</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-text-dark font-bold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full p-3 bg-gray-50 border rounded-lg ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  } text-text-dark focus:border-accent-blue focus:outline-none transition-colors duration-300 resize-none`}
                  placeholder="Tell me about your inquiry..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 