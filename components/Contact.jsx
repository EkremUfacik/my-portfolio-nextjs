import style from "../styles/Contact.module.scss";

import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();

  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        e.preventDefault();
        formRef.current.reset();
        toast.success("Message Submitted...");
      },
      () => toast.error("Message Not Submitted!")
    );
  };
  return (
    <div id="contact" className={style["app__contact"]}>
      <h2 className="app__head">Contact Me</h2>
      <form className="app__flex" ref={formRef} onSubmit={sendEmail}>
        <div className={`${style["app__contact-input"]} app__flex`}>
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <input type="text" placeholder="Your Phone" name="phone" />
        </div>
        {/* <div> */}
        <textarea
          name="message"
          id=""
          // cols="30"
          rows="10"
          placeholder="Your Message"
          required
        ></textarea>
        {/* </div> */}
        <button className={style["app__contact-btn"]} type="submit">
          Send Message
        </button>
      </form>

      <div className={`${style["app__contact-info"]} app__flex`}>
        <div>
          <h4>Email</h4>
          <p>ekremufacik07@gmail.com</p>
        </div>
        <div>
          <h4>Phone</h4>
          <p>5444746867</p>
        </div>
        <div>
          <h4>Address</h4>
          <p>Giresun</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
