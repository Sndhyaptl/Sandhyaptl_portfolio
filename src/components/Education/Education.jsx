import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    stream: "Computer Science & Engineering",
    college: "Dr. A.P.J. Abdul Kalam Technical University",
    duration: "2023 - 2026",
    percentage: "First Division",
  },
  {
    degree: "Diploma",
    stream: "Information Technology",
    college: "Board of Technical Education, Uttar Pradesh",
    duration: "2010 - 2022",
    percentage: "First Division",
  },
  {
    degree: "Intermediate (12th)",
    stream: "Science",
    college: "U.P. Board",
    duration: "2017 - 2019",
    percentage: "First Division",
  },
  {
    degree: "High School (10th)",
    stream: "Science",
    college: "U.P. Board",
    duration: "2015 - 2017",
    percentage: "First Division",
  },
];

const Education = () => {
  return (
    <section className="education" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span>Education</span>
      </motion.h2>

      <div className="education-grid">
        {educationData.map((item, index) => (
          <motion.div
            className="education-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
          >
            <div className="education-icon">
              <FaGraduationCap />
            </div>

            <span className="year">{item.duration}</span>

            <h3>{item.degree}</h3>

            <h4>{item.stream}</h4>

            <p>{item.college}</p>

            <div className="grade">{item.percentage}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;