import React from "react";
import "./styles.css";

import SkillBar from "./SkillBar";
import RightSide from "./RightSide";

import ResumeSkill from "./ResumeSkill";

export default function App() {
  return (
    <div className="App">
      <section className="container">
        <section className="info">
          <img
            className="one-edge-shadow"
            src="https://i.postimg.cc/TPBjggJz/cvpic.jpg"
            width="250"
            height="250"
            alt="my pic"
          />
          <h1 className="name">Areesha Haseeb Khan</h1>
          <h2>
            <i className="fa fa-female" /> Personal Info
          </h2>
          <p>
            <i className="fa fa-graduation-cap" /> psychologist
          </p>
          <p>
            <i className="fa fa-phone" /> Phone
          </p>
          <p> 0764556898</p>
          <p>
            <i className="fa fa-at" /> Email
          </p>
          <p> areeshahaseebkhan@gmail.com</p>
          <p>
            <i className="fa fa-home" /> Address
          </p>
          <p> ThomsonsVag 30C Malmo </p>

          <a href="https://www.linkedin.com/feed/" target="_blank">
            <img
              className="linkedin"
              src="http://www.newdesignfile.com/postpic/2009/01/round-linkedin-icon_246849.png"
              alt=" linkedin"
            />
            <p>www.linkedin.com</p>
          </a>
          <br />
          <a href="https://www.instagram.com/" target="_blank">
            <img
              className="instagram"
              src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_instagram-512.png"
            />
            <p>www.instagram.com</p>{" "}
          </a>
          <br />
          <a href="https://www.facebook.com/" target="_blank">
            <img
              className="facebook"
              src="https://image.flaticon.com/icons/png/512/8/8730.png"
            />
            <p>www.facebook.com</p>
          </a>
        </section>
        <section className="rightSide">
          <RightSide title="About Me">
            <span className="dot" />
            <p>
              I am an outgoing and energetic young profession,seeking a career
              that fits my professional skills, personality. My aim is get
              experience of reputed organization with rectitude, devotion and
              aim to contribute effectively to prove my competences and enhance
              professional expertise in challenging environment.
            </p>
          </RightSide>

          <RightSide title="WORK EXPERIENCE">
            <span className="dot" />

            <h4>
              SEN (Student assistant) –Fritids teacher / The Lund International
              School{" "}
            </h4>
            <h4>
              <i className="fa fa-calendar" /> ( January 2019 –June 2019 )
            </h4>
            <p>
              Responsible to identify and contact new potential clients in Spain
              (unexplored market for the company), preparing presentations to
              prospective clients.
            </p>
            <hr />
            <h4>Special Educator / Resource Teacher / The Learning Tree </h4>
            <h4>
              {" "}
              <i className="fa fa-calendar" /> (September 2017 – April 2018)
            </h4>
            <p>
              In charge of the operation of the business accelerator with focus
              on female entrepreneurship. Main tasks: definition of strategic
              plan. Supervision of two Project Engineers and a portfolio of over
              50 projects.
            </p>
          </RightSide>

          <RightSide title="EDUCATION">
            <span className="dot" />
            <h4>
              Graduation – Bachelor of English studies from Malmo University
            </h4>
            in progress{" "}
            <h4> Graduation – Bachelor of Psychology - Karachi University</h4>
            <p>
              {" "}
              <i className="fa fa-calendar" /> 2016 - 2018
            </p>
          </RightSide>
          <RightSide title="Skills">
            <section className="other">
              <div className="skill_bar">
                <SkillBar title="React" value={3} />
                <SkillBar title="HTML" value={5} />
                <SkillBar title="Java" value={0} />
              </div>
            </section>

            <section className="other">
              <div className="skill_bar">
                <SkillBar title="javascript" value={3} />
                <SkillBar title="Css" value={4} />
                <SkillBar title="Microsoft Office" value={5} />
              </div>
            </section>
          </RightSide>

          <RightSide title="ACHIEVEMENTS">
            <ul>
              <li>
                <i className="fa fa-book" /> Forming an IQ course
              </li>
              <li>
                <i className="fa fa-book" /> ...
              </li>
            </ul>
            <br />
          </RightSide>
        </section>
      </section>
    </div>
  );
}
