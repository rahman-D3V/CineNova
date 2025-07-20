import React, { useRef, useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import formValidation from '../Utils/ValidateForm';
import { auth } from '../Utils/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/UserSlice';

const Login = () => {

      
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const [errorMessage, setErrorMessage] = useState(null);
 
      const email = useRef()
      const password = useRef()

      function handleLogin(e){
        e.preventDefault()
        if(email.current.value === "" || password.current.value === "") return;
        
        
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const {uid, email, displayName} = user;
            dispatch(addUser({uid:uid, email:email, displayName:displayName}))
            navigate("/browse")
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage("Invalid-Credentials")
            
          });

      }


      //Making a Demo Account for Convinience
      function demoAccont(){
        const demoEmail = 'hr36@gmail.com';
        const demoPassword = "Yasir@123";

        email.current.value = demoEmail;
        password.current.value = demoPassword;
      }

     
      

  return (
    <div className='relative'>

      <Header/>

      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg" alt="" />
      </div>

      <div className='w-[30%] mx-auto bg-black/75 relative top-50 text-white px-20 py-10 rounded-xl'>

        <form className='space-y-2.5 '>

          <h2 className='text-3xl font-bold'>Sign In</h2>

          <input onChange={() => setErrorMessage(null)}  ref={email} type="text"  placeholder='Email..'  className='bg-gray-700 px-4 py-4 w-full rounded-md'/> <br />

          <input onChange={() => setErrorMessage(null)} ref={password}  type="password" placeholder='Password..'className='bg-gray-700 px-4 py-4 w-full rounded-md' /> <br />

          {
            errorMessage ? <p className='text-red-700 font-bold'>{errorMessage}</p> : ""
          }

          <button  onClick={handleLogin} type='submit' className='bg-red-600 w-full px-3 py-2 rounded-md'>Sign In</button>

          <h2 className=' text-center'>OR</h2>

          <button className='font-bold bg-gray-500 w-full px-3 py-2 rounded-md'>Use a sign-in code</button>

          <h2 className='text-center underline'>Forget Password?</h2>

          <h2>New to Netflix? <Link to={"/signup"} className='hover:underline'>Sign up now.</Link> </h2>

          <h2 onClick={demoAccont} className='text-blue-600 cursor-pointer '>Demo Account</h2>

        </form>

      </div>


    </div>
  )
}

export default Login