import React, { useState } from "react";
import "./StudentRegistration.css";
const StudentRegistration = () => {
  const [fname, setFname] = useState("");
  const [section, setSection] = useState("");
  const [cws, setCws] = useState();
  const [oops, setOops] = useState();
  const [math, setMath] = useState();
  const [physics, setPhysics] = useState();
  const [marks, setMarks] = useState();
  const [percent, setPercent] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let totalMarks =
      Number(cws) + Number(physics) + Number(oops) + Number(math);
    setMarks(totalMarks);
    setPercent(0.25 * totalMarks);
    console.log("This is the full information of Register Student!");
    console.log("First Name:" + fname);
    console.log("Last Name:" + section);
    console.log("cws:" + cws);
    console.log("your Mobile No = " + math);
    console.log("Roll No = " + oops);
    console.log("Password = " + physics + "\n");
  };
  // const resetTo = (e) =>{
  //   (e.preventDefault());
  // }
  return (
    <center>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1>Student Score Card Calculating System</h1>
          <div style={{ margin: "15px" }}>
            <label>Name : </label>
            <input
              type="text"
              className="input"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div style={{ margin: "15px" }}>
            <label>Section : </label>
            <input
              type="text"
              className="input"
              value={section}
              onChange={(e) => setSection(e.target.value)}
            />
          </div>
            <h2>Enter the marks of Subject</h2>
          <div style={{ margin: "15px" }}>
            <label>CWS : </label>
            <input
              type="number"
              className="input"
              value={cws}
              onChange={(e) => setCws(e.target.value)}
            ></input>
          </div>
          <div style={{ margin: "15px" }}>
            <label>oops : </label>
            <input
              type="number"
              className="input"
              value={oops}
              onChange={(e) => setOops(e.target.value)}
            ></input>
          </div>
          <div style={{ margin: "15px" }}>
            <label>Maths : </label>
            <input
              type="number"
              className="input"
              value={math}
              onChange={(e) => setMath(e.target.value)}
            ></input>
          </div>
          <div style={{ margin: "15px" }}>
            <label>Physics : </label>
            <input
              type="number"
              className="input"
              value={physics}
              onChange={(e) => setPhysics(e.target.value)}
            ></input>
          </div>
          <h2>Calculate the Score</h2>
          <div>
            <p>Total Marks : <input type="text" className="marks" value={marks}/>Percentage : <input type="text" className="marks"   value={percent} /></p>
          </div>
          <div style={{ marginTop: "15px" }}>
            <input type="submit" className="btn btn-primary mx-3" style={{width : "44%", borderRadius : "15px" }}></input>
            <button 
              type="reset"
              className="btn btn-danger mx-3"
              style={{width : "44%", borderRadius : "15px" }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </center>
  );
};
export default StudentRegistration;
