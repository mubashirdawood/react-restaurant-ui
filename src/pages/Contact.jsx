import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedButton from '../components/AnimatedButton';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Abbottabad', 'KPK, Pakistan']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+92 328 8640289', '']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['mubashirdawood05@gmail.com', 'linkedin.com/in/mubashir-dawood/']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Thu: 5pm - 10pm', 'Fri-Sat: 5pm - 11pm', 'Sun: 4pm - 9pm']
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

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
            <span className="font-sans text-primary text-sm tracking-[0.2em] uppercase">Get in Touch</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
              Contact Us
            </h1>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Reach out with any questions, feedback, or inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl text-foreground mb-8">Send Us a Message</h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card rounded-xl p-8 text-center"
                >
                  <Send className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-xl text-foreground mb-2">Message Sent!</h3>
                  <p className="font-sans text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="font-sans text-sm text-muted-foreground mb-2 block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-card border border-border rounded-lg py-3 px-4 font-sans text-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="font-sans text-sm text-muted-foreground mb-2 block">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-card border border-border rounded-lg py-3 px-4 font-sans text-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="font-sans text-sm text-muted-foreground mb-2 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-card border border-border rounded-lg py-3 px-4 font-sans text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="How can we help you?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="font-sans text-sm text-muted-foreground mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-card border border-border rounded-lg py-3 px-4 font-sans text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Your message here..."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <AnimatedButton type="submit" variant="primary" size="large">
                      Send Message
                    </AnimatedButton>
                  </motion.div>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl text-foreground mb-8">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-foreground mb-1">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="font-sans text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-serif text-lg text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-card relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&h=400&fit=crop)' }}
          />
          <div className="relative text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-serif text-xl text-foreground mb-2">Find Us</h3>
            <p className="font-sans text-muted-foreground">123 Gourmet Avenue, New York, NY 10001</p>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Contact;
