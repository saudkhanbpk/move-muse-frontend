import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your submit logic here
    // For example, send a POST request to your server
    console.log({ name, email, message });
  };

  return (
    <div className="contact-us-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex  align-items-center">
            <div className="contact-info">
              <p>Telephone: (123) 456-7890</p>
              <p>Mobile: (123) 456-7890</p>
              <p>hello@reallygreatsite.com</p>
            </div>
          </div>
          <div className="col-md-8 ">
            <div className="form_width">
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "40px",
                  color: "#000000",
                }}
              >
                Contact us
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Your E-mail *"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  placeholder="Your Message *"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  type="submit"
                  className="btn w-50 w-md-10 p-2"
                  style={{ fontSize: "18px", height: "auto" }}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
