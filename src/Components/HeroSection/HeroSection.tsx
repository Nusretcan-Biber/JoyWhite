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
import ScrollAnimation from "react-animate-on-scroll";

const HeroSection = () => {

  const scrollToCamps = () => {
    const camps = document.getElementById("about");
    camps?.scrollIntoView({ behavior: "smooth" });
  };

  const slides = [
    {
      image: "/images/staticImages/hero-4.jpg",
      title: "UZMAN ANTRENÖRLER",
      text: "JoyWhite Kayak Kulübü'ne katılın ve karla kaplı manzaraların huzurunda, en iyi antrenörlerle kayak becerilerinizi geliştirin."
    },
    {
      image: "/images/staticImages/hero-2.jpg",
      title: "UNUTULMAZ DENEYİM",
      text: "JoyWhite Kayak Kulübü ile unutulmaz bir maceraya atılın, yamaçlarda her an heyecan ve neşe dolu olsun."
    },
    {
      image: "/images/staticImages/photo-hero.jpg",
      title: "EĞLENCE VE SPOR",
      text: "JoyWhite Kayak Kulübü'nde eğlenirken spor yapın ve kayak yeteneklerinizi geliştirin, hayatınızın en iyi kış tatilini yaşayın."
    },
    {
      image: "/images/staticImages/parallax-1.jpg",
      title: "KAYAK KAMPIMIZ",
      text: "JoyWhite Kayak Kulübü'nün kayak kamplarına katılın ve kayak becerilerinizi geliştirirken, doğayla iç içe kış sporlarını keşfedin."
    }
  ];

  return (
    <section id="hero" className="hero-section">
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
            <img src={slide.image} alt="hero" className="hero-bg" />
            {/* <h1 className="hero-bg-title">JOYWHITE</h1> */}
            <div className="absolute inset-0 custom-gradient"></div>

            {/* <div className="container h-full mx-auto flex items-center justify-center relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 px-20 md:px-5">
              <div className="hero-content">
                <ScrollAnimation animateIn="backInDown" animateOnce={true}>
                  <h1 className="hero-title">{slide.title}</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="backInLeft" animateOnce={true}>
                  <p className="hero-text">{slide.text}</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="backInUp" animateOnce={true}>
                  <a onClick={scrollToCamps} className="my-btn hero-btn">Keşfet</a>
                </ScrollAnimation>
              </div>
            </div> */}

            <div className="container h-full mx-auto flex items-center justify-center relative z-10 px-20 md:px-5">
              <div className="hero-content">
                  <h3 className="hero-subtitle">Ski & Snowboard</h3>
                  <h1 className="hero-title">JOYWHITE</h1>
                  <h1 className="hero-title transparent-text">KAYAK KULÜBÜ</h1>
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

      <a className="scroll-down" onClick={scrollToCamps}>
        <FontAwesomeIcon icon={faAnglesDown} />
      </a>
    </section>
  );
};

export default HeroSection;