import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const NavBar = () => {
    const navigate = useNavigate()
  return (
    <div className='fixed z-5 w-full backdrop-2xl flex justify-between
    items-center py-3 px-4 sm:px-20 xl:px-32 cursor-pointer' >
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Logo not found" 
    className='w-32 sm:w-44' onClick={()=>navigate('/')}/>
    <button className='flex items-center gap-2 rounded-full text-sm cursor-pointer 
    bg-primary text-white px-10 py-2.5 '>Get Started <ArrowRight className='w-4 h-4'/></button>
    </div>
  )
}

export default NavBar