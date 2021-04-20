import React from "react";
import "./Skills.css";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "90%", // 16:9
      // padding: "0px",
      // margin: "0px",
    },

    spring: {
      height: 0,
      paddingTop: "70%", // 16:9
      // padding: "0px",
      // margin: "0px",
    },
  })
);

const Skills: React.FC = () => {
  const classes = useStyles();

  return (
    <section className="skills" id="Skills">
      {/* <br /> */}
      <div className="about__container">
        <Grid container>
          <Grid item sm={12} style={{ marginTop: "8%", marginBottom: "8%" }}>
            <h1 className="h1--label">Skills</h1>
          </Grid>

          <Grid container spacing={3} style={{ padding: 0 }}>
            <Grid item xs={12} sm={12} md={3}>
              <Card style={{ padding: "0px", margin: "0px" }}>
                <CardMedia
                  image="/images/react.png"
                  title="React"
                  className={classes.media}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Card style={{ padding: "0px", margin: "0px" }}>
                <CardMedia
                  image="/images/ts.png"
                  title="ts"
                  className={classes.media}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Card style={{ padding: "0px", margin: "0px" }}>
                <CardMedia
                  image="/images/nodejs.png"
                  title="nodejs"
                  className={classes.media}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Card style={{ padding: "0px", margin: "0px" }}>
                <CardMedia
                  image="/images/sql_server.jpeg"
                  title="sql_server"
                  className={classes.media}
                />
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={3}>
              <Card style={{ padding: "0px", margin: "0px" }}>
                <CardMedia
                  image="/images/java.png"
                  title="java"
                  className={classes.media}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Card style={{ padding: "0px", margin: "0px" }}>
                <CardMedia
                  image="/images/spring_boot.png"
                  title="spring__boot"
                  className={classes.spring}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Card style={{ padding: "0px", margin: "0px" }}>
                <CardMedia
                  image="/images/github.png"
                  title="github"
                  className={classes.media}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Card style={{ padding: "0px", margin: "0px" }}>
                <CardMedia
                  image="/images/frontend.jpeg"
                  title="frontend"
                  className={classes.media}
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Skills;
