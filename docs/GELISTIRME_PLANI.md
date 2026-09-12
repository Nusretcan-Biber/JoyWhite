# JoyWhite Geliştirme Planı

**Tarih:** 12 Eylül 2026  
**Proje:** JoyWhite Kayak Kulübü web sitesi  
**Teknoloji:** React 18, TypeScript, Create React App, React Router, Tailwind CSS, bileşen bazlı CSS

## 1. Planın Amacı

Bu doküman, `JW EKLENECEKLER.docx` dosyasında belirtilen içerik, tasarım, yasal bilgilendirme ve görsel güncellemelerin mevcut JoyWhite web sitesine uygulanması için hazırlanmıştır.

Çalışmanın ana hedefleri:

- JoyWhite'ın yeni pedagojik vizyonunu ve kamp modelini görünür hale getirmek.
- Kış kamplarını yalnızca kayak eğitimi olarak değil, çok yönlü bir gelişim deneyimi olarak anlatmak.
- SSS, ulaşım, konaklama, kayıt ve yasal süreçler konusunda ziyaretçilerin bilgi ihtiyacını azaltmak.
- Sarıkamış odaklı marka iletişimini güçlendirmek.
- Yeni logo ve görselleri tutarlı bir görsel sistem içinde kullanmak.
- Mevcut React yapısını bozmadan, içerikleri bakımı kolay bileşenlere ayırmak.

## 2. Mevcut Proje Özeti

### Mevcut sayfa ve yönlendirmeler

- `/` - Ana sayfa
- `/Trainings` - Eğitim/kamp listesi
- `/Training/:id` - Kamp detay sayfası
- `/Gallery` - Galeri
- `/Contact` - İletişim
- Blog sayfaları:
  - `/KayakSporuHakkindaBilinmesiGerekenler`
  - `/KayakcilarIcinOnemliGuvenlikKurallari`
  - `/PalandokenKayakMerkeziErzurum`
  - `/SarikamisKayakMerkezi`

### Mevcut ilgili dosyalar

- `src/App.tsx` - Route tanımları
- `src/Pages/MainPage/MainPage.tsx` - Ana sayfa bölüm sırası
- `src/Components/Navbar/NavbarComponent.tsx` - Navigasyon ve blog menüsü
- `src/Components/Footer/FooterComponent.tsx` - Footer
- `src/Components/Camps/CampsComponent.tsx` - Kamp listesi
- `src/Components/Services/Services.tsx` - Hizmetler bölümü
- `src/Components/data/dummydata.js` - Kamp ve galeri verileri
- `src/Pages/Blogs/Sarikamis.tsx` - Sarıkamış içeriği
- `src/Pages/Blogs/Palandoken.tsx` - Palandöken içeriği
- `public/images/` - Görseller

## 3. Kapsam

### 3.1. Yasal acente ve TÜRSAB bilgisi

Siteye aşağıdaki bilgilendirme eklenecek:

> Pavone Travel Agency, Joy White Kayak Kulübünün resmî seyahat acentesidir.  
> TÜRSAB Belge No: 18202

#### Uygulama kararı

Bilgi en az şu iki yerde gösterilecek:

- Footer
- İletişim sayfası

Kamp kayıtları, ödeme, konaklama, transfer, Mesafeli Satış Sözleşmesi ve KVKK süreçleri için `https://pavonemice.com/` bağlantısı kullanılacak.

#### Kabul kriterleri

- Bilgi masaüstü ve mobilde okunabilir olmalı.
- Pavone bağlantısı yeni sekmede açılmalı.
- TÜRSAB numarası görünür ve yanlış yazılmamış olmalı.
- Footer metni bütün sayfalarda görünmeli.

### 3.2. Logo değişikliği

Mevcut logo kullanımları tespit edilerek gönderilecek yeni logo ile değiştirilecek.

#### Kontrol edilecek yerler

- Navbar logosu
- Footer logosu
- Favicon veya manifest logo kullanımı
- Hero veya statik görseller içinde gömülü logo kullanımı

#### Kabul kriterleri

- Yeni logo açık ve koyu arka planlarda okunabilir olmalı.
- Navbar'ın scroll ve mobil durumlarında logo taşmamalı.
- Eski logo referansları gereksiz yere kalmamalı.
- `alt` metni eklenmeli.

### 3.3. SSS bölümü

SSS bölümü ana sayfanın üst bölümüne eklenecek. Belgede bulunan sorular accordion yapısında gösterilecek.

#### SSS başlıkları

1. Çocuğum daha önce hiç kayak yapmadı, bu kampa uyum sağlayabilir mi?
2. Eğitim sürecinde çocukların güvenliği nasıl planlanıyor?
3. WinterLabs atölyeleri klasik bir kayak kampından nasıl farklılaşıyor?
4. Joy White Kış Kampı için neden özellikle Sarıkamış tercih ediliyor?
5. Kampın konaklama ve ulaşım süreçleri nasıl organize ediliyor?
6. Kars Harakani Havalimanı'ndan otele ulaşım süreci nasıl yönetiliyor?
7. Aileler kampa eşlik edebiliyor mu?
8. Çocukların kayak malzemelerini satın almaları gerekiyor mu?
9. Kamp kayıt, iptal/iade ve Mesafeli Satış Sözleşmesi bilgilerine nereden ulaşılabilir?
10. Kişisel veriler ve çocuk bilgileri KVKK kapsamında nasıl korunuyor?
11. Ödemeler nereye ve nasıl yapılır?

#### Teknik uygulama

Yeni bir bileşen oluşturulması önerilir:

- `src/Components/FAQ/FAQ.tsx`
- `src/Components/FAQ/FAQ.css`
- Soru-cevap verileri için `src/Components/data/faqData.ts` veya mevcut veri yapısına uygun ayrı bir TypeScript dosyası

Her soru için `id`, `question` ve `answer` alanları kullanılmalı. Aynı anda birden fazla sorunun açılıp açılmayacağı tasarım kararı olarak baştan belirlenmeli; varsayılan öneri tek açık soru modelidir.

#### Kabul kriterleri

- Klavye ile açılıp kapanabilmeli.
- Açık/kapalı durumu görsel olarak anlaşılmalı.
- Mobilde metin taşmamalı.
- SSS ana sayfanın üst kısmında, hero sonrasında görünmeli.
- Pavone, KVKK ve sözleşme bağlantıları çalışmalı.

### 3.4. Biz Kimiz ve Pedagojik Vizyonumuz

Ana sayfanın üst bölümüne aşağıdaki başlıkla yeni bir bölüm eklenecek:

**Biz Kimiz & Pedagojik Vizyonumuz**

#### İçerik grupları

- Kurum Vizyonu
- Eğitimci Kadrosu ve Liderlik
- Güvenli öğrenme ekosistemi
- Kayak ve snowboard eğitmenleri
- Sanat, teknoloji ve yaratıcı drama ile bütünleşik kamp yaklaşımı

#### Teknik uygulama

Yeni bir bileşen oluşturulması önerilir:

- `src/Components/AboutVision/AboutVision.tsx`
- `src/Components/AboutVision/AboutVision.css`

Bölümde bir ana görsel ve gerektiğinde ikinci destek görseli kullanılabilir. Metin, tek büyük paragraf yerine başlıklar ve kısa paragraflar halinde düzenlenmeli.

#### Kabul kriterleri

- Bölüm hero sonrasında ve SSS ile kamp içeriği arasında mantıklı bir sırada görünmeli.
- Fotoğraflar içerikle ilişkili olmalı.
- Görsellere anlamlı `alt` metinleri eklenmeli.
- Mobilde metin ve görsel sıralaması okunabilir olmalı.

### 3.5. Kış kampları ve WinterLabs

Mevcut eğitimler/kamplar bölümüne yeni içerik eklenecek.

**Başlık:** Joy White Kış Kamplarımızda Neler Var?

#### İçerik kartları

1. **Kış Sporları - Kayak/Snowboard**
   - Temel duruş
   - Denge kontrolü
   - Güvenli düşme
   - Kar sapanı
   - Paralel kayışa geçiş

2. **Dijital Sanat ve Tasarım - WinterLabs**
   - Görsel iletişim
   - Kamp deneyimini tasarıma aktarma
   - Yaratıcı düşünme
   - Problem çözme

3. **Fiziksel ve Ruhsal Farkındalık - Yoga & Drama**
   - Bedensel esneklik
   - Empati
   - Takım içi iletişim
   - Sahne özgüveni

#### Teknik uygulama

Yeni bileşen önerisi:

- `src/Components/WinterCampContent/WinterCampContent.tsx`
- `src/Components/WinterCampContent/WinterCampContent.css`

İkonlar mevcut Font Awesome veya React Icons altyapısıyla seçilebilir. Her kartta başlık, kısa açıklama, maddeler ve uygun görsel bulunabilir.

#### Kabul kriterleri

- İçerik masaüstünde üçlü, mobilde tekli veya iki aşamalı düzende okunmalı.
- Görseller kartların yüksekliğini bozmayacak şekilde sabit oranla gösterilmeli.
- İçerik kamp kartlarıyla karışmamalı; eğitim programı ile atölye içeriği ayrıştırılmalı.

### 3.6. Kids Kamp İçerikleri ve Sarıkamış'ta Bir Gün

Belgede bu iki başlık isteniyor. Kids Kamp kapsamı ve örnek günlük program, Word belgesindeki dahil/hariç listeleri ve saatli akış temel alınarak uygulanacaktır:

- Joy White Kids Kamp İçerikleri
- Sarıkamış'ta bir gün nasıl geçiyor?

Uygulanacak günlük akış:

- 08:30 - 09:30: Güne Hazırlık ve Enerji Kahvaltısı - Otel Restoranı
- 10:00 - 12:00: Pistte İlk Adımlar: Temel Kayak ve Denge Eğitimi - Pistler
- 12:30 - 13:30: Öğle Yemeği ve Serbest Dinlenme - Otel Restoranı
- 14:00 - 16:00: Pistte Emin Adımlar: Temel Kayak Eğitimi - Pistler
- 16:30 - 17:30: Kayak Odasında Günün Değerlendirmesi - Kayak Odası Lobisi
- 18:00 - 19:30: WinterLabs: Yaratıcı Tasarım ve Drama Atölyesi - Etkinlik Salonu
- 19:30 - 20:30: Akşam Yemeği - Otel Restoranı

#### Önerilen uygulama

Bu bölümler için içerik kesinleşene kadar placeholder geliştirilmemeli. İçerik sağlandıktan sonra iki ayrı bileşen olarak uygulanmalı:

- `src/Components/KidsCampContent/KidsCampContent.tsx`
- `src/Components/DailySchedule/DailySchedule.tsx`

Günlük program için zaman çizelgesi veya dikey timeline kullanılabilir. Kamp detayında zaten program tablosu bulunduğu için aynı veri modelinin yeniden kullanılmasına dikkat edilmeli.

#### Sonraki içerik netleştirmeleri

- Kids kamp içeriğinin başlıkları ve açıklamalarının müşteri tarafından son kez onaylanması
- Velilerin programa dahil olduğu bölümler
- Fotoğraf veya illüstrasyon beklentisi

### 3.7. Sarıkamış içeriğinin yenilenmesi

`src/Pages/Blogs/Sarikamis.tsx` içeriği baştan düzenlenecek.

#### Yeni içerik hiyerarşisi

1. Neden Sarıkamış?
2. Kristal kar yapısı
3. Yeni başlayan çocuklar için zemin avantajı
4. Sarıçam ormanları
5. Rüzgâr ve hava koşulları
6. Pist altyapısı ve pist çeşitliliği
7. Ulaşım ve lojistik konforu
8. Katerina Köşkü ve Doğu Ekspresi
9. Pavone Travel Agency desteği

#### Görsel değişikliği

Sarıkamış bölümünde üzerinde Uludağ yazan çocuk fotoğrafı kaldırıldı. Gerçek Sarıkamış lokasyonunu gösteren doğrulanmış fotoğraf henüz teslim edilmediği için sayfada geçici olarak mevcut yazısız kayak görsellerinden biri kullanılmaktadır. Yeni fotoğraf teslim edildiğinde `src/Pages/Blogs/Sarikamis.tsx` içindeki görsel yolu güncellenecek; alt metin ve mobil kırpma ayrıca kontrol edilecektir.

#### İçerik doğrulama notu

Aşağıdaki ifadeler yayınlanmadan önce müşteri veya ilgili uzman tarafından doğrulanmalı ve gerekirse daha ölçülü şekilde yazılmalı:

- Sıfır çığ riski
- Hiçbir çığ riski olmaması
- Kristal karın yalnızca Alpler ve Sarıkamış'ta bulunması
- Karın sakatlık riskini en aza indirmesi
- Türkiye'nin Innsbruck'u ifadesi

Bu ifadeler güvenlik veya sağlık garantisi gibi algılanabileceği için pazarlama metni ile kesin bilgi arasındaki sınır korunmalı.

### 3.8. Palandöken içeriği

Belgede Palandöken içeriğinin çıkarılması isteniyor. Uygulamadan önce kapsam netleştirilmeli.

#### Olası uygulama seçenekleri

- Sadece Navbar blog dropdown'dan kaldırmak
- `App.tsx` içindeki route'u kaldırmak
- `src/Pages/Blogs/Palandoken.tsx` dosyasını kaldırmak
- Sarıkamış veya başka sayfalardaki Palandöken referanslarını da silmek

#### Önerilen varsayılan uygulama

Müşteri tamamen kaldırılmasını istiyorsa:

1. Navbar'dan bağlantıyı kaldır.
2. `App.tsx` route'unu kaldır.
3. Palandöken sayfasını sil veya erişilemez hale getir.
4. Projede kalan Palandöken metin/görsel referanslarını ara.
5. Arama motoru için eski URL yönlendirme stratejisini belirle.

## 4. Önerilen Ana Sayfa Sırası

Mevcut ana sayfa dikkate alınarak önerilen sıra:

1. Navbar
2. Hero
3. SSS
4. Biz Kimiz & Pedagojik Vizyonumuz
5. Kış Kamplarımızda Neler Var?
6. Joy White Kids Kamp İçerikleri
7. Sarıkamış'ta bir gün nasıl geçiyor?
8. İletişim/rezervasyon çağrısı
9. Eğitimlerimiz veya kamp kartları
10. Sarıkamış avantajları
11. Instagram/Galeri
12. TÜRSAB ve Pavone bilgili Footer

SSS'nin en üste eklenmesi dokümanda açıkça istendiği için hero'dan hemen sonra konumlandırılması önerilir. Ancak çok uzun SSS içeriğinin ilk ekranı tamamen kaplamaması için accordion kapalı başlamalıdır.

## 5. Veri ve TypeScript Düzenleme Planı

Mevcut kamp verileri `dummydata.js` içinde JavaScript olarak tutuluyor. Yeni içeriklerle birlikte veri yapısının TypeScript'e taşınması önerilir.

### Önerilen dosyalar

- `src/types/camp.ts`
- `src/types/content.ts`
- `src/Components/data/campsData.ts`
- `src/Components/data/faqData.ts`
- `src/Components/data/winterCampData.ts`

### Öncelikli tipler

- `Camp`
- `PriceOption`
- `FAQItem`
- `WinterCampFeature`
- `DailyScheduleItem`

Bu değişiklik kamp kartı ve kamp detayındaki aynı `Camp` tipinin tekrar tanımlanmasını engeller. Ancak mevcut çalışma sırasında gereksiz bir toplu refactor yapılmamalı; içerik özellikleri stabil hale geldikten sonra kademeli taşınmalı.

## 6. Görsel ve Dosya Yönetimi

### Yeni görseller gelmeden yapılacaklar

- Kullanılacak görsellerin isimlendirme standardını belirle.
- Dosya boyutu ve boyut oranlarını kontrol et.
- Mobil kırpılmaları kontrol et.
- Her görsel için alt metni hazırla.

### Önerilen klasörler

- `public/images/branding/` - Logo ve marka varlıkları
- `public/images/camps/` - Kamp fotoğrafları
- `public/images/sarikamis/` - Sarıkamış içerikleri
- `public/images/winterlabs/` - WinterLabs ve atölye fotoğrafları
- `public/images/staticImages/` - Genel site görselleri

Mevcut dosya yolları başka yerlerde kullanılıyorsa dosyalar doğrudan taşınmadan önce referans araması yapılmalı.

## 7. Uygulama Fazları

### Faz 0 - İçerik ve asset onayı

- Yeni logoları teslim al.
- Gerçek Sarıkamış fotoğrafını teslim al ve geçici görseli değiştir.
- WinterLabs görsellerini teslim al.
- Kids kamp ve günlük program metnini netleştir.
- Palandöken kaldırma kapsamını onaylat.
- Hukuki ve güvenlik ifadelerini onaylat.

### Faz 1 - Temel içerik altyapısı

- FAQ veri dosyasını oluştur.
- WinterCamp veri dosyasını oluştur.
- Ortak içerik tiplerini tanımla.
- Dış bağlantıları merkezi sabitler haline getir.

### Faz 2 - Ana sayfa bölümleri

- SSS bileşenini ekle.
- Biz Kimiz bileşenini ekle.
- WinterCamp bileşenini ekle.
- Kids kamp ve günlük program için onaylanmış içerik geldiyse bileşenleri ekle.
- `MainPage.tsx` bölüm sırasını güncelle.

### Faz 3 - Marka ve yasal alanlar

- Navbar logosunu değiştir.
- Footer logosunu değiştir.
- TÜRSAB bilgisini ekle.
- Pavone bağlantısını ekle.
- Contact sayfasına acente ve yasal bilgi bağlantılarını ekle.

### Faz 4 - Sarıkamış ve Palandöken

- [x] Sarıkamış sayfasını yeni içerik hiyerarşisine göre güncelle.
- [ ] Gerçek Sarıkamış görseli geldiğinde geçici görseli değiştir.
- [x] Palandöken route, navbar, footer, blog aside ve sayfa dosyasını kaldır.

### Faz 5 - Görsel kalite ve responsive düzen

- Masaüstü, tablet ve mobil ekranları kontrol et.
- Görsellerin `object-fit` ve oranlarını düzelt.
- Kontrast ve okunabilirliği kontrol et.
- Accordion, link ve butonların klavye kullanımını kontrol et.
- Sayfa üst boşluklarını ve Navbar scroll davranışını test et.

### Faz 6 - Test ve yayın hazırlığı

- `npm.cmd run build` çalıştır.
- Tüm route'ları kontrol et.
- Kırık görsel araması yap.
- Konsol hatalarını temizle.
- Mobil tarayıcı testi yap.
- Docker build çalıştır.
- Son içerik ve hukuki onayları al.

## 8. Dosya Bazlı Değişiklik Matrisi

| Dosya / alan | Değişiklik |
|---|---|
| `src/Pages/MainPage/MainPage.tsx` | Yeni ana sayfa bölümlerini ekleme ve sıralama |
| `src/Components/Navbar/NavbarComponent.tsx` | Yeni logo ve blog bağlantıları |
| `src/Components/Footer/FooterComponent.tsx` | Logo, TÜRSAB ve Pavone bilgisi |
| `src/Components/Services/Services.tsx` | Gerekirse WinterLabs içeriğini ayırma |
| `src/Pages/Contact/ContactPage.tsx` | Acente ve yasal süreç bağlantıları |
| `src/Pages/Blogs/Sarikamis.tsx` | Sarıkamış içeriğini tamamen yenileme |
| `src/Pages/Blogs/Palandoken.tsx` | Kaldırıldı |
| `src/App.tsx` | Palandöken route'u kaldırıldı |
| `src/Components/data/dummydata.js` | Eski fotoğraf ve içerik referanslarını güncelleme |
| `public/images/` | Yeni logo ve doğrulanmış fotoğraflar |
| `src/Components/FAQ/` | Yeni SSS bileşeni |
| `src/Components/AboutVision/` | Yeni vizyon bileşeni |
| `src/Components/WinterCampContent/` | Kamp içeriği ve WinterLabs bileşeni |
| `src/Components/KidsCampContent/` | Kids kamp bileşeni eklendi |
| `src/Components/DailySchedule/` | Günlük akış bileşeni eklendi |

## 9. Kabul Testleri

### İçerik

- [x] SSS'deki tüm sorular ve cevaplar doğru görünüyor.
- [x] Yeni vizyon metni eksiksiz ve okunabilir.
- [x] WinterLabs metni doğru başlıklar altında görünüyor.
- [x] Kids Kamp ve günlük program içeriği eklendi.
- [x] Sarıkamış metni güncellendi.
- [x] Palandöken kapsamı onaylanan şekilde uygulandı.
- [x] TÜRSAB numarası eklendi.
- [x] Pavone bağlantısı eklendi.

### Görsel

- [x] Yeni logo Navbar ve Footer'da kullanılıyor.
- [x] Uludağ yazılı görsel kaldırıldı.
- [ ] Sarıkamış görseli gerçek lokasyonu gösteriyor; doğrulanmış fotoğraf bekleniyor.
- [ ] Yeni görseller mobilde kırpılmıyor.
- [ ] Tüm görsellerin anlamlı alt metni var.

### Fonksiyonel

- [x] SSS accordion açılıp kapanıyor.
- [x] Navbar bağlantıları doğru sayfalara gidiyor.
- [x] Browser yenilemesinde route'lar Nginx altında çalışıyor.
- [x] Dış bağlantılar yeni sekmede açılıyor.
- [x] İletişim formu çalışmaya devam ediyor.
- [x] Kamp kartları ve detay sayfaları çalışıyor.

### Teknik

- [x] `npm.cmd run build` başarılı.
- [ ] TypeScript/ESLint hataları yok veya bilinçli olarak belgelenmiş.
- [ ] Browser console hataları yok.
- [ ] Docker build başarılı; bu makinede Docker komutu bulunmuyor.
- [x] Masaüstü, tablet ve mobil görünüm kontrol edildi; yatay taşma bulunmadı.

### Animasyon

- [x] SSS başlık ve soru satırlarına scroll animasyonu eklendi.
- [x] SSS cevap açılımına yükseklik/opaklık geçişi eklendi.
- [x] Vizyon bölümüne karşılıklı giriş animasyonları eklendi.
- [x] WinterCamp kartlarına stagger, hover yükselme ve görsel zoom eklendi.
- [x] Kids Kamp kutularına karşılıklı giriş ve ikon hover geçişi eklendi.
- [x] Günlük program satırlarına sıralı giriş ve hover ayraç geçişi eklendi.
- [x] `prefers-reduced-motion` desteği eklendi.
- [x] Mobil ve desktop animasyon taşması kontrol edildi.
- [x] Scroll animasyonlarının tekrar görünürlükte yeniden çalışması sağlandı.

## 11. Animasyon Geliştirme Planı

Yeni eklenen bölümlerde mevcut sitenin hero, kamp kartları, Services ve Contact bölümlerindeki hareket diliyle uyumlu, ölçülü scroll ve hover animasyonları kullanılacaktır. Amaç her bölümü hareketli yapmak değil; içeriğin sırayla keşfedilmesini kolaylaştırmak ve sayfaya ritim kazandırmaktır.

### 11.1. Ortak animasyon standardı

- Mevcut `react-animate-on-scroll` kütüphanesi kullanılacak.
- Scroll animasyonları `animateOnce={false}` ile bölüm yeniden görünür olduğunda tekrar çalışacak.
- Giriş animasyonlarının süresi genel olarak `0.5s - 0.8s` arasında tutulacak.
- Kart ve liste elemanlarında stagger gecikmesi `0.08s - 0.15s` aralığında uygulanacak.
- Mobilde aynı animasyonlar korunacak, ancak mesafe ve süre azaltılacak.
- Sürekli dönen veya dikkat dağıtan animasyon kullanılmayacak.
- `prefers-reduced-motion` desteği eklenerek hareket azaltma tercihi olan kullanıcılar korunacak.

Önerilen ortak CSS:

```css
@media (prefers-reduced-motion: reduce) {
   *,
   *::before,
   *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
   }
}
```

### 11.2. SSS animasyonu

**Dosyalar:**

- `src/Components/FAQ/FAQ.tsx`
- `src/Components/FAQ/FAQ.css`

**Uygulama:**

- SSS başlığı ve açıklaması `fadeInUp` ile görünecek.
- Soru satırları sırayla `fadeInUp` ile gelecek.
- Her satırda kısa stagger gecikmesi kullanılacak.
- Açılır cevaplar yumuşak yükseklik/opaklık geçişiyle açılacak.
- Mevcut chevron dönüşü korunacak.
- `hidden` kullanımı animasyonu engelliyorsa panel görünürlüğü animasyonla uyumlu bir sınıf üzerinden yönetilecek.

**Kabul kriterleri:**

- Soru açılırken içerik zıplamamalı.
- Aynı anda yalnızca seçilen soru açık kalmalı.
- Klavye kullanımı ve `aria-expanded` davranışı bozulmamalı.
- Mobilde uzun cevaplar taşmamalı.

### 11.3. Biz Kimiz & Pedagojik Vizyonumuz animasyonu

**Dosyalar:**

- `src/Components/AboutVision/AboutVision.tsx`
- `src/Components/AboutVision/AboutVision.css`

**Uygulama:**

- Sol metin alanı `fadeInLeft` ile görünecek.
- Sağ görsel `fadeInRight` ile kısa gecikmeyle gelecek.
- Görsel caption alanı hafif `fadeInUp` ile görünecek.
- Görsel hover sırasında çok hafif `scale(1.03)` uygulanacak.

**Kabul kriterleri:**

- Görsel ve metin aynı anda yığılmadan görünmeli.
- Mobilde tek kolon sırasına geçişte animasyonlar çakışmamalı.
- Hover zoom görselin sınırlarını ve caption alanını bozmamalı.

### 11.4. Kış Kampları ve WinterLabs animasyonu

**Dosyalar:**

- `src/Components/WinterCampContent/WinterCampContent.tsx`
- `src/Components/WinterCampContent/WinterCampContent.css`

**Uygulama:**

- Bölüm başlığı `fadeInUp` ile gelecek.
- Üç kart sırayla `fadeInUp` ile görünecek.
- Kart gecikmeleri yaklaşık `0s`, `0.12s`, `0.24s` olacak.
- Hover sırasında kart `translateY(-6px)` ile hafif yükselecek.
- Kart görsellerine hafif zoom, ikonlara küçük scale geçişi eklenecek.

**Kabul kriterleri:**

- Kartlar aynı anda patlamadan sırayla görünmeli.
- Hover animasyonu mobil dokunmatik düzende layout kaymasına neden olmamalı.
- Kart görselleri animasyon sırasında taşmamalı.

### 11.5. Kids Kamp İçerikleri animasyonu

**Dosyalar:**

- `src/Components/KidsCampContent/KidsCampContent.tsx`
- `src/Components/KidsCampContent/KidsCampContent.css`

**Uygulama:**

- Başlık `fadeInUp` ile görünecek.
- Dahil olanlar kutusu `fadeInLeft` ile gelecek.
- Dahil olmayanlar kutusu `fadeInRight` ile gelecek.
- Liste maddeleri kısa aralıklarla sırayla görünür olacak.
- Check ve X ikonlarında küçük scale geçişi kullanılacak.

**Kabul kriterleri:**

- İki kutu masaüstünde karşılıklı, mobilde dikey ve okunabilir kalmalı.
- Liste animasyonu metinlerin okunmasını geciktirmemeli.
- İkon hareketleri içerik anlamını değiştirmemeli.

### 11.6. Sarıkamış'ta Bir Gün animasyonu

**Dosyalar:**

- `src/Components/DailySchedule/DailySchedule.tsx`
- `src/Components/DailySchedule/DailySchedule.css`

**Uygulama:**

- Bölüm başlığı `fadeInUp` ile gelecek.
- Program satırları sırayla `fadeInLeft` ile görünecek.
- Saat bilgisi önce, etkinlik metni hemen ardından görünecek.
- Satır ayraçları genişleme geçişiyle desteklenebilecek.
- Mobilde satırlar tek kolonda ve kısa mesafeli animasyonla çalışacak.

**Kabul kriterleri:**

- Günlük akış sıralı ve kolay takip edilir kalmalı.
- Uzun etkinlik metinleri ekrandan taşmamalı.
- Program animasyonu sayfa açılışını gereksiz yere geciktirmemeli.

### 11.7. Sarıkamış blog sayfası animasyonu

**Dosya:** `src/Pages/Blogs/Sarikamis.tsx`

**Uygulama:**

- Sayfa başlığı `fadeInDown`.
- Ana görsel `fadeIn`.
- İçerik blokları sırayla `fadeInUp`.
- Blog aside masaüstünde `fadeInRight`.
- Tüm animasyonlar bir kez çalışacak.

**Kabul kriterleri:**

- Fotoğraf kırpma konumu ve animasyon birlikte layout kayması oluşturmamalı.
- Mobilde blog aside sticky kalmamalı ve içerikten sonra okunabilmeli.

### 11.8. Footer animasyonu

**Dosyalar:**

- `src/Components/Footer/FooterComponent.tsx`
- `src/Components/Footer/FooterComponent.css`

**Uygulama:**

- Footer bölümü hafif `fadeInUp` ile görünecek.
- TÜRSAB/Pavone bilgi alanı kısa gecikmeyle görünecek.
- Mevcut link hover geçişleri korunacak.

**Kabul kriterleri:**

- Footer linkleri ve yasal bilgiler animasyon beklemeden erişilebilir olmalı.
- Mobil Footer kolonları animasyon sırasında üst üste binmemeli.

### 11.9. Animasyon uygulama sırası

1. Ortak `prefers-reduced-motion` kuralını ekle.
2. SSS açılma/kapanma animasyonunu uygula.
3. Vizyon bölümünde sol/sağ giriş animasyonlarını uygula.
4. WinterCamp kartlarında stagger ve hover animasyonlarını uygula.
5. Kids Kamp kutularına karşılıklı giriş animasyonu ekle.
6. Günlük programa sıralı timeline animasyonu ekle.
7. Sarıkamış blog ve Footer animasyonlarını ekle.
8. Mobil, tablet, desktop ve reduced-motion testlerini çalıştır.

### 11.10. Kamp detay sayfası animasyonu

**Dosya:** `src/Components/CampDetail/CampDetail.tsx`

**Uygulama:**

- Kamp görseli `fadeInLeft` ile giriş yapacak.
- Tarih, lokasyon, başlık ve açıklama `fadeInRight`/`fadeInUp` ile sırayla görünecek.
- Telefon, WhatsApp ve Instagram rezervasyon alanı gecikmeli `fadeInUp` ile gelecek.
- Fiyat tablosu `fadeInUp` ile görünecek.
- Sekme alanı `fadeInUp` ile giriş yapacak.
- Eğitim programındaki gün tabloları sırayla `fadeInLeft` ile görünecek.
- Eğitim ve kayak merkezi bilgi kartları sırayla `fadeInUp` ile görünecek.
- Tüm detay sayfası animasyonları `animateOnce={false}` ile tekrar çalışacak.

**Kabul kriterleri:**

- Kamp detayının ilk ekranı mobilde taşmamalı.
- Tablo satırları geçerli HTML tablo yapısını korumalı.
- Sekme değişimleri ve fiyat/rezervasyon bilgileri animasyon nedeniyle erişilemez hale gelmemeli.
- Sayfadan çıkıp geri dönüp tekrar scroll edildiğinde giriş animasyonları yeniden oynatılmalı.

## 10. Açık Kararlar

Geliştirmeye başlamadan önce aşağıdaki kararlar alınmalı:

1. Yeni logo dosyalarının adları ve kullanılacak varyantları nedir?
2. Sarıkamış ve WinterLabs fotoğrafları kim tarafından sağlanacak?
3. “Sıfır çığ riski” gibi ifadeler kullanılacak mı, yoksa daha temkinli şekilde mi yazılacak?
4. Pavone sitesindeki KVKK, sözleşme ve ödeme sayfalarının kesin URL'leri nedir?
5. TÜRSAB bilgisinin kamp detaylarında da gösterilip gösterilmeyeceği kesin mi?
6. Yeni logo ve Sarıkamış fotoğrafları ne zaman teslim edilecek?
7. Yeni içerikler sadece Türkçe mi olacak, ileride İngilizce dil desteği planlanıyor mu?

## 12. Kalan Uygulama İşleri

Geliştirme planının ana içerik işleri tamamlandı. Kalan işler:

1. Doğrulanmış Sarıkamış fotoğrafını teslim alıp geçici görseli değiştirmek.
2. Pavone sitesindeki kesin KVKK, sözleşme ve ödeme URL'lerini eklemek.
3. Docker build ve yayın öncesi son kontrolleri tamamlamak.

Yeni görseller ve kesin dış bağlantılar teslim edilene kadar uygulama mevcut geçici görsel ve Pavone ana sayfa bağlantısıyla çalışır durumdadır.

## 13. SEO Geliştirme Planı

Bu bölüm, Joy White web sitesinin arama motorları tarafından daha doğru okunması, sosyal medya paylaşımlarında düzgün görünmesi ve önemli sayfaların kendi içerikleriyle indekslenmesi için hazırlanmıştır.

SEO metinleri görünür içerikle uyumlu olmalı; kullanıcıya gösterilmeyen anahtar kelime listeleri veya doğrulanmamış güvenlik/turizm iddiaları kullanılmamalıdır.

### 13.1. Mevcut SEO durumu

Mevcut `public/index.html` dosyasında genel bir title ve description bulunuyor. Ancak:

- HTML dili `en` olarak ayarlanmış; site Türkçe olduğu için `tr` yapılmalı.
- Title ve description ana sayfanın yeni kamp içeriğini tam yansıtmıyor.
- Open Graph etiketleri bulunmuyor.
- Canonical URL bulunmuyor.
- Route bazlı title ve description yapısı bulunmuyor.
- JSON-LD yapılandırılmış verisi bulunmuyor.
- Bazı H1 kullanımları semantik olarak fazla; ana sayfada tek bir ana H1 tercih edilmeli.
- Bazı görsellerin alt metinleri genel veya içeriği yeterince açıklamıyor.
- `meta keywords` kullanılmamalı; modern arama motorlarında anlamlı bir sıralama katkısı sağlamıyor.

### 13.2. Ana sayfa temel metadata

**Dosya:** `public/index.html`

Önerilen title:

```text
Joy White Kış Kampı | Sarıkamış Çocuk Kayak Okulu
```

Önerilen description:

```text
Joy White, Sarıkamış'ta çocuklara kayak ve snowboard eğitimi sunar. Kayak eğitimini WinterLabs yaratıcı sanat, teknoloji ve drama atölyeleriyle birleştiren kış kampını keşfedin.
```

Uygulama adımları:

1. `<html lang="en">` değerini `<html lang="tr">` yap.
2. Mevcut title değerini yeni title ile değiştir.
3. Mevcut description değerini yeni description ile değiştir.
4. Description metnini yaklaşık 140-160 karakter aralığında tut.
5. Ana sayfada görünen içerik ile metadata arasında anlam farkı oluşturmama.

### 13.3. Ana sayfa H1 ve başlık hiyerarşisi

**Dosya:** `src/Components/HeroSection/HeroSection.tsx`

Mevcut Hero bölümünde iki adet H1 bulunuyor. Ana sayfanın tek ana H1'i aşağıdaki anlamı taşımalı:

```text
Joy White Kış Kampı
```

Önerilen yapı:

```tsx
<h1>Joy White Kış Kampı</h1>
<p>Sarıkamış'ta kayak, sanat ve WinterLabs deneyimi</p>
```

Uygulama kuralları:

- Aynı sayfada birden fazla görsel H1 kullanılmamalı.
- Bölüm başlıkları H2, kart başlıkları H3 olmalı.
- Görsel tasarım korunabilir; yalnızca HTML başlık semantiği düzeltilmeli.
- “JOYWHITE” marka metni H1 yerine görsel başlık veya H2 olarak kullanılabilir.

### 13.4. Route bazlı SEO metadata

React Router kullandığımız için her sayfaya uygun title ve description tanımlanmalı.

**Önerilen teknik yaklaşım:**

- `react-helmet-async` kurulmalı.
- `src/Components/SEO/SEO.tsx` bileşeni oluşturulmalı.
- `src/Components/data/seoData.ts` içinde route metadata tanımlanmalı.
- `src/index.tsx` içinde `HelmetProvider` kullanılmalı.

Önerilen route metadata:

| Route | Title | Description amacı |
|---|---|---|
| `/` | `Joy White Kış Kampı | Sarıkamış Çocuk Kayak Okulu` | Çocuk kayak eğitimi, WinterLabs ve kamp deneyimi |
| `/Trainings` | `Kayak Eğitimleri ve Kış Kampları | Joy White` | Eğitim seviyeleri, kamp tarihleri ve programlar |
| `/Training/:id` | `Sarıkamış Kayak Kampı | Joy White` | Seçilen kampın tarih, fiyat, eğitim ve rezervasyon bilgileri |
| `/SarikamisKayakMerkezi` | `Sarıkamış Kayak Merkezi ve Joy White Kış Kampı` | Sarıkamış, pistler, ulaşım ve kamp deneyimi |
| `/Gallery` | `Joy White Kayak Kampı Galerisi` | Kamp ve kayak deneyimlerinden görseller |
| `/Contact` | `İletişim ve Rezervasyon | Joy White` | İletişim, konum, telefon ve acente bilgileri |
| `/KayakSporuHakkindaBilinmesiGerekenler` | `Kayak Sporu Hakkında Bilinmesi Gerekenler` | Yeni başlayanlar için kayak bilgileri |
| `/KayakcilarIcinOnemliGuvenlikKurallari` | `Kayakçılar İçin Güvenlik Kuralları` | Kayak güvenliği ve hazırlık bilgileri |

Dinamik kamp detaylarında title kampın tarihi veya konumuyla zenginleştirilebilir; ancak title gereksiz yere uzatılmamalı.

### 13.5. Open Graph ve paylaşım metadata

`SEO` bileşenine aşağıdaki alanlar eklenmeli:

```html
<meta property="og:type" content="website" />
<meta property="og:locale" content="tr_TR" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:url" content="..." />
<meta property="og:image" content="..." />
<meta name="twitter:card" content="summary_large_image" />
```

Kurallar:

- `og:image` olarak gerçek ve izinli bir Joy White görseli kullanılmalı.
- Geçici veya filigranlı Sarıkamış fotoğrafı sosyal paylaşım görseli yapılmamalı.
- Canonical ve `og:url` aynı sayfanın gerçek URL'sini göstermeli.
- Alan adı kesinleşmeden production URL sabitlenmemeli.

### 13.6. Canonical URL

Her indekslenebilir sayfada tek canonical URL bulunmalı:

```html
<link rel="canonical" href="https://alan-adiniz.com/" />
```

Uygulama alan adı kesinleştiğinde yapılmalı. Localhost, Vercel preview ve production URL'leri canonical olarak kullanılmamalı.

### 13.7. Görsel alt metinleri

**Kontrol edilecek dosyalar:**

- `src/Components/HeroSection/HeroSection.tsx`
- `src/Components/AboutVision/AboutVision.tsx`
- `src/Components/WinterCampContent/WinterCampContent.tsx`
- `src/Components/Card/Card.tsx`
- `src/Pages/Blogs/Sarikamis.tsx`
- `src/Pages/Gallery/Gallery.tsx`
- `src/Components/Contact/Contact.tsx`

Alt metin kuralları:

- Görselde gerçekten görünen içeriği anlatmalı.
- Anahtar kelime doldurma yapılmamalı.
- Dekoratif görseller için `alt=""` kullanılmalı.
- Aynı görsel için her yerde aynı genel alt metin kullanılmamalı.

Örnekler:

```tsx
alt="Sarıkamış'ta karla kaplı sarıçam ormanları"
alt="Joy White WinterLabs yaratıcı sanat ve drama atölyesi"
alt="Sarıkamış kayak pistinde kış sporları eğitimi"
```

Bir fotoğrafta çocuklar görünmüyorsa `kayak eğitimi alan çocuklar` gibi bir alt metin yazılmamalı.

### 13.8. Yapılandırılmış veri ve JSON-LD

Ana sayfaya ve iletişim alanına uygun yapılandırılmış veri eklenebilir:

- `SportsClub` veya uygun `LocalBusiness` şeması
- `Organization` bilgisi
- Telefon, Instagram, adres ve site URL'si
- Sarıkamış konum bilgisi
- Pavone Travel Agency bilgisi yalnızca resmi ilişki doğrulanırsa eklenmeli

Kamp detayları için `Event` veya `Product` şeması ancak tarih, fiyat, stok ve kayıt URL'leri kesinleştiğinde kullanılmalı. Sabit veya geçmiş kamp tarihleriyle yanlış etkinlik verisi üretilmemeli.

### 13.9. robots.txt ve sitemap

**Dosyalar:**

- `public/robots.txt`
- Yeni `public/sitemap.xml`

Yapılacaklar:

1. `robots.txt` içinde sitemap URL'si tanımla.
2. 404, preview ve özel yönetim yolları varsa indekslenmesini engelle.
3. Ana sayfa, eğitimler, kamp detayları, Sarıkamış, Galeri ve Contact URL'lerini sitemap'e ekle.
4. Kamp tarihleri veya route'lar değiştiğinde sitemap'i güncelle.
5. Production alan adı kesinleşmeden sitemap URL'sini sabitleme.

### 13.10. İçerik doğrulama ve riskli ifadeler

Aşağıdaki ifadeler doğrulanmadan metadata, H1 veya JSON-LD içine alınmamalı:

- “Sıfır çığ riski”
- “Hiçbir çığ riski yok”
- “Kristal kar sadece Alpler ve Sarıkamış'ta bulunur”
- “Kayıtlar başladı”
- “Dünyaca ünlü” gibi kanıt gerektiren ifadeler

Daha güvenli içerik dili kullanılmalı:

```text
Sarıkamış'ın kendine özgü kar yapısı ve sarıçam ormanları, Joy White'ın çocuklara yönelik kış kampı deneyimine doğal bir ortam sunar.
```

### 13.11. SEO uygulama sırası

1. `lang`, title ve description değerlerini düzelt.
2. Ana sayfa H1 hiyerarşisini düzelt.
3. SEO bileşeni ve route metadata yapısını oluştur.
4. Open Graph ve Twitter metadata alanlarını ekle.
5. Production alan adı kesinleşince canonical URL ekle.
6. Görsel alt metinlerini tek tek kontrol et.
7. JSON-LD Organization/SportsClub verisini ekle.
8. robots.txt ve sitemap.xml dosyalarını güncelle.
9. Google Rich Results, Lighthouse ve Search Console kontrollerini yap.
10. SEO metadata, route yenileme, mobil görünüm ve sosyal paylaşım önizlemelerini test et.

### 13.12. SEO kabul kriterleri

- [ ] HTML dili `tr`.
- [ ] Ana sayfada tek ana H1.
- [ ] Ana sayfa title ve description güncel.
- [ ] Her önemli route'un ayrı title ve description değeri var.
- [ ] Open Graph ve Twitter metadata alanları çalışıyor.
- [ ] Canonical URL production alan adına göre ayarlanmış.
- [ ] Görsellerin alt metinleri içerikle uyumlu.
- [ ] `meta keywords` kullanılmıyor.
- [ ] Riskli güvenlik/turizm iddiaları doğrulanmış veya daha temkinli dille yazılmış.
- [ ] JSON-LD geçerli ve gerçek işletme bilgileri içeriyor.
- [ ] robots.txt ve sitemap.xml production URL'leriyle uyumlu.
- [ ] Lighthouse SEO kontrolü tamamlandı.
