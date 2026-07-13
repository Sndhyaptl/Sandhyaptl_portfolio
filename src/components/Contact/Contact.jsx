import { useState } from "react";
import { sendEmail } from "../../services/emailService";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await sendEmail(formData);

      alert(response.message || "Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert(error.message || "Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact <span>Me</span>
      </motion.h2>

      <div className="contact-container">

        {/* Left Side */}

        <motion.div
          className="contact-info"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
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
              href="https://linkedin.com/in/sandhya-devi/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>
                {/* Right Side */}

        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </motion.form>

      </div>

    </section>
  );
};

export default Contact;