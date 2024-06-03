import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import TextForms from "./TextForms";
import StudentRegistration from "./StudentRegistration";
import Counter from "./counter";
import Discount from "./Discount";
import Practical7 from "./Practical7";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar title="my first website in react" />
        <div >
            <Route exact path="/" element={<TextForms heading = "text enhancer"/>}></Route>
            <Route exact path="/about" element={<StudentRegistration />}></Route>
            <Route exact path="/Practical7" element={<Practical7 name = "sujal nimje" college = "RCOEM"/>}></Route>
            <Route exact path="/Counter" element={<Counter />}></Route>
            <Route exact path="/Discount" element={<Discount />}></Route>
        </div>
      </BrowserRouter>    
    </div>
  );
}

export default App;
