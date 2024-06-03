import React, { useState } from "react";
import Header from "./Header";
import Todos from "./Todos";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItem from "./AddItem";
import Footer from "./Footer";

const TodosList = () => {
  const [array, setArray] = useState([
    {
      sno: 1,
      item: "pencil",
      desc: "a white pencil",
    },
  ]);
  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    setArray(
      array.filter((value) => {
        return value !== todo;
      })
    );
    console.table(array);
  };
  const AddTodo = (name, desc) => {
    let sn;
    if(array.length === 0){
      sn = 1;
    }else{
      sn = array[array.length - 1].sno + 1
    }
    let arr = {
      sno : sn,
      item: name,
      desc: desc,
    }
    // console.log(arr[arr.length - 1].sno + 1)
    setArray(
      [...array, arr]
      );
      console.log(array);
  };
  return (
    <div>
      <BrowserRouter>
        <Header title="Todos List" />
        <Routes>
          <Route
            exact
            path="/"
            element={<Todos array={array} onDelete={onDelete} />}
          ></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route
            exact
            path="/AddItem"
            element={<AddItem setArray={setArray} AddTodo = {AddTodo} array={array} />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default TodosList;
