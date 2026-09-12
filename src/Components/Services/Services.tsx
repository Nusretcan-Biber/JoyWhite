import React from "react";
import { FaSkiing } from "react-icons/fa";
import { GiEskimo } from "react-icons/gi";
import { FaChild } from "react-icons/fa";
import "./Services.css";
import ScrollAnimation from "react-animate-on-scroll";

const Services = () => {

  const services = [
    {
      title: "Eğlenceli Kayak Eğitim Programı",
      description:
        "Deneyimli eğitmenler eşliğinde güvenli ve eğlenceli bir ortamda kayak becerilerini geliştirin. Kayak sporuna adım atmak isteyen çocuklar için ideal!",
      icon: <FaSkiing />,
    },
    {
      title: "Kış Sporları Etkinlikleri",
      description:
        "Yıl boyunca düzenlenen etkinliklerimizle, çocuklar hem spor yapıyor hem de arkadaşlıklarını güçlendiriyor. Kış sporlarının keyfini çıkarın!",
      icon: <GiEskimo />,
    },
    {
      title: "Çocuklar İçin Kayak Eğitimi",
      description:
        "Kayak eğitimlerimizde çocuklar becerilerini geliştirirken, doğayla iç içe kış sporlarını keşfediyor. Eğlenceli ve öğretici bir deneyim!",
      icon: <FaChild />
    }
  ];


  return (

    <div className="py-16 parallax-bg"
    >
      <h1 className="text-center font-bold text-3xl lg:text-4xl">Faaliyetlerimiz</h1>
      <div className="flex justify-center mx-auto mt-6">
        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 grid grid-cols-1 gap-20 md:gap-24 lg:gap-12 mx-auto lg:grid-cols-3 py-16 mt-16">
          {services.map((service, index) => (
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOnce={false}
              duration={0.7 * index}
              key={index}
            >
              <div
                key={index}
                className="flex flex-col items-center justify-center p-12 bg-KırıkBeyaz rounded-lg shadow-lg h-full transform transition-all duration-200 hover:scale-105 hover:shadow-2xl"
              >
                <div className="sm:w-32 sm:h-32 text-5xl h-24 w-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 mb-4 sm:-mt-28 -mt-24">
                  {service.icon}
                </div>
                <h2 className="mb-4 text-xl font-bold text-black text-center">
                  {service.title}
                </h2>
                <p className="text-black leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>
    </div>

  );
};

export default Services;
