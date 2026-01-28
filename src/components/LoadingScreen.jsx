import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h1
            className="font-serif text-5xl md:text-7xl text-primary mb-4"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Luxe
          </motion.h1>
          <motion.p
            className="font-serif text-xl md:text-2xl text-foreground tracking-[0.3em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            DINING
          </motion.p>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          className="mt-8 w-48 h-0.5 bg-border mx-auto overflow-hidden rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-primary"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.9, duration: 1, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
