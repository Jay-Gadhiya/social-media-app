import { useSelector } from "react-redux"
import { PostCard } from "../../Components/Post-Card/post-card";


export const ExplorePage = () => {

    const { posts } = useSelector(store => store.post);

    return (
        <main className="flex w-full justify-center p-1 mb-[3rem]">
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