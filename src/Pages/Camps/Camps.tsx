import React from "react";
import { NavbarComponent } from "../../Components/Navbar/NavbarComponent";
import { FooterComponent } from "../../Components/Footer/FooterComponent";
import PhotoHeroSection from "../../Components/HeroSection/PhotoHeroSection";
import CampsComponent from "../../Components/Camps/CampsComponent";
import { InstaSection } from "../../Components/InstaSection/InstaSection";

const Camps = () => {
  return (
    <>
      <div className="h-full min-h-screen ">
        <NavbarComponent />

        <PhotoHeroSection sectionName="Eğitimlerimiz" />

        <CampsComponent showFilter />

        <InstaSection />

        <FooterComponent />
      </div>
    </>
  );
};

export default Camps;
