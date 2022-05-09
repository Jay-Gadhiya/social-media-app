import { ImHome } from 'react-icons/im';
import { MdAddBox } from 'react-icons/md';
import { MdExplore } from 'react-icons/md';
import { IoNotificationsSharp } from 'react-icons/io5';


export const Navbar = () => {

    return (
        <nav className="bg-white shadow-md  p-3 top-0 sticky z-10 ">
            <div className="flex justify-between items-center max-w-4xl m-auto">
                <h1 className="text-3xl text-blue-500 font-merienda">FanField</h1>
                <input 
                    className="mx-2 w-full max-w-sm p-1 pl-2 focus: outline-none 
                    rounded-md border-slate-300 
                    border-primary focus:border-sky-500 
                    focus:ring-1 focus:ring-sky-500
                    bg-zinc-200
                    " 
                    type="search" id="search" placeholder="Search"/>
                <div className='flex gap-4 justify-center items-center lg:pr-5'>
                    <ImHome className='sm: hidden md:block lg:text-2xl cursor-pointer hover:text-blue-500 text-zinc-500'/>
                    <MdAddBox className='sm: hidden md:block lg:text-3xl cursor-pointer hover:text-blue-500 text-zinc-500'/>
                    <MdExplore className='sm: hidden md:block lg:text-3xl cursor-pointer hover:text-blue-500 text-zinc-500'/>
                    <IoNotificationsSharp className='sm: hidden md:block lg:text-3xl cursor-pointer hover:text-blue-500 text-zinc-500'/>
                    <div className="w-8 h-8 cursor-pointer ">
                        <img className=' w-8 h-8 rounded-full' src="https://nebulaui.netlify.app/images/medium.jpeg" alt="profile-img" />
                    </div>
                </div>
            </div>
        </nav>
    )
}