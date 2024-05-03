import { motion } from "framer-motion";
import { styles } from "../styles";
import "../scrollwheel.css";

// import Model from "./Wave";
import { Avatar } from "./Avatar";
import { Canvas } from "@react-three/fiber"; // Canvas working on Wave but not Hero.jsx
import { github, Linkedin, Instagram } from "../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    //h-screen: occupies the entire screen
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto  ${styles.paddingX}  flex flex-row items-start gap-5`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col justify-center items-center mt-5"
        >
          <div className="w-12 h-12 rounded-full bg-yellow-500" />
          <div className="w-2 sm:h-50 h-60 bg-gradient-to-b from-yellow-500 " />
        </motion.div>

        <div>
          <h1 className={`${styles.heroHeadText} text-[#ce8c46] `}>
            Hi, I'm <span className="text-[#cce8c46]">Alphonsus</span>
          </h1>

          <div className="flex space-x-6 mt-10">
            <div
              onClick={() => window.open("https://github.com/AlpTJS", "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open("www.linkedin.com/in/alphonsus-teo-a7087a244", "_blank")}
              className="w-9 h-9 flex justify-center cursor-pointer"
            >
              <img src={Linkedin} alt="source code" />
            </div>
            <div
              onClick={() => window.open("https://www.instagram.com/_alphonsus_/", "_blank")}
              className="w-9 h-9 flex justify-center cursor-pointer"
            >
              <img src={Instagram} alt="source code" />
            </div>
          </div>
          <div className="scrolldown justify-center absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </div>
        </div>
        {/* Removed as 3d Avatar had troubles being uploaded to github pages */}
        {/* <div className="absolute bottom-0  transform -translate-x-1/   ">
          <Avatar />
        </div> */}
        
      </div>
  
    </section>
  );
};

export default Hero;
