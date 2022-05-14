import { BsHeart } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BsBookmark } from 'react-icons/bs';

export const PostCard = () => {
    return (
        <div className="w-full max-w-xl  border-2 font-roboto pb-3 mb-3 rounded-lg">
            <div className="flex items-center gap-3 p-3">
                <img className='w-9 h-9 rounded-full' src="https://nebulaui.netlify.app/images/medium.jpeg" alt="profile-img" />
                <p>Admin user</p>
            </div>
            <div className="w-full pl-3 pr-2">
                {/* <img src="https://media.smallbiztrends.com/2021/01/Active-Social-Media-Presence.png" alt="Image" /> */}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim commodi, optio doloremque ab repellat amet esse, sed, recusandae laboriosam obcaecati hic corrupti corporis!
            </div>
            <div className='flex justify-between p-3 items-center'>
                <div className='flex gap-4'>
                    <BsHeart className='text-2xl cursor-pointer'/>
                    <FaRegComment className='text-2xl cursor-pointer'/>
                    <IoPaperPlaneOutline className='text-2xl cursor-pointer'/>
                </div>
                <div>
                    <BsBookmark className='text-2xl cursor-pointer'/>
                </div>
            </div>
            <p className='font-bold text-sm pl-3 mt-2'>30 Likes</p>
            <p className='text-sm pl-3'><span className='font-bold'>Admin user</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptas!</p>
            <small className='text-gray-500 pl-3'>12 hours ago</small>
        </div>
    )
}