import React from 'react'
// import photo from '../images/photo.png'
const About = () => {
    const about = [
        {
            id: 1,
            item: 'Name',
            detail: 'Avinash Chandraker'
        },
        {
            id: 2,
            item: 'DOB',
            detail: '06 May 1997',
        },
        {
            id: 3,
            item: 'Contact Number',
            detail: '6268745654'
        },
        {
            id: 4,
            item: 'Address',
            detail: 'Singdai ward no. 50, Rajnandgaon Chhattisgarh'
        },
        {
            id: 5,
            item: 'Qualification',
            detail: 'M.Tech(2022)'
        },
        {
            id: 6,
            item: 'Freelance',
            detail: 'Available'
        },
    ]
    return (
        <div name='about' className=' pt-[100px]  w-full bg-gradient-to-b from-black to-gray-800 text-white '>
            {/* <div className='flex justify-between items-center pt-[200px] max-w-full w-[90%]'> */}
            {/* <div>
                    <img src={photo} alt="" width={1500} />
                </div> */}

            <div className=' p-4 mx-auto flex flex-col  w-[90%] sm:w-[70%] max-w-full h-screen '>
                <div className='pb-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <div>
                    <p className='text-gray-200 text-sm sm:text-base'>Welcome to my portfolio! I'm Avinash Chandraker, a passionate front-end developer dedicated to creating exceptional web experiences. With expertise in HTML, CSS, Bootstrap, React, JavaScript, Tailwind CSS, REST API, Git, and GitHub, I craft clean and clear code to bring ideas to life.As you explore my portfolio, you'll find a diverse range of projects that highlight my capabilities. Each project is meticulously crafted, incorporating the best practices of front-end development. From stunning designs to seamless user interactions, I ensure that every aspect of a website contributes to an outstanding user experience.</p>
                </div>
                <br />
                <div className='border-2 sm:text-base text-sm border-red-500 flex flex-col sm:grid grid-cols-2 gap-3 justify-between items-start p-4 sm:w-[70%] max-w-full'>
                    {
                        about.map(({ id, item, detail }) => (
                            <p key={id}><span className='text-gray-400 font-semibold'>{item}</span> : {detail}</p>
                        ))
                    }
                </div>
                <br />
                <div className=''>
                    <a href="/Avinash_Chandraker_Resume.pdf" download={true}>
                        <button className='relative bg-gradient-to-r from-blue-600 to to-blue-900 px-2 py-3 rounded-md text-gray-200 -'>Download CV
                            <span className="absolute top-[-5px] right-[-5px] flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-200 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            </span>

                        </button>
                    </a>
                </div>
            </div>

        </div>
        //  </div>
    )
}
export default About