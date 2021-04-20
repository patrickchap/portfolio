import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

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
      <form className="contact-form" onSubmit={sendEmail}>
        <input
          type="hidden"
          name="contact_number"
          value={(Math.random() * 100000) | 0}
        />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Contact;
