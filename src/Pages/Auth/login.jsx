import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assests/login-img.svg";
import { fetchLoginUserData } from "../../features/users/userSlice";

export const Login = () => {

    const [userData, setUserData] = useState({username : '', password : ''});
    const dispatch = useDispatch();
    const error = useSelector((state) => state.error);
    const navigate = useNavigate();

    const guestData = {
        username: "adarshbalika",
        password: "adarshBalika123",
    }

    const guestLoginHandler = () => {
        dispatch(fetchLoginUserData(guestData));
        navigate('/home');

    }

    const loginHandler = (e) => {
        dispatch(fetchLoginUserData(userData));
        navigate('/home');
    }

    return (
        <>
            <main className="flex lg:justify-center gap-5 items-center w-full h-full ">
                <div className="w-[35rem] hidden lg:block">
                    <img src={loginImg} alt="image" className="w-full" />
                </div>
                <form onSubmit={(e) => loginHandler(e)} className="flex flex-col p-3 border gap-2 w-full max-w-[20rem] rounded-lg">
                    <h1 className="font-merienda text-4xl text-center mb-20 text-[#fde4c3]">ClubMate</h1>

                    <input 
                    className=" w-full p-2 pl-2 focus: outline-none 
                    border
                    rounded-md border-slate-300 
                    border-primary focus:border-sky-500
                    focus:ring-1 focus:ring-sky-500"
                    onChange={(e) => setUserData(pre => ({...pre, firstName : e.target.value}))} 
                    type="text" id="username" placeholder="username*" value={userData.firstName} required/>

                    <input 
                    className=" w-full p-2 pl-2 focus: outline-none 
                    border
                    rounded-md border-slate-300 
                    border-primary focus:border-sky-500
                    focus:ring-1 focus:ring-sky-500 mb-6"
                    onChange={(e) => setUserData(pre => ({...pre, password : e.target.value}))} 
                    type="password" id="password" placeholder="pasword*" value={userData.password} required/>

                    <button type="button" onClick={guestLoginHandler} className="text-white rounded-md  p-1 w-full outline-none hover:bg-blue-500 hover:text-white">Login as a guest</button>
                    <button  className="rounded-md  p-1  w-full outline-none bg-cyan-500 text-white hover:bg-cyan-600">Login</button>
                    <p className="text-center text-white">OR</p>
                    <Link to="/signup"><p className="cursor-pointer text-lg text-center text-white">Don't have an account? <span className="text-sky-600">Sign Up</span></p></Link>
                </form>
            </main>
        </>
    )
}