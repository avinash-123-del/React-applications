import React, { useState,useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import avinash from '../images/avinash.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Navbar = () => {

  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'contact'
    },
    {
      id: 4,
      link: 'portfolio'
    },
    {
      id: 5,
      link: 'experience'
    },
  ]

  useEffect(() => {
    AOS.init({duration:1000})
},[])

  return (
    <div data-aos='fade-down' className='flex justify-between shadow-md shadow-slate-600 z-10 items-center w-full h-20 text-white fixed bg-black px-4 '>
      <Link to='/home'>
        <div className='flex justify-between items-center'>
          <img className='rounded-full' src={avinash} width={40} alt="profile" />
          <h1 className='text-xl ml-2 text-gray-300'>Avinash Chandraker</h1>
        </div>
      </Link>

      <ul className='hidden md:flex'>
        {
          links.map(({ id, link }) => (
            <li  key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 '>
              <Link to={link} duration={500}>{link}</Link>
            </li>
          ))

        }
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer  pr-4 text-gray-500 md:hidden'>
        {nav ? <AiOutlineClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>

      {
        nav && <ul key={links.id} className='flex flex-col justify-center items-center absolute  top-20 right-0 w-[50%] bg-gradient-to-b from-black to-gray-800 text-gray-500' >
          {
            links.map((link, index) => (
              <Link onClick={() => setNav(!nav)} to={link.link}><li key={index} className='px-4 cursor-pointer py-3 text-2xl'>{link.link}</li></Link>

            ))
          }
        </ul>
      }

    </div>

  )
}

export default Navbar