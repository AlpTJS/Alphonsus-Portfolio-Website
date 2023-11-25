import { BrowserRouter } from "react-router-dom";

import { About, Experience, Organization, Feedbacks, Hobby, Hero, Navbar,Works, Contact} from "./components";

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
        <Organization />
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

