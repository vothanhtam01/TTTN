import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="container">
      <div className="noidung-contact">
        <h3>CONTACT US</h3>
        <label>Your name</label>
        <input type="text" />
        <label>Email</label>
        <input type="text" />
        <label>Phone</label>
        <input type="text" />
        <label>Subject</label>
        <input type="text" />
        <label>Message*</label>
        <textarea placeholder="Write Something"> </textarea>
        <button>
          {" "}
          <a href="/#"> SEND MESSAGE </a>{" "}
        </button>
      </div>
    </div>
  );
}

export default Contact;
