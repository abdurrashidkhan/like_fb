import React from 'react';
import { FiUser } from 'react-icons/fi';
import profileImg from '../../Assert/Images/profile.jpg'
const Post = () => {
  return (
    <div className='my-10 bg-[#122033] shadow-2xl rounded'>
      <div className="px-2 py-4">
        <div className="flex items-center gap-3">
          <div className="">
            <img className='w-[50px] h-[50px] rounded-full'  src={profileImg} alt="loading" />
          </div>
          <div className="">
            <h1 className='text-xl'>Pori Moni</h1>
            <h1 className='text-sm'> May 20 at 5:28 PM </h1>
          </div>
        </div>
        {/* post content */}
        <div className="">
          <div className="pt-4">
            <h1 className='capitalize '>My crash grill</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;