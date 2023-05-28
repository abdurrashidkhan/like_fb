import React from 'react';
import { FiUser } from "react-icons/fi";
import { RiLiveFill } from "react-icons/ri";
import { IoMdPhotos } from "react-icons/io";
import { BsFillEmojiSmileFill } from "react-icons/bs";

const Upload = () => {
  return (
    <div className="dark:bg-[#122033] bg-[#fff] shadow-2xl rounded-b">
      <div className='container mx-auto px-4 py-6'>
        <div className="">
          <div className="flex gap-5 items-center">
            <div className="">
              {/* images */}
              <FiUser className='text-4xl'></FiUser>
            </div>
            <div className="w-full">
              <input type="button" disabled value="What's on your mind, Rashid?" placeholder='Post here' className='dark:bg-[#091527] bg-[#ececec] rounded-full pl-5 text-xl py-2 pb-3 text-[#999999] w-full focus:outline-none text-start' />
            </div>
          </div>
          <div className="grid grid-cols-3 items-center gap-5 justify-items-center pt-4">
            <div className="flex items-center gap-2">
              <RiLiveFill className='text-3xl text-[#F23E5C]'></RiLiveFill>
              <h1>Live Video</h1>
            </div>
            <div className="flex items-center gap-2">
              <IoMdPhotos className='text-3xl text-[#04BD48]'></IoMdPhotos>
              <h1>Photos/Video</h1>
            </div>
            <div className="flex items-center gap-2">
              <BsFillEmojiSmileFill className='text-3xl text-[#ffc336]'></BsFillEmojiSmileFill>
              <h1>Feeling/activity</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;