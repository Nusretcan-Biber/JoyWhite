import React from "react";
import { NavbarComponent } from "../../Components/Navbar/NavbarComponent";
import { FooterComponent } from "../../Components/Footer/FooterComponent";
import PhotoHeroSection from "../../Components/HeroSection/PhotoHeroSection";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { InstaSection } from "../../Components/InstaSection/InstaSection";


const Gallery = () => {

  const images = Array.from({ length: 37 }, (_, i) => {
    return {
      original: `/images/galery/resim${i + 1}.jpg`,
      thumbnail: `/images/galery/resim${i + 1}.jpg`,
    };
  });
  
  return (
    <>
      <NavbarComponent />
      <PhotoHeroSection sectionName="Galeri" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Kayak Maceraları: Eğlence ve Öğrenme Dolu Anlar
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Kayak, sadece bir spor değil, aynı zamanda heyecan verici anılar
              biriktirdiğimiz bir yolculuktur. İşte bu galeride, kayak eğitimlerine
              katılan çocukların dersler sırasında çekilmiş neşeli anlarına göz
              atabilirsiniz. Her bir fotoğraf, kayak öğretmenleriyle birlikte
              yapılan eğlenceli etkinlikleri, karla kaplı pistlerde kayarken
              yaşanan heyecanı ve yeni arkadaşlıkların başlangıcını yansıtıyor.
            </p>
          </div>
          <ImageGallery
            items={images}
            showBullets={true}
            showIndex={true}
            autoPlay={true}
            slideInterval={3000}
          />
        </div>
      </section>
      <InstaSection />
      <FooterComponent />
    </>
  );
};

export default Gallery;
