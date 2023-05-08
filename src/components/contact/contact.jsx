import React from "react";
import "./contact.css"

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact_background">
        <div className="contact_container_content">
          <div className="contact_container">
            <h2 className="contact_section_title">Get in touch</h2>
            <form className="contact_form">
              <div className="contact_form_div">
                <input
                  type="text"
                  className="contact_form_input"
                  placeholder="Insert your name"
                />
              </div>
              <div className="contact_form_div">
                <input
                  type="email"
                  className="contact_form_input"
                  placeholder="Insert your email"
                />
              </div>
              <div className="contact_form_div">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="contact_form_area"
                  placeholder="Write your message"
                ></textarea>
                <div className="contact_form_div">
                  <button className="contact_form_button">Send message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
