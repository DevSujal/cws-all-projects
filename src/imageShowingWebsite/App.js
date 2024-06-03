import React from "react";
import Header from "./Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import TextForms from "../FinalWeb/TextForms";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/TextForms" element={<TextForms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
