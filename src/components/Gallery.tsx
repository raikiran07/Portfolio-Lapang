import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../data/gallery';
import { GalleryImage } from '../types';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="section-padding section-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-blue rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent-purple rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-accent-indigo rounded-full blur-xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text-dark mb-4">
            <span className="text-gradient">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto"></div>
        </motion.div>

        {/* Horizontal Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group shadow-lg"
          >
            <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group shadow-lg"
          >
            <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Slider Container */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  <img
                    src={galleryImages[currentIndex].src}
                    alt={galleryImages[currentIndex].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-bold text-2xl md:text-3xl drop-shadow-lg mb-2">
                            {galleryImages[currentIndex].title}
                          </h3>
                          <p className="text-white/80 text-lg capitalize">
                            {galleryImages[currentIndex].category}
                          </p>
                        </div>
                                                 {galleryImages[currentIndex].isVideo && (
                           <button
                             onClick={() => handleImageClick(galleryImages[currentIndex])}
                             className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent-blue transition-all duration-300 group"
                           >
                             <Play size={20} className="text-white group-hover:scale-110 transition-transform" />
                           </button>
                         )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent-blue scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-text-gray font-medium">
              {currentIndex + 1} / {galleryImages.length}
            </span>
          </div>
        </div>

        

        {/* Enhanced Popup Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50, rotateX: -15 }}
                animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50, rotateX: 15 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 25,
                  duration: 0.6
                }}
                className="relative max-w-4xl w-full max-h-full flex flex-col items-center"
                onClick={e => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute -top-16 right-0 text-white hover:text-accent-blue transition-colors duration-300 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70 z-10"
                >
                  <X size={24} />
                </button>

                {/* Image Container */}
                <div className="relative">
                  <motion.img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none"></div>
                </div>

                {/* Info Panel */}
                <motion.div 
                  className="text-center mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h3 className="text-white font-bold text-2xl drop-shadow-lg mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/80 capitalize text-lg">
                    {selectedImage.category}
                  </p>
                </motion.div>

                {/* Background blur effect */}
                <motion.div
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-3xl blur-3xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.8 }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery; 