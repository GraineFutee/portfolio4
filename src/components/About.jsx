import React from "react";
import { motion } from "framer-motion";

import Header from "./parts/Header";

function About(props) {
  const aboutText = "Hey! I am Pierre ASDRUBAL, WEB Developer, graduate from the University of Orleans in France and self-taught since then. Always glad to learn something new and improve my skills. Don't hesitate to have a look at my previous work or to contact me, I would be happy to get something new started. Hope to hear from you soon 😁".split(
    " "
  );
  return (
    <motion.section
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 75 }}
      className="hero is-fullheight is-dark"
      style={{
        background:
          "linear-gradient(135deg, rgba(239,87,119,1) 0%, rgba(255,94,87,1) 100%)",
      }}
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
              <div className="columns">
                <div className="column">
                  <div className="columns">
                    <div className="column is-2"></div>
                    <div className="column">
                      <i className="fas fa-code" style={{ fontSize: 140 }}></i>
                    </div>
                    <div className="column is-1"></div>
                  </div>
                </div>
                <div className="column is-9">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      delay: 0.5,
                      stiffness: 40,
                    }}
                    className="box content"
                  >
                    <p>
                      {aboutText.map((word, index) => (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: Math.floor(Math.random() * 1500) / 1000 + 1,
                            duration: 1,
                          }}
                          key={index}
                          className={
                            index === 0 ? `is-size-3 has-text-danger` : ""
                          }
                        >
                          {`${word} `}
                        </motion.span>
                      ))}
                    </p>
                  </motion.div>
                </div>
              </div>
              <hr />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 1, stiffness: 40 }}
              >
                <motion.a
                  whileHover={{
                    backgroundColor: "#485460",
                    borderRadius: 50,
                  }}
                  whileTap={{
                    backgroundColor: "#485460",
                    borderRadius: 50,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                  }}
                  className="button is-dark is-fullwidth"
                  href="/files/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get my resume&nbsp;<i className="fas fa-file-download"></i>
                </motion.a>
              </motion.div>
            </div>
            <div className="column is-1"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
