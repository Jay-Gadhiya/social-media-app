import { useState, useEffect } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { EditProfile } from '../../Components/Modal/edit-profile-modal';
import { PostCard } from "../../Components/Post-Card/post-card";
import { fetchAllUsers, logoutUser } from '../../features/users/userSlice';

export const ProfilePage = () => {

  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState("https://nebulaui.netlify.app/images/medium.jpeg");
  const userData = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();
  let currentUser = '';

  const findUser = userData.allUsers.users?.find(user => user.username === username);
  if(findUser.username === userData.user.username) {
    currentUser = userData.user;
  }
  else {
      currentUser = findUser;
  }

  const logOutHandler = () => {
      dispatch(logoutUser());
      navigate("/");
  }


    return (
        <>
        {
            showModal 
            &&
            <EditProfile setShowModal={setShowModal} setImg={setImg} img={img} findUser={findUser} />

        }
        <div className="max-w-2xl mx-auto"> 
            <div className="px-3 py-4">  
                <div className="flex flex-col gap-1 text-center">
                    <img className='block mx-auto bg-center bg-no-repeat bg-cover w-24 h-24 rounded-full border  shadow-lg' src={img} alt="profile-img" />
                    <p className="font-serif font-bold"> {currentUser?.username} </p>
                    <span className="text-sm text-gray-500">{currentUser?.firstName} {currentUser.lastName}</span>
                    <span className="text-sm text-gray-500">{currentUser?.bio}</span>
                    <a href="social-media-nznbx22rl-jay-gadhiya.vercel.app" className="text-sm text-sky-500 cursor-pointer">{currentUser?.website}</a>
                </div>
    
                <div className="flex justify-center items-center gap-2 my-3">
                    <div className="font-semibold text-center mr-4 ml-10">
                        <p className="text-black">102</p>
                        <span className="text-gray-400">Posts</span>
                    </div>
                    <div className="font-semibold text-center mx-4">
                        <p className="text-black">102</p>
                        <span className="text-gray-400">Followers</span>
                    </div>
                    <div className="font-semibold text-center mx-4">
                        <p className="text-black">102</p>
                        <span className="text-gray-400">Folowing</span>
                    </div>
                </div>
            
                <div className="flex justify-center items-center gap-3 my-5">
                    <button onClick={() => setShowModal(true)} className="bg-white border border-blue-500 hover:bg-blue-500 hover:text-white px-5 py-2 rounded-full ">Edit Profile</button>
                    <AiOutlineLogout onClick={logOutHandler} className='text-[2rem] cursor-pointer hover:text-blue-500' />
                </div>
            </div>
        </div>

        <div className='border w-2/3 mr-auto ml-auto mt-3 mb-3'></div>

        <div className=' flex flex-col gap-3 items-center p-1'>
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
        </>
    )
}