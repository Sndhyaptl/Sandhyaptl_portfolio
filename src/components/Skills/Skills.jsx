import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaMicrosoft,
  FaDatabase,
  FaTools,
  FaCloud,
  FaServer,
  FaLock,
} from "react-icons/fa";

import "./Skills.css";

const expertise = [
  {
    icon: <FaMicrosoft />,
    title: "ASP.NET",
    subtitle: "Core & MVC",
  },
  {
    icon: <FaServer />,
    title: "REST API",
    subtitle: "Development",
  },
  {
    icon: <FaDatabase />,
    title: "SQL",
    subtitle: "Database Design",
  },
  {
    icon: <FaCloud />,
    title: "Cloud",
    subtitle: "Deployment & Hosting",
  },
];
const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5 / CSS3", icon: <FaHtml5 />, level: 90 },
      { name: "JavaScript / jQuery", icon: <FaJs />, level: 88 },
      { name: "Bootstrap / Tailwind CSS", icon: <FaBootstrap />, level: 90 },
      { name: "Responsive Design / AJAX", icon: <FaCode />, level: 90 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "ASP.NET Core", icon: <FaMicrosoft />, level: 95 },
      { name: "C#", icon: <FaCode />, level: 92 },
      { name: "ASP.NET MVC", icon: <FaServer />, level: 90 },
      {
        name: "ASP.NET Web API / Entity Framework",
        icon: <FaServer />,
        level: 88,
      },
    ],
  },
  {
    title: "Database Management",
    skills: [
      { name: "SQL Server", icon: <FaDatabase />, level: 92 },
      {
        name: "Stored Procedures & Views",
        icon: <FaDatabase />,
        level: 90,
      },
      { name: "Query Optimization", icon: <FaDatabase />, level: 85 },
    ],
  },
  {
    title: "API & Integration",
    skills: [
      { name: "RESTful APIs", icon: <FaServer />, level: 90 },
      { name: "JSON / XML", icon: <FaCode />, level: 92 },
      {
        name: "Third-Party API Integration",
        icon: <FaTools />,
        level: 88,
      },
      {
        name: "Authentication & Authorization",
        icon: <FaLock />,
        level: 85,
      },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Visual Studio", icon: <FaMicrosoft />, level: 95 },
      { name: "Git", icon: <FaGitAlt />, level: 90 },
      { name: "GitHub", icon: <FaGithub />, level: 90 },
      { name: "IIS", icon: <FaServer />, level: 85 },
      { name: "Postman & Swagger", icon: <FaTools />, level: 90 },
    ],
  },
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

      {skillGroups.map((group, groupIndex) => (
        <div className="skill-group" key={group.title}>
          <motion.h3
            className="group-title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {group.title}
          </motion.h3>

          <div className="skills-grid">
            {group.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: (groupIndex * 0.1) + (index * 0.05),
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
        </div>
      ))}
      <motion.div
  className="expertise-section"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h3 className="expertise-title">Core Expertise</h3>

  <div className="expertise-grid">
    {expertise.map((item, index) => (
      <motion.div
        key={item.title}
        className="expertise-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.15 }}
      >
        <div className="expertise-icon">{item.icon}</div>

        <h4>{item.title}</h4>

        <p>{item.subtitle}</p>
      </motion.div>
    ))}
  </div>
</motion.div>
    </section>
  );
};

export default Skills;