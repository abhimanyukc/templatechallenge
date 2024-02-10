import React from 'react'
import { FaTrash } from 'react-icons/fa'; // Import the delete icon from react-icons
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="flex flex-col sm:flex-row max-w-screen-2xl lg:mx-auto bg-black text-white  py-8 px-14 items-center justify-between">
        
          <div class="flex flex-col sm:flex-row ">
            <div>Shop</div>
            <div>About Us</div>
            <div>Contact Us</div>
            <div>News</div>
            <div>My Account</div>
          </div>
          <div class="flex flex-col sm:flex-row ">
            <div class="">$0.00(0 items)</div>
            <div><FaTrash/></div>
          </div>  
    </nav>
  )
}

export default Nav
