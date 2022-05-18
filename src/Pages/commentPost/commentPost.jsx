import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { PostCard } from "../../Components/Post-Card/post-card";
import { fetchAllPost, fetchPostComment } from "../../features/posts/postSlice";
import { fetchAllUsers } from "../../features/users/userSlice";

export const CommentPostPage = () => {

    const { postsId } = useParams();
    const { posts } = useSelector(store => store.post);
    const { token } = useSelector(store => store.user);
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

    return(
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
                            <p className="text-white font-bold">{comment?.username}</p>
                            <p className="text-white">{comment.text}</p>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}