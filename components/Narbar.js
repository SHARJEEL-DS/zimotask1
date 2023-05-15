import React from 'react'
import Image from 'next/image'
// import PersonIcon from '@material-ui/icons/Person';
import {GrDownload} from 'react-icons/Gr'

import {AiOutlineMenu} from 'react-icons/Ai'
// import { CLIENT_PUBLIC_FILES_PATH } from 'next/dist/shared/lib/constants'

 const Narbar = () =>{
  return (
    

<nav class="bg-black border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="" class="flex items-center">
      
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">ZIMO <GrDownload/></span>
  </a>
  <div class="flex md:order-2">
  {/* <PersonIcon/> */}
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
      <img src="\images.jpg" class="h-8 mr-3" alt="" />
      </li>
      
      
    </ul>
  </div>
  </div>
</nav>


    
    
    
  )
}

export default Narbar