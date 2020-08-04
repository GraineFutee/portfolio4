import React from "react";
import { motion } from "framer-motion";

function SkilCard({ skill, index }) {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 75,
        delay: 0.5 + index * 0.25,
      }}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 20 }}
        transition={{
          type: "spring",
          stiffness: 5,
          damping: 0,
          delay: 2 + index * 0.5,
        }}
        className="box content"
      >
        <p className="title is-3 has-text-dark">
          {skill.title === "Front" ? (
            <i className="fas fa-window-restore"></i>
          ) : skill.title === "Back" ? (
            <i className="fas fa-server"></i>
          ) : (
            <i className="fas fa-tasks"></i>
          )}
          {skill.title}
        </p>
        <motion.progress
          initial={{ width: 0 }}
          animate={{ width: "" }}
          transition={{
            type: "spring",
            stiffness: 75,
            delay: 1 + index * 0.25,
          }}
          className="progress is-primary"
          value={skill.value}
          max="100"
        />
        <hr />
        <ul>
          {skill.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default SkilCard;
