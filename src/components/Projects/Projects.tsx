import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./Projects.css";

const Projects: React.FC = () => {
  return (
    <section className="projects" id="Project">
      <div className="projects__container">
        <Grid container>
          <Grid item sm={12} style={{ marginTop: "8%", marginBottom: "8%" }}>
            <h1 className="h1--label">Projects</h1>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Projects;
