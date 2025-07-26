import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { fighterData } from './data/fighter';

const KudoLoader = () => (
  <div className="fixed inset-0 bg-primary-white flex items-center justify-center z-50">
    <div className="text-center">
      <div className="mb-8">
        <h1 className="text-4xl md:text-6xl font-kudo font-bold text-accent-blue mb-4">
          KUDO
        </h1>
        <p className="text-text-gray text-lg">Loading Combat Portfolio...</p>
      </div>
      
      <div className="kudo-loader">
        <div className="kudo-kick" style={{ animationDelay: '0s' }}></div>
        <div className="kudo-punch" style={{ animationDelay: '0.2s' }}></div>
        <div className="kudo-block" style={{ animationDelay: '0.4s' }}></div>
        <div className="kudo-kick" style={{ animationDelay: '0.6s' }}></div>
        <div className="kudo-punch" style={{ animationDelay: '0.8s' }}></div>
      </div>
      
      <div className="mt-8">
        <div className="w-32 h-1 bg-gray-200 mx-auto">
          <div className="w-0 h-full bg-accent-blue animate-pulse-blue transition-all duration-1000"></div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <KudoLoader />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <Hero fighter={fighterData} />
            <About fighter={fighterData} />
            <Achievements achievements={fighterData.achievements} stats={fighterData.stats} />
            <Gallery />
            <SocialMedia socialMedia={fighterData.socialMedia}/>    
            <Contact contact={fighterData.contact}/>
            <Footer fighter={fighterData}/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App; 