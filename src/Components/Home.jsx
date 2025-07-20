import React from "react";
import Header from "./Header";
import { Link } from 'react-router-dom'


export default function HeroSection() {
  return (
   <div>

    <Header/>

     <div className="relative h-screen w-full bg-black">
      {/* Background image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg" // replace with your background image
        alt="Netflix Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-2xl">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-lg mt-4">Starts at ₹149. Cancel at any time.</p>
        <p className="mt-2">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* Email form */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full max-w-xl justify-center">
         <Link to={"/login"}>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-semibold cursor-pointer">
            Sign In 
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-semibold cursor-pointer">
              Get Started →
            </button>
          </Link>
        </div>
      </div>
    </div>

   </div>
  );
}
