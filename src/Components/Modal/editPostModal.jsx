import { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { fetchEditPost } from "../../features/posts/postSlice";


export const EditPostModal = ({ setShowModal, postId, itemData }) => {

    const dispatch = useDispatch();
    const authUser = useSelector(store => store.user);
    const [postsData, setPostsData] = useState({caption:itemData?.caption, content:itemData?.content, image: itemData?.image});
    const token = authUser?.token;
    const postData = postsData;

    const postDataHandler = (e) => {
        setPostsData(pre => ({...pre, [e.target.name] : e.target.value}));
    }

    const imgHandler = (e) => {
        let reader = new FileReader();
    
        reader.readAsDataURL(e.target.files[0]);
    
        reader.onload = () => {
          if (reader.readyState === 2) {
            setPostsData(pre => ({...pre, image : reader.result}));
          }
        }
    }

    const editPostHandler = () => {
        dispatch(fetchEditPost({token, postId, postData})); 
        setShowModal(false);
    }



    return (
        <>
        <div className="modal opacity-2 z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

            <div className="modal-content py-6 text-left px-6">

                <div className="flex justify-end mb-3 cursor-pointer text-gray-500 hover:text-slate-800">
                    <VscChromeClose onClick={() => setShowModal(false)} className="text-2xl" />
                </div>

                <div className="flex gap-4 w-full">
                    <img className='w-14 h-14  rounded-full' src={authUser.user?.img} alt="profile-img" />
                    <div className="flex flex-col w-full gap-4">
                        <input onChange={e => postDataHandler(e)} value={postsData?.caption} className="rounded-md border-2 p-1 w-full max-w-sm outline-green-400" type="text" placeholder="caption" name="caption" />
                        <textarea onChange={e => postDataHandler(e)} value={postsData?.content} className="border-2 rounded-md p-1 w-full max-w-sm outline-green-400" placeholder="Write something awsome..." name="content" id="post" cols="25" rows="4"></textarea>
                    </div>
                </div>

                <div className="flex justify-between mt-4  lg:w-80 ml-auto items-center ">
                    <label htmlFor="img">
                        <BsCardImage className="text-2xl text-blue-500 cursor-pointer" />
                        <input onChange={e => imgHandler(e)} type="file" name="image" id="img" className="hidden" />
                    </label>
                    <div className="w-16 h-14 pt-4 ">
                        <img className="bg-contain bg-center" src={postsData?.image}  />
                    </div>
                    <button  onClick={editPostHandler} className="modal-close py-2 bg-cyan-500 px-6 rounded-md text-white hover:bg-blue-400">Update</button>
                </div>
                
            </div>
            </div>
        </div>

    </>
    )
}