import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 30 });
    }
  }, [inView, controls]);

  return (
    <section className="hero" id="hero" ref={ref}>
      <motion.img
        src="src/assets/1000023790.jpg"
        alt="Profile"
        className="hero-image"
        initial={{ opacity: 0, y: -30 }}
        animate={controls}
        transition={{ duration: 0.6 }}
      />

      <motion.p
        className="intro"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi! I'm Ndubuisi Bright 👋
      </motion.p>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Frontend web developer based in Port Harcourt.
      </motion.h1>

      <motion.p
        className="hero-subtext"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        I am a frontend developer from Port Harcourt, Nigeria with 2 years of experience.
        I also compete as a CODM player.
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <a href="#contact" className="contact-main">Contact Me →</a>
        <a href="src/assets/Ndubuisi_Bright_Resume.pdf" download className="resume-btn">My Resume ⬇</a>
      </motion.div>
    </section>
  );
}
