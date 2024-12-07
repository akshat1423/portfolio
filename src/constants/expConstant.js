import CBREImg from "../assets/CBRE.png";
import EvolvingPlanetImg from "../assets/evolvingplanet.png";
import SaathHealthImg from "../assets/saathealth.jpg";
import MoveupImg from "../assets/moveup.svg";
import CodesisImg from "../assets/codesis.svg";
import CoptersImg from "../assets/Copters.png";
import SARCImg from "../assets/sarc.png";
import MapitAi from "../assets/mapitai.jpg";
import { li, link } from "framer-motion/client";

export const experienceData = [
  {
    id: 1,
    title: "Data Science and Machine Learning Intern",
    company: "CBRE Group Inc.",
    link: "https://www.cbre.com/",
    location: "Texas-USA",
    year: "Jun 2024 - Sep 2024",
    role1: "• Designed & developed an asset registry solutions via a 9 step pipeline using Python, pandas, postgres, mongoDB",
    role2: "• Used ELT Technique to merge the data from various sources and cleanse data of 900,000+ records of 10+ years",
    role3: "• Evaluated ML & GenAI models, leveraging Gemini API for automated data enrichment and prompt library creation",
    image: CBREImg,
  },
  {
    id: 2,
    title: "Platform Architect and Software Developer",
    company: "Evolving Planet",
    link: "https://www.evolvingplanet.co/",
    location: "Remote",
    year: "Jul 2023 - Mar 2024",
    role1: "• Developed Fine-Tuned Health LLM using Meta API & RAG with dynamic dashboard & intelligent scheduling features",
    role2: "• Achieved 12 sec response time for AI Voice Response capability using TTS, Wishper using a 7 step architecture",
    role3: "• Ensured 99.8% server uptime and hosted the backend server using Django, Python, Celery and Service Workers",
    image: EvolvingPlanetImg,
  },
  {
    id: 3,
    title: "Machine Learning Intern",
    company: "Saathealth",
    link: "https://www.saathealth.com/",
    location: "Remote",
    year: "Dec 2023 - Mar 2024",
    role1: "• Utilized natural language processing techniques to analyze feedback & enhance product listings based on sentiment",
    role2: "• Engineered pipeline using Python to convert data of Social Media Platform engagement into Analytical Dashboard",
    role3: "• Created automated Whatsapp workflows to target new customers and increase engagement of existing audience",
    image: SaathHealthImg,
  },
  {
    id: 4,
    title: "Full Stack Web Developer Intern",
    company: "Moveup.ai",
    link: "https://www.moveup.ai/",
    location: "California, USA",
    year: "Mar 2024 - Jun 2024",
    role1: "• Upgraded performance by 45% by refactoring codebase from ReactJS to Next.JS using ShadCN & Tailwind CSS",
    role2: "• Re-engineered Backend using FastAPI and the authentication using GoogleOAuth and Amazon Cognito on AWS",
    role3: "• Enhanced UX and UI using Graph-based approach of nodes and edges to showcase journeys using React Flow",
    image: MoveupImg,
  },
  {
    id: 5,
    title: "Web Developer Intern",
    company: "Codesis",
    link: "https://www.codesis.tech/",
    location: "Remote",
    year: "Jun 2023 - Nov 2023",
    role1: "• Boosted user engagement by 27% by completely managing e-commerce website’s front-end using AngularJS",
    role2: "• Achieved 40% improvement in product search time by optimizing code & integrating a product categorization API",
    role3: "• Enhanced user experience by 59% by integrating Google Maps API and Payment Gateway using Razorpay",
    image: CodesisImg,
  },
  {
    id: 6,
    title: "Software Developer Intern",
    company: "Copters",
    link: "https://play.google.com/store/apps/details?id=app.copters.in",
    location: "Remote",
    year: "Sep 2023 - Nov 2023",
    role1: "• Developed predictive analytics module to forecast blood test demand improving operational efficiency & resource use",
    role2: "• Increased user engagement by 50% by an AI-driven feature that curates optimal test schedules based on user health data",
    role3: "• Enhanced app’s response time by 37% by refactoring and optimizing functions and API Calls & usage of libraries for UI",
    image: CoptersImg,
  },
  {
    id: 7,
    title: "Full Stack Web Developer Intern | AI Developer Intern",
    company: "Mapit.ai",
    link: "https://mapit.ai/",
    location: "Remote",
    year: "Sep 2023 - Nov 2023",
    role1: "• Ideated, designed and implemented Generative AI based bots samples and workflow for a foreign Client",
    role2: "• Used technologies ReactJS, MaterialUI, Django, EmailJS, Twilio, Whatsapp API, Python, openAI for the MVP",
    role3: "• Increased the market visibility by 200% by developing Marketing Website with the functionality of Blog Posts",
    image: MapitAi,
  },
  
  {
    id: 7,
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
];
