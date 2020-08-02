import React from "react";
import { motion } from "framer-motion";

import Header from "./parts/Header";

function Home(props) {
  return (
    <motion.section
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="hero is-fullheight is-danger is-bold"
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
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      placeholder="Your mail/Number"
                      name="contact"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea is-small"
                      placeholder="Your message ..."
                      name="message"
                    ></textarea>
                  </div>
                </div>
                <button
                  className="button is-dark is-small is-fullwidth"
                  type="submit"
                >
                  Send&nbsp;<i className="fab fa-telegram-plane"></i>
                </button>
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
