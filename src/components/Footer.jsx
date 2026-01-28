import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const quickLinks = [
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl text-primary">Luxe</span>
              <span className="font-serif text-xl text-foreground tracking-wider ml-2">DINING</span>
            </Link>
            <p className="font-sans text-muted-foreground text-sm leading-relaxed">
              An extraordinary culinary journey awaits. Experience fine dining at its finest with our award-winning cuisine and impeccable service.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-serif text-lg text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-serif text-lg text-foreground mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm text-muted-foreground">
                 Mansehra<br />KPK
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-sans text-sm text-muted-foreground">
                  +92 328 8640289
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-sans text-sm text-muted-foreground">
                 mubashirdawood05@gmail.com
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Hours & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-serif text-lg text-foreground mb-6">Hours</h3>
            <ul className="space-y-2 mb-6">
              <li className="font-sans text-sm text-muted-foreground">
                <span className="text-foreground">Mon - Thu:</span> 5pm - 10pm
              </li>
              <li className="font-sans text-sm text-muted-foreground">
                <span className="text-foreground">Fri - Sat:</span> 5pm - 11pm
              </li>
              <li className="font-sans text-sm text-muted-foreground">
                <span className="text-foreground">Sunday:</span> 4pm - 9pm
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border text-center"
        >
          <p className="font-sans text-sm text-muted-foreground">
            © {currentYear} Luxe Dining by Mubashir Dawood.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
