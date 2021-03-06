import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";
import { MyApp } from "../pages/_app";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState(null);
  const [linkColor, setLinkColor] = useState("#1f2937");

  const router = useRouter();

  // Controls the color of the navbar

  // useEffect(() => {
  //   if (
  //     router.asPath === "/firstWebsite" ||
  //     router.asPath === "/toDoListApp" ||
  //     router.asPath === "/businessSite" ||
  //     router.asPath === "/portfolioSite"
  //   ) {
  //     setNavBg("transparent");
  //     setLinkColor("#ecf0f3");
  //     setShadow(false)
  //   } else {
  //     setNavBg("#ecf0f3");
  //     setLinkColor("#1f2937");
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      // style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl dark:shadow-[#000] z-[100] bg-[#ecf0f3] dark:bg-[#121212]"
          : "fixed w-full h-20 z-[100] bg-[#ecf0f3] dark:bg-[#121212]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="https://i.postimg.cc/282YxKrw/icon-NBOrange.png"
            alt="LOGO"
            width="125"
            height="125"
          />
        </Link>
        <div>
          <ul 
          //style={{ color: `${linkColor}` }} 
          className="hidden md:flex text-[#1f2937] dark:text-[#FFFFFF]">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:text-[#FFA500]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:text-[#FFA500]">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:text-[#FFA500]">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:text-[#FFA500]">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:text-[#FFA500]">
                Contact
              </li>
            </Link>
          </ul>

          {/* Mobile */}

          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu style={{ color: `${linkColor}` }} size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-500"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#121212] p-10 ease-in duration-500"
              : "fixed right-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  className="cursor-pointer"
                  src="https://i.postimg.cc/Qdzr2KBK/icon-Orange.png"
                  alt="LOGO"
                  width="85"
                  height="85"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-[#000] p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w=[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#FFA500]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/isaac-lockwood/"
                  target="_blank" rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100 text-[#FFA500]">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://github.com/Lockwood-02" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100 text-[#FFA500]">
                    <BsGithub />
                  </div>
                </a>
                <a href="mailto:isaaclockwood618@gmail.com">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100 text-[#FFA500]">
                    <FiMail />
                  </div>
                </a>
                <a
                  href="https://i.postimg.cc/1RrLHrGK/Isaac-Lockwood-Resume-1.png"
                  target="_blank" rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100 text-[#FFA500]">
                    <CgFileDocument />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
