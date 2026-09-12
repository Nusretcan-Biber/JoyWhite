import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./AboutVision.css";

const AboutVision = () => {
  return (
    <section className="about-vision" aria-labelledby="about-vision-title">
      <div className="about-vision__inner">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
        <div className="about-vision__content">
          <p className="section-kicker">Joy White Kayak Kulübü</p>
          <h2 id="about-vision-title">Biz Kimiz &amp; Pedagojik Vizyonumuz</h2>
          <p>
            Joy White olarak kış sporlarını yalnızca fiziksel bir aktivite değil; sanat, teknoloji ve yaratıcı drama ile harmanlanmış çok yönlü bir yaşam deneyimi olarak kurguluyoruz.
          </p>
          <div className="about-vision__detail">
            <h3>Kurum Vizyonu</h3>
            <p>
              Sarıkamış&apos;ın benzersiz doğasında çocukların bedensel ve zihinsel gelişimini destekleyen, güvenli ve ilham verici bir öğrenme ekosistemi sunuyoruz.
            </p>
          </div>
          <div className="about-vision__detail">
            <h3>Eğitimci Kadrosu ve Liderlik</h3>
            <p>
              Modern eğitim modellerine hakim, teknoloji entegrasyonu, dijital tasarım ve inovasyon alanlarında deneyimli profesyonel eğitimcilerle çalışıyoruz. Alanında uzman kayak ve snowboard eğitmenlerimiz, her katılımcı için seviyesine uygun bir eğitim programı oluşturuyor.
            </p>
          </div>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={160}>
        <div className="about-vision__media">
          <img
            src="/images/staticImages/parallax-1.jpg"
            alt="Sarıkamış'ta karla kaplı kayak pisti"
          />
          <div className="about-vision__caption">
            Güvenli öğrenme, yaratıcı düşünme ve doğayla bağ kurma
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutVision;
