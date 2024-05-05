import React from "react";
import { motion } from "framer-motion";
import { textVariant,fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Experienceheader = () => {
    return (  
    <motion.div variants={textVariant()} className="">
    <h2 className={`${styles.sectionHeadText} text-center`}>
      Job Experience
    </h2>

    <div
      className={`${styles.sectionSubText} text-center flex items-center justify-center `}
    >
      <h2 className={`text-[#73A2CC] `}>Tech</h2>
      <h2>&nbsp;</h2>
      <h2 className={`text-[#FAF8F6]`}>&</h2>
      <h2>&nbsp;</h2>
      <h2 className={`text-[#FF6961]`}>Others</h2>
     
    </div>
  </motion.div>);
};

export default SectionWrapper(Experienceheader, "Experience");