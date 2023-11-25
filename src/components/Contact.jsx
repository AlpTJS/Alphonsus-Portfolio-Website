import React from 'react'
import { github } from "../assets";

const Contact = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>&copy; 2023 | Alphonsus </p>
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
    </footer>
  );
}

export default Contact