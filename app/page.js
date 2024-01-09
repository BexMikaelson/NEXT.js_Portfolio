import Image from 'next/image'

import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectsSection'
import EmailForm from './components/EmailForm'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container mx-auto p-4">
      <Navbar></Navbar>
      <div className='container mx-auto px-12 py-4'>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <EmailForm/>
      </div>

    </main>
  )
}
