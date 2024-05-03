import React from 'react'
import { github, Linkedin, Instagram } from "../assets";

const Contact = () => {
  return (
    <footer className="bg-gray-800 text-white text-xl font-bold">
    <div className="ml-10 mr-10 text-center py-4 flex items-center justify-between">

      <div className="flex mr-10 ">&copy; 2023 Alphonsus &nbsp;|&nbsp; (╯°□°）╯ AlphonsusTeo@outlook.com</div>

      <div className="flex space-x-6 ">
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
    </div>
    </footer>
  );
}
export default Contact