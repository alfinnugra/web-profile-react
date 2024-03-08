import React from "react";
import "../css/ContactMe.css";

const ContactMe = () => {
  return (
    <section className="contactme-container">
      <div className="contame-title">
        <h1>
          Contact <span>Me</span>
        </h1>
      </div>
        <form action="">
          <input type="text" placeholder="Name" className="name" />
          <input type="text" placeholder="Email" className="email" />
          <textarea name="chat" id="chat" cols="30" rows="10" className="textarea" placeholder="Chat"></textarea>
          <button className="Contact">Contact Me!</button>
        </form>
    </section>
  );
};

export default ContactMe;
