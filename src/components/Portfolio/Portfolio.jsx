import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../../data/projects";
import "./Portfolio.css";

const categories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="portfolio">
      <h2>
        My <span>Projects</span>
      </h2>

      <div className="filter">
        {categories.map((category) => {
          const count =
            category === "All"
              ? projects.length
              : projects.filter((project) => project.category === category).length;

          return (
            <button
              key={category}
              className={active === category ? "active" : ""}
              onClick={() => setActive(category)}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>

      <div className="project-grid">
        {filtered.map((project) => (
          <motion.div
            className="project-card"
            key={project.id}
            layout
            whileHover={{ y: -10 }}
          >
            <div className="content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="buttons">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;