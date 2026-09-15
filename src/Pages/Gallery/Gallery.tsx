import React from "react";
import { NavbarComponent } from "../../Components/Navbar/NavbarComponent";
import { FooterComponent } from "../../Components/Footer/FooterComponent";
import PhotoHeroSection from "../../Components/HeroSection/PhotoHeroSection";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { InstaSection } from "../../Components/InstaSection/InstaSection";


const Gallery = () => {

  const oldPhotos = Array.from({ length: 37 }, (_, i) => `resim${i + 1}`);
  const newPhotos = Array.from({ length: 7 }, (_, i) => `joywhite${i + 1}`);

  // Yeni fotoğrafları ilk sıralara serpiştiriyoruz, geri kalanı eski sırasında devam ediyor.
  const fileNames = [
    oldPhotos[0], newPhotos[0], oldPhotos[1], oldPhotos[2], newPhotos[1],
    oldPhotos[3], newPhotos[2], oldPhotos[4], oldPhotos[5], newPhotos[3],
    oldPhotos[6], oldPhotos[7], newPhotos[4], oldPhotos[8], oldPhotos[9],
    newPhotos[5], oldPhotos[10], oldPhotos[11], newPhotos[6], oldPhotos[12],
    oldPhotos[13],
    ...oldPhotos.slice(14),
  ];

  const images = fileNames.map((name, i) => ({
    original: `/images/galery/${name}.jpg`,
    thumbnail: `/images/galery/${name}.jpg`,
    originalAlt: `JoyWhite kayak kampından fotoğraf ${i + 1}`,
    thumbnailAlt: `JoyWhite kayak kampından fotoğraf ${i + 1} küçük önizleme`,
  }));

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
            autoPlay={false}
            lazyLoad={true}
          />
        </div>
      </section>
      <InstaSection />
      <FooterComponent />
    </>
  );
};

export default Gallery;
