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

- [ ] SSS accordion açılıp kapanıyor.
- [ ] Navbar bağlantıları doğru sayfalara gidiyor.
- [ ] Browser yenilemesinde route'lar Nginx altında çalışıyor.
- [ ] Dış bağlantılar yeni sekmede açılıyor.
- [ ] İletişim formu çalışmaya devam ediyor.
- [ ] Kamp kartları ve detay sayfaları çalışıyor.

### Teknik

- [x] `npm.cmd run build` başarılı.
- [ ] TypeScript/ESLint hataları yok veya bilinçli olarak belgelenmiş.
- [ ] Browser console hataları yok.
- [ ] Docker build başarılı; bu makinede Docker komutu bulunmuyor.
- [ ] Masaüstü ve mobil görünüm kontrol edildi.

## 10. Açık Kararlar

Geliştirmeye başlamadan önce aşağıdaki kararlar alınmalı:

1. Yeni logo dosyalarının adları ve kullanılacak varyantları nedir?
2. Sarıkamış ve WinterLabs fotoğrafları kim tarafından sağlanacak?
3. “Sıfır çığ riski” gibi ifadeler kullanılacak mı, yoksa daha temkinli şekilde mi yazılacak?
4. Pavone sitesindeki KVKK, sözleşme ve ödeme sayfalarının kesin URL'leri nedir?
5. TÜRSAB bilgisinin kamp detaylarında da gösterilip gösterilmeyeceği kesin mi?
6. Yeni logo ve Sarıkamış fotoğrafları ne zaman teslim edilecek?
7. Yeni içerikler sadece Türkçe mi olacak, ileride İngilizce dil desteği planlanıyor mu?

## 11. Kalan Uygulama İşleri

Geliştirme planının ana içerik işleri tamamlandı. Kalan işler:

1. Yeni logo dosyalarını teslim alıp Navbar ve Footer'da değiştirmek.
2. Doğrulanmış Sarıkamış fotoğrafını teslim alıp geçici görseli değiştirmek.
3. Pavone sitesindeki kesin KVKK, sözleşme ve ödeme URL'lerini eklemek.
4. Masaüstü, tablet ve mobil testlerini tamamlamak.
5. Docker build ve yayın öncesi son kontrolleri tamamlamak.

Yeni görseller ve kesin dış bağlantılar teslim edilene kadar uygulama mevcut geçici görsel ve Pavone ana sayfa bağlantısıyla çalışır durumdadır.
