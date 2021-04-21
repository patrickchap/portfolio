import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import "./Projects.css";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "50%",
    },
  })
);

const Projects: React.FC = () => {
  const classes = useStyles();

  return (
    <section className="projects" id="Project">
      <div className="projects__container">
        <Grid container>
          <Grid item sm={12} style={{ marginTop: "8%", marginBottom: "8%" }}>
            <h1 className="h1--label">Projects</h1>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ padding: 0 }}>
          <Grid item xs={12} sm={12} md={12}>
            <div className="img__container" id="img__container">
              <img src="/images/covid-tracker.png" alt="covid-tracker" />
              <div className="containers__btns">
                <Button
                  className="btn"
                  variant="contained"
                  color="primary"
                  style={{
                    backgroundColor: "#E6D017",
                    width: 111,
                    marginRight: 5,
                  }}
                  href="https://github.com/patrickchap/react-covid-tracker"
                >
                  Github
                </Button>

                <Button
                  className="btn"
                  variant="contained"
                  color="primary"
                  style={{
                    backgroundColor: "#E6D017",
                    width: 111,
                    marginRight: 5,
                  }}
                  href="https://demo-react-covid-19-tracker.netlify.app/"
                >
                  Demo
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Projects;
