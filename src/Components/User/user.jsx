
export const User = ({imgUrl}) => {
    
    return (
        <div className="flex gap-3 items-center">
            <img className='w-10 h-10 rounded-full' src={imgUrl} alt="profile-img" />

            <p>Robert Downey</p>
        </div>
    )
}