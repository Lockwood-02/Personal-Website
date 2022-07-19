import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { CgFileDocument } from 'react-icons/cg'
import { FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600 dark:text-[#FFFFFF] dark:text-opacity-70'>Let's build something together</p>
                <h1 className='py-4 text-gray-700 dark:text-[#FFFFFF] dark:text-opacity-80'>Hi, I'm <span className='text-[#FFA500]'>Isaac</span></h1>
                <h1 className='py-2 text-gray-700 dark:text-[#FFFFFF] dark:text-opacity-80'>A Software Developer</h1>
                <p className='py-4 text-gray-600 dark:text-[#FFFFFF] dark:text-opacity-70 max-w-[70%] m-auto'>
                    I'm a software developer specializing in building (and occasionally designing) exceptional digital experiences.
                    Currently, I am studying computer science at Western Kentucky University and am looking to expand my horizons.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href="https://www.linkedin.com/in/isaac-lockwood/" target='_blank' rel="noreferrer">
                        <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-[#000] p-6 cursor-pointer hover:scale-110 ease-in duration-100 text-[#FFA500]'>
                                <FaLinkedinIn />
                        </div>
                    </a>
                    <a href="https://github.com/Lockwood-02" target='_blank' rel="noreferrer">
                        <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-[#000] p-6 cursor-pointer hover:scale-110 ease-in duration-100 text-[#FFA500]'>
                                <BsGithub />
                        </div>
                    </a>
                    <a href="mailto:isaaclockwood618@gmail.com">
                        <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-[#000] p-6 cursor-pointer hover:scale-110 ease-in duration-100 text-[#FFA500]'>
                                <FiMail />
                        </div>
                    </a>
                    <a href="https://i.postimg.cc/1RrLHrGK/Isaac-Lockwood-Resume-1.png" target='_blank' rel="noreferrer">
                        <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-[#000] p-6 cursor-pointer hover:scale-110 ease-in duration-100 text-[#FFA500]'>
                                <CgFileDocument />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main