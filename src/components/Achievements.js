import React from "react";
import me from "../images/download (1).jpg";

const Achievements = () => {
  return (
    <div className="my-5 container" style={{
        padding: "20px",
        boxShadow : "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        borderRadius: "10px"}}>
            <center><h1 style={{color : "brown"}}>My Achievements</h1></center>
      <img
        src= {me}
        width="200"
        height="200"
        align="right"
      />
      <h3 style= {{color: "red"}}>
        <i>ABOUT ME</i>
      </h3>
      <ul>
        <li>
          Name:
          <i>
            <b>SUJAL SUNIL NIMJE</b>
          </i>
        </li>
        <li>Age: 18 Year</li>
        <li>D.O.B: 27/09/2004</li>
        <li>Gender: Male </li>
      </ul>
      <br />
      <h3 style = {{color : "red"}}>
        <i>CONTACT DETAILS</i>
      </h3>
      <ul>
        <li>Address:Tandapeth Vinkar Colony Nagpur</li>
        <li>Mobile No:7499304141</li>
        <li>Land Line No:1539-73737277</li>
        <li>Email Address:nimjess@rknec.edu</li>
      </ul>
      <br />
      <h3 style={{color: "red"}}>
        <i>EDUCATION</i>
      </h3>

      <ul>
        <i style={{color: "blue"}}>
          <b>Pursuing B.Tech Degree</b>
        </i>
        <li>College:Shri Ramdeobaba College Of Engineering And Managment</li>
        <li>CET Score:99.42%til</li>
        <li>SSC Marks:88.80%</li>
        <li>HSC Marks:81.50%</li>
      </ul>
      <br />
      <h3 style={{color: "red"}}>
        <i>
          <b>KEY SKILLS</b>
        </i>
      </h3>
      <ul type="circle">
        <li>Self-Motivation</li>
        <li>Adaptibility</li>
        <li>Mentorship</li>
        <li>Project Planning</li>
        <li>Event Manager</li>
        <li>Good grip on HTML</li>
      </ul>
      <br />
      <h3 style={{color: "red"}}>
        <i>CAREER OBJECTIVES</i>
      </h3>
      <p>
        <u>Driven</u> and <u>compassionate</u> student with a <b>9.7/10 GPA</b>{" "}
        and excellent organizational and interpersonal skills. Seeking to apply
        my tutoring and <u>mentorship</u> skills to the youth Development summer
        internship at your company. Possess proven communication skills and
        passion for
        <u>advocacy</u>
        that will support your organizations cause
      </p>
      <br />
      <h3 style={{color: "red"}}>
        <i>EXTRACURRICULARS</i>
      </h3>
      <ul>
        <li>Poetry Club</li>
        <li>Drama Club</li>
        <li>Sports Event</li>
      </ul>
      <br />
      <h3 style={{color: "red"}}>
        <i>AWARDS</i>
      </h3>

      <ul>
        <li>
          <i>
            <b>National Merit Scholarship Finalist</b>
          </i>
        </li>
        <li>
          <b>
            <i>Acadamic Honour Roll</i>
          </b>
        </li>
      </ul>
      <nav>
        <ul>
          <li type="square" style = {{textAlign : "left"}}>
            <a href="image.jpg">CERTIFICATE</a>
          </li>
        </ul>
      </nav>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <marquee direction="right" scrollamount="15" behavior="" bgcolor="">
        Thanks For Giving Your Usefull Time
      </marquee>
    </div>
  );
};

export default Achievements;
