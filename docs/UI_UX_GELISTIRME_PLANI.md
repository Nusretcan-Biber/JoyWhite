# JoyWhite UI/UX İyileştirme Planı

**Tarih:** 15 Eylül 2026
**Kapsam:** `web/` - mevcut sayfa sayfa UI incelemesinde tespit edilen maddelerin uygulama planı
**İlgili dokümanlar:** [`GELISTIRME_PLANI.md`](./GELISTIRME_PLANI.md) (içerik/tasarım planı), [`PROJE_ANALIZ_DOKUMANI.md`](./PROJE_ANALIZ_DOKUMANI.md) (teknik durum analizi)

## 1. Amacı ve Yaklaşım

Bu doküman, sitenin sayfa sayfa incelenmesiyle çıkan UI/UX bulgularını uygulanabilir bir sıraya koyar. Yeni bir renk paleti getirilmiyor; mevcut marka renkleri (`PrimaryColor #19004a`, `logoBlue #145a9f`, `BabyBlue #7ec8e3`, `KırıkBeyaz #F5F5F5`) esas alınıp, bunların yerine yanlışlıkla kullanılan Tailwind varsayılan renkleri (`blue-500`, `indigo-500`, `gray-900` vb.) değiştiriliyor.

Fazlar **etki/efor** oranına göre sıralanmıştır: önce küçük ama görünürlüğü yüksek düzeltmeler, sonra sayfa bazlı iyileştirmeler, en sona site genelini kapsayan standardizasyon işleri bırakılmıştır.

**Durum:** Tüm fazlar 15 Eylül 2026'da uygulandı, her faz sonrası `npm run build` ile derleme doğrulandı. Bu değişiklikler deneyseldir - beğenilmeyen herhangi bir madde tek tek geri alınabilir, bunun için hangi dosyaların değiştiği her faz altında not edildi.

## 2. Faz 1 - Hızlı Düzeltmeler (Quick Wins)

Düşük efor, yüksek etki. Aynı gün bitirilebilir.

- [x] **404 sayfası** - `App.tsx` içindeki düz `<div>404 Not Found</div>`'ı kaldırıldı; Navbar + Footer içeren, Türkçe metinli, "Anasayfaya Dön" butonlu markalı bir 404 bileşeni oluşturuldu (`src/Pages/NotFound/NotFoundPage.tsx`).
- [x] **İletişim numarası tutarsızlığı** - `ContactPage.tsx`'te ekranda görünen numara, `tel:`/WhatsApp linklerindeki gerçek numarayla (`+90 505 646 02 34`) eşleşecek şekilde düzeltildi.
- [x] **Navbar geçiş süresi hatası** - `NavbarComponent.tsx`'teki `transition-all duration-2000` → `duration-200` yapıldı.
- [x] **Kırık dark mode** - `Contact.tsx`, `CampsComponent.tsx`, `InstaSection.tsx`, `CampDetail.tsx` içindeki tüm `dark:` sınıfları kaldırıldı.
- [x] **Kullanılmayan Poppins fontu** - `index.css`'teki Poppins `@import` satırı kaldırıldı.
- [x] **Hero scroll-down hedefi** - `id="about"`, `Contact.tsx`'ten alınıp `FAQ.tsx`'e taşındı; scroll-down oku artık Hero'dan hemen sonraki FAQ bölümüne gidiyor.

## 3. Faz 2 - Renk ve Tipografi Tutarlılığı (Site Geneli)

- [x] `Services.tsx` ve `CampDetail.tsx`: `bg-indigo-100 text-indigo-500` → `bg-SecondaryColor text-PrimaryColor` yapıldı.
- [x] `Contact.tsx`, `CampsComponent.tsx`, `BlogAside.tsx`, `ContactPage.tsx`, `Services.tsx` içindeki "3 nokta ayraç" deseninde `bg-blue-500` → `bg-logoBlue` yapıldı (Gallery'de bu desen kullanılmıyormuş, kontrol edildi).
- [x] Navbar Blog dropdown hover'ı (`hover:!bg-black`) → `hover:!bg-PrimaryColor` yapıldı.
- [ ] **Ertelendi:** Başlık tipografisi için ortak bir ölçek belirleme işi kapsam olarak çok geniş (10+ dosyada font-size/weight değişikliği gerektiriyor) ve görsel QA olmadan riskli; bu doküman kapsamının dışında ayrı bir iterasyonda ele alınması öneriliyor.

## 4. Faz 3 - Ortak Buton Sistemi

- [x] **Kapsam daraltıldı:** `.my-btn`, `.contact-button`, `.reach-out-button`, `.price-whatsapp-button` görsel olarak gerçekten farklı 3 ayrı buton ailesi (ikon-only daire, genişleyen pill, dolu yeşil pill) olduğu için zorla tek bir bileşende birleştirmek görsel fark yaratmadan risk eklerdi. Bunun yerine asıl tekrar eden ve riskli olan kısım giderildi: telefon numarası ve WhatsApp link inşası `Footer.tsx`, `CampDetail.tsx` (x2), `ContactPage.tsx` içinde 4 ayrı yerde elle kopyalanmıştı; artık hepsi `src/config/contact.ts`'teki `PHONE_NUMBER`, `PHONE_DISPLAY`, `PHONE_TEL_HREF`, `buildWhatsappLink()` üzerinden geliyor. Numara değişirse artık tek yerden güncellenir.

## 5. Faz 4 - Anasayfa

- [x] **Hero slide içerikleri** - kullanılmayan `text` alanları veri modelinden kaldırıldı, `title` alanları artık daha açıklayıcı `alt` metni olarak kullanılıyor (görünen 3 satırlık sabit başlık kullanıcı isteği üzerine değişmedi).
- [x] **InstaSection başlığı** - diğer bölümlerle tutarlı `section-kicker + h2` ("Sosyal Medya / Instagram'da Bizi Takip Edin") eklendi.
- [x] **Services / WinterCampContent içerik çakışması** - Services içeriği "Küçük Grup Eğitimleri", "Ücretsiz Ekipman & SkiPass", "Güvenli Seyahat & Konaklama" olarak yeniden yazıldı (kulüp geneli güven/lojistik vurgusu); WinterCampContent'in kamp-içi pedagojik içeriğiyle artık çakışmıyor. Bölüm başlığı "Neden Joy White?" oldu.
- [x] *(Bonus)* `.section-kicker` rengi (`#2563eb`) `var(--primary-color)`'a çevrildi - FAQ, WinterCamp, KidsCamp, DailySchedule ve InstaSection'daki tüm kicker etiketleri artık marka rengiyle tutarlı.

## 6. Faz 5 - Eğitimlerimiz / Kart Listesi

- [x] `Card.tsx`'teki ok linkine `aria-label` eklendi (kamp adına özel: "X kamp detayına git").
- [x] Özel dönemler için `dummydata.js`'e ayrı bir `badge` alanı eklendi (Yılbaşı Özel, 4 Gün, Sömestr Öncesi/Sonrası, Ara Tatil Öncesi/Sonrası, Ramazan Bayramı, Sezon Kapanışı); uzun kart başlıkları eski haline (`JoyWhite Kayak Kulübü`) döndürüldü, ayrım artık kart üzerindeki mor rozetle yapılıyor. `Card.tsx`'e rozet render'ı ve `Card.css`'e `.card-badge` stili eklendi.
- [ ] 17 kampın listesini tarih/ay bazlı gruplama ya da filtre - nice-to-have, içerik/tasarım kararı gerektirdiği için bu iterasyonun dışında bırakıldı.

## 7. Faz 6 - Kamp Detay

- [x] "Açıklama" sekmesindeki yorum satırı haline getirilmiş 3 içerik bloğu (havalimanı transferi, "Habitat Otel" konaklama, "45 dakika ulaşım") tamamen kaldırıldı - içerikleri doğrulanmamıştı, ayrıca "45 dakika" ifadesi sayfanın başka yerinde geçen doğrulanmış "40 dakika" bilgisiyle çelişiyordu. İçerik netleşirse yeniden eklenebilir.
- [x] "Açıklama" sekmesinin ikonu `HiUserCircle` → `HiInformationCircle` yapıldı.
- [x] *(Bonus)* Aynı sekmedeki 8 ikonun tamamında kullanılan off-brand `text-blue-500` → `text-PrimaryColor` yapıldı.

## 8. Faz 7 - Biz Kimiz

- [x] "Kış Kamplarımızda Neler Var?" bölümü (anasayfadaki `WinterCampContent` ile birebir aynıydı) Biz Kimiz sayfasından tamamen kaldırıldı; sayfa artık sadece kendine özgü "Biz Kimiz/Neden Biz/Pedagojik Yaklaşım" ve "Pedagojik Vizyonumuz" bölümlerini içeriyor. İlgili kullanılmayan `campFeatures` verisi ve `.biz-kimiz-camp` CSS kuralları da temizlendi.
- [x] "kış sporü deneyimi" → "kış sporu deneyimi" yazım hatası düzeltildi.

## 9. Faz 8 - İletişim

- [x] **Kapsam genişletildi (site geneli):** Floating WhatsApp butonu sadece İletişim sayfasına değil, `App.tsx` üzerinden tüm sayfalara eklendi (`src/Components/FloatingWhatsapp/`) - böylece hızlı erişim her sayfadan mümkün. Mevcut "yukarı çık" butonuyla aynı köşede çakışmaması için o buton yukarı kaydırıldı (`ScrollTop.css`, `bottom: 20px` → `90px`).

## 10. Faz 9 - Galeri

- [x] `ImageGallery` öğelerine `originalAlt`/`thumbnailAlt` eklendi (37 görselin tamamında artık anlamlı alt metni var).
- [x] `autoPlay` kapatıldı (kullanıcı artık kendi hızında geziniyor).
- [x] `lazyLoad` prop'u açıldı (performans).
- [ ] Basit bir kategori/sekme ayrımı - nice-to-have, içerik netleştikçe yapılabilir, bu iterasyonun dışında bırakıldı.

## 11. Faz 10 - Blog Sayfaları

- [x] `BlogAside.tsx`'teki aktif link tespiti `window.location.pathname` yerine `useLocation()` (`react-router-dom`) hook'una taşındı - SPA içi geçişlerde aktif vurgu artık doğru güncelleniyor.
- [ ] "Kayak Sporu Hakkında Bilinmesi Gerekenler" blogunun kapak görseli (`fotos[0].src`, şu an genel `ornekResim.jpg`) - içeriğe özel gerçek bir görsel teslim edilmeden değiştirilemez, ertelendi.

## 12. Uygulama Sırası (Özet)

1. Faz 1 (Hızlı Düzeltmeler) - tek oturumda bitirilebilir, en yüksek görünür etki.
2. Faz 2 + Faz 3 (Renk/Tipografi/Buton standardizasyonu) - site genelini etkiler, dikkatli test gerektirir.
3. Faz 4-8 (sayfa bazlı iyileştirmeler) - bağımsız, istenen sırayla yapılabilir.
4. Faz 9-10 (Galeri, Blog) - görsel/içerik netleştikçe tamamlanabilir, diğerlerine bağımlı değil.

## 13. Kabul Kriterleri

- [x] 404 sayfası markalı, Türkçe ve anasayfaya dönüş linki içeriyor.
- [x] Sitedeki tüm telefon/WhatsApp linkleri aynı numarayı gösteriyor ve arıyor (`src/config/contact.ts` merkezi kaynak).
- [x] OS karanlık modda site tamamen tutarlı (tüm `dark:` sınıfları kaldırıldı).
- [x] Navbar scroll geçişi gözle fark edilir bir gecikme olmadan çalışıyor.
- [x] Site genelinde mavi/mor vurgu renkleri `tailwind.config.js`'teki marka tokenlarından geliyor.
- [x] Hero, InstaSection, Services/WinterCamp çakışması gibi anasayfa bulguları çözülmüş.
- [x] Kamp kartlarında özel dönemler rozetle ayırt ediliyor.
- [x] Kamp detayındaki yorum satırı içerik temizlendi (doğrulanmamış olduğu için aktif edilmedi).
- [x] Biz Kimiz sayfası anasayfayla birebir aynı bölümü tekrar etmiyor, yazım hatası düzeltilmiş.
- [x] Floating WhatsApp butonu eklendi (İletişim'e özel değil, site geneline).
- [x] Galeri görsellerinin tamamında anlamlı `alt` metni var, `autoPlay` kapatıldı.
- [x] Blog aside'daki aktif link vurgusu SPA içi gezinmede doğru çalışıyor.

### Kapsam dışı bırakılan / ertelenen maddeler

- Başlık tipografisi için ortak ölçek belirleme (Faz 2) - çok geniş kapsamlı, görsel QA gerektiriyor.
- Tüm buton stillerinin tek bileşende birleştirilmesi (Faz 3) - görsel diller gerçekten farklı, zorla birleştirme risk taşıyordu; bunun yerine telefon/WhatsApp link mantığı merkezileştirildi.
- 17 kampın tarih/kategori bazlı filtrelenmesi (Faz 5) - tasarım kararı gerektiriyor.
- Galeri kategorileri/sekmeleri (Faz 9) - içerik netleşmeden yapılamaz.
- "Kayak Sporu Hakkında" blogunun kapak görseli (Faz 10) - gerçek görsel teslim edilmeden değiştirilemez.
