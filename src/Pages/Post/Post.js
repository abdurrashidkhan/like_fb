import React, { useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';
import profileImg from '../../Assert/Images/profile.jpg'
import post from '../../Assert/Images/post.jpg'
import { AiFillHeart, AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';
import { BsFillEmojiHeartEyesFill, BsReply } from 'react-icons/bs';
import { FaRegCommentAlt } from 'react-icons/fa';

// style
import './Post.css'
const Post = () => {
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/post`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [post]);
  // console.log(post);
  return (

    post.map(p => (
      <div className='my-10 dark:bg-[#122033] bg-[#fff] shadow-2xl rounded'>
        <div className="px-2 py-4">
          <div className="flex items-center gap-3">
            <div className="">
              <img className='w-[60px] h-[60px] rounded-full' src={p?.photoURL} alt="loading" />
            </div>
            <div className="">
              <h1 className='text-xl'>{p?.displayName}</h1>
              <h1 className='text-sm'> May 20 at 5:28 PM </h1>
            </div>
          </div>
          {/* post content */}

          <>
            <div className="">
              <div className="pt-2">
                <h1 className='capitalize '>{p?.postTitle}</h1>
              </div>
              <div className="">
                <img className='pt-3 w-[500px] h-auto mx-auto rounded shadow-2xl' src={p?.image} alt="loading" />
              </div>
              <div className="flex justify-around  pt-4 items-center">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-[2px]">
                    <AiFillHeart className='text-2xl text-[#ff2151] '></AiFillHeart>
                    <AiTwotoneLike className='text-2xl text-[#1865ff]'></AiTwotoneLike>
                    <BsFillEmojiHeartEyesFill className='text-xl text-[#ffbd4b]'></BsFillEmojiHeartEyesFill>
                  </div>
                  <h1 className='text-slate-700 dark:text-slate-300'>You and {`4M`} Others</h1>
                </div>
                <div className="">
                  <h1>50 Share </h1>
                </div>
              </div>
              <div className="flex items-center justify-around mt-6  border-t-[2px] pt-3 border-[#0F1B2A]">
                <div className="flex items-center gap-2 ">
                  <button>
                    {/* <AiTwotoneLike className='text-2xl text-[#1865ff]'></AiTwotoneLike> */}
                    <AiOutlineLike className='text-3xl text-slate-700 dark:text-slate-200'></AiOutlineLike>
                  </button>
                  <p>Like</p>
                </div>
                <div className="flex items-center gap-2">
                  <button>
                    <FaRegCommentAlt className='text-2xl text-slate-700 dark:text-slate-200'></FaRegCommentAlt>
                  </button>
                  <p>Comment</p>
                </div>
                <div className="flex items-center gap-2">
                  <button>
                    <BsReply className='BsReply text-2xl text-slate-700 dark:text-slate-200'></BsReply>
                  </button>
                  <p>Share</p>
                </div>
              </div>
            </div>
          </>


        </div>
      </div>
    ))

  );
};

export default Post;