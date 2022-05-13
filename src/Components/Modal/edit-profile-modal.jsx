import React from "react";
import { BsX } from 'react-icons/bs';

export function EditProfile() {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-[24rem]">
             
              <div className="border-4 border-black-300 p-4 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">     
                 <div className="w-full text-[2.6rem] cursor-pointer flex justify-end"><BsX /></div>
                 <div className="flex flex-col gap-6 ">
                        <div className="flex">
                            <label htmlFor="avatar">Avatar</label>
                            <img className=' ml-[5rem] block bg-center bg-no-repeat bg-cover w-12 h-12 cursor-pointer rounded-full border  shadow-lg' src="https://nebulaui.netlify.app/images/medium.jpeg" alt="profile-img" />
                        </div>

                        <div className="flex gap-5 items-center">
                            <label htmlFor="avatar">Name</label>
                            <input 
                            className="ml-[3.5rem] w-full max-w-lg border p-1 rounded-md border-slate-300 border-primary focus:border-sky-500
                            outline-none" type="text" name="name" id="name" />
                        </div>

                        <div className="flex gap-5 items-center">
                            <label htmlFor="avatar">User Name</label>
                            <input className=" lg:ml-[1.2rem]  lg:w-[14rem]  border p-1 rounded-md border-slate-300 border-primary focus:border-sky-500
                            outline-none" type="text" name="username" id="username" />
                        </div>

                        <div className="flex gap-5 items-center">
                            <label htmlFor="avatar">Website</label>
                            <input className="ml-[2.5rem] border p-1 w-full max-w-[14rem] rounded-md border-slate-300 border-primary focus:border-sky-500
                            outline-none" type="text" name="website" id="website" />
                        </div>

                        <div className="flex gap-5 items-center">
                            <label htmlFor="avatar">Bio</label>
                            <textarea className="border p-1 rounded-md border-slate-300 border-primary focus:border-sky-500
                            outline-none" name="bio" id="bio" cols="30" rows="4" ></textarea>
                        </div>
                 </div> 

               
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}