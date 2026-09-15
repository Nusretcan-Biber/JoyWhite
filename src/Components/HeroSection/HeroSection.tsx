import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./HeroSection.css";
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

const HeroSection = () => {

  const scrollToCamps = () => {
    const camps = document.getElementById("about");
    camps?.scrollIntoView({ behavior: "smooth" });
  };

  const slides = [
    { image: "/images/staticImages/hero-4.jpg", title: "Uzman antrenörler eşliğinde kayak eğitimi" },
    { image: "/images/staticImages/hero-2.jpg", title: "Sarıkamış'ta unutulmaz bir kış deneyimi" },
    { image: "/images/staticImages/photo-hero.jpg", title: "Eğlenceli ve güvenli kış sporları" },
    { image: "/images/staticImages/parallax-1.jpg", title: "JoyWhite kayak kampı" },
  ];

  return (
    <section id="hero" className="hero-section">
      <h1 className="sr-only">Joy White Kış Kampı</h1>
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        effect="fade"
        loop={true}
        // navigation={true}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev1",
          nextEl: ".swiper-button-next1",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.image} alt={slide.title} className="hero-bg" />
            {/* <h1 className="hero-bg-title">JOYWHITE</h1> */}
            <div className="absolute inset-0 custom-gradient"></div>

            <div className="container h-full mx-auto flex items-center justify-center relative z-10 px-8 md:px-20">
              <div className="hero-content">
                  <p className="hero-subtitle">Ski & Snowboard</p>
                  <h2 className="hero-title">Joy White Kayak Kulübü</h2>
                  <p className="hero-title transparent-text">Sarıkamış&apos;ta Bir Kış Masalı</p>
              </div>

            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev1">
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="swiper-button-next1">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>

      </Swiper>

      <button type="button" className="scroll-down" onClick={scrollToCamps} aria-label="Kamp bölümüne ilerle">
        <FontAwesomeIcon icon={faAnglesDown} />
      </button>
    </section>
  );
};

export default HeroSection;