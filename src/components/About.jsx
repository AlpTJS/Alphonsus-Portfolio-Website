import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-b from-green-500 to-green-950 p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-texture-pattern bg-cover rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-30 h-30 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const ScrollDownAnimation = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 2 }}
    className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
  >
    <motion.div
      initial={{ y: -10 }}
      animate={{ y: 10 }}
      transition={{
        y: {
          duration: 1.5,
          yoyo: Infinity,
          ease: "easeInOut",
        },
      }}
      className="w-4 h-4 rounded-full bg-white"
    ></motion.div>
    <p className="text-gray-400 mt-1">Scroll Down</p>
  </motion.div>
);

const About = () => {
  return (
    <div className="flex flex-col items-center">
      {" "}
      {/* Centering container */}
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#60a05b] text-[17px] max-w-3xl leading-[30px] text-center"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <ScrollDownAnimation />
    </div>
  );
};

export default SectionWrapper(About, "about");
