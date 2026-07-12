import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaProjectDiagram,
  FaAward,
} from "react-icons/fa";

import profile from "../../assets/images/profile.png";
import "./About.css";

const stats = [
  {
    icon: <FaLaptopCode />,
    number: "3+",
    title: "Years Experience",
  },
  {
    icon: <FaProjectDiagram />,
    number: "20+",
    title: "Projects Completed",
  },
  {
    icon: <FaCode />,
    number: "15+",
    title: "Technologies",
  },
  {
    icon: <FaAward />,
    number: "100%",
    title: "Commitment",
  },
];

const About = () => {
  return (
    <section id="about" className="about">

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
      >
        About <span>Me</span>
      </motion.h2>

      <div className="about-container">

        <motion.div
          className="about-image"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
        >
          <img src={profile} alt="Sandhya Patel" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
        >
          <h3>.NET Full Stack Developer</h3>

          <p>
            I am a passionate .NET Developer specializing in building secure, scalable, and high-performance web applications. With expertise in ASP.NET Core, ASP.NET MVC, C#, SQL Server, Web APIs, JavaScript, jQuery, and Bootstrap, I develop efficient solutions that address real-world business challenges. I enjoy transforming complex requirements into intuitive digital experiences while maintaining clean code, optimized performance, and modern development standards.
          </p>

          <p>
            My journey in software development began with a passion for technology and problem-solving. Today, I leverage modern .NET technologies to design and develop secure, scalable, and high-performance web applications. I enjoy transforming complex business requirements into efficient digital solutions while continuously exploring new tools, frameworks, and best practices to deliver exceptional user experiences.
          </p>

          <div className="info-grid">

            <div>
              <strong>Name</strong>
              <span>Sandhya Patel</span>
            </div>

            <div>
              <strong>Email</strong>
              <span>sandhyapassion1207@gmail.com</span>
            </div>

            <div>
              <strong>Location</strong>
              <span>Lucknow, India</span>
            </div>

            <div>
              <strong>Specialization</strong>
              <span>.NET Full Stack</span>
            </div>

          </div>

        </motion.div>

      </div>

      <div className="stats">

        {stats.map((item, index) => (

          <motion.div
            className="card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * .2,
              duration: .6,
            }}
          >
            <div className="icon">
              {item.icon}
            </div>

            <h3>{item.number}</h3>

            <p>{item.title}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default About;