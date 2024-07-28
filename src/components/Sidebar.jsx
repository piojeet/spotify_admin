
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/assets'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-[#003a10] min-h-screen pl-[4vw]'>
      <img src={assets.Logo} className='mt-5 w-[max(10vw,100px)] sm:block hidden' alt="" />
      <img src={assets.Small_logo} className='mt-5 w-[max(4vw,40px)] mr-5 sm:hidden block' alt="" />

      <div className='flex flex-col gap-5 mt-10'>

        <NavLink to='/add-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium'>
          <img src={assets.Add_song} className='w-5' alt="" />
          <p className='hidden sm:block'>Add Song</p>
        </NavLink>

        <NavLink to='/list-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium'>
          <img src={assets.List_song} className='w-5' alt="" />
          <p className='hidden sm:block'>List Song</p>
        </NavLink>

        <NavLink to='/add-album' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium'>
          <img src={assets.Add_album} className='w-5' alt="" />
          <p className='hidden sm:block'>Add Album</p>
        </NavLink>

        <NavLink to='/list-album' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00ff5b] text-sm font-medium'>
          <img src={assets.Add_album} className='w-5' alt="" />
          <p className='hidden sm:block'>List Album</p>
        </NavLink>
      </div>
      
    </div>
  )
}

export default Sidebar
