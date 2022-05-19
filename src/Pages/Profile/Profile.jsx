import { useState, useEffect } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { EditProfile } from '../../Components/Modal/edit-profile-modal';
import { PostCard } from "../../Components/Post-Card/post-card";
import { fetchAllUsers, fetchFollowUser, fetchUnfollowUser, logoutUser } from '../../features/users/userSlice';

export const ProfilePage = () => {

  const [showModal, setShowModal] = useState(false);
  const userData = useSelector(state => state.user);
  const { posts } = useSelector(store => store.post);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();
  let currentUser = '';
  const { token } = userData;


  useEffect(() => {
    dispatch(fetchAllUsers())
  },[])

  const authUser = userData.allUsers.find(item => item.username === userData.user.username);
  const isFollowed = authUser?.following.find(item => item.username === username);
  const findUser = userData.allUsers?.find(user => user.username === username);
  const postsCount = posts.filter(item => item.username === findUser?.username);

  if(findUser?.username === userData.user?.username) {
    currentUser = userData.user;
  }
  else {
      currentUser = findUser;
  }
  const userId = findUser?._id;

  const logOutHandler = () => {
      dispatch(logoutUser());
      navigate("/");
  }

  const followUserHandler = () => {
    dispatch(fetchFollowUser({token, userId}));
  }

  const unFollowHandler = () => {
    dispatch(fetchUnfollowUser({token, userId}));
  }


    return (
        <>
        {
            showModal 
            &&
            <EditProfile setShowModal={setShowModal} img={currentUser?.img} findUser={findUser} />

        }
        <div className="max-w-2xl mx-auto mb-[6rem]"> 
            <div className="px-3 py-4">  
                <div className="flex flex-col gap-1 text-center">
                    {
                        userData.user?.img === ""
                        ?
                        <div 
                        className='mx-auto w-24 h-24 rounded-full border-2 
                        border-sky-50 flex justify-center items-center text-white text-2xl
                        bg-cyan-600'>{userData.user?.firstName[0]}{userData.user?.lastName[0]}</div>
                        :
                        <img className='block mx-auto bg-center bg-no-repeat bg-cover w-24 h-24 rounded-full border-2 border-sky-50' src={currentUser?.img} alt='img' />

                    }
                    <p className="font-serif font-bold text-white"> {currentUser?.username} </p>
                    <span className="text-sm text-gray-300">{currentUser?.firstName} {currentUser?.lastName}</span>
                    <span className="text-sm text-gray-300">{currentUser?.bio}</span>
                    <a href="social-media-nznbx22rl-jay-gadhiya.vercel.app" className="text-sm text-sky-500 cursor-pointer">{currentUser?.website}</a>
                </div>
    
                <div className="flex justify-center items-center gap-2 my-3">
                    <div className="font-semibold text-center mr-4 ml-10">
                        <p className="text-slate-300">{postsCount.length}</p>
                        <span className="text-gray-400">Posts</span>
                    </div>
                    <div className="font-semibold text-center mx-4">
                        <p className="text-slate-300">{findUser?.followers.length}</p>
                        <span className="text-gray-400">Followers</span>
                    </div>
                    <div className="font-semibold text-center mx-4">
                        <p className="text-slate-300">{findUser?.following.length}</p>
                        <span className="text-gray-400">Folowing</span>
                    </div>
                </div>
            
                <div className="flex justify-center items-center gap-3 my-5">
                    {
                        findUser?.username === userData.user?.username
                        ?
                        <button onClick={() => setShowModal(true)} className="bg-white  hover:bg-cyan-500 hover:text-white px-5 py-2 rounded-full ">Edit Profile</button>
                        :
                        <>
                            {
                                isFollowed
                                ?
                                    <button onClick={unFollowHandler} className="bg-cyan-600 hover:text-white text-white hover:bg-cyan-500 px-5 py-2 rounded-full ">Unfollow</button>

                                :
                                    <button onClick={followUserHandler}  className="bg-cyan-600 hover:text-white text-white hover:bg-cyan-500 px-5 py-2 rounded-full ">Follow</button>

                            }
                        </>
                        
                    }
                    <AiOutlineLogout onClick={logOutHandler} className='text-[2rem] text-white cursor-pointer hover:text-blue-500' />
                </div>
            </div>
        </div>

        <div className='border w-1/3 mr-auto ml-auto mt-3 mb-3'></div>

        <div className=' flex flex-col gap-3 items-center p-1'>
            {
                posts?.map(item => (
                    item.username === findUser?.username
                    &&
                    <PostCard key={item?._id} postData = {item} />
                ))
            }
        </div>
        </>
    )
}