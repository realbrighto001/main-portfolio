import React, { useEffect } from "react";
import "../App.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const services = [
    {
      title: "Web design",
      description: "Web development is the process of building, programming, and maintaining websites.",
      icon: "💻",
    },
    {
      title: "Mobile app",
      description: "Mobile app development involves creating software for mobile devices. !Not Yet Active, Still learning",
      icon: "📱",
    },
    {
      title: "UI/UX design",
      description: "UI/UX design focuses on creating seamless user experiences and interfaces.",
      icon: "🎨",
    },
    {
      title: "Call Of Duty Mobile",
      description: "Challenge to a fight, 1v1 or team, UserName: Brightki",
      icon: <img src="src/assets/icons8-call-of-duty-mobile-50.png" alt="CODM" />,
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="services" id="service" ref={ref}>
      <motion.p
        className="section-intro"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
      >
        What I offer
      </motion.p>

      <motion.h2
        className="section-title"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        transition={{ delay: 0.2 }}
      >
        My Services
      </motion.h2>

      <motion.p
        className="section-desc"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        transition={{ delay: 0.4 }}
      >
        I am a frontend developer from Port Harcourt, Nigeria with 2 years of experience.
      </motion.p>

      <motion.div
        className="services-grid"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        {services.map((service, index) => (
          <motion.div key={index} className="service-card" variants={card}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="read-more">Read more →</a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
