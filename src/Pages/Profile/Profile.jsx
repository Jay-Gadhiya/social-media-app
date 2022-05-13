import { RiSettings2Line } from 'react-icons/ri';
import { EditProfile } from '../../Components/Modal/edit-profile-modal';

export const ProfilePage = () => {
    

    return (
        <>
        <EditProfile />
        <div className="max-w-2xl mx-auto"> 
        <div className="px-3 py-4">  
            <div className="flex flex-col gap-1 text-center">
                <img className='block mx-auto bg-center bg-no-repeat bg-cover w-24 h-24 rounded-full border  shadow-lg' src="https://nebulaui.netlify.app/images/medium.jpeg" alt="profile-img" />
                <p className="font-serif font-bold">Peggy Carter</p>
                <span className="text-sm text-gray-500">New York, NY - Los Angeles, CA</span>
                <a href="social-media-nznbx22rl-jay-gadhiya.vercel.app" className="text-sm text-gray-500 cursor-pointer">social-media-nznbx22rl-jay-gadhiya.vercel.app</a>
            </div>
   
            <div className="flex justify-center items-center gap-2 my-3">
                <div className="font-semibold text-center mx-4">
                    <p className="text-black">102</p>
                    <span className="text-gray-400">Posts</span>
                </div>
                <div className="font-semibold text-center mx-4">
                    <p className="text-black">102</p>
                    <span className="text-gray-400">Followers</span>
                </div>
                <div className="font-semibold text-center mx-4">
                    <p className="text-black">102</p>
                    <span className="text-gray-400">Folowing</span>
                </div>
            </div>
        

 
            <div className="flex justify-center items-center gap-3 my-5">
                <button className="bg-white border border-blue-500 hover:bg-blue-500 hover:text-white px-5 py-2 rounded-full ">Edit Profile</button>
                <RiSettings2Line className='text-[2rem] cursor-pointer hover:text-blue-500' />
            </div>

            </div>
        </div>
        </>
    )
}