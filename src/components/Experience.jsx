// import React from 'react'

// const Experience = () => {
//   return (
//     <div>Experience</div>
//   )
// }

// export default Experience

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ExperienceCard = ({ experience }) => {
  const carouselSettings = {
    dots: false,
    arrows: true,
  };
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#124429",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      // Circle icon image
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className={`text-[${experience.company_nameBg}] text-[16px] font-semibold`}
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>

      <AliceCarousel {...carouselSettings}>
        {experience.images.map((image, imgIndex) => (
          <div
            key={`${name}-img-${imgIndex}`}
            className="relative mt-10 h-[230px]"
          >
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </AliceCarousel>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Job Experience
        </h2>

        <p
          className={`${styles.sectionSubText} text-center flex items-center justify-center `}
        >
          <h2 className="text-[#73A2CC]">Tech</h2>
          <h2>&nbsp;</h2>
          <h2 className="text-[#FAF8F6]">&</h2>
          <h2>&nbsp;</h2>
          <h2 className="text-[#FF6961]">Others</h2>
        </p>
      </motion.div>

      {/* Click Experiences to modify description*/}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "Experience");
