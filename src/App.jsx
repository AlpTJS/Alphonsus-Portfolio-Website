import { BrowserRouter } from "react-router-dom";

import { About, Experience, Organization, Feedbacks, Hobby, Hero, Navbar,Works, Contact} from "./components";

//bg in tailwindconfig.js
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className=' bg-[#e2dbc5]'>
        <About />
        </div>
        <div className='bg-flower-pattern bg-repeat'>
        <Works />
        </div>
        <div className='bg-[#d1cbb6]'>
        <Experience />
        </div>
        <div className='bg-light-pattern bg-cover'>
        <Feedbacks />
        </div>
        
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;












// import { BrowserRouter } from "react-router-dom";
// import {Navbar, Hero, About, Contact, Projects, Work, Organization, Hobbies, Feedbacks, StarsCanvas } from "./components";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className='relative z-0 bg-primary'>
//         <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
//           <Navbar />
//           <Hero />
//         </div>
//         <About />
//         <Projects />
//         <Work/>
//         <Organization />
//         <Hobbies />
//         <Feedbacks />
//         <div className='relative z-0'>
//           <Contact />
//           <StarsCanvas />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App

