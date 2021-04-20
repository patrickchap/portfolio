import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Grid container id="app__container">
        <Grid
          item
          xs={12}
          sm={3}
          id="app__left"
          style={{
            boxShadow: "5px 5px 15px rgba(0,0,0,0.4)",
            zIndex: 10,
          }}
        >
          <NavBar />
        </Grid>
        <Grid item xs={12} sm={9} id="app__right">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
