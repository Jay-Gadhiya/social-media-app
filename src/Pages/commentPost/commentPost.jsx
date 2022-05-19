import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { PostCard } from "../../Components/Post-Card/post-card";
import { fetchAllPost, fetchDeleteComment, fetchPostComment } from "../../features/posts/postSlice";
import { fetchAllUsers } from "../../features/users/userSlice";
import { VscEdit } from 'react-icons/vsc';
import { MdDeleteOutline } from 'react-icons/md';
import { EditCommentModal } from "../../Components/Modal/editComment";


export const CommentPostPage = () => {

    const [showModal, setShowModal] = useState(false);
    const [recentComment, setRecentComent] = useState("");
    const { postsId } = useParams();
    const { posts } = useSelector(store => store.post);
    const { token, user } = useSelector(store => store.user);
    const findPost = posts.find(post => post.id === postsId);
    const dispatch = useDispatch();
    const [commentData, setCommentData] = useState({text : ""});
    const postId = findPost?._id;


    useEffect(() => {
        dispatch(fetchAllPost());
        dispatch(fetchAllUsers());
    }, [])

    const commentHandler = (e) => {
        e.preventDefault();
        dispatch(fetchPostComment({token, postId, commentData}));
        setCommentData({text : ""});
    }

    const editHadnler = (comment, commentsId) => {
        setShowModal(true);
        setRecentComent({text : comment, commentId : commentsId});
    }

    const deleteCommentHandler = (commentId) => {
        dispatch(fetchDeleteComment({token, postId, commentId}));
    }
 
    return(
        <>
        {
            showModal
            &&
            <EditCommentModal setShowModal={setShowModal}  recentComment={recentComment} postId={findPost?._id}  />
        }
        <main className="mt-4 flex gap-5 justify-center flex-wrap p-1">
            {
                posts?.map((post) => (
                    post._id === findPost._id
                    &&
                    <PostCard key={post.id} postData={post} />
                ))
            }
            
            <div className="w-full max-w-xl border-l-[1px] border-r-[1px] border-slate-400 rounded-2xl p-2 h-[33rem] overflow-auto">
                
                <form onSubmit={(e) => commentHandler(e) } className='flex justify-between'>
                    <input onChange={(e) => setCommentData(pre => ({...pre, text : e.target.value}))} value={commentData.text}  type="text" placeholder='Add a comment...' className='mb-3 bg-transparent w-2/3 p-2 text-white outline-none' required/>
                    <button className="modal-close  px-3 h-8 text-base bg-transparent  rounded-md text-white hover:bg-cyan-500">Post</button>
                </form>

                {
                    findPost?.comments?.map(comment => (
                        <div key={comment._id} className="flex flex-col  mb-3">
                            <div className="flex justify-between">
                                <p className="text-white font-bold">{comment?.username}</p>
                                {
                                    user?.username === comment.username
                                    &&
                                    <div className="flex gap-2 items-center">
                                        <VscEdit onClick={() => editHadnler(comment.text, comment._id)} className="text-white cursor-pointer text-lg"/>
                                        <MdDeleteOutline onClick={() => deleteCommentHandler(comment._id)} className="text-white cursor-pointer text-xl" />
                                    </div>
                                }
                            </div>
                            <p className="text-white">{comment.text}</p>
                        </div>
                    ))
                }
            </div>
        </main>
        </>
    )
}