import { useEffect, useState } from 'react'
import { createBrowserRouter, Router, RouterProvider, useNavigate } from 'react-router-dom'
import Login from './Components/Login'
import Browse from './Components/Browse'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import { auth } from './Utils/Firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from './Redux/UserSlice'

function App() {

  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element:<Home/>
    },
    {
      path: "/login",
      element : <Login/>
    },
    {
      path: "/signup",
      element : <SignUp/>
    },
    {
      path: "browse",
      element : <Browse/>
    }
  ])


  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //      const {uid,email,displayName} = user;
  //       dispatch(addUser({uid:uid, email:email, displayName:displayName}))
  //     } else {
  //       dispatch(removeUser())
  //     }
  //   });
  // },[])

  return (
    <div className=''>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
