// import React, { useState } from "react";

const TodoItem = (props) => {
  var mystyle = {
    position : "relative",
    borderRadius: "10px",
    padding: "10px",
    display : "flex",
    width : "70%",
    backgroundColor : "white",
    left : "20%",
  };
  return (
    <div className="container my-5 mx-3 text-center">
      <div style={mystyle}>
        <div className="my-3">
          <p><b>Todo :- {props.array.item.toUpperCase()}</b></p>
          <p><b>Todo Description :-</b> {props.array.desc}</p>
        </div>
        <div className = "py-4"style={{position : "relative", left : "50%"}}>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.onDelete(props.array);
            }}
          >
            {"remove".toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
