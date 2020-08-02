import React, { useState } from "react";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  "";
  const [page, setPage] = useState("Home");
  return (
    <>
      {page === "Home" && <Home setPage={setPage} />}
      {page === "About" && <About setPage={setPage} />}
      {page === "Skills" && <Skills setPage={setPage} />}
      {page === "Work" && <Work setPage={setPage} />}
    </>
  );
}

export default App;
