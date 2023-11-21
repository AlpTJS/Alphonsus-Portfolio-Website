import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>


      {/* Hi Im Alphonsus */}
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />  
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
          {/* circle and line */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Alphonsus</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            See my work
            Linkedin / Github
            {/* I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
