import { ImHome } from "react-icons/im";
import { MdAddBox } from "react-icons/md";
import { BsFillBookmarkFill } from 'react-icons/bs';
import { MdExplore } from 'react-icons/md';
import { Link, NavLink } from "react-router-dom";
import { AddPostModal } from "../../Components/Modal/addPostModal";
import { useState } from "react";


export const MobileMenu = () => {

    const [showModal, setShowModal] = useState(false);

    const getActiveStyle = ({ isActive }) => ({
        color: isActive ? "#06b6d4" : "#d4d4d8"
    });

    return (
        <>
        {
            showModal
            &&
            <AddPostModal setShowModal={setShowModal} /> 
        }
            <div className="backdrop-blur-sm bg-gray-800/70 w-full md:hidden flex justify-between items-center fixed bottom-0 p-3 z-50">
                <NavLink style={getActiveStyle} to="/home"><ImHome className='text-2xl cursor-pointer hover:text-cyan-500 text-zinc-300'/></NavLink>
                <MdAddBox onClick={() => setShowModal(true)} className='text-3xl cursor-pointer hover:text-cyan-500 text-zinc-400'/>
                <NavLink style={getActiveStyle} to="/explore"><MdExplore className='text-3xl cursor-pointer hover:text-cyan-500 '/></NavLink>
                <NavLink style={getActiveStyle} to="/bookmark"><BsFillBookmarkFill className='text-2xl cursor-pointer hover:text-cyan-500 '/></NavLink>
            </div>
        </>
    )
}