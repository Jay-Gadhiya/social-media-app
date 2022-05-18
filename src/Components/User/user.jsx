
export const User = ({ user }) => {
    
    return (
        <div className="flex gap-3 items-center">
            <img className='w-10 h-10 rounded-full' src={user.img} alt="profile-img" />
            <p className="text-white">{user.username}</p>
            <button className="outline-none border-0 text-blue-500 p-0 ml-5 font-bold text-sm">Follow</button>
        </div>
    )
}