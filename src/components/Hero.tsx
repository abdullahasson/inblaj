import * as motion from "motion/react-client"


export default function Hero() {
  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2 }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          Inblaj Creative , 
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur repellendus rem et asperiores
        </motion.p>
        
        <motion.a 
          href="#contact"
          className="cta-button"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8 }}
        >
          Start For Free <i className="fas fa-arrow-right"></i>
        </motion.a>
      </motion.div>
      
      <div className="hero-bg"></div>
    </section>
  );
}