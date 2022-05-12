import "./App.css";
import { Navbar } from "./Components/Navbar/navbar";
import { Login } from "./Pages/Auth/login";
import { Signup } from "./Pages/Auth/signup";
import { HomePage } from "./Pages/Home/Home";

function App() {
  return (
    <>
    <Navbar />
    {/* <Login /> */}
    <Signup />
     {/* <HomePage /> */}
    </>
  );
}

export default App;
