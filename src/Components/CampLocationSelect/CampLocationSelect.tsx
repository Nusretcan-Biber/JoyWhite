import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { campLocations } from "../data/dummydata";
import "./CampLocationSelect.css";

interface CampLocationSelectProps {
  title?: string;
  intro?: string;
}

const CampLocationSelect = ({
  title = "Kamp Tarihleri",
  intro = "Kamp tarihlerini görmek için eğitim vermekte olduğumuz bölgelerden birini seçin.",
}: CampLocationSelectProps) => {
  return (
    <section className="bg-white py-12">
      <div className="container px-6 py-10 mx-auto">
        <h2 className="section-heading-lg text-center capitalize">{title}</h2>
        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-logoBlue rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-logoBlue rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-logoBlue rounded-full"></span>
        </div>

        <p className="mt-10 text-center text-gray-500 max-w-2xl mx-auto">{intro}</p>

        <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 max-w-4xl mx-auto">
          {campLocations.map((location) => (
            <Link key={location.key} to={`/Trainings/${location.key}`} className="location-card">
              <div
                className="location-card-img"
                style={{ backgroundImage: `url('${location.cover}')` }}
              >
                <div className="location-card-scrim" aria-hidden="true" />
                <div className="location-card-body">
                  <p className="location-card-info">
                    <FontAwesomeIcon icon={faLocationDot} className="location-card-info-icon" />
                    {location.fullLocation}
                  </p>
                  <h3 className="location-card-title">{location.name}</h3>
                </div>
                <span className="location-card-arrow" aria-hidden="true">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampLocationSelect;
