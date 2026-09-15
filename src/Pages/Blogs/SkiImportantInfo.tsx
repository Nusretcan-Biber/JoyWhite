import React from 'react';
import { NavbarComponent } from '../../Components/Navbar/NavbarComponent';
import { FooterComponent } from '../../Components/Footer/FooterComponent';
import PhotoHeroSection from '../../Components/HeroSection/PhotoHeroSection';
import { BlogAside } from '../../Components/BlogAside/BlogAside';

const SkiImportantInfo = () => {
  return (
    <>
      <NavbarComponent />
      <PhotoHeroSection sectionName="Blog" />
      <section className="text-gray-700 body-font bg-gray-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="blog-content col-span-1 md:col-span-8">
              <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 mb-8 text-center">
                Kayakçılar İçin Önemli Güvenlik Kuralları
              </h1>

              <h2 className="text-2xl font-semibold mb-6">Kayak Tatili Güvenlik İpuçları</h2>
              <p className="mb-6 text-lg leading-relaxed">
                Kayak’ta henüz sezonu açmamış kayak severlerin ve snowboardcuların kayak tatillerine başlamadan önce akıllarında bulundurması gereken birkaç önemli güvenlik ipucunu sizler için derledik.
              </p>

              <ul className="list-disc list-inside mb-8">
                <li className="mb-2"><strong>Acil servise gitmekten kurtulmak için hazırlık aşamasına daha fazla zaman harcayın.</strong></li>
                <li className="mb-2"><strong>Formda kalın:</strong> Düzenli olarak spor yapın. Düzenli spor, kas katmanlarını güçlendirir, yaralanmaları önlemeye yardımcı olur ve dayanıklılığınızı geliştirir.</li>
                <li className="mb-2"><strong>Ekipmanınızı kontrol edin:</strong> Kayak ya da snowboard gezinizden önce bağlama kontrolü her zaman akıllı bir harekettir. Tüm yaralanmaların kabaca yarısı hatalı bağlama ayarlarından kaynaklanmaktadır.</li>
                <li className="mb-2"><strong>Sınırlarınızı öğrenin:</strong> Seviyenize göre hareket edin. Yeni başlayanlar ileri düzey çalışmalardan kaçınmalıdır.</li>
                <li className="mb-2"><strong>Isınma:</strong> Kayak ve snowboarda başlamadan önce soğuk kaslarınızı ısıtmak için basit egzersizler yapmayı unutmayın.</li>
                <li className="mb-2"><strong>Sıvı kaybı:</strong> Kayak ve snowboard yaparken vücutta çok fazla sıvı kaybı meydana gelir. İşin heyecanı detaylar nedeniyle çoğunlukla sıvı almayı unuturuz. Bol miktarda sıvı gıda tüketmeyi ihmal etmeyin. Çok fazla sıvı kaybı yorgunluğunuzun ana nedeni olabilir.</li>
                <li className="mb-2"><strong>Tesisler kapanmadan “hadi son kez daha kayalım” sendromundan kaçının.</strong> Çok yorgunsanız son inişi yapmamak sizin için en mantıklısı olabilir. Kaza ve yaralanmaların büyük bir çoğunluğu pistlerin kapanmaya yakın saatlerinde gerçekleşiyor.</li>
              </ul>

              <p className="mb-6 text-lg leading-relaxed text-red-500 font-semibold">
                Bu detaylar sadece bilgilendirme amaçlıdır. Sorularınız veya endişeleriniz hakkında doktorunuzla veya sağlık hizmeti sağlayıcınızla görüşmenizi tavsiye ederiz.
              </p>

              <h2 className="text-2xl font-semibold mb-6">Kayakçılar İçin En Önemli 7 Güvenlik Kuralı</h2>
              <p className="mb-6 text-lg leading-relaxed">
                Kayakçılar ve diğer kış sporlarıyla uğraşanların yanı sıra, kayak merkezinde konaklayanların ve günübirlik ziyaretçilerin sağduyularını ve kişisel farkındalıklarını artırabilecek en önemli 7 güvenlik kuralını sizler için derledik. Bu 7 güvenlik kuralını “Sorumluluk Yasası” olarak da isimlendirebiliriz.
              </p>

              <ul className="list-disc list-inside mb-8">
                <li className="mb-2"><strong>1. Kontrolü Elinizde Bulundurun:</strong> Kayarken daima kontrolü elinizde bulundurun, bu şekilde çevrenizdeki kayakçıları ve nesneleri daha çabuk algılayabilirsiniz.</li>
                <li className="mb-2"><strong>2. Öncelik Hakları:</strong> Kayak ya da snowboard ile kayarken önünüzde kayanlar daima öncelikli yol ve pist kullanım hakkına sahiptir. Onların yön değiştirme durumlarına ve hızlarına göre hareket etmek arkada kayanların sorumluluğundadır.</li>
                <li className="mb-2"><strong>3. Ani Durma:</strong> Kayarken pist ortasında aniden durmayınız, durduğunuz alan arkadan gelenlerin görüş mesafesinde olmayabilir.</li>
                <li className="mb-2"><strong>4. Kontrol Öncesi Kontrol:</strong> Kaymaya başlayacağınız alanı belirledikten sonra, kaymaya başlamadan önce her yönü dikkatlice kontrol edin.</li>
                <li className="mb-2"><strong>5. Ekipman Kontrolü:</strong> Kayak ve snowboard donanımlarınızın Dünya ve Avrupa standartlarında olmasına dikkat edin.</li>
                <li className="mb-2"><strong>6. Uyarı Levhalarına Dikkat:</strong> Kayak merkezlerindeki tüm uyarı levhalarına ve işaretlere dikkat edin, kapalı pistlere ve pist dışı arazilere girmeyin.</li>
                <li className="mb-2"><strong>7. Mekanik Tesis Kullanımı:</strong> Mekanik tesisleri ve liftleri kullanmadan önce biniş ve iniş becerilerine sahip olmanız gerekir.</li>
              </ul>
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

export default SkiImportantInfo;
