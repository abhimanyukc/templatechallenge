import React from 'react'
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons
const Header = () => {
  return (
    <header class=' bg-slate-800 max-w-screen-2xl mx-auto  flex sm:flex-row flex-col items-center  py-8 justify-between  px-14 '>
    <div class='text-white  ' >
    <div class=' font-medium text-xl '>Store</div>
    <div class='font-sans '>Just another WordPress Demo site</div>
    </div>

    <form class="">
             <FaSearch/>
            <input type="text" placeholder="Search Products" class='  shadow py-2 px-2 rounded text-center'/>   
    </form>
  </header>
    
  )
}

export default Header
