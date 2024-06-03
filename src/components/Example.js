import React from "react";
import "./Sujal";
import Sujal from "./Sujal";

const Example = () => {
  function handlEvent() {
    document.getElementById("me").innerHTML = "I am sujal nimje";
  }

  return (
    <div>
      <Sujal />
      <center>
        <button type="submit" onClick={handlEvent}>
          submit
        </button>
      </center>
    </div>
  );
};

export default Example;
