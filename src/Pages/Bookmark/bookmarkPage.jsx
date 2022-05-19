import { useSelector } from "react-redux"
import { PostCard } from "../../Components/Post-Card/post-card";

export  const BookmarkPage = () => {

    const { bookmarks, posts } = useSelector(store => store.post);
    const bookmarkeAllPosts = posts.filter((currPost) =>
        bookmarks.some((curr) => curr === currPost._id)
    );  


    return (
        <main className="flex w-full justify-center p-1">

            {
                bookmarks.length === 0
                ?
                <h1 className="text-white font-bold text-2xl mt-5">Nothing in bookmarks</h1>
                :
                <div className="mt-4">
                {
                    bookmarkeAllPosts.map(posts => (
                        <PostCard key={posts.id} postData={posts} />
                    ))

                }
                </div>
            }

        </main>
    )
}