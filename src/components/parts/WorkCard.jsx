import React from "react";
import { motion } from "framer-motion";

function WorkCard({ work, index, setModal }) {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 75, delay: 0.5 + index * 0.25 }}
    >
      <motion.div
        initial={{ scale: 1, zIndex: 1 }}
        whileHover={{ scale: 1.2, zIndex: 3 }}
        whileTap={{ scale: 1.2, zIndex: 3 }}
        transition={{ type: "spring", stiffness: 75 }}
        className="box "
        style={{
          backgroundImage: `url('${work.image}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repat",
          backgroundSize: "cover",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          whileTap={{ opacity: 1 }}
          style={{
            backgroundColor: "rgba(30, 39, 46,0.7)",
            boxShadow: "0px 0px 10px #57606f",
            padding: "10px",
          }}
          className="content has-text-white is-small"
        >
          <p className="title is-6">{work.title}</p>
          <p className="subtitle is-7">{work.desc}</p>
          <ul>
            {work.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="buttons is-centered">
            {work.preview.online ? (
              <a
                className="button is-info is-small"
                href={work.preview.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website&nbsp;<i className="fas fa-globe"></i>
              </a>
            ) : (
              <button
                className="button is-success is-small"
                onClick={() =>
                  setModal({ active: true, pictures: work.preview.pictures })
                }
              >
                Preview&nbsp;<i className="fas fa-images"></i>
              </button>
            )}

            <a
              className="button is-dark is-small"
              href={work.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub&nbsp;<i className="fab fa-github-square"></i>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default WorkCard;
