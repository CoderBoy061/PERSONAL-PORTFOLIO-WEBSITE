import React, { useState } from "react";
import "./Contact.css";
import facebook from "./images/face.png";
import instagram from "./images/insta.png";
import linkdien from "./images/link.png";
import github from "./images/git.png";
import telegram from "./images/tele.png";
import {db} from './Firebase';
import Home from "./Home";

function ContactMe() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [message,setMessage] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    db.collection('contacts').add({
      name:name,
      email:email,
      phone:phone,
      message:message
    }).then(() =>{
      alert('Your Message has been submitted , We will get back to you');
    }).catch((error) =>{
      alert(error.message);
    });

    setName(" ");
    setEmail(" ");
    setPhone(" ");
    setMessage("");
  };

  return (
    <div className="Contact_me">
      <div className="contact_form">
        <form className="contact" onSubmit = {handleSubmit}>
          <lable className="input_lable">Enter Your Name</lable>
          <input
            type="text"
            value={name}
            onChange = {(e) => setName(e.target.value)}
          
            className="form_input"
            placeholder="Enter Your Name"
          ></input>
          <lable className="input_lable">Enter Your Email</lable>
          <input
            type="email"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
      
            className="form_input"
            placeholder="Enter your Email "
          ></input>
          <lable className="input_lable">Enter Your Phone Number</lable>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            
            className="form_input"
            placeholder="Enter your Phone Number"
          ></input>
          <lable className="input_lable">Type your Message</lable>
          <textarea
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your Message"
            className="form_input_text"
          ></textarea>
          <input
            type="submit"
            className="contact_btn"
          
            value="SEND MESSAGE"
          ></input>
        </form>
      </div>
      <div className="footer_contact_contact">
          <p className="footer_text">Follow Me On Social Media</p>
          <div className="footer_icon">
              <a href="https://www.facebook.com/profile.php?id=100009107967867" target="_blank"><img className="social_icons" src={facebook} alt="social icons"/></a>
              <a href="https://www.instagram.com/debabratabasak061/" target="_blank"><img className="social_icons" src={instagram} alt="social icons"/></a>
              <a href="https://www.linkedin.com/in/debabrata-basak-3925841b6/" target="_blank"><img className="social_icons" src={linkdien} alt="social icons"/></a>
              <a href="https://github.com/CoderBoy061" target="_blank"><img className="social_icons" src={github} alt="social icons"/></a>
              <a href="https://web.telegram.org/" target="_blank"><img className="social_icons" src={telegram} alt="social icons"/></a>

          </div>

      </div>
    </div>
  );
}

export default ContactMe;
