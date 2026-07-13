import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <h2>Sandhya Devi</h2>

      <p>
        .NET Full Stack Developer | React Developer
      </p>

      <div className="footer-social">

        <a
          href="https://github.com/Sndhyaptl"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:sandhyapassion1207@gmail.com"
        >
          <FaEnvelope />
        </a>

      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Sandhya Devi

      
      </p>

    </footer>
  );
};

export default Footer;