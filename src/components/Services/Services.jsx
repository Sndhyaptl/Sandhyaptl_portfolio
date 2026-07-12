import { motion } from "framer-motion";


import "./Services.css";

import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaMobileAlt,
  FaTools,
  FaCodeBranch,
  FaShieldAlt,
  FaCloudUploadAlt,
} from "react-icons/fa";

const services = [
  // Existing Services
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    description:
      "Modern responsive user interfaces using React, JavaScript, Tailwind CSS, Bootstrap, HTML5, and CSS3.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "Scalable REST APIs and enterprise applications using ASP.NET Core, ASP.NET MVC, C#, and Entity Framework.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    description:
      "SQL Server database design, stored procedures, views, query optimization, and Entity Framework.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Deployment",
    description:
      "Deploy applications on IIS, Azure, Cloudflare, and manage hosting with CI/CD practices.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "Create pixel-perfect, mobile-friendly websites that work seamlessly across all screen sizes.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance & Support",
    description:
      "Application enhancements, bug fixing, performance tuning, upgrades, and long-term technical support.",
  },

  // Worked On
  {
    icon: <FaLaptopCode />,
    title: "Custom Web Applications",
    description:
      "Develop scalable and secure business applications using ASP.NET Core, C#, SQL Server, React, and modern web technologies.",
  },
  {
    icon: <FaCodeBranch />,
    title: "Web API Development",
    description:
      "Build RESTful APIs and integrate third-party services for seamless communication between enterprise systems.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Solutions",
    description:
      "Design and optimize SQL Server databases, stored procedures, indexing, and queries for maximum performance.",
  },
  {
    icon: <FaTools />,
    title: "Application Maintenance",
    description:
      "Enhance existing applications, resolve issues, optimize performance, and ensure long-term reliability.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Authentication & Security",
    description:
      "Implement authentication, authorization, JWT, role-based access control, and enterprise-level security.",
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Deployment & Hosting",
    description:
      "Deploy and maintain applications on IIS and cloud platforms with reliable hosting and release management.",
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