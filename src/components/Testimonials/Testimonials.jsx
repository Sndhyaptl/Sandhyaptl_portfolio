import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import testimonials from "../../data/testimonials";

import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Client <span>Testimonials</span>
      </motion.h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item) => {
          const initials = item.name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase();

          return (
            <SwiperSlide key={item.id}>
              <motion.div
                className="testimonial-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="testimonial-avatar">
                  {initials}
                </div>

                <h3>{item.name}</h3>

                <h4>{item.designation}</h4>

                <div className="stars">
                  {[...Array(item.rating)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>

                <p>{item.review}</p>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;