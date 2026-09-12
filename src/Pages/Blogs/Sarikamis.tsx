import React from "react";
import { NavbarComponent } from "../../Components/Navbar/NavbarComponent";
import { FooterComponent } from "../../Components/Footer/FooterComponent";
import PhotoHeroSection from "../../Components/HeroSection/PhotoHeroSection";
import { BlogAside } from "../../Components/BlogAside/BlogAside";

const Sarikamis = () => {
  return (
    <>
      <NavbarComponent />
      <PhotoHeroSection sectionName="Blog" />
      <section className="text-gray-700 body-font bg-gray-50">
        <div className="container mx-auto px-5 py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="blog-content col-span-1 md:col-span-8">
              <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 mb-8 text-center">
                Neden Sarıkamış?
              </h1>

              <div className="blog-img">
                <img
                  src="/images/staticImages/sarikamis-test.jpg"
                  alt="Sarıkamış'ta karla kaplı sarıçam ormanları"
                  className="h-64 object-cover text-center shadow-md"
                />
              </div>

              <p className="mb-6 mt-12 text-lg leading-relaxed">
                Joy White Kış Kampı ve WinterLabs atölyeleri için Sarıkamış'ı seçmemiz bir tesadüf değil. Bölgenin doğası, çocukların karla ilk tanışmasını keyifli bir öğrenme deneyimine dönüştürürken, deneyimli kayakçıların da güvenli bir kış sporları deneyimi yaşamasına olanak sağlar.
              </p>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Kristal Kar Yapısı</h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Sarıkamış, kendine özgü toz kristal kar yapısıyla bilinen önemli kayak merkezlerinden biridir. Bu kar yapısı, kayak eğitimi sırasında kontrollü ve keyifli bir zemin deneyimi sunar. Eğitim programlarımızda çocukların seviyesine uygun alanlar ve uzman eğitmen desteği temel alınır.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Sarıçam Ormanları</h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Sarıkamış'ın sarıçam ormanlarıyla çevrili doğal yapısı, kamp deneyimine güçlü bir atmosfer katar. Hava ve pist koşulları günlük olarak takip edilir; eğitim alanları, çocukların seviyeleri ve günün şartlarına göre eğitmenler tarafından planlanır.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Dünya Standartlarında Kış Sporları Deneyimi</h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Sarıkamış farklı seviyelere hitap eden pistleri ve kış sporları altyapısıyla kayak ve snowboard eğitimleri için elverişli bir merkezdir. Joy White eğitmenleri, çocukların temel duruş, denge, güvenli düşme ve kontrollü kayış becerilerini adım adım geliştirmesine yardımcı olur.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Ulaşım ve Kamp Konforu</h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Kars Harakani Havalimanı ile Sarıkamış arasındaki ulaşım yaklaşık 45 dakikadır. Karşılama, transfer ve konaklama süreçleri profesyonel turizm partnerimiz Pavone Travel Agency iş birliğiyle yürütülür. Böylece aileler kayak eğitimi, WinterLabs atölyeleri ve dinlenme zamanlarına odaklanabilir.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                  Bölgenin Katerina Köşkü ve Doğu Ekspresi rotasıyla kurduğu bağ, çocukların WinterLabs çalışmalarında doğa, tarih ve kültürden ilham almasına da katkı sağlar.
                </p>
              </div>

            </div>
            <div className="col-span-1 md:col-span-4">
              <BlogAside />
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
};

export default Sarikamis;
