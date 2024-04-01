import { motion } from "framer-motion";
import { styles } from "../styles";

// import Model from "./Wave";
import { Avatar } from "./Avatar";
import { Canvas } from "@react-three/fiber"; // Canvas working on Wave but not Hero.jsx
import { github, Linkedin, Instagram } from "../assets";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
       {/* <section className={`relative w-full  mx-auto`}></section> and remove absolute */}
      {/* Hi Im Alphonsus */}
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto  ${styles.paddingX}  flex flex-row items-start gap-5`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col justify-center items-center mt-5"
        >
          <div className="w-12 h-12 rounded-full bg-green-950" />
          <div className="w-2 sm:h-50 h-60 bg-gradient-to-b from-green-950 " />
        </motion.div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <span className="text-[#faf0e6]">Alphonsus</span>
          </h1>

          <div className="flex space-x-6 mt-10">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-9 h-9 flex justify-center cursor-pointer"
            >
              <img src={Linkedin} alt="source code" />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-9 h-9 flex justify-center cursor-pointer"
            >
              <img src={Instagram} alt="source code" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0  transform -translate-x-1/   ">
          {/* <Avatar /> */}
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
