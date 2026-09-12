import React from "react";
import { FaChild, FaPalette, FaSkiing } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import "./WinterCampContent.css";

const campFeatures = [
  {
    title: "Kış Sporları",
    subtitle: "Kayak & Snowboard",
    icon: <FaSkiing aria-hidden="true" />,
    image: "/images/staticImages/hero-3.jpg",
    description:
      "Temel duruş, denge kontrolü ve güvenli düşme tekniklerini öğrenirken kar sapanından paralel kayışa geçiş adımlarını uyguluyoruz.",
  },
  {
    title: "Dijital Sanat ve Tasarım",
    subtitle: "WinterLabs",
    icon: <FaPalette aria-hidden="true" />,
    image: "/images/staticImages/photo-hero.jpg",
    description:
      "Çocuklar kamp deneyimlerini görsel iletişim araçlarıyla estetik tasarımlara dönüştürür; yaratıcı düşünme ve problem çözme becerilerini geliştirir.",
  },
  {
    title: "Fiziksel ve Ruhsal Farkındalık",
    subtitle: "Yoga & Drama",
    icon: <FaChild aria-hidden="true" />,
    image: "/images/staticImages/contactImage.jpg",
    description:
      "Yoga ve yaratıcı drama çalışmalarıyla bedensel esnekliği, takım içi empatiyi ve sahne üzerindeki özgüveni destekliyoruz.",
  },
];

const WinterCampContent = () => {
  return (
    <section className="winter-camp-content" aria-labelledby="winter-camp-title">
      <div className="winter-camp-content__inner">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={false}>
        <div className="winter-camp-content__heading">
          <p className="section-kicker">Joy White Kış Kampları</p>
          <h2 id="winter-camp-title">Joy White Kış Kamplarımızda Neler Var?</h2>
          <p>
            Pistte öğrenmeyi, atölyelerde üretmeyi ve doğada birlikte güçlenmeyi aynı kamp deneyiminde buluşturuyoruz.
          </p>
        </div>
        </ScrollAnimation>
        <div className="winter-camp-content__grid">
          {campFeatures.map((feature, index) => (
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOnce={false}
              delay={index * 120}
              key={feature.title}
            >
            <article className="winter-camp-card" key={feature.title}>
              <img src={feature.image} alt={feature.title} />
              <div className="winter-camp-card__body">
                <div className="winter-camp-card__icon">{feature.icon}</div>
                <p className="winter-camp-card__subtitle">{feature.subtitle}</p>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinterCampContent;
