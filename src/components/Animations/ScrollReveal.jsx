import React from 'react';
import { motion } from 'framer-motion';

// className ve style props'larını ekledik
const ScrollReveal = ({ children, delay = 0, animation = 'fade-up', className = '', style = {} }) => {
  
  const variants = {
    'fade-up': {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    'slide-in-left': {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 }
    },
    'slide-in-right': {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 }
    },
    'zoom-in': {
      hidden: { opacity: 0, scale: 0.85 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  const selectedVariant = variants[animation] || variants['fade-up'];

  return (
    <motion.div
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
      className={className} // Dışarıdan gelen sınıfı buraya ekledik
      style={style}         // Dışarıdan gelen stili buraya ekledik
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;