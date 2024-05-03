import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  fourfingers,
  atome,
  cys,
  hpb,
  mediacorp,
  scenestealer,
  thermofisher,
  fourfingersbg,
  atomebg,
  cysbg,
  mediacorpbg,
  scenestealerbg,
  carrent,
  jobit,
  tripguide,
  threejs,
  ankit,
  banhup,
  elliot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "work",
    title: "Work",
  },
];

const services = [
  {
    title: "Hey there!",
    icon: web,
  },

];




const experiences = [
  {
    title: "Assistant Program Director",
    company_name: "Cyber Youth Singapore",
    company_nameBg:"#73A2CC",
    icon: cys,
    iconBg: "#383E56",
    date: "Nov 2023 - Present",
    points: [
      "Coordinate large-scale events with up to 150 participants, overseeing event planning, sponsor communication, and logistical arrangements",
    ],
    images: [cysbg],
  },

  {
    title: "Cyber Security Officer Intern",
    company_name: "Mediacorp",
    company_nameBg:"#73A2CC",
    icon: mediacorp,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Feb 2024",
    points: [
      "Conducted security investigations and formulated incident response strategies using the latest security tools.",
      "Streamlined the process of data collection, cleansing, and visualization to facilitate real-time insights generation.",
      "Contributed to the development of the company's AI chatbot, encompassing both network (Azure) and software aspects.",
      "Crafted proposals for the migration of company infrastructure and security tools",
    ],
    
    images: [mediacorpbg],
  },
  {
    title: "Events Facillitator",
    company_name: "Scene Stealer",
    company_nameBg:"#FF6961",
    icon: scenestealer,
    iconBg: "#E6DEDD",
    date: "Aug 2023",
    points: [
      "Communicating and Liaising with event participant and vendors",
      "Event Setup and Breakdown"
    ],
    images: [scenestealerbg],
  },
  {
    title: "Warehouse Assistant",
    company_name: "ThermoFisher Scientific",
    company_nameBg:"#73A2CC",
    icon: thermofisher,
    iconBg: "#383E56",
    date: "Dec 2020 - Mar 2021",
    points: [
      "Led a team of 3.",
      "Inventory management and Quality Control.",
  
    ],
    images: [carrent],
  },
  {
    title: "Technical Support",
    company_name: "Health Promotion Board",
    company_nameBg:"#73A2CC",
    icon: hpb,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Dec 2020",
    points: [
      "Resolved customers’ technical inquiries and received 95% customer satisfaction.",
      "Trained and assisted up to 300 users on how to operate the software application.",
      "Troubleshot any software application problems and achieved 100% efficiency.",
    ],
    images: [carrent, carrent],
  },
  {
    title: "Brand Ambassador",
    company_name: "Atome",
    company_nameBg:"#73A2CC",
    icon: atome,
    iconBg: "#E6DEDD",
    date: "Jul 2020 - Aug 2021",
    points: [
      "Engaging with Cusomters.",
      "Driving Sales and Conversion.",
    ],
    images: [atomebg],
  },
  {
    title: "Cashier",
    company_name: "4Fingers",
    company_nameBg:"#73A2CC",
    icon: fourfingers,
    iconBg: "#E6DEDD",
    date: "Nov 2019 - Jan 2020",
    points: [
      "Cash Handling.",
      "Customer Service.",
    ],
    images: [fourfingersbg],
  },
];

const testimonials = [
  {
    testimonial:
      "Rarely have I encountered a staff as dedicated to their role and team's success as Alphonsus. His commitment to excellence and willingness to go above and beyond make him a valuable asset to any organization. His proficiency and skill in coding are evident in the high-quality work he consistently deliver.",
    name: "Lee Ban Hup",
    designation: "Infrastructure Lead",
    company: "Mediacorp",
    image: banhup,
  },
  {
    testimonial:
      "Alphonsus has demonstrated remarkable leadership qualities and exhibited exceptional resilience and dedication in effectively communicating with clients and meeting their professional requirements. Moreover, he has displayed outstanding proficiency in problem-solving and technical skills. Alphonsus is poised to excel in any environment he encounters.",
    name: "Ankit Saurabh",
    designation: "Lecturer",
    company: "Singapore Polytechnic",
    image: ankit,
  },
  {
    testimonial:
      "I have had the privilege of working with Alphonsus on countless projects, and I am continually impressed by his professionalism, reliability, and unwavering support for his teammates. Alphonsus is an incredible team player who consistently delivers for his team, and his commitment to achieving our shared goals always inspires me.",
    name: "Elliot Ang",
    designation: "Student Graduate",
    company: "Singapore Polytechnic",
    image: elliot,
  },
];

const projects = [
  {
    name: "Goat Scan",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  }
];

const hobbies = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    images: [carrent, carrent, carrent],
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    images: [carrent, carrent],
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    images: [tripguide, carrent],
    source_code_link: "https://github.com/",
  }
]

export { services, experiences, testimonials, projects, hobbies };
