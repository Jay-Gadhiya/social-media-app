import { User } from "../../Components/User/user"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllUsers } from "../../features/users/userSlice";
import { PostCard } from "../../Components/Post-Card/post-card";
import { fetchAllPost } from "../../features/posts/postSlice";
import { Link } from "react-router-dom";

export const HomePage = () => {

    const dispatch = useDispatch();
    const authUser = useSelector(store => store.user);
    const postData = useSelector(store => store.post);
    const { allUsers } = useSelector(store => store.user);


    useEffect(() => {
        dispatch(fetchAllUsers());
        dispatch(fetchAllPost());
    }, [])


    return(
        <>
             <main className="flex justify-center gap-4 mt-5 font-roboto p-2 relative mb-[3rem]">
                    <div>
                       {
                          postData?.posts?.map(item => (
                               <PostCard key={item?._id} postData = {item} />
                           ))
                       }
                    </div>
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
            </main>
        </>
    )
}