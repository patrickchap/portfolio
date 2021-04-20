import React from "react";
import "./About.css";
import Grid from "@material-ui/core/Grid";
import profilePicture from "../../images/profilePicture.jpg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";
import resume from "../../documents/Resume.pdf";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { Divider } from "@material-ui/core";

const About = () => {
  return (
    <section className="about" id="About">
      {/* <br /> */}
      <div className="about__container">
        <Grid container>
          <Grid item sm={12} style={{ marginTop: "8%" }}>
            <h1 className="h1--label">About Me</h1>
          </Grid>
          <Grid item sm={12}>
            <Grid
              container
              direction="row-reverse"
              style={{
                marginTop: "5%",
                alignItems: "center",
              }}
            >
              <Grid
                item
                md={12}
                lg={6}
                style={{
                  marginInline: "auto",
                }}
              >
                <div className="bb-box">
                  <img
                    className="about__img"
                    src={"images/profilePicture.jpg"}
                    alt="profile_picture"
                  />
                </div>
              </Grid>
              <Grid item md={12} lg={6} style={{ paddingTop: "none" }}>
                <div className="about__name">
                  <h2 className="h2--label">Patrick Chapple</h2>
                </div>
                <div className="about__description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <Divider style={{ marginBottom: "10px" }} />
                  <div className="email">
                    <h4 className="email__label">Email:</h4>
                    <p className="email__email">
                      <a href="mailto: patrick.chapple28@gmail.com">
                        patrick.chapple28@gmail.com
                      </a>
                    </p>
                  </div>

                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<OpenInNewIcon />}
                    style={{
                      backgroundColor: "#00e695",
                      width: 111,
                      marginRight: 5,
                    }}
                    href="https://github.com/patrickchap"
                  >
                    Github
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<OpenInNewIcon />}
                    style={{ backgroundColor: "#00e695", width: 111 }}
                    href={resume}
                  >
                    Resume
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default About;
