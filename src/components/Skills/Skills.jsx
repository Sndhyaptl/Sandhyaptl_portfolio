import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaMicrosoft,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

import "./Skills.css";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
  { name: "JavaScript", icon: <FaJs />, level: 90 },
  { name: "React", icon: <FaReact />, level: 85 },
  { name: "Bootstrap", icon: <FaBootstrap />, level: 90 },
  { name: "Tailwind CSS", icon: <FaCode />, level: 85 },
  { name: "C#", icon: <FaCode />, level: 90 },
  { name: ".NET Core", icon: <FaMicrosoft />, level: 90 },
  { name: "SQL Server", icon: <FaDatabase />, level: 90 },
  { name: "Git", icon: <FaGitAlt />, level: 85 },
  { name: "GitHub", icon: <FaGithub />, level: 90 },
  { name: "Visual Studio", icon: <FaMicrosoft />, level: 95 },
  { name: "Postman", icon: <FaTools />, level: 90 },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My <span>Skills</span>
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
          >
            <div className="skill-header">
              <span className="skill-icon">{skill.icon}</span>

              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
            </div>

            <div className="progress">
              <motion.div
                className="progress-bar"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;