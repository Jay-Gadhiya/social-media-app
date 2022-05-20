import { BsHeart } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BsBookmark } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BsHeartFill } from 'react-icons/bs';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditPostModal } from '../Modal/editPostModal';
import { fetchBookmarkPost, fetchDeletePost, fetchDislikePost, fetchLikePost, fetchRemoveBookmark } from '../../features/posts/postSlice';
import { Link } from 'react-router-dom';
import { fetchFollowUser, fetchUnfollowUser } from '../../features/users/userSlice';


export const PostCard = ({ postData }) => {

    const [openMenu, setOpenMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const { token, user, allUsers } = useSelector(store => store.user);
    const { bookmarks, posts } = useSelector(store => store.post);
    const postId = postData?._id;
    const findUser = allUsers?.find(user => user?.username === postData?.username);
    const authUser = allUsers.find(item => item.username === user.username);
    const isFollowed = authUser?.following.find(item => item.username === postData.username);
    const userId = findUser?._id;
    
    const isBookmarked = bookmarks.some(curr => curr === postId);
 
    const deletePostHandler = () => {
        dispatch(fetchDeletePost({token, postId}));
        setOpenMenu(open => !open);
    }

    const editHandler = () => {
        setOpenMenu(open => !open);
        setShowModal(true);
    }

    const followUserHandler = () => {
        dispatch(fetchFollowUser({token, userId}));
        setOpenMenu(false);
    }
    
    const unFollowHandler = () => {
        dispatch(fetchUnfollowUser({token, userId}));
        setOpenMenu(false);
    }

    const likeHandler = () => {
        dispatch(fetchLikePost({token, postId}));
    }

    const dislikeHandler = () => {
        dispatch(fetchDislikePost({token, postId}));
    }

    const addToBookmark = () => {
        dispatch(fetchBookmarkPost({token, postId}));
    }

    const removeFromBookmark = () => {
        dispatch(fetchRemoveBookmark({token, postId}));
    }


    return (
        <>
        {
            showModal 
            &&
            <EditPostModal setShowModal={setShowModal}  postId={postData?._id} itemData = {postData}  />
        }
        <div className="w-full max-w-xl  font-roboto pb-3 mb-3 pr-1 rounded-lg bg-gray-700">
            <div className="flex items-center gap-3 p-3">
                <img className='w-9 h-9 rounded-full' src={findUser?.img} alt="profile-img" />
               <Link to={`/profile/${postData?.username}`}><p className='text-white'>{postData?.username}</p></Link>
                <div className='ml-auto relative'>
                    <BsThreeDotsVertical onClick={() => setOpenMenu(open => !open)} className='text-white text-lg cursor-pointer' />
                    {
                        openMenu
                        &&
                        <div className='absolute top-4 right-4 py-1 px-2 bg-gray-600  rounded-md flex gap-1 text-white flex-col'>
                            {
                                user?.username === postData?.username
                                ?
                                <>
                                    <div onClick={editHandler} className='cursor-pointer text-base hover:text-cyan-500'>Edit</div>
                                    <div onClick={deletePostHandler} className='cursor-pointer text-base hover:text-cyan-500'>Delete</div>
                                </>
                                :
                                <>
                                    {
                                        isFollowed
                                        ?
                                        <div onClick={unFollowHandler} className='cursor-pointer text-base hover:text-cyan-500'>Unfollow</div>
                                        :
                                        <div onClick={followUserHandler} className='cursor-pointer text-base hover:text-cyan-500'>follow</div>


                                    }
                                </>
                                
                            }
                            
                        </div>
                    }
                    
                </div>
            </div>
            <div className="w-full pl-3 pr-2 ">
                {
                    postData?.image !== "" 
                    &&
                    <img className='rounded-md bg-cover object-cover w-full' src={postData?.image} alt="Image" />
                }
            </div>
            <p className='text-white pl-3 mb-1 mt-1'>{postData?.content}</p>
            <div className='flex justify-between p-3 items-center'>
                <div className='flex gap-4'>
                    {
                        postData?.likes?.likeCount > 0
                        ?
                        <BsHeartFill onClick={dislikeHandler} className='text-xl  cursor-pointer text-red-500  hover:scale-105'/>
                        :
                        <BsHeart onClick={likeHandler} className='text-xl text-white cursor-pointer hover:text-cyan-500 hover:scale-105'/>

                    }
                    <Link to={`/comment/${postData.id}`} ><FaRegComment className='text-xl text-white cursor-pointer hover:text-cyan-500 hover:scale-105'/></Link>
                </div>
                <div>
                    {
                        isBookmarked
                        ?
                        <BsBookmarkCheckFill onClick={removeFromBookmark} className='text-xl text-cyan-500 cursor-pointer hover:text-cyan-500 hover:scale-105'/>
                        :
                        <BsBookmark onClick={addToBookmark} className='text-xl text-white cursor-pointer hover:text-blue-500 hover:scale-105'/>

                    }
                </div>
            </div>
            <p className='font-bold text-sm pl-3 mt-2 text-white'>{postData?.likes?.likeCount} likes</p>
            {
                postData?.likes?.likeCount > 0
                ?
                <>
                {
                    postData?.likes?.likedBy.map(liked => (
                        <p key={liked._id} className='font-bold text-sm pl-3 mt-2 text-gray-300'><span className='font-bold text-white'>liked by </span> <Link to={`/profile/${liked.username}`}>{liked.username}</Link></p>
                    ))                }
                </>
                :
                <p className='font-bold text-sm pl-3 mt-2 text-cyan-200'>Be the first to like</p>

            }
            <p className='text-sm pl-3 text-gray-300'><span className='font-bold text-white'>{postData?.username}</span> {postData?.caption}</p>
            <small className='text-gray-400 pl-3'>{postData?.createdAt}</small>
        </div>
        </>
    )
}
9