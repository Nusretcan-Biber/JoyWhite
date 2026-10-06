import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import { NavbarComponent } from '../../Components/Navbar/NavbarComponent'
import Services from '../../Components/Services/Services'
import Contact from '../../Components/Contact/Contact'
import { FooterComponent } from '../../Components/Footer/FooterComponent'
import CampLocationSelect from '../../Components/CampLocationSelect/CampLocationSelect'
import { InstaSection } from '../../Components/InstaSection/InstaSection'
import FAQ from '../../Components/FAQ/FAQ'
import AboutVision from '../../Components/AboutVision/AboutVision'
import WinterCampContent from '../../Components/WinterCampContent/WinterCampContent'
import KidsCampContent from '../../Components/KidsCampContent/KidsCampContent'
import DailySchedule from '../../Components/DailySchedule/DailySchedule'

const MainPage = () => {
  return (
    <>
    <div className="h-full min-h-screen ">
        <NavbarComponent/>
        <HeroSection/>
        <CampLocationSelect/>
        <FAQ/>
        <AboutVision/>
        <WinterCampContent/>
        <KidsCampContent/>
        <DailySchedule/>
        <Contact/>
        <Services/>
        <InstaSection/>
        <FooterComponent/>
      </div>
    </>
  )
}

export default MainPage
