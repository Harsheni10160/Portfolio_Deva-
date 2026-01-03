import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_gh0tvuq",
      "template_qbmlfwj",
      formRef.current,
      "9oWfuLg6wNBhimhyx"
    )
    .then(() => {
      alert("Message sent successfully 💜");
      formRef.current.reset();
    })
    .catch((error) => {
      alert("Failed to send message 😢");
      console.error(error);
    });
  };

  return (
    <section id="contact" className="contact-wrapper">
      <div className="contact-left">
       <div>
        <span className="contact-hed"> Let's Discuss </span>
        <br />
        <span className="contact-hed2"> on something  </span><span className="contact-hed2 highlight-purple"> Cool </span> 
        <span className="contact-hed2"> Together  !</span>
       </div> 

        <p><span className="contact-int">I'm</span> <span className="contact-int2">interested in ..</span></p>
        <div className="tags">
          <button>Ecommerce Website</button>
          <button>SaaS Website</button>
          <button>Landing Page</button>
          <button>Portfolio</button>
          <button>Blog Website</button>
          <button>Business Website</button>
        </div>
      </div>

      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Your email" required />
        <textarea name="message" placeholder="Your message" required />
        <button type="submit">✈ Submit</button>
      </form>
    </section>
  );
};

export default Contact;
