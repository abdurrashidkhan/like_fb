import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Swal from 'sweetalert2';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const location = useLocation();
  let navigate = useNavigate();
  // const form = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate('/');
      // Swal.fire("already login", "", "success");
    }
  }, [user, navigate]);


  if (loading) {
    return <p>loading ...</p>
  }


  if (!user) {
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
  }
  return children;
};
export default RequireAuth;