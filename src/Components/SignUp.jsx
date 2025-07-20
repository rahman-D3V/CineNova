import React, { useRef, useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import formValidation from '../Utils/ValidateForm';
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import  {auth}  from '../Utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/UserSlice';



const Signup = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [errorMessage, setErrorMessage] = useState(null);

  function handleSignup(e){
    e.preventDefault();

    //form valiadtion 
    const message = formValidation(email.current.value,password.current.value)
    setErrorMessage(message)

    //----SignUp Logic----
    if(message) return;

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);

        //Just After SignUp - Update the user Profile

        updateProfile(user, {
          displayName: name.current.value
        }).then(() => {

          const {uid,email,displayName} = auth.currentUser;
          dispatch(addUser({uid:uid, email:email, displayName:displayName}))

          navigate("/browse")
        }).catch((error) => {
          console.log(error);
          navigate("/error")
          
        });

      
      
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorMessage)
  });


  }


  return (
    <div className='relative'>

      <Header/>

      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg" alt="" />
      </div>

      <div className='w-[30%] mx-auto bg-black/75 relative top-50 text-white px-20 py-10 rounded-xl'>
        <form className='space-y-2.5 '>
          <h2 className='text-3xl font-bold'>Sign Up</h2>
          <input ref={name} type="text"  placeholder='Name'  className='bg-gray-700 px-4 py-4 w-full rounded-md'/> <br />
          <input ref={email}  onChange={() => setErrorMessage(null)} type="text"  placeholder='Email'  className='bg-gray-700 px-4 py-4 w-full rounded-md'/> <br />
          <input ref={password} onChange={() => setErrorMessage(null)} type="password" placeholder='Password'className='bg-gray-700 px-4 py-4 w-full rounded-md' /> <br />
          {
            errorMessage ? <p className='text-red-700 font-bold'>{errorMessage}</p> : ""
          }
          <button onClick={handleSignup} type='submit' className='bg-red-600 w-full px-3 py-2 rounded-md'>Sing Up</button>
        </form>
      </div>


    </div>
  )
}

export default Signup