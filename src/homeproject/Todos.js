// import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  
  return (
    <div >
       {props.array.length !== 0 && <h2 className="text-center my-3">This is Todos List !!</h2>}
      {props.array.length !== 0 ? (props.array.map((value) => {
        return <TodoItem array={value} key = {value.sno} onDelete = {props.onDelete}/>;
      })) : <h3 className="text-center my-3">Empty Todos List !!</h3>}
    </div>
  );
};

export default Todos;
