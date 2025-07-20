import { useState } from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Login from './Components/Login'
import Browse from './Components/Browse'
import Home from './Components/Home'
import SignUp from './Components/SignUp'

function App() {

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

  return (
    <div className=''>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
