import React from 'react'
import ProjectCard from '../components/HomePage/ProjectCard'
import ProjectSection from '../layouts/HomePage/ProjectSection'
import Navbar from '../components/General/Navbar'
import EAndESection from '../layouts/HomePage/EAndESection'
import { Quote } from '@radix-ui/themes'
import QuoteSection from '../layouts/HomePage/QuoteSection'
import SkillsSection from '../layouts/HomePage/SkillsSection'
import MyServiceLayout from '../layouts/HomePage/MyServiceLayout'
import Footer from '../components/General/Footer'
import HeroSection from '../layouts/HomePage/HeroSection'
import AboutSection from '../layouts/HomePage/AboutSection'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MyServiceLayout />
      <EAndESection />
      <QuoteSection />
      <SkillsSection />
      <ProjectSection />
      <Footer />
    </>
  )
}

export default HomePage