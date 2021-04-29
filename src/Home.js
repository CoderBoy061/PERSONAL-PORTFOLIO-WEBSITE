import React from "react";
import homePic from "./images/background.jpg";
import facebook from "./images/face.png";
import instagram from "./images/insta.png";
import linkdien from "./images/link.png";
import github from "./images/git.png";
import telegram from "./images/tele.png";
import "./Home.css";
import { NavLink } from "react-router-dom";
import MyPic from "./images/myself.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home_section">
        <img className="home_section_image" src={homePic} alt="home_images" />
      </div>
      <div class="centered">
        <h1>
          {" "}
          Hello , My Name Is DEBABRATA BASAK , Looking for an Opportunity for
          Proving my skills in Industry Level
        </h1>
        <h2>I Love Web Developing and Programming</h2>
        <NavLink to="/about">
          <button class="container_btn">ABOUT ME</button>
        </NavLink>
      </div>
      <div className="about_section">
        <div className="about_content">
          <p className="about_text">
            Hello , My Name is <strong>Debabrata Basak </strong> . I am from
            Jalpaiguri , West Bengal . Right Now I am Pursuing My Bachelor's
            Degree in Computer Science & Engineering from University Institute
            Of Technology , The Burdwan University. I Have Completed My Diploma
            Engineering In Computer Science & Technology From Rajendranath
            College of Polytechnic . Right Now I am Looking for an Opportunity
            to Prove my skills in Industry Level and want to Learn some
            Practical Knowledge to update my Knowledge in Practical Field
          </p>

          <div className="personal_heading_link">
            <div className="heading_link">
              <p><a style={{ textDecoration: 'none',color:'yellow' }} href="" target="_blank">DOWNLOAD MY RESUME</a></p>
              <p><NavLink style={{ textDecoration: 'none',color:'yellow' }} to="/resume">VIEW MY RESUME(Made With Pure HTML and CSS)</NavLink></p>
              <p><NavLink style={{ textDecoration: 'none',color:'yellow' }}  to="/contact">CONTACT ME</NavLink></p>
            </div>
          </div>
        </div>
        <img className="about_image" src={MyPic} alt="about_image" />
      </div>
      <div className="footer_contact">
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

export default Home;
