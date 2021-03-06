import React from "react";
import { motion } from "framer-motion";

function Header(props) {
  return (
    <div className="buttons">
      <motion.button
        initial={{}}
        whileHover={{
          backgroundColor: "rgba(30, 39, 46,0.7)",
        }}
        className="is-small button is-success is-rounded"
        onClick={() => props.setPage("Home")}
        disabled={props.page === "Home"}
      >
        <i className="fas fa-home"></i>&nbsp;Home
      </motion.button>

      <motion.button
        initial={{}}
        whileHover={{
          backgroundColor: "rgba(30, 39, 46,0.7)",
        }}
        className="is-small button is-danger is-rounded"
        onClick={() => props.setPage("About")}
        disabled={props.page === "About"}
      >
        <i className="fas fa-address-card"></i>&nbsp;About me
      </motion.button>

      <motion.button
        initial={{}}
        whileHover={{
          backgroundColor: "rgba(30, 39, 46,0.7)",
        }}
        className="is-small button is-info is-rounded"
        onClick={() => props.setPage("Skills")}
        disabled={props.page === "Skills"}
      >
        <i className="fas fa-dumbbell"></i>&nbsp;Skills
      </motion.button>

      <motion.button
        initial={{}}
        whileHover={{
          backgroundColor: "rgba(30, 39, 46,0.7)",
        }}
        className="is-small button is-warning is-rounded"
        onClick={() => props.setPage("Work")}
        disabled={props.page === "Work"}
      >
        <i className="fas fa-briefcase"></i>&nbsp;Work
      </motion.button>
    </div>
  );
}

export default Header;
