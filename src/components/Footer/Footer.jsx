import React from 'react'
import { FaHeart, FaInstagram } from 'react-icons/fa'
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdAdd, MdOutlineAlternateEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='w-full flex flex-col items-center mb-10 '>
            <div className="social_icons my-4 flex items-center justify-center gap-4 text-3xl ">
                <a title='Instgram' href="https://instgram.com/itz_pa1/">
                    <FaInstagram />
                </a>
                <a title='Linkedin' href="https://linkedin.com/in/itzpa1/">
                    <FiLinkedin />
                </a>
                <a title='Github' href="https://github.com/itzpa1/">
                    <FiGithub />
                </a>
                <a title='Mail' href="mailto:pawankumarfz12@gmail.com">
                    <MdOutlineAlternateEmail />
                </a>
            </div>
            <a className="redirect_btn cursor-pointer hover:bg-white duration-150 shadow-md my-4 shadow-black/20 flex items-center gap-1 rounded-full px-5 py-4 bg-white/80">
                <MdAdd className='text-xl ' />
                <h1 className='text-sm font-semibold  '>Create your custom links.Dir</h1>
            </a>
            <div className="creator my-2 flex items-center gap-1">
                <h1 className='text-sm font-medium'>&copy; 2024  Made with </h1>
                <FaHeart className='text-red-700 ' />
                <h1 className='text-sm font-medium'>by <a className='underline hover:text-blue-500 ' href="https://linkedin.com/in/itzpa1/">itzpa1</a></h1>
            </div>
        </div>
    )
}

export default Footer