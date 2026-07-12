import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Something went wrong.");
      });
  };

  return (
    <section className="contact" id="contact">

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact <span>Me</span>
      </motion.h2>

      <div className="contact-container">

        {/* Left */}

        <motion.div
          className="contact-info"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >

          <h3>Let's Connect</h3>

          <p>
            Feel free to contact me for freelance work,
            full-time opportunities, or collaborations.
          </p>

          <div className="info">

            <div>
              <FaEnvelope />
              <span>sandhyapassion1207@gmail.com</span>
            </div>

            <div>
              <FaPhoneAlt />
              <span>+91 XXXXXXXXXX</span>
            </div>

            <div>
              <FaMapMarkerAlt />
              <span>Lucknow, Uttar Pradesh</span>
            </div>

          </div>

          <div className="social">

            <a
              href="https://github.com/Sndhyaptl"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            required
          />

          <button type="submit">
            Send Message
          </button>

        </motion.form>

      </div>

    </section>
  );
};

export default Contact;