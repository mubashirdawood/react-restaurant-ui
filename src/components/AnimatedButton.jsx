import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AnimatedButton = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  size = 'default',
  className = '',
  type = 'button'
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-sans font-medium transition-all duration-300 overflow-hidden";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30",
    secondary: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    ghost: "bg-transparent text-foreground hover:text-primary",
    burgundy: "bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/30"
  };

  const sizes = {
    small: "px-4 py-2 text-sm rounded-md",
    default: "px-6 py-3 text-base rounded-lg",
    large: "px-8 py-4 text-lg rounded-lg"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonContent = (
    <>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to={to} className={combinedStyles}>
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {buttonContent}
    </motion.button>
  );
};

export default AnimatedButton;
