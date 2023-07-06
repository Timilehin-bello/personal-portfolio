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
  carrent,
  jobit,
  tripguide,
  threejs,
  ardova,
  grandida,
  alx,
  jpmorgan,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Blockchain Developer",
    icon: web,
  },
  {
    title: "Solidity Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Ardova PLC",
    icon: ardova,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Successfully developed and deployed an integrated data management system that automated and streamlined the data processing workflow, resulting in a 30% increase in data processing efficiency and reducing the processing time from hours to minutes.",

      "Designed and implemented a web-based application that enables engineers to monitor and analyze real-time drilling data, reducing the time required for manual data analysis and improving the accuracy of the analysis by 40%.",

      "Developed a customized platform that facilitates the monitoring and management of oil well production data in real-time, allowing operators to identify and resolve production issues quickly, leading to a 25% reduction in downtime and maintenance costs.",

      "Implemented a custom analytics dashboard that provides real-time data insights and visualization, helping the management team make data-driven decisions.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Grandida Works",
    icon: grandida,
    iconBg: "#E6DEDD",
    date: "Jun 2021 -  May 2023",
    points: [
      "Designed and implemented a scalable and secure NFT marketplace that handles high volumes of transactions, resulting in an increase in NFT sales and a reduction in transaction fees.",

      "Developed a decentralized exchange (DEX) that enables users to trade ERC-20 tokens securely and efficiently, resulting in an increase in trading volume and a 15% reduction in transaction time.",

      "Implemented a custom blockchain solution that enables the tracking and authentication of digital assets, leading to a reduction in fraud and an increase in asset security.",

      "Took ownership of the complete lifecycle of product features, from planning to implementation to testing to production.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "ALX Africa",
    icon: alx,
    iconBg: "#383E56",
    date: "Feb 2021 - Mar 2023",
    points: [
      " Successfully maintained and enhanced existing software applications, addressing bugs and implementing new features to improve functionality and user experience.",
      "Conducted rigorous unit and integration testing, resulting in the detection and resolution of critical issues, ensuring the delivery of high-quality and reliable software.",
      "Played an active role in code reviews, providing valuable feedback and suggestions that significantly improved the overall code quality and maintainability of the applications.",
      "Demonstrated effective collaboration skills by actively engaging with cross-functional teams, contributing to the resolution of technical and non-technical challenges, and fostering a cohesive working environment.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "JPMorgan Chase & Co",
    icon: jpmorgan,
    iconBg: "#E6DEDD",
    date: "Jun 2020 - July 2020",
    points: [
      "  Developed innovative solutions that significantly added value for customers, clients, and employees by creating high-quality software products, resulting in increased customer satisfaction and improved operational efficiency.",
      "Spearheaded improvements to the design, analytics, coding, and testing processes, optimizing the software development lifecycle and enabling effective utilization of server data on the client-side for enhanced decision-making capabilities.",
      "Successfully implemented enhancements to a client-side React application, revolutionizing the data visualization experience by rendering graphs in a highly intuitive and visually appealing manner, leading to improved data comprehension and more informed decision-making.",
      "   Upgraded and optimized an application graph, resulting in the display of more relevant and valuable information for financial trades, empowering traders with actionable insights and improving their overall performance in the market.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
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
  },
];

export { services, technologies, experiences, testimonials, projects };
