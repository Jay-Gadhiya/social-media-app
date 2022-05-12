import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/navbar";
import { Login } from "./Pages/Auth/login";
import { Signup } from "./Pages/Auth/signup";
import { HomePage } from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element= {<HomePage/>} />
        <Route path="/login" element= {<Login/>} />
        <Route path="/signup" element= {<Signup/>} />
      </Routes>
    
    </>
  );
}

export default App;
