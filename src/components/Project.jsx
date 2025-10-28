import React, { useEffect, useRef } from "react";
import "../App.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const projects = [
    { title: "Frontend project", category: "Web Design", image: project1 },
    { title: "Geo based app", category: "Mobile App", image: project2 },
    { title: "Photography site", category: "Web Design", image: project3 },
    { title: "UI/UX designing", category: "UI/UX Design", image: project4 },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    else controls.start({ opacity: 0, y: 50 });
  }, [inView, controls]);

  return (
    <motion.section
      id="projects"
      className="projects"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <p className="section-intro">My portfolio</p>
      <h2 className="section-title">My latest work</h2>
      <p className="section-desc">
        Welcome to my web development portfolio! Explore a collection of projects
        showcasing my expertise in frontend development.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
              <div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
              <button className="project-btn">→</button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="show-more"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Show more →
      </motion.button>
    </motion.section>
  );
};

export default Projects;
