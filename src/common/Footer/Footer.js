import React from 'react';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai'
import { Link } from 'react-router-dom';

import './Footer.css'
const Footer = () => {
  return (
    <div className='bg-[#e7e7e7] dark:bg-[#1a1c20] shadow-2xl'>
      <div className="container mx-auto px-2 py-10 relative sm:rounded-none">
        <div id="footerSvg"></div>
        <div className="">
          <div className="">
          <div className="text-center rounded"> 
          <div>
            <div>
              <ul className="inline-flex gap-5">
                <li>
                  <Link><BsFacebook className='text-2xl text-[#0880c5]'></BsFacebook></Link>
                </li>
                <li>
                  <Link><BsTwitter className='text-2xl text-[#1da1f2]'></BsTwitter></Link>
                </li>
                <li>
                  <Link><BsInstagram className='text-2xl text-[#bb0707]'></BsInstagram></Link>
                </li>
                <li>
                  <Link><BsLinkedin className='text-2xl text-[#0a66c2]'></BsLinkedin></Link>
                </li>
                <li>
                  <Link><BsGithub className='text-2xl text-[#]'></BsGithub></Link>
                </li>
              </ul>
            </div>
          </div> 
          <div className="hidden sm:inline-flex gap-8 pt-10 pb-6">
            <Link to={'/home'} className="hover:text-[#04bd48] hover:no-underline ease-in-out duration-200">Home</Link> 
            <Link to={'/about'} className="hover:text-[#04bd48] hover:no-underline ease-in-out duration-200">About</Link> 
            <Link to={'/skills'} className="hover:text-[#04bd48] hover:no-underline ease-in-out duration-200">Skills</Link> 
            <Link to={'/services'} className="hover:text-[#04bd48] hover:no-underline ease-in-out duration-200">Services</Link> 
            <Link to={'/portfolio'} className="hover:text-[#04bd48] hover:no-underline ease-in-out duration-200">Portfolio</Link> 
            <Link to={'/blog'} className="hover:text-[#04bd48] hover:no-underline ease-in-out duration-200">Blog</Link> 
            <Link to={'/contact'} className="hover:text-[#04bd48] hover:no-underline ease-in-out duration-200">Contact</Link> 
          </div>
          <div>
            <p className='text-slate-700 dark:text-slate-400 pt-5 sm:pt-0 text-xs sm:text-base'>Copyright © 2023 - All right reserved by || <Link to={''} className='text-[#04bd48]'>Rashid Khan</Link></p>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;