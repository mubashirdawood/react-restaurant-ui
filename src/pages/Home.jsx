import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import PageTransition from '../components/PageTransition';
import AnimatedButton from '../components/AnimatedButton';
import { featuredDishes, testimonials } from '../data/menuData';
import { Star, ChefHat, Clock, Award } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const highlights = [
    { icon: ChefHat, title: 'Master Chefs', description: 'Award-winning culinary artists' },
    { icon: Clock, title: 'Fresh Daily', description: 'Locally sourced ingredients' },
    { icon: Award, title: 'Michelin Star', description: 'Excellence in fine dining' }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="font-sans text-primary text-sm md:text-base tracking-[0.3em] uppercase">
                Fine Dining Experience
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight"
            >
              Where Every Dish
              <br />
              <span className="text-primary">Tells a Story</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Embark on an extraordinary culinary journey. Our award-winning chefs craft 
              exquisite dishes that celebrate the finest ingredients and timeless techniques.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <AnimatedButton to="/menu" variant="primary" size="large">
                View Our Menu
              </AnimatedButton>
              <AnimatedButton to="/reservations" variant="secondary" size="large">
                Book a Table
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div className="w-1.5 h-3 bg-primary rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-8"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
                <p className="font-sans text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-sans text-primary text-sm tracking-[0.2em] uppercase">Our Specialties</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4">Featured Dishes</h2>
          </motion.div>

          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="pb-4"
          >
            {featuredDishes.map((dish, index) => (
              <SwiperSlide key={dish.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative rounded-xl overflow-hidden bg-card"
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-foreground mb-2">{dish.name}</h3>
                    <p className="font-sans text-sm text-muted-foreground">{dish.description}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-sans text-primary text-sm tracking-[0.2em] uppercase">Testimonials</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4">What Our Guests Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-background p-8 rounded-xl border border-border"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="font-sans text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-serif text-foreground">{testimonial.name}</p>
                    <p className="font-sans text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=600&fit=crop)' }}
        />
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Ready for an
              <span className="text-primary"> Unforgettable</span> Experience?
            </h2>
            <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Reserve your table today and let us create a memorable dining experience for you and your loved ones.
            </p>
            <AnimatedButton to="/reservations" variant="primary" size="large">
              Make a Reservation
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
