import React from "react";
import { motion } from "framer-motion";

import Header from "./parts/Header";
import SkillCard from "./parts/SkillCard";

function Skills(props) {
  const skills = [
    {
      title: "Front",
      value: 80,
      items: ["React", "Framer Motion", "Bulma (Sass)"],
    },
    { title: "Back", value: 70, items: ["Express", "Joi", "PostgreSQL"] },
    { title: "Project", value: 50, items: ["AWS", "Netlify", "Heroku"] },
  ];
  return (
    <motion.section
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 75 }}
      className="hero is-fullheight is-dark"
      style={{
        background:
          "linear-gradient(135deg, rgba(75,207,250,1) 0%, rgba(87,95,207,1) 100%)",
      }}
    >
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Skills</h1>
          <h2 className="subtitle">Full stack web dev</h2>
          <hr />
          <Header setPage={props.setPage} page="Skills" />
          <div className="columns">
            <div className="column is-1"></div>

            {skills.map((skill, index) => (
              <div className="column" key={skill.title}>
                <SkillCard skill={skill} index={index} />
              </div>
            ))}
            <div className="column is-1"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
