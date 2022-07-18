import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgFileDocument } from 'react-icons/cg'
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-[#FFA500]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">

          {/* left */}

          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl ease-in duration-100"
                  src="https://i.postimg.cc/NjnzdPnV/Contact-2.jpg"
                />
              </div>
              <div>
                <h2 className="py-2">Isaac Lockwood</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for full-time positions. Contact me and let's
                  talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                <a href="https://www.linkedin.com/in/isaac-lockwood/" target='_blank' rel="noreferrer">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100 text-[#FFA500]'>
                                <FaLinkedinIn />
                        </div>
                    </a>
                    <a href="https://github.com/Lockwood-02" target='_blank' rel="noreferrer">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100 text-[#FFA500]'>
                                <BsGithub />
                        </div>
                    </a>
                    <a href="mailto:isaaclockwood618@gmail.com">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100 text-[#FFA500]'>
                                <FiMail />
                        </div>
                    </a>
                    <a href="https://i.postimg.cc/1RrLHrGK/Isaac-Lockwood-Resume-1.png" target='_blank' rel="noreferrer">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100 text-[#FFA500]'>
                                <CgFileDocument />
                        </div>
                    </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">

                <form action="">
                    <div className="grid md: grid-cols-2 gap-4 w-full py-2">
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">Name</label>
                            <input 
                                className='border-2 rounded-lg p-3 flex border-gray-300' 
                                type="text" 
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">Phone Number</label>
                            <input 
                                className='border-2 rounded-lg p-3 flex border-gray-300' 
                                type="text" 
                            />
                        </div>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Email</label>
                        <input 
                            className='border-2 rounded-lg p-3 flex border-gray-300' 
                            type="email"
                        />
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Subject</label>
                        <input 
                            className='border-2 rounded-lg p-3 flex border-gray-300' 
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Message</label>
                        <textarea className="border-2 rouned-lg p-3 border-gray-300" rows="10"></textarea>
                    </div>
                    <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
                </form>

            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
            <Link href='/'>
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-100">
                    <HiOutlineChevronDoubleUp className="text-[#FFA500]" size={30}/>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
