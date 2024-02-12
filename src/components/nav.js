import React from 'react'
import { FaTrash } from 'react-icons/fa'; // Import the delete icon from react-icons
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex flex-col items-center justify-between py-8 text-white bg-black sm:flex-row max-w-screen-2xl lg:mx-auto px-14">
      <div className="flex flex-col mr-auto sm:flex-row">
        <div class="font-bold cursor-pointer hover:text-gray-500 ">Shop</div>
        <div className="cursor-pointer md:ml-4 hover:text-gray-500">About Us</div>
        <div className="cursor-pointer md:ml-4 hover:text-gray-500">Contact Us</div>
        <div className="cursor-pointer md:ml-4 hover:text-gray-500">News</div>
        <div className="cursor-pointer md:ml-4 hover:text-gray-500">My Account</div>
      </div>
      <div className="flex flex-col mr-auto md:items-center md:mr-0 sm:flex-row sm:mt-0"> 
        <div className="cursor-default "> 
          $0.00(0 items)
        </div>
        <div class="text-red-700 md:ml-20 "><FaTrash /></div>
      </div>
    </nav>
  )
}

export default Nav
