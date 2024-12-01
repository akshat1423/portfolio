import React, { useEffect } from "react";
// import GithubIconBlack from "./github_black.svg";
// import LinkedinIconBlack from "./linkedin_black.svg";
import HelloImg from "./hello.png";
import GithubIconBlack from "./github.svg";
import LinkedinIconBlack from "./linkedin.svg";
import "./Home.css";
import gsap from "gsap";

const Home = () => {

  // const animateHeroSection = () => {
  //   const timeline = gsap.timeline();
  //   timeline
  //     .from(".hero__sub img", { opacity: 0, x: -30, duration: 0.6 })
  //     .from(".hero__sub h3", { opacity: 0, x: -30, duration: 0.6 }, "-=0.3")
  //     .from(".hero__title h1", { opacity: 0, y: -30, duration: 0.6 }, "-=0.3")
  //     .from(
  //       ".hero__description p",
  //       { opacity: 0, y: 30, duration: 0.6 },
  //       "-=0.3"
  //     )
  //     .from(".hero__cta a", { opacity: 0, y: 30, duration: 0.6 }, "-=0.3")
  //     .from(".socials__link a", { opacity: 0, y: 30, duration: 0.6 }, "-=0.3");
  // };

  // useEffect(() => {
  //   animateHeroSection();
  //   gsap.to(".hero__container", {
  //     scrollTrigger: {
  //       trigger: ".hero__container",
  //       start: "bottom bottom", // Start fading when the bottom of the container hits the center of the viewport
  //       end: "bottom top", // End fading when the bottom of the container moves out of the viewport
  //       scrub: true, // Smoothly scrub through fading as you scroll
  //     },
  //     opacity: 0,
  //     duration: 1,
  //   });
  // }, []);

  return (
    <div className="hero">
      {/* <div className="hero__container">
        hello
        </div> */}
      
      <div className="hero__container">
        <div className="hero__sub">
          <img src={HelloImg} alt="Hello" />
          <h3>
            &nbsp; I'm <span>Akshat Jain</span>.
          </h3>
        </div>
        <div className="hero__title">
          <h1>Software Developer</h1>
        </div>
        <div className="hero__description">
          <p>
            Experienced in Full Stack Development and Machine Learning/GenAI Models Development.
          </p> 
        </div>
        {/* <div className="hero__cta">
          <p
            to="contact"
            spy={true}
            smooth={true}
            duration={100}
            type="button"
          >
            Contact Me
          </p>
        </div> */}
      </div>
      <div className="hero__social">
        <div className="socials__link">
          <a
            href="https://www.linkedin.com/in/akshat-jain-iitbombay/"
            aria-label="linkedin profile"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <img
              src={LinkedinIconBlack}
              alt="Linkedin Icon"
            />
          </a>
          <a
            href="https://github.com/akshat1423"
            aria-label="github profile"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <img
              src={GithubIconBlack }
              alt="Github Icon"
            />
          </a>
        </div>
      </div>
    </div>
    // <></>
  );
};

export default Home;