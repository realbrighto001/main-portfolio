import { Mail } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    else controls.start({ opacity: 0, y: 40 });
  }, [inView, controls]);

  return (
    <motion.div
      className="footer-intro"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
    >
      <h1 className="logo">
        Brighto<span className="dot">.</span>
      </h1>

      <div className="email">
        <div className="emails-e" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Mail size={24} color="black" />
          <span>brightndu101@gmail.com</span>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>@2025 Bright Mark. All rights reserved.</p>

        <div className="nav-acc">
          <p><a href="https://github.com/realbrighto001">Github</a></p>
          <p><a href="#">LinkedIn</a></p>
          <p><a href="#">Twitter</a></p>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
