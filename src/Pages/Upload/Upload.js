import React, { useState } from 'react';
import { FiUser } from "react-icons/fi";
import { RiLiveFill } from "react-icons/ri";
import { IoMdPhotos } from "react-icons/io";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../common/Loading/Loading';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ["JPG", "PNG", "GIF"];


const Upload = () => {
  const [user, loading, error] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const email = user?.email;
  // upload photo drag in drop

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const onSubmit = (data) => {
    const imgbbAPIKey = "e32b2607a3f00cb963832ebb13d8a672";
    // const image = data.file[0];
    const image = file[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result?.data?.url;
          const user = {
            image: img,
          };

          fetch(`https://eventy-server.vercel.app/user-update/${email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted) {
                reset();
                setFile(null);
                navigate("/manage-profile");
                // toast.success("Profile Picture Updated Successfully");
                setOpen(false);
              }
            });
        }
      });
  };
  // console.log();
  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    return console.log(error);
  }
  console.log(open);
  return (
    <div className="dark:bg-[#122033] bg-[#fff] shadow-2xl rounded-b mt-[5rem]">
      <div className='container mx-auto px-4 py-6'>
        <div className="">
          <div className="flex gap-5 items-center">
            <div className="">
              {/* images */}
              <FiUser className='text-4xl'></FiUser>
            </div>
            <div className="w-full">
              <label htmlFor="my-modal" type="button" className='dark:bg-[#091527] bg-[#ececec] rounded-full pl-5 text-xl py-2 pb-3 text-[#999999] w-full focus:outline-none text-start' >
                What's on your mind , {user?.displayName} ?
              </label>
              <input type="checkbox" id="my-modal" className="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box rounded">
                      <form
                        id="post"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <label
                          for="profile_picture"
                          class="btn btn-sm btn-circle bg-red-500 hover:bg-red-600 border-none absolute right-2 top-2"
                        >
                          ✕
                        </label>
                        <div className="mt-10">
                          <FileUploader
                            handleChange={handleChange}
                            multiple={true}
                            name="file"
                            types={fileTypes}
                          />
                          {file && (
                            <p
                              className={`pt-4 text-sm font-medium text-slate-700`}
                            >
                              {file &&
                                `Selected File Name: ${file[0].name}`}
                            </p>
                          )}
                          {!file && (
                            <p
                              className={`pt-4 text-sm text-red-600 font-medium`}
                            >
                              {!file && "No File Uploaded Yet !"}
                            </p>
                          )}
                        </div>
                        <div class="modal-action">
                          {file ? (
                            <label for="profile_picture" class="w-full">
                              <input
                                className="block w-full bg-blue-700 hover:bg-blue-600 text-white text-center py-2 rounded cursor-pointer"
                                type="submit"
                                value="SAVE"
                              />
                            </label>
                          ) : (
                            <label
                              aria-disabled
                              aria-readonly
                              for=""
                              class="block w-full bg-blue-200 text-white text-center py-2 rounded"
                            >
                              SAVE
                            </label>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
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
{/* <div className="">
                      <div className="flex gap-3 items-center">
                        <img className='w-[60px] h-[60px] rounded-full' src={user?.photoURL} alt="" />
                        <div className="">
                          <p className='text-xl'>{user?.displayName}</p>
                          <p className='text-sm dark:text-slate-300 text-slate-700'>28 May 2023 at 5:28 PM</p>
                        </div>
                      </div>
                    </div> */}