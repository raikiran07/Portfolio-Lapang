import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryImages } from '../data/gallery';
import { GalleryImage } from '../types';

const getRandomSpan = () => {
  // For a more dynamic grid, randomly assign row/col span
  const spans = ["row-span-1 col-span-1", "row-span-2 col-span-1", "row-span-1 col-span-2"];
  return spans[Math.floor(Math.random() * spans.length)];
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="section-padding section-bg">
      <div className="container-custom">
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

        {/* Masonry/Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ zIndex: 10, scale: 1.05, boxShadow: "0 8px 32px rgba(59,130,246,0.15)" }}
                className="relative cursor-pointer overflow-hidden rounded-xl group aspect-square"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg drop-shadow-lg">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative max-w-3xl w-full max-h-full flex flex-col items-center"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-accent-blue transition-colors duration-300"
                >
                  <X size={32} />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                />
                <div className="text-center mt-4">
                  <h3 className="text-white font-bold text-2xl drop-shadow-lg">{selectedImage.title}</h3>
                  <p className="text-gray-300 capitalize">{selectedImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery; 