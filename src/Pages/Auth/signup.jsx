import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchSignupUserData } from "../../features/users/userSlice";


export const Signup = () => {

    const [userData, setUserData] = useState({firstName : '', lastName : '', username : '', password : '',  email: "", bio:"", website : "", img : ""});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signupHandler = (e) => {
        e.preventDefault();
        dispatch(fetchSignupUserData(userData));
        navigate("/home");
    }

    return (
        <>
            <main className="flex lg:justify-center gap-5 items-center w-full h-full mt-6">
                <form onSubmit={(e) => signupHandler(e)} className="flex flex-col p-3 border gap-2 w-full max-w-[20rem] rounded-lg">
                    <h1 className="font-merienda text-4xl text-center mb-10 text-[#fde4c3]">ClubMate</h1>
                    <input 
                    className=" w-full p-2 pl-2 focus: outline-none 
                    border
                    rounded-md border-slate-300 
                    border-primary focus:border-sky-500
                    focus:ring-1 focus:ring-sky-500." 
                    value={userData.firstName}
                    onChange={(e) => setUserData(pre => ({...pre, firstName : e.target.value}))}
                    type="text" id="firstName" placeholder="First name*" required/>

                    <input 
                    className=" w-full p-2 pl-2 focus: outline-none 
                    border
                    rounded-md border-slate-300 
                    border-primary focus:border-sky-500
                    focus:ring-1 focus:ring-sky-500."
                    value={userData.lastName}
                    onChange={(e) => setUserData(pre => ({...pre, lastName : e.target.value}))} 
                    type="text" id="lastName" placeholder="Last name*" required/>

                    <input 
                    className=" w-full p-2 pl-2 focus: outline-none 
                    border
                    rounded-md border-slate-300 
                    border-primary focus:border-sky-500
                    focus:ring-1 focus:ring-sky-500." 
                    value={userData.username}
                    onChange={(e) => setUserData(pre => ({...pre, username : e.target.value}))}
                    type="username" id="username" placeholder="username*" required/>

                    <input 
                    className=" w-full p-2 pl-2 focus: outline-none 
                    border
                    rounded-md border-slate-300 
                    border-primary focus:border-sky-500
                    focus:ring-1 focus:ring-sky-500" 
                    value={userData.email}
                    onChange={(e) => setUserData(pre => ({...pre, email : e.target.value}))}
                    type="email" id="email" placeholder="email*" required/>

                    <input 
                    className=" w-full p-2 pl-2 focus: outline-none 
                    border
                    rounded-md border-slate-300 
                    border-primary focus:border-sky-500
                    focus:ring-1 focus:ring-sky-500 mb-6" 
                    value={userData.password}
                    onChange={(e) => setUserData(pre => ({...pre, password : e.target.value}))}
                    type="password" id="password" placeholder="pasword*" required/>

                    <button  className=" rounded-md  p-1 w-full outline-none bg-cyan-500 text-white hover:bg-cyan-600">Sign up</button>
                    <p className="text-center text-white">OR</p>
                    <Link to="/"><p className="cursor-pointer text-lg text-center text-white">Already have an account? <span className="text-sky-600">Login</span></p></Link>
                </form>
            </main>
        </>
    )
}