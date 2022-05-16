import { User } from "../../Components/User/user"
import { ImHome } from 'react-icons/im';
import { MdAddBox } from 'react-icons/md';
import { MdExplore } from 'react-icons/md';
import { IoNotificationsSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllUsers } from "../../features/users/userSlice";
const { PostCard } = require("../../Components/Post-Card/post-card")


export const HomePage = () => {

    const dispatch = useDispatch();
    const authUser = useSelector(store => store.user);

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [])
 

    return(
        <>
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
                            <img className='w-16 h-16 rounded-full' src={authUser.user?.img} alt="profile-img" />
                            <p>{authUser.user?.username}</p>
                        </div>
                        <p className="text-blue-400 mt-4 mb-4 text-center ml-5">Suggestions for you</p>
                        <div className="flex flex-col gap-3 ">
                            <User imgUrl = {"https://picsum.photos/seed/picsum/200/300"}/>
                            <User imgUrl = {"https://picsum.photos/seed/picsum/200/300"}/>
                            <User imgUrl = {"https://picsum.photos/seed/picsum/200/300"}/>
                            <User imgUrl = {"https://picsum.photos/seed/picsum/200/300"}/>
                        </div>
                    </div>
                    <div className="w-full md:hidden flex justify-between fixed bottom-0 p-3 bg-white">
                        <ImHome className='text-2xl cursor-pointer hover:text-blue-500 text-zinc-500'/>
                        <MdAddBox className='text-3xl cursor-pointer hover:text-blue-500 text-zinc-500'/>
                        <MdExplore className='text-3xl cursor-pointer hover:text-blue-500 text-zinc-500'/>
                        <IoNotificationsSharp className='text-3xl cursor-pointer hover:text-blue-500 text-zinc-500'/>
                    </div>
            </main>
        </>
    )
}