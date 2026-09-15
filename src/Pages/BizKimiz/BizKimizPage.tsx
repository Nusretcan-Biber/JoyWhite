import React from 'react';
import { FooterComponent } from '../../Components/Footer/FooterComponent';
import { NavbarComponent } from '../../Components/Navbar/NavbarComponent';
import { FaChild, FaCompass, FaMagic, FaPalette, FaSkiing, FaUsers } from 'react-icons/fa';
import './BizKimizPage.css';

const storyBlocks = [
  {
    title: 'Biz Kimiz?',
    text: 'Joy White, çocukların kış sporunu yalnızca bir aktivite olarak değil; güven, keşif, disiplin ve yaratıcılık ile birleşen bir yaşam becerisi olarak ele alır.',
    icon: <FaUsers aria-hidden="true" />,
  },
  {
    title: 'Neden Biz?',
    text: 'Yalnızca pist üzerinde değil, kamp boyunca çocukların duygusal güvenliğini, kendine olan güvenini ve doğayla bağ kurmasını geliştiren bir yaklaşımla çalışırız.',
    icon: <FaMagic aria-hidden="true" />,
  },
  {
    title: 'Pedagojik Yaklaşım',
    text: 'Öğrenme sürecini oyun, gözlem, rehberlik ve deneyim temelli bir model üzerine kurar; her çocuğun gelişim hızına uygun ilerleme sağlar.',
    icon: <FaCompass aria-hidden="true" />,
  },
];

const values = [
  {
    title: 'Güvenli Öğrenme',
    text: 'En küçük detayda güvenlik odaklı planlama yapar; çocukların özgüvenle ilerlemesini sağlayacak sınırlar içinde öğrenme ortamı sunarız.',
    icon: <FaSkiing aria-hidden="true" />,
  },
  {
    title: 'Yaratıcı Gelişim',
    text: 'Kayak ve snowboarding pratiğini dijital sanat, drama ve yaratıcı tasarım çalışmalarıyla birleştirerek öğrenmeyi çok katmanlı hale getiririz.',
    icon: <FaPalette aria-hidden="true" />,
  },
  {
    title: 'Bütüncül Bakış',
    text: 'Bedensel, bilişsel ve duygusal gelişimi eşit şekilde gören bir yaklaşım benimser; çocukların kamp deneyimini kalıcı öğrenmeye dönüştürürüz.',
    icon: <FaChild aria-hidden="true" />,
  },
];

const BizKimizPage = () => {
  return (
    <>
      <NavbarComponent useScrolled={true} />

      <main className="biz-kimiz-page">
        <section className="biz-kimiz-hero">
          <div className="container biz-kimiz-hero__inner">
            <div className="biz-kimiz-hero__copy">
              <p className="section-kicker">Joy White Kayak Kulübü</p>
              <h1>Biz Kimiz</h1>
              <p className="lead">
                Joy White olarak kış sporlarını yalnızca bir aktivite değil; çocukların güvenle,
                keyifle ve bilinçli şekilde geliştiği, doğayla bağ kurduğu, yaratıcı ve eğitici
                bir yaşam deneyimi olarak kurguluyoruz.
              </p>

              <div className="biz-kimiz-hero__meta">
                <span>Güvenli eğitim</span>
                <span>Pedagojik yaklaşım</span>
                <span>Doğa odaklı</span>
              </div>
            </div>

            <div className="biz-kimiz-hero__visual">
              <div className="biz-kimiz-hero__image-wrap">
                <img src="/images/staticImages/parallax-1.jpg" alt="Joy White kış kampı" />
              </div>
              <div className="biz-kimiz-hero__badge">Yaratıcılık • Güven • Keşif</div>
            </div>
          </div>
        </section>

        <section className="biz-kimiz-story">
          <div className="container">
            <div className="biz-kimiz-section-heading">
              <p className="section-kicker">Biz Kimiz</p>
              <h2>İçten, bilinçli ve çocuğa odaklı bir kış sporu deneyimi.</h2>
            </div>

            <div className="biz-kimiz-story__grid">
              {storyBlocks.map((item) => (
                <article className={`biz-kimiz-card ${item.title === 'Pedagojik Yaklaşım' ? 'biz-kimiz-card--highlight' : ''}`} key={item.title}>
                  <div className="biz-kimiz-card__badge">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="biz-kimiz-values">
          <div className="container">
            <div className="biz-kimiz-section-heading">
              <p className="section-kicker">Pedagojik Vizyonumuz</p>
              <h2>Çocuğun gelişimini bütüncül olarak destekliyoruz.</h2>
            </div>

            <div className="biz-kimiz-values__grid">
              {values.map((item) => (
                <article className="biz-kimiz-value-card" key={item.title}>
                  <div className="biz-kimiz-value-card__icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterComponent />
    </>
  );
};

export default BizKimizPage;
