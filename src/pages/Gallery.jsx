import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { galleryImages } from '../data/menuData';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next' 
      ? (selectedIndex + 1) % galleryImages.length
      : (selectedIndex - 1 + galleryImages.length) % galleryImages.length;
    
    setSelectedIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-sans text-primary text-sm tracking-[0.2em] uppercase">Visual Journey</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
              Our Gallery
            </h1>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the artistry, ambiance, and culinary creations that define the Luxe Dining experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 8) * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className={`relative cursor-pointer group overflow-hidden rounded-xl ${
                  index % 5 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
                onClick={() => openLightbox(image, index)}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover ${
                    index % 5 === 0 ? 'h-full min-h-[300px] sm:min-h-[400px]' : 'h-48 sm:h-56'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent flex items-end p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-sans text-sm text-foreground">{image.alt}</p>
                </motion.div>

                {/* Golden Border Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none"
                  whileHover={{ borderColor: 'hsl(var(--primary))' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 p-2 rounded-full bg-card hover:bg-card/80 text-foreground transition-colors z-10"
              onClick={closeLightbox}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Navigation Buttons */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-card hover:bg-card/80 text-foreground transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-card hover:bg-card/80 text-foreground transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Image */}
            <motion.img
              key={selectedImage.id}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 font-sans text-sm text-muted-foreground"
            >
              {selectedIndex + 1} / {galleryImages.length}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Gallery;
