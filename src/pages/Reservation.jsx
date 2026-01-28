import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedButton from '../components/AnimatedButton';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

const timeSlots = [
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', 
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
];

const partySize = [1, 2, 3, 4, 5, 6, 7, 8];

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    requests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <PageTransition>
        <section className="min-h-screen flex items-center justify-center bg-background pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center px-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center"
            >
              <CheckCircle className="w-10 h-10 text-primary" />
            </motion.div>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Reservation Confirmed!
            </h1>
            <p className="font-sans text-muted-foreground mb-8 max-w-md mx-auto">
              Thank you, {formData.name}! We've reserved a table for {formData.guests} guest(s) 
              on {formData.date} at {formData.time}. A confirmation email has been sent to {formData.email}.
            </p>
            <AnimatedButton to="/" variant="primary">
              Return Home
            </AnimatedButton>
          </motion.div>
        </section>
      </PageTransition>
    );
  }

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
            <span className="font-sans text-primary text-sm tracking-[0.2em] uppercase">Reserve Your Table</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
              Make a Reservation
            </h1>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for an unforgettable dining experience. Reserve your table and let us 
              create lasting memories for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Name Field */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="peer w-full bg-transparent border-b-2 border-border py-3 px-1 font-sans text-foreground focus:outline-none transition-colors focus:border-primary"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className={`absolute left-1 transition-all duration-300 font-sans ${
                    formData.name || focusedField === 'name'
                      ? '-top-4 text-xs text-primary'
                      : 'top-3 text-muted-foreground'
                  }`}
                >
                  Full Name
                </label>
              </motion.div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="peer w-full bg-transparent border-b-2 border-border py-3 px-1 font-sans text-foreground focus:outline-none transition-colors focus:border-primary"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-1 transition-all duration-300 font-sans ${
                      formData.email || focusedField === 'email'
                        ? '-top-4 text-xs text-primary'
                        : 'top-3 text-muted-foreground'
                    }`}
                  >
                    Email Address
                  </label>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="peer w-full bg-transparent border-b-2 border-border py-3 px-1 font-sans text-foreground focus:outline-none transition-colors focus:border-primary"
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className={`absolute left-1 transition-all duration-300 font-sans ${
                      formData.phone || focusedField === 'phone'
                        ? '-top-4 text-xs text-primary'
                        : 'top-3 text-muted-foreground'
                    }`}
                  >
                    Phone Number
                  </label>
                </motion.div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="flex items-center gap-2 font-sans text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    Select Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-card border border-border rounded-lg py-3 px-4 font-sans text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="flex items-center gap-2 font-sans text-sm text-muted-foreground mb-3">
                    <Clock className="w-4 h-4 text-primary" />
                    Select Time
                  </label>
                  <select
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-card border border-border rounded-lg py-3 px-4 font-sans text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Choose a time</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </motion.div>
              </div>

              {/* Guests & Occasion Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="flex items-center gap-2 font-sans text-sm text-muted-foreground mb-3">
                    <Users className="w-4 h-4 text-primary" />
                    Party Size
                  </label>
                  <select
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-card border border-border rounded-lg py-3 px-4 font-sans text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Number of guests</option>
                    {partySize.map(size => (
                      <option key={size} value={size}>{size} {size === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="9+">9+ Guests (Private Event)</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="font-sans text-sm text-muted-foreground mb-3 block">
                    Special Occasion (Optional)
                  </label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full bg-card border border-border rounded-lg py-3 px-4 font-sans text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Dinner</option>
                    <option value="date">Date Night</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>
              </div>

              {/* Special Requests */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label className="font-sans text-sm text-muted-foreground mb-3 block">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any dietary restrictions, seating preferences, or special requests..."
                  className="w-full bg-card border border-border rounded-lg py-3 px-4 font-sans text-foreground focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center pt-4"
              >
                <AnimatedButton type="submit" variant="primary" size="large">
                  Confirm Reservation
                </AnimatedButton>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="font-serif text-2xl text-foreground mb-4">Reservation Policy</h3>
            <div className="font-sans text-sm text-muted-foreground space-y-2">
              <p>Reservations are held for 15 minutes past the scheduled time.</p>
              <p>For parties of 8 or more, please call us directly at (555) 123-4567.</p>
              <p>Cancellations must be made at least 24 hours in advance.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Reservation;
