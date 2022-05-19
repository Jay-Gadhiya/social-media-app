import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchFollowUser, fetchUnfollowUser } from "../../features/users/userSlice";

export const User = ({ users }) => {

    const { token, allUsers, user } = useSelector(store => store.user);
    const dispatch = useDispatch();
    const userId = users._id;
    
    const authUser = allUsers.find(item => item.username === user.username);
    const isFollowed = authUser?.following.find(item => item.username === users.username);


    const followUserHandler = () => {
        dispatch(fetchFollowUser({token, userId}));
    }

    const unFollowHandler = () => {
        dispatch(fetchUnfollowUser({token, userId}));
    }
    
    return (
        <div className="flex gap-3 items-center justify-between ">
            <div className="flex gap-2 items-center">
                <img className='w-10 h-10 rounded-full' src={users.img} alt="profile-img" />
                <Link to={`/profile/${users?.username}`}> <p className="text-white">{users.username}</p> </Link>
            </div>
            <div>
                {
                    isFollowed
                    ?
                    <button onClick={unFollowHandler} className="outline-none border-0 text-blue-500 p-0 ml-5 font-bold text-sm">Unfollw</button>
                    :
                    <button onClick={followUserHandler} className="outline-none border-0 text-blue-500 p-0 ml-5 font-bold text-sm">Follow</button>

                }
            </div>
            
        </div>
    )
} 