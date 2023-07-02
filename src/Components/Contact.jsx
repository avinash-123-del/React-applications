import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='bg-gradient-to-b from-black to-gray-800 w-full text-white sm:pt-[60px] max-h-screen pt-[100px] overflow-hidden'>
            <div className='flex flex-col justify-center px-4 max-w-screen-lg mx-auto h-screen'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'> Submit the form below to get in touch with me.</p>
                </div>

                <div className='flex justify-center items-center '>
                    <form action="https://getform.io/f/1b396da3-f80f-4527-86e2-580fc861b27d"
                        method='POST'
                        className='flex flex-col w-full md:w1/2 '>
                        <input
                            type="text"
                            name='name'
                            required
                            placeholder='Enter name'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />
                        <input
                            type="email"
                            name='name'
                            required
                            placeholder='youremail@com'
                            className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />
                        <textarea
                            name='message'
                            required
                            placeholder='Enter Your Message'
                            rows={10}
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />

                        <button className='text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 mt-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Lets Talk</button>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact