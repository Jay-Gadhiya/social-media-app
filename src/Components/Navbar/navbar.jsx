import { ImHome } from 'react-icons/im';
import { MdAddBox } from 'react-icons/md';
import { MdExplore } from 'react-icons/md';
import { IoNotificationsSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddPostModal } from '../Modal/addPostModal';
import { useState } from 'react';


export const Navbar = () => {
    const authUser = useSelector(store => store.user);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        {
            showModal && <AddPostModal setShowModal={setShowModal} />   
        }
        <nav className="shadow-md  p-3 top-0 sticky z-10 bg-neutral-800">
            <div className="flex justify-between items-center max-w-4xl m-auto">
                <h1 className="lg:text-3xl sm:text-2xl text-[#fde4c3] font-merienda">FanField</h1>
                <input 
                    className="mx-2 w-full max-w-sm p-1 pl-2 outline-none 
                    rounded-md border-slate-300 
                    border-primary focus:border-sky-500 
                    bg-gray-200 focus:bg-slate-50 border
                    " 
                    type="search" id="search" placeholder="Search"/>
                <div className='flex gap-4 justify-center items-center lg:pr-5'>
                   <Link to="/home"><ImHome className='sm: hidden md:block lg:text-2xl cursor-pointer hover:text-cyan-500 text-zinc-300'/></Link> 
                   <MdAddBox  onClick={() => setShowModal(true)} className='sm: hidden md:block lg:text-3xl cursor-pointer hover:text-cyan-500 text-zinc-300'/>
                   <MdExplore className='sm: hidden md:block lg:text-3xl cursor-pointer hover:text-cyan-500 text-zinc-300'/>
                   <IoNotificationsSharp className='sm: hidden md:block lg:text-3xl cursor-pointer hover:text-cyan-500 text-zinc-300'/>
                   
                    <div className="w-8 h-8 cursor-pointer">
                       <Link to={`/profile/${authUser.user?.username}`}><img className=' w-8 h-8 rounded-full' src={authUser.user?.img} alt="profile-img" /></Link>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}