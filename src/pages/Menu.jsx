import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import MenuCard from '../components/MenuCard';
import { menuData } from '../data/menuData';

const categories = [
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'mains', name: 'Main Courses' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Drinks' }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

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
            <span className="font-sans text-primary text-sm tracking-[0.2em] uppercase">Culinary Excellence</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
              Our Menu
            </h1>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Each dish is crafted with passion, featuring the finest seasonal ingredients 
              and time-honored culinary techniques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 z-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center overflow-x-auto py-4 gap-2 md:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-4 md:px-6 py-2 font-sans text-sm md:text-base whitespace-nowrap transition-colors duration-300 rounded-full ${
                  activeCategory === category.id
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {menuData[activeCategory].map((item, index) => (
                <MenuCard key={item.id} item={item} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Special Note */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="font-sans text-muted-foreground italic">
              "Our menu changes seasonally to showcase the freshest ingredients. 
              Please inform your server of any dietary restrictions or allergies."
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500" />
                Vegetarian
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                Gluten-Free Available
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Menu;
