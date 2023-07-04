import React from 'react'
import { Link } from 'react-router-dom'
import gmail from '../images/gmail.png'
import whatsapp from '../images/whatsapp.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import profile from '../images/profile.jpg'
const Home = () => {
const icons = [
    {
        id:1,
        icon:gmail,
        detail:'avichandraker@gmail.com'
    },
    {
        id:2,
        icon:whatsapp,
        detail:'6268745654'
    },
    {
        id:3,
        icon:instagram,
        detail:'aviiii7071'
    },
    {
        id:4,
        icon:facebook,
        detail:'Avii Chandraker'
    },
]
    return (
        <div name='home' className='pt-[90px]  sm:pt-1 w-full bg-gradient-to-b from-black to-gray-800 text-white h-full'>
            <div>

                <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center px-4 md:h-screen md:flex-row '>
                    <div className='flex flex-col justify-center '>
                        <h2 className='text-4xl md:text-3xl text-gray-400'>I'm a </h2>
                        <h2 className='text-4xl md:text-7xl text-gray-300 animate-scale '>Front End Developer</h2>
                        <br />
                        <p className='text-gray-300 '>
                        I have accumulated an impressive collection of projects that showcase my skills and proficiency in web development.
                            Currently, I have to work on web applications using technologies like React, Tailwind, JavaScript.
                        </p>
                        <div>
                            <Link to='/portfolio'>
                                <button
                                    className='px-3 py-2 my-2 rounded-md shadow-md hover:scale-110 duration-300 bg-gradient-to-r from-sky-500 to-blue-600 '>Portfolio</button>
                            </Link>
                        </div>

                    </div>

                    <div>
                        <img className='rounded-2xl mx-auto w-2/3 md:w-8/12 animate-wiggle'
                            src={profile} alt="profile" width={200} />
                
                    </div>
                </div>
            </div>
            <br />
            <div className='hidden md:flex justify-between items-center w-[70%] max-w-screen border-2 absolute bottom-0 right-[15%] py-4 px-9 rounded-t-3xl border-b-transparent'>
                {
                    icons.map(({id,detail,icon}) => (
                        <div key={id} className='text-sm flex items-center justify-between'>
                            <img src={icon} alt="" className='px-2' width={40} />{detail}</div>
                    ))
                }
                
             
            </div>

        </div>
    )
}

export default Home