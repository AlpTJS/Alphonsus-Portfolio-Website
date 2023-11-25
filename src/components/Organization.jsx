import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
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
  // console.log('Rendering ImageCard:', name, images);
  const carouselSettings = {
    dots: true,
    disableButtonsControls: true,//this does not remove buttons
    
    
  };
  
  return (
    
    <motion.div className='flex items-center bg-tertiary flex-col sm:flex-row w-full'>
      
        <div className='bg-tertiary p-5 rounded-2xl w-full sm:w-[50%] sm:order-1'> 
         <AliceCarousel {...carouselSettings}>
            {images.map((image, imgIndex) => (
              <div key={`${name}-img-${imgIndex}`} className='relative w-full h-[300px]'>
              
                <img
                  src={image}
                  alt='project_image'
                  className='w-full h-full object-cover rounded-2xl'
                />
            </div>))}
          </AliceCarousel>
        </div>


      {/* <p className=' text-secondary text-center p-auto ml-10 mb-15 text-[17px] max-w-3xl leading-[30px] flex flex-right'> */}
      <p className=' text-secondary text-center w-full pl-8 pr-8 mb-10 sm:w-[50%] sm:order-2'> 
        {description} {/* Add your paragraph here */}
      </p>
      

    </motion.div>
  );
};


const Organization = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Organizations</p>
        <h2 className={`${styles.sectionHeadText}`}>Organizations</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {hobbies.map((project, index) => (
          <ImageCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
}



export default SectionWrapper(Organization, "");
