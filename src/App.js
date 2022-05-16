import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/navbar";
import { Login } from "./Pages/Auth/login";
import { Signup } from "./Pages/Auth/signup";
import { HomePage } from "./Pages/Home/Home";
import { ProfilePage } from "./Pages/Profile/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element= {<HomePage/>} />
        <Route path="/" element= {<Login/>} />
        <Route path="/signup" element= {<Signup/>} />
        <Route path="/profile/:username" element= {<ProfilePage/>} />
      </Routes>
    
    </>
  );
}

export default App;
