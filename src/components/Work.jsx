import React, { useState } from "react";
import { motion } from "framer-motion";

import Header from "./parts/Header";
import WorkCard from "./parts/WorkCard";

function Work(props) {
  const [modal, setModal] = useState({ active: false, pictures: [] });
  const works = [
    {
      image: "/img/CocktailsLife.png",
      title: "CocktailsLife",
      desc: "A simple application build with :",
      items: [
        "server : Node, express",
        "Database : mongoDB",
        "Css Framework : Bulma",
      ],
      preview: {
        online: false,
        pictures: [
          "/img/CocktailsLife/Main.png",
          "/img/CocktailsLife/Negroni.png",
          "/img/CocktailsLife/Recipes.png",
        ],
      },
      github: "https://github.com/GraineFutee/CL-website",
    },
    {
      image: "/img/RecipeZ.png",
      title: "RecipeZ",
      desc: "A complete application build with :",
      items: [
        "Front : React",
        "Back : Node, express",
        "Database : PostgreSQL",
        "Css Framework : Bulma, SASS",
      ],
      preview: {
        online: false,
        pictures: [
          "/img/RecipeZ/Main.png",
          "/img/RecipeZ/MyRecipes.png",
          "/img/RecipeZ/Recipe1.png",
          "/img/RecipeZ/Recipe2.png",
          "/img/RecipeZ/SignIn.png",
        ],
      },
      github: "https://github.com/GraineFutee/Recipez",
    },
    {
      image: "/img/ArtOfLevani.png",
      title: "ArtOfLevani3",
      desc:
        "A professional website for the photographer Levani Levanidze build with :",
      items: ["Front : NextJS", "Back : NextJS", "Css Framework : Bulma, SASS"],
      preview: { online: true, path: "https://sad-leakey-a5543e.netlify.app/" },
      github: "https://github.com/GraineFutee/artoflevani",
    },
  ];
  return (
    <>
      <motion.section
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="hero is-fullheight is-warning is-bold"
      >
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Work</h1>
            <h2 className="subtitle">Some Apps that I created</h2>
            <hr />
            <Header setPage={props.setPage} page="Work" />
            <div className="columns">
              <div className="column is-1"></div>
              {works.map((work, index) => (
                <div className="column" key={work.title}>
                  <WorkCard work={work} index={index} setModal={setModal} />
                </div>
              ))}

              <div className="column is-1"></div>
            </div>
          </div>
        </div>
      </motion.section>
      <div className={`modal ${modal.active ? "is-active" : ""}`}>
        <div
          className="modal-background"
          onClick={() => setModal({ active: false, pictures: [] })}
        ></div>
        <div className="modal-content">
          <div className="box">
            {modal.pictures.map((picture) => (
              <div key={picture}>
                <figure className="image">
                  <img src={picture} alt="" />
                </figure>
                <hr />
              </div>
            ))}
          </div>
        </div>
        <button
          className="modal-close is-large"
          onClick={() => setModal({ active: false, pictures: [] })}
          aria-label="close"
        ></button>
      </div>
    </>
  );
}

export default Work;
