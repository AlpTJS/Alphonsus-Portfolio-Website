import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { hobbies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

//change image to images
const ImageCard = ({ index, name, description, tags, images, source_code_link }) => {
  console.log('Rendering ImageCard:', name, images);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    
    <motion.div className='flex items-center'>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1.2, // Adjust the scale to make it larger
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-left '>
          <Slider {...sliderSettings}>
            {images.map((image, imgIndex) => (
              <div key={`${name}-img-${imgIndex}`} className='relative w-full h-[230px]'>
              
                <img
                  src={image}
                  alt='project_image'
                  className='w-full h-full object-cover rounded-2xl'
                />
            </div>))}
          </Slider>
        </Tilt>
      </motion.div>
      <p className=' text-secondary text-[17px] max-w-3xl leading-[30px] flex flex-right'>
        {description} {/* Add your paragraph here */}
      </p>

    </motion.div>
  );
};

const Hobby = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {hobbies.map((project, index) => (
          <ImageCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};



export default SectionWrapper(Hobby, "");
