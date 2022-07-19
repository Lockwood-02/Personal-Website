import React from 'react'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const firstWebsite = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-20' />
            <Image className='absolute z-10' layout='fill' objectFit='cover' src='https://i.postimg.cc/PJVghFPg/Business-Site.png' alt='Business Site'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-30 p-2'>
                <h2 className='py-2'>Business Site</h2>
                <h3>HTML / CSS</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p className='text-[#FFA500] text-xl uppercase'>Project</p>
                <h2>Overview</h2>
                <p>
                    This website was created using HTML and CSS and was built for the purpose of portraying a business such as a freelancer.
                    This website tested the boundaries of what I could do with CSS. Most of the HTML was straightforward but I tried to see 
                    what could be accomplished with CSS. The site is also fully responsive. I learned a lot about ways you can style using 
                    CSS and how to add animations using different tactics all without JavaScript. Now it can be used as a template for many other 
                    businesses. You can visit the site using the buttons below.
                </p>
                <a href='http://isaac-lockwood-website.s3-website-us-east-1.amazonaws.com/' target='_blank' rel="noreferrer"><button className='px-8 py-2 mt-4 mr-8'>Demo</button></a>
                <a href='https://github.com/Lockwood-02/BusinessSite' target='_blank' rel="noreferrer"><button className='px-8 py-2 mt-4'>Code</button></a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 dark:shadow-[#000] rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 dark:text-[#FFFFFF] dark:text-opacity-60 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />HTML</p>
                        <p className='text-gray-600 dark:text-[#FFFFFF] dark:text-opacity-60 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />CSS</p>
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