import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import "../App.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const form = useRef();

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    else controls.start({ opacity: 0, y: 50 });
  }, [inView, controls]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3fo89f1",
        "template_100ujef",
        form.current,
        "TnLR20-ylQ8BO0OjW"
      )
      .then(
        (result) => {
          console.log("Email sent ✅", result.text);
          alert("✅ Message sent successfully!");
        },
        (error) => {
          console.error("Email failed ❌", error.text);
          alert("❌ Failed to send message. Please try again later.");
        }
      );

    fetch("https://script.google.com/macros/s/AKfycbyu79it7aaFRkElZCPVi6iJ50b7dPkxa0d52oThvajtM5HpW8Y-bsNq0-oHCae9wr7U/exec", {
      method: "POST",
      body: JSON.stringify({
        name: form.current.from_name.value,
        email: form.current.from_email.value,
        message: form.current.message.value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) console.log("Saved to Google Sheet ✅");
        else console.error("Sheet save failed ❌");
      })
      .catch((err) => console.error("Error saving to sheet:", err));

    form.current.reset();
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <p className="section-intro">Connect with me</p>
      <h2 className="section-title">Get in touch</h2>
      <p className="section-desc">
        Feel free to reach out for collaborations, project inquiries, or just to say hello.
        I’m always open to discussing new opportunities and creative ideas.
      </p>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="input-row">
          <input type="text" name="from_name" placeholder="Enter your name" required />
          <input type="email" name="from_email" placeholder="Enter your email" required />
        </div>

        <textarea name="message" placeholder="Enter your message" required></textarea>

        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Submit now <span className="arrow">→</span>
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
