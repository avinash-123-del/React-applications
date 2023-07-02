import React from 'react'
import github from '../images/github.png'
import gmail from '../images/gmail.png'
import resume from '../images/resume.png'
import linkedin from '../images/linkedin.png'
const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (<>
                LinkedIn <img src={linkedin} width={30} alt="" />
            </>),
            href: "https://www.linkedin.com/in/avinash-chandraker-99a667149/",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (<>
                GitHub <img src={github} width={30} alt="" />
            </>),
            href: "https://github.com/avinash-123-del",
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (<>
                Mail <img src={gmail} width={30} alt="" />
            </>),
            href: "mailto:avichandraker@gmail.com",
            style: 'rounded-tr-md'
        },
        {
            id: 4,
            child: (<>
                Resume <img src={resume} width={30} alt="" />
            </>),
            href: '/Avinash_Chandraker_Resume.pdf',
            style: 'rounded-tr-md',
            download:true
        },
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {
                    links.map((link) => (
                        <li key={link.id} className={`flex justify-around items-center w-40 h-14 px-3 ml-[-100px] rounded-md hover:ml-[-10px] bg-gray-700 ${link.style}`}>
                            <a className='flex justify-between items-center w-[80%] text-white' 
                            href={link.href} target='blank' title='Linkedin' download={link.download}>
                                <>
                                    {link.child}
                                </>
                            </a>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default SocialLinks