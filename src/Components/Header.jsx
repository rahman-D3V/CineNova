import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from '../Utils/Firebase'
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Redux/UserSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  function handleSignOut(){
      signOut(auth).then(() => {
        dispatch(removeUser())
        navigate("/");
        console.log("User Outtttt..");
        
      }).catch((error) => {
        navigate("/error")
      });

  }

  return (
    <div className='absolute flex items-center  justify-between w-screen px-8 py-3 z-10  bg-gradient-to-b from-black'>

      <Link to={'/'}>
      <img 
        className='w-40'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt="netflix-logo" />
      </Link>

      <div>
        {
        user ? <button onClick={handleSignOut} className='bg-red-600 text-white font-bold px-2 py-1 cursor-pointer hover:bg-red-700'>Sign out</button> : ""
        }
      </div>
      


    </div>
  )
}

export default Header