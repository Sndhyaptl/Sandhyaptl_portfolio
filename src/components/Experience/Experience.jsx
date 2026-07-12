import { motion } from "framer-motion";
import "./Experience.css";

const experienceData = [
  {
    company: "Edoro Technologies LLP",
    role: ".NET Full Stack Developer",
    duration: "July 2025 - Present",
    technologies: [
      "ASP.NET Core",
      "React",
      "SQL Server",
      "Web API",
      "Entity Framework"
    ],
    responsibilities: [
      "Developing enterprise web applications using ASP.NET Core and React.",
      "Building secure REST APIs.",
      "Optimizing SQL Server queries and stored procedures.",
      "Collaborating with cross-functional teams.",
    ],
  },
  {
    company: "Winaxis Consultants Pvt. Ltd.",
    role: ".NET Developer",
    duration: "July 2023 - May 2025",
    technologies: [
      "ASP.NET MVC",
      "C#",
      "JavaScript",
      "Bootstrap",
      "SQL Server"
    ],
    responsibilities: [
      "Developed ERP modules for business applications.",
      "Designed responsive user interfaces.",
      "Implemented authentication and authorization.",
      "Fixed production bugs and improved performance.",
    ],
  },
  {
    company: "Winaxis Consultants Pvt. Ltd.",
    role: "Associate Web Developer",
    duration: "Jan 2023 - Jun 2023",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "SQL"
    ],
    responsibilities: [
      "Created responsive web pages.",
      "Worked on database integration.",
      "Assisted senior developers in feature implementation.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Work <span>Experience</span>
      </motion.h2>

      <div className="timeline">
        {experienceData.map((job, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <span className="duration">{job.duration}</span>

              <h3>{job.role}</h3>

              <h4>{job.company}</h4>

              <div className="tech-list">
                {job.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <ul>
                {job.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;