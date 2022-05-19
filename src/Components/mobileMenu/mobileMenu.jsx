import { ImHome } from "react-icons/im";
import { MdAddBox } from "react-icons/md";
import { BsFillBookmarkFill } from 'react-icons/bs';
import { MdExplore } from 'react-icons/md';
import { Link } from "react-router-dom";
import { AddPostModal } from "../../Components/Modal/addPostModal";
import { useState } from "react";


export const MobileMenu = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
        {
            showModal
            &&
            <AddPostModal setShowModal={setShowModal} /> 
        }
            <div className="w-full md:hidden flex justify-between items-center fixed bottom-0 p-3 bg-gray-800 z-50">
                <Link to="/home"><ImHome className='text-2xl cursor-pointer hover:text-cyan-500 text-zinc-400'/></Link>
                <MdAddBox onClick={() => setShowModal(true)} className='text-3xl cursor-pointer hover:text-cyan-500 text-zinc-400'/>
                <Link to="/explore"><MdExplore className='text-3xl cursor-pointer hover:text-cyan-500 text-zinc-400'/></Link>
                <Link to="/bookmark"><BsFillBookmarkFill className='text-2xl cursor-pointer hover:text-cyan-500 text-zinc-400'/></Link>
            </div>
        </>
    )
}