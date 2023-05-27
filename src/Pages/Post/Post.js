import React from 'react';
import { FiUser } from 'react-icons/fi';

const Post = () => {
  return (
    <div className='my-10 bg-[#122033] shadow-2xl rounded'>
      <div className="px-2 py-4">
        <div className="flex items-center gap-3">
          <FiUser className='text-4xl'></FiUser>
          <div className="">
            <h1 className='text-xl'>Pori Moni</h1>
            <h1 className='text-sm'> May 20 at 5:28 PM </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;