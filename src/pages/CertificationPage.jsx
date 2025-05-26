import React from 'react'
import Navbar from '../components/General/Navbar'
import CertificationLayout from '../layouts/CertificationLayout'
import Footer from '../components/General/Footer'

const CertificationPage = () => {
  return (
    <div>
      <Navbar isToggle={false}/>
      <CertificationLayout />
      <Footer />
    </div>
  )
}

export default CertificationPage