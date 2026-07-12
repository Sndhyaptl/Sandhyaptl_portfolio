import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaMobileAlt,
  FaTools,
} from "react-icons/fa";

import "./Services.css";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    description:
      "Modern responsive user interfaces using React, JavaScript, Tailwind CSS and Bootstrap.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "Scalable REST APIs and enterprise applications using ASP.NET Core, MVC and C#.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    description:
      "SQL Server database design, stored procedures, optimization and Entity Framework.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Deployment",
    description:
      "Deploy applications on IIS, Azure and Cloudflare with CI/CD practices.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "Pixel-perfect responsive websites that work seamlessly across all devices.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance & Support",
    description:
      "Application enhancements, bug fixing, performance tuning and long-term support.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span>Services</span>
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;