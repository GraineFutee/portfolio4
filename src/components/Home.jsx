import React from "react";
import { motion } from "framer-motion";

import Header from "./parts/Header";

function Home(props) {
  return (
    <motion.section
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 75 }}
      className="hero is-fullheight is-dark"
      style={{
        background:
          "linear-gradient(135deg, rgba(11,232,129,1) 0%, rgba(52,231,228,1) 100%)",
      }}
    >
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-1"></div>
            <div className="column">
              <h1 className="title">Pierre ASDRUBAL</h1>
              <h2 className="subtitle">Welcome on my portfolio</h2>
              <hr />
              <Header setPage={props.setPage} page="Home" />
            </div>
            <div className="column is-1"></div>
            <div className="column">
              <form name="messages" method="POST">
                <input type="hidden" name="form-name" value="messages" />
                <motion.div
                  className="field"
                  initial={{ opacity: 0, rotateX: 90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ type: "spring", delay: 0.5, stiffness: 75 }}
                >
                  <div className="control">
                    <motion.input
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1.1 }}
                      className="input is-small"
                      type="text"
                      placeholder="Your mail/Number"
                      name="contact"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="field"
                  initial={{ opacity: 0, rotateX: 90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ type: "spring", delay: 0.75, stiffness: 75 }}
                >
                  <div className="control">
                    <motion.textarea
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 1.1 }}
                      className="textarea is-small"
                      placeholder="Your message ..."
                      name="message"
                    ></motion.textarea>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, rotateX: 90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ type: "spring", delay: 1, stiffness: 75 }}
                >
                  <motion.button
                    whileHover={{
                      backgroundColor: "#485460",
                      borderRadius: 50,
                    }}
                    whileTap={{ backgroundColor: "#485460", borderRadius: 50 }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                    }}
                    className="button is-dark is-small is-fullwidth"
                    type="submit"
                  >
                    Send&nbsp;<i className="fab fa-telegram-plane"></i>
                  </motion.button>
                </motion.div>
              </form>
            </div>
            <div className="column is-1"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
