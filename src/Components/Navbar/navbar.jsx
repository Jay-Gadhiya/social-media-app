import { ImHome } from 'react-icons/im';
import { MdAddBox } from 'react-icons/md';
import { MdExplore } from 'react-icons/md';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddPostModal } from '../Modal/addPostModal';
import { useState } from 'react';


export const Navbar = () => {
    const authUser = useSelector(store => store.user);
    const [showModal, setShowModal] = useState(false);

    const getActiveStyle = ({ isActive }) => ({
        color: isActive ? "#06b6d4" : "#d4d4d8"
    });


    return (
        <>
        {
            showModal && <AddPostModal setShowModal={setShowModal} />   
        }

        <nav className="shadow-md  p-3 top-0 sticky z-10 bg-neutral-800">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
                <h1 className="lg:text-3xl sm:text-xs text-[#fde4c3] font-merienda">ClubMate</h1>
                <input 
                    className="mx-2 w-full max-w-sm md:p-1 xs:p-0 pl-2 outline-none 
                    rounded-md border-slate-300 
                    border-primary focus:border-sky-500 
                    bg-gray-200 focus:bg-slate-50 border
                    " 
                    type="search" id="search" placeholder="Search"/>
                <div className='flex lg:gap-4 justify-center items-center lg:pr-5'>
                   <NavLink style={getActiveStyle} to="/home"><ImHome className='sm: hidden md:block lg:text-2xl cursor-pointer hover:text-cyan-500 '/></NavLink> 
                   <MdAddBox  onClick={() => setShowModal(true)} className='sm: hidden md:block lg:text-3xl cursor-pointer hover:text-cyan-500 text-zinc-300'/>
                   <NavLink style={getActiveStyle} to="/explore"><MdExplore className='sm: hidden md:block lg:text-3xl cursor-pointer hover:text-cyan-500 '/></NavLink>
                   <NavLink style={getActiveStyle} to="/bookmark"><BsFillBookmarkFill className='sm: hidden md:block lg:text-2xl cursor-pointer hover:text-cyan-500 '/></NavLink>
                   
                    <div className="w-8 h-8 cursor-pointer">
                        {
                            authUser?.token
                            &&
                            <>
                            {
                                authUser.user?.img !== ""
                                ?
                                <Link to={`/profile/${authUser.user?.username}`}><img className=' w-8 h-8 rounded-full' src={authUser.user?.img} alt="profile-img" /></Link>
                                :
                                <Link to={`/profile/${authUser.user?.username}`}>
                                    <div 
                                        className=' w-8 h-8 rounded-full border 
                                        border-sky-50 flex justify-center items-center text-white text-sm
                                        bg-cyan-600'>{authUser.user?.firstName[0]}{authUser.user?.lastName[0]}
                                    </div>
                                </Link>

                            }
                            </>
                        }
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}