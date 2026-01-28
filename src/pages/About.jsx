import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';
import { chefs } from '../data/menuData';
import { Users, Utensils, Calendar, Award } from 'lucide-react';

const stats = [
  { icon: Calendar, value: 20, suffix: '+', label: 'Years of Excellence' },
  { icon: Utensils, value: 150, suffix: '+', label: 'Signature Dishes' },
  { icon: Users, value: 50, suffix: 'K+', label: 'Happy Guests' },
  { icon: Award, value: 12, suffix: '', label: 'Culinary Awards' }
];

const timeline = [
  { year: '2004', title: 'The Beginning', description: 'Luxe Dining opens its doors in Manhattan\'s heart, offering a fresh take on fine dining.' },
  { year: '2008', title: 'First Michelin Star', description: 'Recognition of our commitment to culinary excellence and exceptional service.' },
  { year: '2015', title: 'Global Expansion', description: 'Opening of our second location in Paris, bringing our vision to Europe.' },
  { year: '2020', title: 'Innovation Era', description: 'Embracing sustainable practices and introducing our farm-to-table program.' },
  { year: '2024', title: 'Two Decades', description: 'Celebrating 20 years of unforgettable dining experiences.' }
];

// Counter animation component
const AnimatedCounter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const About = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=800&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-sans text-primary text-sm tracking-[0.2em] uppercase">Our Story</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
              About Luxe Dining
            </h1>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              A legacy of culinary excellence, where every meal is a celebration of art, passion, and tradition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-sans text-primary text-sm tracking-[0.2em] uppercase">Since 2004</span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-6">
                A Passion for Perfection
              </h2>
              <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                <p>
                  Luxe Dining was born from a simple yet ambitious vision: to create a dining experience 
                  that transcends the ordinary. Founded by renowned Chef Marcus Laurent, our restaurant 
                  has become synonymous with culinary innovation and timeless elegance.
                </p>
                <p>
                  We believe that dining is not merely about sustenance—it's about creating memories, 
                  celebrating milestones, and experiencing the artistry of food. Every dish that leaves 
                  our kitchen is a testament to our unwavering commitment to excellence.
                </p>
                <p>
                  From the carefully curated wine list to the meticulously designed ambiance, every 
                  element of Luxe Dining is thoughtfully crafted to provide an unforgettable experience.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
                  alt="Restaurant interior"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
              
              {/* Decorative element */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary rounded-2xl -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="font-serif text-4xl md:text-5xl text-foreground mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-sans text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chefs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-sans text-primary text-sm tracking-[0.2em] uppercase">Meet the Team</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4">Our Master Chefs</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <motion.div
                key={chef.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group relative"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <motion.img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-80 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex flex-col justify-end p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-sans text-sm text-muted-foreground">{chef.bio}</p>
                  </motion.div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="font-serif text-xl text-foreground">{chef.name}</h3>
                  <p className="font-sans text-sm text-primary">{chef.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-sans text-primary text-sm tracking-[0.2em] uppercase">Our Journey</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4">Milestones</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative flex items-start gap-6 pb-12 ${
                  index !== timeline.length - 1 ? 'border-l-2 border-border ml-4' : 'ml-4'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-primary" />
                
                <div className="pl-8">
                  <span className="font-serif text-2xl text-primary">{item.year}</span>
                  <h3 className="font-serif text-xl text-foreground mt-1">{item.title}</h3>
                  <p className="font-sans text-muted-foreground mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
