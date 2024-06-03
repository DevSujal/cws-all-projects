import React, { useState } from "react";
import "./CheckingOddOrEven.css";
const CheckingOddOrEven = () => {
  const [num, setNum] = useState();
  const [checked, setChecked] = useState("");
  let checkNumber = () => {
    if (num === "") {
      alert("the input box is empty please provide some relevent numbers to perform operations".toUpperCase());
    } else if (num % 2 === 0) {
      setChecked("Number is Even");
    } else {
      setChecked("Number is Odd");
    }
  };
  let clear = () => {
    setChecked("");
  };
  return (
    <div className="form">
      <center>
        <form>
          <h1>Odd Or Even Checker</h1>
          <hr />
          <label htmlFor="">
            <i>
              <b>Enter Any Number</b>
            </i>{" "}
            : <input type="number" onChange={(e) => setNum(e.target.value)} />
          </label>
          <h2>{checked}</h2>
          <button className="submit my-3" type="button" onClick={checkNumber}>
            Check Odd Or Even
          </button>

          <button
            className="submit my-3"
            type="button"
            style={{ backgroundColor: "red" }}
            onClick={clear}
          >
            Clear
          </button>
        </form>
      </center>
    </div>
  );
};
export default CheckingOddOrEven;
