import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `I am a passionate frontend developer with a strong focus on building responsive, dynamic, and user-friendly web applications. As an MCA student, I have honed my skills in React, JavaScript, HTML, CSS, and Tailwind CSS, creating sleek interfaces and smooth user experiences. I enjoy transforming ideas into visually appealing designs and interactive components that not only look great but also perform efficiently. My goal is to keep growing as a frontend developer and contribute to crafting modern, impactful digital experiences.`;

export const ABOUT_TEXT = `I’m a passionate Frontend Developer and an MCA student with a strong interest in creating clean, responsive, and engaging web applications. I specialize in React, JavaScript, HTML, CSS, and Tailwind CSS, and love turning ideas into smooth, interactive user experiences.

Beyond just coding, I enjoy designing interfaces that balance creativity with usability, making sure every project I build feels intuitive and impactful. My goal is to keep growing my skills, contribute to real-world projects, and craft digital solutions that leave a lasting impression.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "MultiPage Grocery Website",
    image: project1,
    description:
      "Built responsive multiPage grocery website using ReacrJS and Tailwind CSS using essential concepts like React Router DOM for navigation, Swiper JS for responsive sliders,and React Icons for adding beautiful icons.",
    technologies: ["React", "TailwindCSS"],
  },
  {
    title: "GreenMart E-commerce WebApplication",
    image: project2,
    description:
      "A modern and responsive e-commerce shopping app with a user-friendly UI for browsing and purchasing grocery items.",
    technologies: ["React", "Tailwind CSS", "NodeJS", "MySQL"],
  },
  {
    title: "Weather Forcast Web App",
    image: project3,
    description:
      "Built a weather application that allows users to search and view real-time weather information of nay city using the OpenWeatherMap Api.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Rock Paper Scissor Game",
    image: project4,
    description:
      "Implemented core game logic with conditional checks and randomized AI moves.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  phoneNo: "+91 7058511703",
  email: "meghhaayeewwalkar@gmail.com",
};
