import React from 'react'
import { data } from '../Data'
const Portfolio = () => {

  return (
    <div name='portfolio' className='bg-gradient-to-b pt-[100px] from-black to-gray-800 w-full text-white'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-y-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work here...</p>
        </div>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            data.map(({ id, code, demo, name, image }) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg group'>

                <div className='flex justify-center items-center relative'>
                  <a href={demo} target='_blank'>
                    <img
                      className='rounded-sm duration-200 group-hover:scale-110 group-hover:opacity-30' src={image} width={280} alt={name} />
                  </a>
                  <span className='hidden group-hover:inline group-hover:scale-110 duration-200 absolute'>{name}</span>
                </div>

                <div className='flex items-center justify-between w-[60%] m-auto '>
                  <a href={demo} target='_blank' rel='noreferrer'><button className='w-1/2 pt-3 pb-2 duration-200 hover:scale-105'>Demo</button></a>
                  <a href={code} target='_blank'rel='noreferrer'><button className='w-1/2 pt-3 pb-2 duration-200 hover:scale-105'>Code</button></a>
                </div>

              </div>
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Portfolio