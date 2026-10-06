import React from "react";
import { NavbarComponent } from "../../Components/Navbar/NavbarComponent";
import { FooterComponent } from "../../Components/Footer/FooterComponent";
import PhotoHeroSection from "../../Components/HeroSection/PhotoHeroSection";
import CampLocationSelect from "../../Components/CampLocationSelect/CampLocationSelect";
import { InstaSection } from "../../Components/InstaSection/InstaSection";

const Camps = () => {
  return (
    <>
      <div className="h-full min-h-screen ">
        <NavbarComponent />

        <PhotoHeroSection sectionName="Kamp Tarihleri" />

        <CampLocationSelect
          title="Hangi Kamp Bölgesi?"
          intro="Kamp tarihlerini görmek için eğitim vermekte olduğumuz bölgelerden birini seçin."
        />

        <InstaSection />

        <FooterComponent />
      </div>
    </>
  );
};

export default Camps;
