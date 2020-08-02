import React from "react";
import { motion } from "framer-motion";

import Header from "./parts/Header";

function About(props) {
  const aboutText = "Hey! I am Pierre ASDRUBAL, WEB Developer, graduate from the University of Orleans in France and self-taught since then. Always glad to learn something new and improve my skills. Don't hesitate to have a look at my previous work or to contact me, I would be happy to get something new started. Hope to hear from you soon 😁".split(
    ""
  );
  return (
    <motion.section
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="hero is-fullheight is-success is-bold"
    >
      <div className="hero-body">
        <div className="container">
          <h1 className="title">About me</h1>
          <h2 className="subtitle">Fell free to contact me !</h2>
          <hr />
          <Header setPage={props.setPage} page="About" />
          <div className="columns">
            <div className="column is-1"></div>
            <div className="column">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.5,
                  stiffness: 10,
                }}
                className="box content"
              >
                <p>
                  {aboutText.map((letter, index) => (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", delay: 0.5 + index * 0.03 }}
                      key={index}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </p>
              </motion.div>
              <motion.a
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 1, stiffness: 10 }}
                className="button is-dark is-fullwidth"
                href="/files/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get my resume&nbsp;<i className="fas fa-file-download"></i>
              </motion.a>
            </div>
            <div className="column is-1"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
