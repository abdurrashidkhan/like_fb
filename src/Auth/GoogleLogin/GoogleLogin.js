import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../common/Loading/Loading";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  useEffect(() => {
    if (user) {
      navigate("/home");
      Swal.fire("Login successfully", "", "success");
    }
  }, [user, navigate]);

  let errorElement = "";
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-2 ">
      <div 
        className="flex items-center justify-center px-4 gap-3 w-full h-auto" onClick={() => signInWithGoogle()}>
        <FcGoogle />
        <h1 className="text-xl">Login With Google</h1>
      </div>
    </div>
  );
};

export default SocialLogin;
