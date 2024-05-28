import project1 from "../assets/disney.jpg";
import project2 from "../assets/hoobank.jpg";
import project3 from "../assets/gpt3.jpg";
import project4 from "../assets/portfolio.jpg";

export const HERO_CONTENT = `I am a passionate beginner frontend developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end technologies like React and Next.js, I'm also working on my back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Hello! I'm Muzammil, a passionate and enthusiastic front-end developer based in Lahore, Pakistan.My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. What started as a hobby has now become a dedicated pursuit of crafting visually appealing and user-friendly web experiences.I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications.Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "word press Developer",
    company: "Server tech supply Inc.",
    description: `I am a WordPress developer at Server Tech Supply Inc., where I manage and maintain the company's websites. My role involves creating custom themes and plugins, ensuring optimal website performance, and implementing security measures.  Additionally, I ensure our websites are SEO-friendly and responsive, providing an excellent user experience across all devices.`,
    technologies: ["WordPress", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Disney-clone Website",
    image: project1,
    link: "https://disneyplus-clone-9c993.web.app",
    description:
      "I have created This as my first project in react using styled-components and react with a real time database in firebase.",
    technologies: ["HTML", "CSS", "React", "Styled-components"],
  },
  {
    title: "Bank modern App",
    image: project2,
    description: "A modern UI/UX Figma design with full reponsiveness.",
    technologies: ["HTML", "CSS", "tailwind", "React"],
  },
  {
    title: "GPT-3",
    image: project3,
    description: "Another UI/UX figma design I have created.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "tailwind"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "experience",
    title: "Experiences",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
