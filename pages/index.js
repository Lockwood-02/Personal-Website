import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Isaac | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://i.postimg.cc/x8J5Qvfn/icon-Copy.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"/> 
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
    </div>
  )
}
