import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#FFA500]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600 dark:text-[#FFFFFF] dark:text-opacity-60'>I am currently a student at Western Kentucky University working 
                towards my Masters in Computer Science. I have loved coding ever since I was in middle school and it has 
                been a passion of mine ever since. The idea of computer science in a whole has captivated me for as long
                as I can remember. The field of science is so broad and open to customizations that anyone who takes the 
                time in to learn and grow with it can become proficient in almost anything they want. That is why I love 
                computer science.</p>

                <p className='py-2 text-gray-600 dark:text-[#FFFFFF] dark:text-opacity-60'>Software Development is something I am very passionate about. Creating applications that can help
                people or offer services for those who need it is something I take great pride in. Java is my main coding language but I have
                learned many more since my start. It is a goal of mine to create an application that can help the world expand and thrive.
                </p>
                
                <p className='py-2 text-gray-600 dark:text-[#FFFFFF] dark:text-opacity-60'>One of my interest in the computer science field is Front-End Development as well. I love 
                designing and creating websites that have multiple functionalities or serve creative purposes. Being able to 
                create something that anyone can simply search and view always interested me.</p>

                <p className='py-2 text-gray-600 dark:text-[#FFFFFF] dark:text-opacity-60'> If you want more information about who I am, <a href="https://i.postimg.cc/1RrLHrGK/Isaac-Lockwood-Resume-1.png" target='_blank' rel="noreferrer" className='underline hover:text-[#FFA500]'>here's my resume.</a>
                </p>
            </div>
            <div className='w-full h-auto m-auto border-2 border-[#FFA500] shadow-xl shadow-gray-400 dark:shadow-[#000] rounded-xl flex items-center justify-center p-4 hover:scale-[102%] ease-in duration-100'>
                <img className='rounded-xl' src='https://i.postimg.cc/VkBDLPyX/me.jpg' alt='Isaac'/>
            </div>
        </div>
    </div>
  )
}

export default About