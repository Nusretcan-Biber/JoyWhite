import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { NavbarComponent } from "../../Components/Navbar/NavbarComponent";
import { FooterComponent } from "../../Components/Footer/FooterComponent";
import PhotoHeroSection from "../../Components/HeroSection/PhotoHeroSection";
import CampsComponent from "../../Components/Camps/CampsComponent";
import { InstaSection } from "../../Components/InstaSection/InstaSection";
import { campLocations } from "../../Components/data/dummydata";

const CampsByLocation = () => {
  const { location } = useParams<{ location: string }>();
  const activeLocation = campLocations.find((loc) => loc.key === location);

  if (!activeLocation) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <div className="h-full min-h-screen ">
        <NavbarComponent />

        <PhotoHeroSection sectionName={`${activeLocation.name} Kamp Tarihleri`} />

        <CampsComponent showFilter locationKey={activeLocation.key as "sarikamis" | "ergan"} />

        <InstaSection />

        <FooterComponent />
      </div>
    </>
  );
};

export default CampsByLocation;
