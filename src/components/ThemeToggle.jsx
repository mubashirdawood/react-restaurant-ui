import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      className="relative p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-primary" />
        ) : (
          <Sun className="w-5 h-5 text-primary" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
