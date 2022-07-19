import React from 'react'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const firstWebsite = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-20' />
            <Image className='absolute z-10' layout='fill' objectFit='cover' src='https://i.postimg.cc/2yT0fqX3/First-Website.png' alt='First Website'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-30 p-2'>
                <h2 className='py-2'>First Website</h2>
                <h3>HTML / CSS / JavaScript</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p className='text-[#FFA500] text-xl uppercase'>Project</p>
                <h2>Overview</h2>
                <p>
                    This website was created using HTML, CSS, and JavaScript and was built for the purpose
                    of being a portfolio. It is hosted on AWS and can be visited using the button below. 
                    This was one of the first times I incorporated JavaScript into a project and I decided
                    to add different theme selections with the website. Using local storage, it saves that 
                    theme for the next time you visit the site. In this project I learned much more about 
                    JavaScript and how it can be utilized to save information. I also learned how to use 
                    media query in CSS to make the website fully responsive.
                </p>
                <a href='http://isaac-lockwood-demo.s3-website-us-east-1.amazonaws.com/' target='_blank' rel="noreferrer"><button className='px-8 py-2 mt-4 mr-8'>Demo</button></a>
                <a href='https://github.com/Lockwood-02' target='_blank' rel="noreferrer"><button className='px-8 py-2 mt-4'>Code</button></a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-[#000] rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 dark:text-[#FFFFFF] dark:text-opacity-60 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />HTML</p>
                        <p className='text-gray-600 dark:text-[#FFFFFF] dark:text-opacity-60 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />CSS</p>
                        <p className='text-gray-600 dark:text-[#FFFFFF] dark:text-opacity-60 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />JavaScript</p>
                        <p className='text-gray-600 dark:text-[#FFFFFF] dark:text-opacity-60 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />AWS</p>

                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer hover:text-[#FFA500]'>Back</p>
            </Link>
        </div>
    </div>
  )
}

export default firstWebsite