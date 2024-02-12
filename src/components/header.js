import React from 'react'
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons
const Header = () => {
  return (
    <header class=' bg-slate-800 max-w-screen-2xl mx-auto  flex sm:flex-row flex-col items-center  py-8 justify-between  px-14  cursor-default'>
    <div class='text-white  mr-auto text-center sm:text-left' >
    <div class=' font-medium text-xl  '>Store</div>
    <div class='font-sans  '>Just another React Demo site</div>
    </div>

    <form className="">
      <div className='relative'>
             <FaSearch className='absolute text-gray-700 left-4 top-3'/>
            <input type="text" placeholder="Search Products" class='  shadow py-2 px-2 rounded text-center'/>   
    </div>
    </form>
  </header>
    
  )
}

export default Header
