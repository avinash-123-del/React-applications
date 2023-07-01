import React from 'react'
import css from '../images/css.png'
import github from '../images/github.png'
import javascript from '../images/javascript.png'
import react from '../images/react.png'
import tailwindcss from '../images/tailwindcss.png'
import bootstrap from '../images/Bootstrap.png'
import html from '../images/html.png'
const Portfolio = () => {

  const image = [
    {
      id: 1,
      src: html,
      style: 'shadow-orange-500',
      title: "HTML"
    },
    {
      id: 2,
      src: css,
      style: 'shadow-blue-400',
      title: "CSS"
    },
    {
      id: 3,
      src: javascript,
      style: 'shadow-yellow-500',
      title: "JavaScript"
    },
    {
      id: 4,
      src: github,
      style: 'shadow-white',
      title: "Github"
    },
    {
      id: 5,
      src: tailwindcss,
      style: 'shadow-sky-500',
      title: "TailwindCSS"
    },
    {
      id: 6,
      src: bootstrap,
      style: 'shadow-purple-500',
      title: "BootStrap"
    },
    {
      id: 7,
      src: react,
      style: 'shadow-cyan-500',
      title: "ReactJS"
    },
  ]
  return (
    <div name='experience' className='bg-gradient-to-b from-black to-gray-800 w-full text-white sm:pt-[80px] pt-[100px] md:h-screen'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-y-gray-500'>Experience</p>
          <p className='py-6'>There are the technologies I have worked with...</p>
        </div>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            image.map(({ id, src, style, title }) => (
              <div key={id} title={title} className={'shadow-md relative cursor-pointer  rounded-lg' + ' ' + style}>
                <div className='group flex align-top justify-center p-3 '>
                  <img className='rounded-md duration-200 group-hover:scale-75 group-hover:opacity-50' src={src} width={100} alt="ff" />

                  <div class="absolute  flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 class="font-dmserif hidden group-hover:inline  font-bold text-white">{title}</h1>
                  </div>
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