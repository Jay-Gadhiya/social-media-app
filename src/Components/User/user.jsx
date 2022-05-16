
export const User = ({imgUrl}) => {
    
    return (
        <div className="flex gap-3 items-center">
            <img className='w-10 h-10 rounded-full' src={imgUrl} alt="profile-img" />
            <p>Robert Downey</p>
            <button className="outline-none border-0 text-blue-500 p-0 ml-5 font-bold text-sm">Follow</button>
        </div>
    )
}