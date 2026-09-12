import React from 'react';
import { NavbarComponent } from '../../Components/Navbar/NavbarComponent';
import PhotoHeroSection from '../../Components/HeroSection/PhotoHeroSection';
import { FooterComponent } from '../../Components/Footer/FooterComponent';
import { fotos } from '../../Components/data/dummydata'; // Fotoğrafları içeren data dosyasını import et
import { BlogAside } from '../../Components/BlogAside/BlogAside';

const WhatsSki = () => {
  return (
    <>
      <NavbarComponent />
      <PhotoHeroSection sectionName="Blog" />
      <section className="text-gray-700 body-font bg-gray-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="blog-content col-span-1 md:col-span-8">
              <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 mb-8 text-center">
                Kayak Sporu Hakkında Bilinmesi Gerekenler
              </h1>
              <div className="blog-img">
                <img
                  src={fotos[0].src}
                  alt="Kayak Sporu"
                  className=""
                />
              </div>

              <div className="mb-12 mt-12">
                <h2 className="text-2xl font-semibold mb-4">Kayak Nedir?</h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Kar üzerinde gerekli ekipmanlar yardımıyla ilerlemeye dayanan spor dalına kayak denir. Küçük yaşlardan itibaren yapılabildiği için çoğu kayak merkezinde çocuklar için ayrı pistler bulunur.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                  Eğer siz de daha önce hiç kayak merkezine gitmediyseniz ve karlı zirvelere tırmanarak rüzgarı yüzünüzde hissetmek istiyorsanız hiç tereddüt etmeden planınızı yapabilirsiniz. Bu yazımızda, kayak hakkında merak edilen bütün soruların yanıtlarını bulabilirsiniz.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Düşüp Sakatlanma Korkusu</h2>
                <p className="mb-4 text-lg leading-relaxed">
                  İlk üstünde durmamız gereken konu, düşüp sakatlanma korkusu! Günümüzde kayak merkezleri çok donanımlı ve her seviyedeki kayak sever için uygun pistlere sahip. Bu spora yeni başlayanlar için eğimin çok az olduğu eğitim pistleri ve başınızda tecrübeli eğitmenler hazır bulunuyor. Donanımlı kayak kıyafetlerinin üzerinizde olduğunu ve zeminin yumuşacık karla örtülü olduğunu düşünürsek, endişelenmenizi gerektiren hiçbir sorun yok demektir.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Türkiye’nin Önde Gelen Kayak Merkezleri</h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Ülkemiz kayak turizminde de önemli adımlar atmaya başladı ve artık sadece yaz döneminde değil kış mevsiminde de birçok turist ağırlıyoruz. Kayak merkezlerine yapılan yatırımların artması ve hizmet kalitesinin her geçen gün artmasıyla birlikte yerli ve yabancı ziyaretçi sayısının da önemli bir şekilde yükselmesi bekleniyor. Ülkemizde birçok kayak merkezi bulunuyor, ancak bazıları tesisleri, pistleri ve hizmet kalitesiyle diğerlerinden ayrılıyor. En çok bilinen kayak merkezlerimiz Uludağ, Kartalkaya, Kartepe ve Sarıkamış kayak merkezleridir.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Kayağa Giderken Çantanıza Neler Almalısınız?</h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Karlı zirvelere yolculuk için öncelikle yanınıza sırt çantası almanız şart! Soğuk hava koşullarından korunabilmeniz için eldiven, atkı ve berenizi mutlaka yanınıza almalısınız. Kayak merkezinde kuru bir soğuk gün boyu yüzünüze ve bedeninize temas edeceği için nemlendirici krem bulundurmanızı tavsiye ediyoruz.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Kayak Kıyafeti ve Ekipmanları Kiralama Ücretleri</h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Birçok kişi yılda sadece bir ya da iki kere kayak merkezlerine gittiği için kayak kıyafetleri ve ekipmanlarını satın almayı düşünmüyor. Eğer siz de yılda birkaç kez bu keyfi yaşamak istiyorsanız ve kıyafet ile ekipman satın almanın gereksiz masraf olduğunu düşünüyorsanız, kiralama yolunu tercih edebilirsiniz.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                  Kayak merkezlerinde kıyafet ve ekipman kiralayabilmeniz mümkün olmakla birlikte, kayak merkezine göre kiralama ücretleri de farklılıklar gösteriyor. Genellikle kayak ekipmanları, montu ve pantolonu takım olarak kiralanıyor, ancak eldiven, kar maskesi gibi yardımcı ekipmanları da kiralamak isterseniz ayrı bir ücret ödemeniz gerekiyor.
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
}

export default WhatsSki;
