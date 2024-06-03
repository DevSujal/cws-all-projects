import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");
  const handleUp = () => {
    console.log("Upper case was clicked");
    setText(text.toUpperCase());
  };
  const handleLow = () => {
    console.log("Lower case was clicked");
    setText(text.toLowerCase());
  };
  const handleOnchange = (event) => {
    console.log("onchange clicked");
    setText(event.target.value);
  };
  const clearText = () => {
    let con = window.confirm("you want to clear the entered text");
    if (con) {
      setText("");
    }
  };
  const [mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnname, setBtnname] = useState("Enable Dark Mode");
  const toggleStyle = () => {
    if (mystyle.backgroundColor === "white") {
      setMystyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnname("Enable Light Mode");
    } else {
      setMystyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnname("Enable Dark Mode");
    }
  };

  const speech = new SpeechSynthesisUtterance();
  function speak() {
    const message = text;
    speechSynthesis.lang = "en";
    speech.text = message;
    window.speechSynthesis.speak(speech)
  }

  return (
    <>
      <div className="container" style={mystyle}>
        <h2 className="my-3" style={mystyle}>
          {props.heading.toUpperCase()}
        </h2>
        <div className="input-group" style={mystyle}>
          <span className="input-group-text" style={mystyle}>
            Enter Text
          </span>
          <textarea
            style={mystyle}
            placeholder="Enter Text here..."
            value={text}
            onChange={handleOnchange}
            className="form-control"
            aria-label="With textarea"
            id="mytext"
          ></textarea>
        </div>
        <br />
        <button className="btn btn-primary mx-3" onClick={handleUp}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLow}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-3" onClick={speak}>
          Text To Speech
        </button>
        <button className="btn btn-primary mx-3" onClick={toggleStyle}>
          {btnname}
        </button>
        <button className="btn btn-danger mx-3" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="container" style={mystyle}>
        <h2 style={mystyle} className="my-3">
          Your Text Details is Here...
        </h2>
        <p style={mystyle}>
          {text.split(" ").length} words and {text.length} characters is there
        </p>
      </div>
      <div className="container" style={mystyle}>
        <h2 style={mystyle} className="my-3">
         Preview
        </h2>
        <p style={mystyle}>
          {text}
        </p>
      </div>
    </>
  );
}
