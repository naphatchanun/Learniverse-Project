import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//component
import Navbar from "./component/Navbar/Navbar";
import Contact from "./component/Contact/contact";
import Play from "./component/Play/play";
import Firsthome from "./component/Firsthome/firsthome";
import Login from "./Page/Login/login";
import SignUp from "./Page/SignUp/signup";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          <Route path="firsthome" element={<Firsthome />} />
          <Route path="contact" element={<Contact />} />
          <Route path="play" element={<Play />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
