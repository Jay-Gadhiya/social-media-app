import { BsHeart } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BsBookmark } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeletePost } from '../../features/posts/postSlice';
import { EditPostModal } from '../Modal/editPostModal';


export const PostCard = ({ postData }) => {

    const [openMenu, setOpenMenu] = useState(false);
    const [postsData, setPostsData] = useState({caption:postData?.caption, content:postData?.content, image: postData?.image});
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const { token, user } = useSelector(store => store.user);
    const postId = postData?._id;


    const deletePostHandler = () => {
        dispatch(fetchDeletePost({token, postId}));
        setOpenMenu(open => !open);
    }

    const editHandler = () => {
        setOpenMenu(open => !open);
        setShowModal(true);
    }


    return (
        <>
        {
            showModal 
            &&
            <EditPostModal setShowModal={setShowModal} setPostsData={setPostsData} postsData={postsData} postId={postData?._id}  />
        }
        <div className="w-full max-w-xl  font-roboto pb-3 mb-3 pr-1 rounded-lg bg-gray-700">
            <div className="flex items-center gap-3 p-3">
                <img className='w-9 h-9 rounded-full' src="https://nebulaui.netlify.app/images/medium.jpeg" alt="profile-img" />
                <p className='text-white'>{postData?.username}</p>
                <div className='ml-auto relative'>
                    <BsThreeDotsVertical onClick={() => setOpenMenu(open => !open)} className='text-white text-lg cursor-pointer' />
                    {
                        openMenu
                        &&
                        <div className='absolute top-4 right-4 py-1 px-2 bg-gray-600  rounded-md flex gap-1 text-white flex-col'>
                            {
                                user?.username === postData?.username
                                ?
                                <>
                                    <div onClick={editHandler} className='cursor-pointer text-base hover:text-cyan-500'>Edit</div>
                                    <div onClick={deletePostHandler} className='cursor-pointer text-base hover:text-cyan-500'>Delete</div>
                                </>
                                :
                                    <div onClick={() => setOpenMenu(open => !open)} className='cursor-pointer text-base hover:text-cyan-500'>Unfollow</div>
                                
                            }
                            
                        </div>
                    }
                    
                </div>
            </div>
            <div className="w-full pl-3 pr-2 ">
                {
                    postData?.image !== "" 
                    &&
                    <img className='rounded-md bg-cover bg-center w-full' src={postData?.image} alt="Image" />
                }
            </div>
            <p className='text-white pl-3 mb-1 mt-1'>{postData?.content}</p>
            <div className='flex justify-between p-3 items-center'>
                <div className='flex gap-4'>
                    <BsHeart className='text-xl text-white cursor-pointer hover:text-cyan-500 hover:scale-105'/>
                    <FaRegComment className='text-xl text-white cursor-pointer hover:text-cyan-500 hover:scale-105'/>
                    <IoPaperPlaneOutline className='text-[1.4rem] text-white cursor-pointer hover:text-cyan-500 hover:scale-105'/>
                </div>
                <div>
                    <BsBookmark className='text-xl text-white cursor-pointer hover:text-blue-500 hover:scale-105'/>
                </div>
            </div>
            <p className='font-bold text-sm pl-3 mt-2 text-white'>{postData?.likes?.likeCount} likes</p>
            <p className='text-sm pl-3 text-gray-300'><span className='font-bold '>{postData?.username} </span>{postData?.caption}</p>
            <small className='text-gray-400 pl-3'>12 hours ago</small>
        </div>
        </>
    )
}
