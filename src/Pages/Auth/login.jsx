import loginImg from "../../assests/login-img.svg";

export const Login = () => {
    return (
        <>
            <main className="flex justify-center gap-5 items-center w-full h-full m-4">
                <div className="w-[35rem] hidden lg:block">
                    <img src={loginImg} alt="image" className="w-full" />
                </div>
                <form className="flex flex-col p-3 border gap-2 w-full max-w-[20rem] rounded-lg">
                    <h1 className="font-merienda text-4xl text-center mb-20">FanField</h1>
                    <input 
                    className=" w-full p-2 pl-2 focus: outline-none 
                    border
                    rounded-md border-slate-300 
                    border-primary focus:border-sky-500
                    focus:ring-1 focus:ring-sky-500." 
                    type="email" id="email" placeholder="Email*" required/>
                    <input 
                    className=" w-full p-2 pl-2 focus: outline-none 
                    border
                    rounded-md border-slate-300 
                    border-primary focus:border-sky-500
                    focus:ring-1 focus:ring-sky-500 mb-6" 
                    type="password" id="password" placeholder="pasword*" required/>
                    <button className="rounded-md border p-1 w-full outline-none hover:bg-blue-500 hover:text-white">Login as a guest</button>
                    <button  className="rounded-md border p-1  w-full outline-none bg-blue-500 text-white hover:bg-blue-600">Login</button>
                    <p className="text-center">OR</p>
                    <p className="cursor-pointer text-lg text-center">Don't have an account? <span className="text-sky-600">Sign Up</span></p>
                </form>
            </main>
        </>
    )
}