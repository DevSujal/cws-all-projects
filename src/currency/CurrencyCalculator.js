import React, { useState } from "react";
import "./CurrencyCalcultor.css";

const CurrencyCalculator = (props) => {
  const [num, setNum] = useState();
  const [calcNum, setCalcNum] = useState();
  const [bool, setBool] = useState(false);

  const To = (event) => {
    setBool(false);
    if (event.target.value === "1") {
      setCalcNum(num * 1);
    }else if(event.target.value === "2"){
      setCalcNum(num * 0.012);
    }else if(event.target.value === "3"){
      setCalcNum(num * 0.0876);
    }
  };
  return (
    <div className="container mycont">
      <h3 style={{marginTop : "11px"}}>
        <b>{props.title.toUpperCase()}</b>
      </h3>
      <hr />
        <label style={{margin : "3px 0 7px 0", fontSize : "20px"}}> <b><i>Convert From : India</i></b> </label>{" "}
      <label>
        <b>
          <i>Enter any Number : </i>
        </b>
        <input
          id="input"
          type="number"
          name="input"
          value={num}
          onChange={(event) => setNum(event.target.value)}
        />
      </label>
      <label>
        Convert To
        <select className="select my-3" onClick={To}>
          <option value="1">India</option>
          <option value="2">America</option>
          <option value="3">China</option>
        </select>
      </label>
      {bool && <h4 className="my-3">Calcutated Value = {calcNum}</h4>}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setBool(true)}
      >
        click here...
      </button>
    </div>
  );
};

export default CurrencyCalculator;
