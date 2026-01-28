import { motion } from "framer-motion";

const MenuCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

        {/* Price Badge */}
        <motion.div
          className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-sans font-semibold text-sm"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
        >
          ${item.price}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {item.name}
        </h3>
        <p className="font-sans text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          boxShadow:
            "0 0 30px hsl(var(--primary) / 0.2), inset 0 0 30px hsl(var(--primary) / 0.05)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default MenuCard;
