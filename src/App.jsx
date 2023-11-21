import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, OtherExperience, Feedbacks, Hobby, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {

  
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        {/* Can change background here */}
        <About />
        <Works />
        <Experience />
        <Feedbacks />
        <Hobby />
        <OtherExperience />
        <Tech />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
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

