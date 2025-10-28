import React, { useEffect } from "react";
import "../App.css";
import profileImg from "../assets/1000023790.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [inView, controls]);

  return (
    <section className="about" id="about" ref={ref}>
      <motion.div
        className="title"
        initial={{ opacity: 0, y: -30 }}
        animate={controls}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title">About Me</h2>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={profileImg} alt="Profile" className="profile-img" />
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="about-text">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>

          <div className="info-cards">
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <span className="card-icon">💻</span>
              <h3>Languages</h3>
              <p>HTML, CSS, JavaScript, React.js, Next.js</p>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <span className="card-icon">🎓</span>
              <h3>Education</h3>
              <p>B.Tech in Computer Science</p>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.7, delay: 1.0 }}
            >
              <span className="card-icon">📂</span>
              <h3>Projects</h3>
              <p>Built more than 5 projects</p>
            </motion.div>
          </div>

          <motion.div
            className="tools"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h4>Tools I use</h4>
            <div className="tool-icons">
              <div className="tool-in">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
              </div>
              <div className="tool-in">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
              </div>
              <div className="tool-in">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              </div>
              <div className="tool-in">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              </div>
              <div className="tool-in">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
