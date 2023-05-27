import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { RiArrowDownSFill, RiMoonFoggyFill } from "react-icons/ri";
import { CiLight } from "react-icons/ci";
import Active from "../Active/Active";

import './Navbar.css'
const Navbar = () => {
  // Dark Mode setup
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log('clicked');
  };
  const [navbarBg, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBg);


  return (
    <nav className={`${
      navbarBg ? 'bg-[#000000c9]  shadow-2xl ' : 'bg-transparent'
      }   z-[99999] fixed w-full ease-in-out duration-700`}>
      <div className="container mx-auto px-2">
        {/* navbar */}
        <div className="">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden text-[#fff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow-2xl rounded w-52 dark:bg-[#2a2d34] bg-white "
                >
                  <li>
                    <Active className="text-slate-600 font-semibold" to="">
                      Home
                    </Active>
                  </li>
                  {/* <li tabIndex={0}>
                    <a className="text-[#9298A0] font-semibold">
                      Page{" "}
                      <RiArrowDownSFill className="text-xl"></RiArrowDownSFill>
                    </a>
                    <ul className="p-2  rounded shadow-2xl dark:bg-[#2a2d34] bg-white">
                      <li>
                        <Active to={"/page-1"}>Page 1</Active>
                      </li>
                      <li>
                        <Active to={"/page-2"}>Page 2</Active>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <Active
                      className="text-slate-600 font-semibold"
                      to={"/about"}
                    >
                      About
                    </Active>
                  </li>
                  <li>
                    <Active
                      className="text-slate-600 font-semibold"
                      to={"/skills"}
                    >
                      Skills
                    </Active>
                  </li>
                  <li>
                    <Active
                      className="text-slate-600 font-semibold"
                      to={"/services"}
                    >
                      Services
                    </Active>
                  </li>
                  <li>
                    <Active
                      className="text-slate-600 font-semibold"
                      to={"/portfolio"}
                    >
                      Portfolio
                    </Active>
                  </li>
                  <li>
                    <Active
                      className="text-slate-600 font-semibold"
                      to={"/blog"}
                    >
                      Blog
                    </Active>
                  </li>
                  <li>
                    <Active
                      className="text-slate-600 font-semibold"
                      to={"/contact"}
                    >
                      Contact
                    </Active>
                  </li>
                </ul>
              </div>
              <Active
                to="/"
                className=" normal-case  text-sm sm:text-xl font-extrabold font-['Kalam'] text-[#FF5733] "
              >
                Rashid Khan
              </Active>
            </div>
            <div className="navbar-center hidden lg:flex">
              {/* main menu */}
              <ul className="menu menu-horizontal p-0 ">
              <li>
                    <Active className="text-slate-600 font-semibold" to="">
                      Home
                    </Active>
                  </li>
                  {/* <li tabIndex={0}>
                    <a className="text-[#9298A0] font-semibold">
                      Page{" "}
                      <RiArrowDownSFill className="text-xl"></RiArrowDownSFill>
                    </a>
                    <ul className="p-2  rounded shadow-2xl dark:bg-[#2a2d34] bg-white">
                      <li>
                        <Active to={"/page-1"}>Page 1</Active>
                      </li>
                      <li>
                        <Active to={"/page-2"}>Page 2</Active>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <Active
                      className="text-slate-600 font-semibold"
                      to={"/about"}
                    >
                      About
                    </Active>
                  </li>
                  <li>
                    <Active
                      className="text-slate-600 font-semibold"
                      to={"/skills"}
                    >
                      Skills
                    </Active>
                  </li>
                  <li>
                    <Active
                      className="text-slate-600 font-semibold"
                      to={"/services"}
                    >
                      Services
                    </Active>
                  </li>
                  <li>
                    <Active
                      className="text-slate-600 font-semibold"
                      to={"/portfolio"}
                    >
                      Portfolio
                    </Active>
                  </li>
                  <li>
                    <Active
                      className="text-slate-600 font-semibold"
                      to={"#blog"}
                    >
                      Blog
                    </Active>
                  </li>
                  <li>
                    <Active
                      className="text-slate-600 font-semibold"
                      to={"/contact"}
                    >
                      Contact
                    </Active>
                  </li>
              </ul>
            </div>
            <div className="navbar-end">
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <label
                    className="btn btn-ghost btn-circle"

                  >
                    <div className="indicator">
                      {
                        theme === "dark" ? <CiLight onClick={handleThemeSwitch} className="text-2xl dark:text-[#04bd48] "></CiLight> :
                          <RiMoonFoggyFill onClick={handleThemeSwitch} className="text-2xl text-[#04bd48] "></RiMoonFoggyFill>
                      }

                    </div>
                  </label>
                </div>
                {/* <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <FaBell className="text-2xl" />
                      <span className="badge badge-sm indicator-item">8</span>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow-2xl rounded"
                  >
                    <div className="card-body">
                      <span className="font-bold text-sm md:text-base capitalize">8 unread notification</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar "
                  >
                    <div className=" rounded-full ">
                      {/* profile */}
                      <Active to={`/login`}>
                        <BiUserCircle className="text-3xl mt-[2px]"></BiUserCircle>
                      </Active>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content p-2 shadow-2xl rounded  dark:bg-[#2a2d34] bg-white w-52 mt-4"
                  >
                    <li>
                      <button className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </button>
                    </li>
                    <li>
                      <button>Settings</button>
                    </li>
                    <li>
                      <button>Logout</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;