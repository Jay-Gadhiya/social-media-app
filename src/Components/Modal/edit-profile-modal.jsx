import { useState } from 'react';
import { BsX } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEditUser } from '../../features/users/userSlice';

export function EditProfile({ setShowModal, img }) {

  const dispatch = useDispatch();
  const authUserData = useSelector(state => state.user);
  const [userData, setUserData] = useState({...authUserData.user});
  const token = authUserData.token;

  const userDataChangeHandler = (e) => {
    setUserData(pre => ({...pre, [e.target.name] : e.target.value}));
  }

  const updateDataHandler = () => {
    dispatch(fetchEditUser({userData, token}));
    setShowModal(false);
  }

  const imgHandler = (e) => {
    let reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserData(pre => ({...pre, img : reader.result}));
      }
    }
  }

  return (
    <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-[24rem]">
             
              <div className="border-4 border-black-300 p-4 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">     
                 <div className="w-full text-[2.6rem] cursor-pointer flex justify-end"><BsX onClick={() => setShowModal(false)} /></div>
                 <div className="flex flex-col gap-6 ">
                        <div className="flex items-center">
                            <label htmlFor="avatar">Avatar</label>
                            <div className=" ml-[5rem]">
                                <label className="cursor-pointer">
                                  <img className='w-14 h-14 rounded-full' src={userData.img} alt="profile-img" />
                                  <input onChange={(e) => imgHandler(e)} name= "img" accept="image/*" type="file" className="hidden" />
                                </label>
                            </div>
                        </div>


                        <div className="flex gap-5 items-center">
                            <label htmlFor="avatar">Website</label>
                            <input 
                            onChange={(e) => userDataChangeHandler(e)} 
                            value={userData.website}
                            className="ml-[1.2rem] lg:ml-[2.4rem]  border p-1 w-full max-w-[15rem] rounded-md border-slate-300 border-primary focus:border-sky-500
                            outline-none" type="text" name="website" id="website" />
                        </div>

                        <div className="flex gap-5 items-center">
                            <label htmlFor="avatar">Bio</label>
                            <textarea 
                            onChange={(e) => userDataChangeHandler(e)} 
                            value={userData.bio}
                            className="border p-1 rounded-md border-slate-300 border-primary focus:border-sky-500
                            outline-none" name="bio" id="bio" cols="30" rows="4" ></textarea>
                        </div>
                        <div className="flex w-full justify-end">
                            <button onClick={updateDataHandler}  className="rounded-md border px-3 py-1 outline-none bg-blue-500 text-white hover:bg-blue-600">Update</button>
                        </div>
                 </div> 
               
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
