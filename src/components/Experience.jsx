import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant,fadeIn } from "../utils/motion";
import { experiences } from "../constants";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
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
        boxShadow: "0 0 20px #22804d",
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
    <div className="flex flex-col">
      <div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "Experience");
