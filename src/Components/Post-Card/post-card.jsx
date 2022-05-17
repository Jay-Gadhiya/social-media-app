import { BsHeart } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BsBookmark } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';


export const PostCard = ({ postData }) => {

    const [openMenu, setOpenMenu] = useState(false);


    return (
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
                            <div onClick={() => setOpenMenu(open => !open)} className='cursor-pointer text-sm hover:text-cyan-500'>Edit</div>
                            <div onClick={() => setOpenMenu(open => !open)} className='cursor-pointer text-sm hover:text-cyan-500'>Delete</div>
                        </div>
                    }
                    
                </div>
            </div>
            <div className="w-full pl-3 pr-2 ">
                {
                    postData?.image !== "" 
                    &&
                    <img className='rounded-md bg-contain bg-center w-full' src={postData?.image} alt="Image" />
                }
            </div>
            <p className='text-white pl-3 mb-1 mt-1'>{postData?.content}</p>
            <div className='flex justify-between p-3 items-center'>
                <div className='flex gap-4'>
                    <BsHeart className='text-xl text-white cursor-pointer hover:text-blue-500 hover:scale-105'/>
                    <FaRegComment className='text-xl text-white cursor-pointer hover:text-blue-500 hover:scale-105'/>
                    <IoPaperPlaneOutline className='text-[1.4rem] text-white cursor-pointer hover:text-blue-500 hover:scale-105'/>
                </div>
                <div>
                    <BsBookmark className='text-xl text-white cursor-pointer hover:text-blue-500 hover:scale-105'/>
                </div>
            </div>
            <p className='font-bold text-sm pl-3 mt-2 text-white'>{postData?.likes?.likeCount} likes</p>
            <p className='text-sm pl-3 text-gray-300'><span className='font-bold '>{postData?.username} </span>{postData?.caption}</p>
            <small className='text-gray-400 pl-3'>12 hours ago</small>
        </div>
    )
}
