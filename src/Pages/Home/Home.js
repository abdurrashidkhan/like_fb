import React from 'react';
import Upload from '../Upload/Upload';
import Footer from '../../common/Footer/Footer';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import Post from '../Post/Post';

const Home = () => {
  return (
    <div className=' h-auto dark:bg-[#101C2C] dark:text-[#fff]'>
      <div className="container  flex mx-auto px-4">
        {/* left side slider */}
        {/* <div className="">

        </div> */}
        {/* center content */}
        <div className="w-[100%] mx-2">
          <Upload/>
          <Post></Post>
        </div>
        {/* right side  */}
        <div className="w-[45%]  ml-auto dark:bg-[#122033] bg-[#fff] shadow-2xl">
          <ProfileInfo></ProfileInfo>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;