import React from 'react'
import { github } from "../assets";

const Contact = () => {
  return (
    <footer className="bg-gray-800 text-white text-xl font-bold">
    <div className="ml-20 mr-20 text-center py-4 flex items-center justify-between">
      <p >&copy; 2023 Alphonsus &nbsp;|&nbsp; (╯°□°）╯︵ ┻━┻  </p>
      <div className="flex space-x-6 ">
      <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
      </div>
      <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
      </div>

      <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
      </div>
    </div>
    </div>
    </footer>
  );
}
export default Contact