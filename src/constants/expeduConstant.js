import SARCImg from "../assets/sarc.png";
import DevcomImg from "../assets/devcom.jpg";
import UMICImg from "../assets/umic.png";
import EcellImg from "../assets/ecell.png";
import { li, link } from "framer-motion/client";

export const experienceData = [
  {
    id: 1,
    title: "Software and Web Head",
    company: "IITB Alumni Relations Cell",
    link: "https://acr.iitbombay.org/sarc/",
    location: "Mumbai, India",
    year: "Apr 2024 - Present",
    role1: "• Leading a 4-tier team of 80+ to foster connection between 65,000+ alumni & 15,000+ students with 50+ initiatives",
    role2: "• Managing 15+ CI/CD websites and using Nginx reverse proxy, Gunicorn with Google Analytics configured",
    role3: "• Administering and optimizing PM2 servers VPS instances with 4vCPUs & 16GB/150GB, serving 20,000+ users",
    image: SARCImg,
  },
  {
    id: 2,
    title: "Developer",
    company: "Devcom, IIT Bombay",
    link: "https://devcom.gymkhana.iitb.ac.in/",
    location: "Mumbai, India",
    year: "Jun 2023 - May 2024",
    role1: "• Decreased 95% paperwork by developing Institute Room Portal on ReactjS & Django using GitLab and CI/CD",
    role2: "• Designed Reddit-like portal for freshers and mentors using Vue.Js & Express.JS with 1200+ Users & 2000+ Queries",
    role3: "• Developed Institute Eateries Portal integrating 10+ canteens, 1000+ product Online Ordering & Payment Gateway",
    image: DevcomImg,
  },
  {
    id: 3,
    title: "Motion Planning Subsystem Engineer",
    company: "UMIC, Innovation Cell, IIT Bombay",
    link: "https://umiciitb.github.io/",
    location: "Mumbai, India",
    year: "Jan 2023 - Sep 2023",
    role1: "• Team produced state-of-the-art drone for Aerial Vehicle competitions and achievedWorld Rank 3 in ICUAS Poland",
    role2: "• Implemented using Python Research Papers on optimization of trajectory by Minimum Snap Trajectory, A*, RRT*",
    role3: "• Applied OpenCV to Aruco Marker and Pose estimation for Obstacle Detection of Bot in a Gazebo Maze Simulation",
    image: UMICImg,
  },
  {
    id: 4,
    title: "Events and Public Relation Coordinator | Executive Mentor",
    company: "Entrepreneurship Cell, IIT Bombay",
    link: "https://www.ecell.in/",
    location: "Mumbai, India",
    year: "Jan 2023 - Sep 2023",
    role1: "• Spearheaded \"The Ten Minute Million\" a high-impact fundraising event through collaboration with 20 Venture Capitalists",
    role2: "• Planned and Ideated whole Internship program for Campus Executive for the 4 months about Entrepreneurship",
    role3: "• Created Problem statements & led the execution EnB Buzz, a Business Model and Pitching Competition",
    image: EcellImg,
  },
  
];
