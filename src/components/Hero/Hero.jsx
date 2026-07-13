import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";

import resume from "../../assets/Sandhya_Devi.pdf";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="hello">Hello, I'm</p>

          <h1>
            Sandhya <span>Devi</span>
          </h1>

          <TypeAnimation
            sequence={[
              ".NET Full Stack Developer",
              2000,
              "ASP.NET Core Developer",
              2000,
              "React Developer",
              2000,
              "C# Developer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="h2"
            speed={45}
            repeat={Infinity}
          />

          <p className="description">
            Building secure, scalable, and high-performance web applications
            using ASP.NET Core, C#, React, SQL Server, and modern web
            technologies. Passionate about clean architecture, efficient
            problem-solving, and delivering exceptional user experiences.
          </p>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">
              View Projects
            </a>

            <a href={resume} className="btn-outline" download>
              Download CV
            </a>
          </div>

          <div className="socials">
            <a
              href="https://github.com/Sndhyaptl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sandhya-devi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:sandhyapassion1207@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;