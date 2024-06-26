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
import ContactSection from '../layouts/HomePage/ContactSection'
import BannerSection from '../layouts/HomePage/BannerSection'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <BannerSection />
      <HeroSection />
      <AboutSection />
      <MyServiceLayout />
      <EAndESection />
      <QuoteSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <Footer status={1}/>
    </>
  )
}

export default HomePage