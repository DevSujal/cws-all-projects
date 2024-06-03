import React, { useState } from "react";

export default function AddItem(props) {

    const[name, setName] = useState();
    const[desc, setDesc] = useState();

    const updateArray = (event) => {
      event.preventDefault()
      if(!name || !desc){
        alert("Please fill all fields")
      }
      props.AddTodo(name, desc)
    }
  // document.getElementById('div').style.background = "cyan";
  let mystyle = {
    marginTop: "5%",
    boxShadow: "0 4px 8px 0 black",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "cyan",
    width : "50%"
  };
  return (
    <div className="container text-center" style={mystyle}>
        <h1>Add Items here</h1>
        <hr />
      <form onSubmit={updateArray}>
        <div className="input-group my-3">
          <span className="input-group-text">Enter Porduct Name</span>
          <input
            value = {name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter Text here..."
            className="form-control"
            aria-label="With textarea"
            id="mytext"
          ></input>
        </div>
        <div className="input-group my-3">
          <span className="input-group-text">Enter description</span>
          <textarea
           value = {desc}
           onChange={(event) => setDesc(event.target.value)}
            placeholder="Enter Text here..."
            className="form-control"
            aria-label="With textarea"
            id="mytext"
          ></textarea>
        </div>
          <button type="submit" className="btn btn-primary">
            Add Todos
          </button>
      </form>
    </div>
  );
}
