import DearDiary from "../assets/deardiary_1.jpg";
import NewbeeImg from "../assets/newbee.png";
import YearbookImg from "../assets/yearbook.png";
import project from "../assets/project.png";


const projectsData = [
  {
    id: 1,
    name: "Yearbook",
    description: "Facebook-like full-stack web application with features like posts, comments, likes, profiles, etc. — 50K+ Visitors — 30k+ Posts — 16.4 M+ Hits ",
    techStack: ["JavaScript","React", "Django", "MySQL","ElasticSearch", "MongoDB", "Redis", "Docker", "Jun 2023 - July 2024"], 
    image: YearbookImg,
    github: "https://github.com/DevCom-IITB/UniPortal-Frontend",
    website: "https://yearbook.sarc-iitb.org/",
  },

  {
    id: 2,
    name: "Feature Fusion Attention Network with CycleGAN for Video Dehazing",
    description: "This model presents a novel approach to image dehazing by combining Feature Fusion Attention (FFA) net- works with CycleGAN architecture. Our method leverages both supervised and unsupervised learning techniques to effectively remove haze from images while preserving crucial image details. ",
    techStack: ["Python","FFA", "CycleGAN", "Presentation Paper","Flask", "Jul 2024 - Dec 2024"], 
    image: project,
    github: "https://github.com/akshat1423/VideoDehazingFFACycleGAN",
    website: "https://github.com/akshat1423/VideoDehazingFFACycleGAN/blob/master/Project%20Report.pdf",
  },
 
 
  {
    id: 2,
    name: "Newbee",
    description: "Reddit-like portal for freshers and mentors with 1200+ Users & 2000+ Queries",
    techStack: ["JavaScript","Vue.Js", "Express", "MongoDB", "Redis", "Docker", "Mar 2023 - July 2023"], 
    image: NewbeeImg,
    github: "https://github.com/DevCom-IITB/UniPortal-Frontend",
    website: "https://gymkhana.iitb.ac.in/newbee",
  },
  {
    id: 3,
    name: "Dear Diary",
    description: "A seamless note-making for everyone, anywhere, and on any device",
    techStack: [
      "JavaScript",
      "AngularJS",
      "Django",
      "MongoDB",
      "Dec 2022 - Feb 2023 ",
    ],
    image: DearDiary,
    github: "https://github.com/akshat1423/diary",
    website: "https://homepages.iitb.ac.in/~22b0690/#/login",
  },
];


export default projectsData;