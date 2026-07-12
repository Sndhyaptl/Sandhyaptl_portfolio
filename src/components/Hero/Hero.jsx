import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";

import profile from "../../assets/images/profile.png";
import resume from "../../assets/resume.pdf";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="aurora"></div>

      <div className="hero-container">

        <motion.div
          className="hero-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="hello">👋 Hello, I'm</p>

          <h1>
            Sandhya <span>Patel</span>
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
            ]}
            wrapper="h2"
            speed={40}
            repeat={Infinity}
          />

          <p className="description">
            Passionate .NET Full Stack Developer specializing in
            ASP.NET Core, React, SQL Server and modern web
            technologies. I build secure, scalable and beautiful
            applications.
          </p>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">
              View Projects
            </a>

            <a
              href={resume}
              className="btn-outline"
              download
            >
              Download CV
            </a>
          </div>

          <div className="socials">

            <a href="https://github.com/Sndhyaptl">
              <FaGithub />
            </a>

            <a href="https://linkedin.com">
              <FaLinkedin />
            </a>

            <a href="mailto:you@gmail.com">
              <FaEnvelope />
            </a>

          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={profile} alt="profile" />
        </motion.div>

      </div>

      <a href="#about" className="scroll">
        <FaArrowDown />
      </a>

    </section>
  );
};

export default Hero;