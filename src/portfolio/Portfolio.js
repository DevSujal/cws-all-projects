import React, { useState } from "react";
import "./Portfolio.css";
import light from "./images/icon/dark theme icon/moon.png";
import dark from "./images/icon/dark theme icon/sun.png";
import logo from "./images/logo.jpg";
import cv from "./images/cv.pdf";
import mypic from "./images/me3.png";
import backpic from "./images/pattern.png";

const Portfolio = () => {
    const [theme, setTheme] = useState(light)
  //  let handleTheme = () => {
  //   if(true){
  //       setTheme(dark)
  //   }
  //   else{
  //       setTheme(dark)
  //   }

  //   }
    // var icon = document.getElementById("icon");
     function handleTheme(){
        document.body.classList.toggle("dark-theme");
       if(document.body.classList.contains("dark-theme")){
        setTheme(dark)
       }
       else{
        setTheme(light)
       }
    }
  return (
    <div>
      <title>MY PORTFOLIO WEBSITE</title>
      <div class="container1">
        <nav>
          <img src={logo} alt="logo" class="logo" />
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href={cv}>RESUME</a>
            </li>
            <li>
              <a href="/">SERVICES</a>
            </li>
            <li>
              <a href="/">HIRE ME</a>
            </li>
          <li>
          <img
              src={theme}
              alt="moon"
              id="icon"
              onClick={handleTheme}
            />
          </li>
          </ul>
        </nav>
        <div class="info">
          <h1>
            I'm <span>Sujal</span> Nimje
          </h1>
          <p>
            This is my offical portfolio website to showcase my all works
            related to web <br /> development and UI design.
          </p>
          <a href={cv}>Download CV</a>
        </div>
        <div class="img">
          <img src={backpic} alt="background" class="back" />
          <div>
            <img src={mypic} alt="ME" class="me" />
          </div>
        </div>
        <div class="social">
          <a href="/">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100074800720304">
            <i class="fab fa-facebook"></i>
          </a>
          <a href=" https://www.instagram.com/invites/contact/?i=cafwibsds7kn&utm_content=mshgk7m">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/qr/2RYT44K5OKA3B1 ">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
