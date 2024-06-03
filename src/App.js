import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./FinalWeb/Navbar";
import TextForms from "./FinalWeb/TextForms";
import StudentRegistration from "./FinalWeb/StudentRegistration";
import Counter from "./FinalWeb/counter";
import Discount from "./FinalWeb/Discount";
import Practical7 from "./FinalWeb/Practical7";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar title="my first website in react" />
        <div >
          <Routes>
            <Route exact path="/" element={<TextForms heading = "text enhancer"/>}></Route>
            <Route exact path="/about" element={<StudentRegistration />}></Route>
            <Route exact path="/Practical7" element={<Practical7 name = "sujal nimje" college = "RCOEM"/>}></Route>
            <Route exact path="/Counter" element={<Counter />}></Route>
            <Route exact path="/Discount" element={<Discount />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
