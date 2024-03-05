import { motion } from "framer-motion";
import { styles } from "../styles";

import Game from './Game';
import Model from './Wave'; 
import { Canvas } from '@react-three/fiber';// Canvas working on Wave but not Hero.jsx

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Hi Im Alphonsus */}
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX}  flex flex-row items-start gap-5`}
      >
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='flex flex-col justify-center items-center mt-5'
        >
          <div className='w-12 h-12 rounded-full bg-[#915EFF]' />
          <div className='w-2 sm:h-50 h-60 violet-gradient' />
        </motion.div>
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <span className='text-[#915EFF]'>Alphonsus</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            See my work Linkedin / Github
          </p>
        </div>
  
          <Model />
      
      </div>
    </section>
  );
};

export default Hero;
