import { User } from "../../Components/User/user"
import { ImHome } from 'react-icons/im';
import { MdAddBox } from 'react-icons/md';
import { MdExplore } from 'react-icons/md';
import { IoNotificationsSharp } from 'react-icons/io5';
const { Navbar } = require("../../Components/Navbar/navbar")
const { PostCard } = require("../../Components/Post-Card/post-card")

export const HomePage = () => {

    return(
        <>
            <Navbar />
             <main className="flex justify-center gap-4 mt-5 font-roboto p-2 relative">
                    <div>
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>
                    <div className="w-max h-max mt-5 hidden lg:block">
                        <div className="flex gap-2 justify-center items-center">
                            <img className='w-16 h-16 rounded-full' src="https://nebulaui.netlify.app/images/medium.jpeg" alt="profile-img" />
                            <p>Admin user</p>
                        </div>
                        <p className="text-blue-400 mt-4 mb-4">Suggestions for you</p>
                        <div className="flex flex-col gap-3 ">
                            <User imgUrl = {"https://picsum.photos/seed/picsum/200/300"}/>
                            <User imgUrl = {"https://picsum.photos/seed/picsum/200/300"}/>
                            <User imgUrl = {"https://picsum.photos/seed/picsum/200/300"}/>
                            <User imgUrl = {"https://picsum.photos/seed/picsum/200/300"}/>
                        </div>
                    </div>
                    <div className="w-full md:hidden flex justify-between fixed bottom-0 p-3 bg-white bg-opacity-9w0">
                        <ImHome className='text-2xl cursor-pointer hover:text-blue-500 text-zinc-500'/>
                        <MdAddBox className='text-3xl cursor-pointer hover:text-blue-500 text-zinc-500'/>
                        <MdExplore className='text-3xl cursor-pointer hover:text-blue-500 text-zinc-500'/>
                        <IoNotificationsSharp className='text-3xl cursor-pointer hover:text-blue-500 text-zinc-500'/>
                    </div>
            </main>
        </>
    )
}