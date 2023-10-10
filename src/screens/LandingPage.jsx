import React from 'react'
import TopBar from '../components/landingPageComponents/TopBar'
import Header from '../components/landingPageComponents/Header'
import WhyChooseUs from '../components/landingPageComponents/WhyChooseUs'
import Cards from '../components/landingPageComponents/Cards'
import AboutUs from '../components/landingPageComponents/AboutUs'
import Testomonials from '../components/landingPageComponents/Testomonials'
import DownloadsLink from '../components/landingPageComponents/DownloadsLink'
import OurPlan from '../components/landingPageComponents/OurPlan'
import Footer from '../components/landingPageComponents/Footer'

const LandingPage = () => {
  return (
    <>
  <TopBar />
   <Header />
  <WhyChooseUs />
  <Cards />
  <AboutUs />
  <Testomonials />
  <DownloadsLink />
  <OurPlan />
  <Footer />
  </>
  )
}

export default LandingPage
