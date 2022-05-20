import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { PostCard } from "../../Components/Post-Card/post-card";
import { fetchAllPost, sortByLatest, sortByOldest, sortByTrending } from "../../features/posts/postSlice";


export const ExplorePage = () => {

    const dispatch = useDispatch();
    const { posts } = useSelector(store => store.post);
    const [activeFilter, setActiveFilter] = useState("");


    useEffect(() => {
        dispatch(fetchAllPost());
    },[])

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


    return (
        <main className="flex w-full justify-center items-center p-1 mb-[3rem] flex-col mt-2">

              <div className="flex text-white font-bold gap-3">
                  <button onClick={sortByTrandingHandler} className={`bg-cyan-600 hover:bg-cyan-500 border-b-4 ${activeFilter === "trending" && "border-orange-500"} text-white text-center py-1 px-4 rounded`}>Trending</button>
                  <button onClick={sortByNewestHandler}  className={`bg-cyan-600 hover:bg-cyan-500 border-b-4 ${activeFilter === "newest" && "border-orange-500"} text-white text-center py-1 px-4 rounded`}>Newest</button>
                  <button onClick={sortByOldestHandler}  className={`bg-cyan-600 hover:bg-cyan-500 border-b-4 ${activeFilter === "oldest" && "border-orange-500"} text-white text-center py-1 px-4 rounded`}>Oldest</button>
              </div>


            <div className="mt-4">
                {
                    posts.map(post => (
                        <PostCard key={post.id} postData={post} />
                    ))
                }
            </div>
        </main>
    )
}