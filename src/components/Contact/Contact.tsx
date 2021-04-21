import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Contact: React.FC = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uxd2s08",
        "contact_form",
        e.target,
        "user_XRwVmaOIxhqp49vjajCf9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section className="contact" id="Contact">
      <div className="contact__container">
        <Grid container>
          <Grid item sm={12} style={{ marginTop: "8%", marginBottom: "8%" }}>
            <h1 className="h1--label">Contact</h1>
          </Grid>

          <Grid item md={12}>
            <form className="contact-form" onSubmit={sendEmail}>
              <input
                type="hidden"
                name="contact_number"
                value={(Math.random() * 100000) | 0}
              />
              <Grid
                container
                direction="row"
                justify="space-between"
                style={{ height: "300px" }}
              >
                <Grid item lg={12}>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name="user_name"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item lg={12}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    name="user_email"
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid item lg={12}>
                  <TextField
                    id="filled-textarea"
                    label="Message"
                    placeholder="Message"
                    multiline
                    variant="outlined"
                    name="message"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item lg={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{
                      backgroundColor: "#E6D017",
                      width: 111,
                      marginRight: 5,
                    }}
                  >
                    Submit
                  </Button>
                  {/* <input
                    type="submit"
                    value="Send"
                    className="contact__form__submit"
                  /> */}
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Contact;
