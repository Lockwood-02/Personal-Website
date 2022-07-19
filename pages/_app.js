import '../styles/globals.css'
import NavBar from '../components/Navbar'
import React, { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState(null);

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

  return (
  <>
    <button
      type="button"
      onClick={handleThemeSwitch}
      className="fixed z-100 right-2 top-24 bg-[#FFA500] text-lg p-1 rounded-md"
    >
      {theme === 'dark' ? '🌑' : '☀️'}
    </button>

    <div className='bg:white dark:bg-[#121212]'>
      <NavBar />
      <Component {...pageProps} />
    </div>
  </>
  )
}

export default MyApp