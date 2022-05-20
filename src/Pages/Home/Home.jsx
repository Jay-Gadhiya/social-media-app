import { User } from "../../Components/User/user"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "../../features/users/userSlice";
import { PostCard } from "../../Components/Post-Card/post-card";
import { fetchAllPost, sortByLatest, sortByOldest, sortByTrending } from "../../features/posts/postSlice";
import { Link } from "react-router-dom";
import { LineWave } from "react-loader-spinner";

export const HomePage = () => {

    const dispatch = useDispatch();
    const authUser = useSelector(store => store.user);
    const postData = useSelector(store => store.post);
    const { allUsers } = useSelector(store => store.user);
    const [activeFilter, setActiveFilter] = useState("");
    const adminUser = allUsers.find(item => item.username === authUser.user?.username);

    const showPosts = postData.posts.filter(item => 
        item.username === adminUser?.username 
        || 
        adminUser?.following.some(follower => follower.username === item.username));
    

    useEffect(() => {
        dispatch(fetchAllUsers());
        dispatch(fetchAllPost());
    }, [])

    const sortByTrandingHandler = () => {
        dispatch(sortByTrending());
        setActiveFilter("trending");
    }

    const sortByNewestHandler = () => {
        dispatch(sortByLatest());
        setActiveFilter("newest");
    }

    const sortByOldestHandler = () => {
        dispatch(sortByOldest());
        setActiveFilter("oldest");
    }


    return(
        <>
             <main className="flex justify-center items-center gap-4 mt-2 font-roboto p-2 relative mb-[3rem] flex-col">
                    <div className="flex text-white font-bold gap-3">
                        <button onClick={sortByTrandingHandler} className={`bg-cyan-600 hover:bg-cyan-500 border-b-4 ${activeFilter === "trending" && "border-orange-500"} text-white text-center py-1 px-4 rounded`}>Trending</button>
                        <button onClick={sortByNewestHandler}  className={`bg-cyan-600 hover:bg-cyan-500 border-b-4 ${activeFilter === "newest" && "border-orange-500"} text-white text-center py-1 px-4 rounded`}>Newest</button>
                        <button onClick={sortByOldestHandler}  className={`bg-cyan-600 hover:bg-cyan-500 border-b-4 ${activeFilter === "oldest" && "border-orange-500"} text-white text-center py-1 px-4 rounded`}>Oldest</button>
                    </div>
                <div className="flex gap-4 justify-center">
                    {
                        postData.loading
                        ?
                        <LineWave
                            color="cyan"
                            height={210}
                            width={210}
                            ariaLabel="three-circles-rotating"
                        />
                        :
                        <div>
                        {
                            postData.posts?.map(item => (
                                <PostCard key={item?._id} postData = {item} />
                            ))
                        }
                        </div>
                    }
                    <div className="w-max h-max mt-5 hidden lg:block">
                        <div className="flex gap-2 justify-center items-center">
                            {
                                authUser.user?.img === ""
                                ?
                                <div 
                                    className=' w-16 h-16 rounded-full border-2 
                                    border-sky-50 flex justify-center items-center text-white text-xl
                                    bg-cyan-600'>{authUser.user?.firstName[0]}{authUser.user?.lastName[0]}
                                </div>
                                :
                                <img className='w-16 h-16 rounded-full' src={authUser.user?.img} alt="profile-img" />

                            }
                            <Link to={`/profile/${authUser.user?.username}`} ><p className="text-white">{authUser.user?.username}</p></Link>
                        </div>
                        <p className="text-blue-400 mt-4 mb-4 text-center ml-5">Suggestions for you</p>
                        <div className="flex flex-col gap-3 ">
                            {
                                allUsers?.map(item => (
                                    item?.username !== authUser.user?.username
                                    &&
                                    <User key={item?._id} users={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}