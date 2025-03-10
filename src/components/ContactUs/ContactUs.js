import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitData, setSubmitData] = useState([]);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const emailParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_7sm7wzu",
        "template_iu2b20e",
        emailParams,
        "i0llQyv6i-LDBF6X5"
      );

      toast.success("Your message has been sent successfully!");

      setSubmitData((prevData) => [...prevData, formData]);

      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }

    setIsSending(false);
  };

  return (
    <div className="contact-us-container p-md-2 p-5 mt-5 mt-md-0">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex align-items-center">
            <div className="contact-info">
              <p>Telephone: (123) 456-7890</p>
              <p>Mobile: (123) 456-7890</p>
              <p>hello@reallygreatsite.com</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="form_width">
              <h2 className="text-bold text-4xl text-black">Contact us</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Your E-mail *"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea
                  placeholder="Your Message *"
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="btn w-50 w-md-10 p-2"
                  style={{ fontSize: "18px" }}
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "SEND MESSAGE"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactUs;
