# JoyWhite Web Sitesi - Proje Analiz Dokümanı

**Tarih:** 15 Eylül 2026
**Kapsam:** `web/` dizini altındaki React tabanlı JoyWhite Kayak Kulübü web sitesi
**İlgili doküman:** [`GELISTIRME_PLANI.md`](./GELISTIRME_PLANI.md) - içerik/tasarım geliştirme planı. Bu doküman ise mevcut kod tabanının teknik durumunu, mimarisini ve tespit edilen riskleri ortaya koyar.

---

## 1. Projeye Genel Bakış

JoyWhite, Sarıkamış/Kars'ta çocuklara yönelik kayak ve snowboard kampları düzenleyen bir kayak kulübünün tanıtım/pazarlama web sitesidir. Site; kamp bilgisi, fiyatlandırma, kayıt/rezervasyon yönlendirmesi (telefon, WhatsApp, Pavone Travel Agency), blog içerikleri ve galeri barındıran, tamamen statik olarak build edilip Nginx üzerinden sunulan bir Single Page Application'dır. Backend/API yoktur; tüm kamp verisi kod içinde sabit (hardcoded) tutulur, tek dışa açık entegrasyon iletişim formu için kullanılan EmailJS'tir.

## 2. Teknoloji Yığını

| Katman | Teknoloji | Not |
|---|---|---|
| Framework | React 18.3 + TypeScript 4.9 | `Create React App` (`react-scripts` 5.0.1) ile bootstraplanmış, eject edilmemiş |
| Routing | React Router DOM 6.27 | Client-side routing, `BrowserRouter` varsayımıyla Nginx `try_files` fallback'i kullanılıyor |
| Stil | Tailwind CSS 3.4 + bileşen bazlı `.css` dosyaları + `flowbite-react` | Karma bir yaklaşım: hem Tailwind utility class'ları hem geleneksel CSS dosyaları bir arada |
| UI kütüphaneleri | `flowbite-react` (Navbar, Tabs, Table, Dropdown, Card, ListGroup), `@headlessui/react`, `swiper`, `react-image-gallery` | |
| İkonlar | Font Awesome (`@fortawesome/*`) ve `react-icons` bir arada kullanılıyor | İki farklı ikon kütüphanesi paralel kullanımda |
| Animasyon | `react-animate-on-scroll`, `animate.css` | Scroll-tetiklemeli giriş animasyonları için proje genelinde standart haline getirilmiş |
| Form/İletişim | `@emailjs/browser`, `react-hot-toast`, `react-toastify` (iki farklı toast kütüphanesi) | EmailJS servis/template/user ID'leri `.env` üzerinden okunuyor |
| Build/Deploy | Docker (multi-stage: `node:lts-alpine` build → `nginx:alpine` serve), `docker-compose`, GitLab CI | |
| Test altyapısı | `@testing-library/*`, `react-scripts test` script'i mevcut | Ancak repoda hiç `.test.tsx`/`.spec.tsx` dosyası yok - fiilen test yazılmamış |

## 3. Dizin Yapısı

```
web/
├── public/                  # Statik dosyalar, görseller, manifest, robots.txt, sitemap.xml
├── src/
│   ├── Assets/               # Logo ve tasarım kaynak dosyaları (.ai, .eps, .png, .jpg)
│   ├── Components/
│   │   ├── AboutVision/       # "Biz Kimiz & Pedagojik Vizyonumuz" anasayfa bölümü
│   │   ├── BlogAside/         # Blog sayfaları yan menüsü
│   │   ├── CampDetail/        # Kamp detay sayfası (fiyat tablosu, program, sekmeler)
│   │   ├── Camps/              # Anasayfadaki kamp kartları listesi
│   │   ├── Card/                # Genel kart bileşeni
│   │   ├── Contact/             # Anasayfadaki "Hakkımızda" özet bölümü (Contact sayfasıyla karışmasın)
│   │   ├── DailySchedule/       # "Sarıkamış'ta bir gün" zaman çizelgesi
│   │   ├── FAQ/                  # SSS accordion bileşeni
│   │   ├── Footer/               # Site geneli footer (TÜRSAB/Pavone bilgisi burada)
│   │   ├── HeroSection/          # Anasayfa hero alanı (2 varyant: Hero, PhotoHero)
│   │   ├── InstaSection/         # Instagram embed/link bölümü
│   │   ├── KidsCampContent/      # Kids kamp içerik kutuları
│   │   ├── Navbar/                # Site geneli navigasyon
│   │   ├── ScrollTop/             # Sayfa değişiminde scroll'u sıfırlayan yardımcı bileşen
│   │   ├── Services/              # Hizmetler bölümü
│   │   ├── WinterCampContent/     # "Kış Kamplarımızda Neler Var?" kart grubu
│   │   ├── data/                  # `dummydata.js` - kamp, blog, galeri verisi (tek TS-dışı veri kaynağı)
│   │   └── tabs/                  # `Description.tsx` - sekme içerik yardımcı bileşeni
│   ├── Pages/
│   │   ├── BizKimiz/     # Yeni "Biz Kimiz" sayfası (henüz commit edilmemiş, bkz. Bölüm 8)
│   │   ├── Blogs/         # Sarikamis, WhatsSki, SkiImportantInfo blog sayfaları (Palandöken kaldırılmış)
│   │   ├── Camps/          # `/Trainings` kamp listesi sayfası
│   │   ├── Contact/        # `/Contact` iletişim sayfası
│   │   ├── Gallery/        # `/Gallery` galeri sayfası
│   │   └── MainPage/       # `/` anasayfa - tüm bölümleri sırayla birleştiren kompozisyon noktası
│   ├── App.tsx             # Route tanımları
│   └── index.tsx           # Uygulama giriş noktası
├── Dockerfile, docker-compose.yml, nginx.conf, .gitlab-ci.yml
└── docs/GELISTIRME_PLANI.md
```

`node_modules` ~1.4 GB, `src` ~2.1 MB - proje küçük/orta ölçekli bir marketing sitesi büyüklüğünde.

## 4. Sayfa / Route Haritası

`src/App.tsx` içinde tanımlı route'lar:

| Path | Bileşen | Açıklama |
|---|---|---|
| `/` | `MainPage` | Anasayfa - tüm bölümlerin birleştiği yer |
| `/Trainings` | `Camps` | Kamp listesi |
| `/Training/:id` | `CampDetail` | Kamp detayı, fiyat ve program |
| `/Gallery` | `Gallery` | Fotoğraf galerisi |
| `/Contact` | `ContactPage` | İletişim formu + bilgiler |
| `/Biz-Kimiz` | `BizKimizPage` | Yeni eklenen "Biz Kimiz" sayfası (uncommitted) |
| `/KayakSporuHakkindaBilinmesiGerekenler` | `WhatsSki` | Blog |
| `/KayakcilarIcinOnemliGuvenlikKurallari` | `SkiImportantInfo` | Blog |
| `/SarikamisKayakMerkezi` | `Sarikamis` | Blog - Sarıkamış tanıtımı |
| `*` → `/404` | 404 sayfası | Tanımsız her path 404'e yönlendiriliyor |

Anasayfa bölüm sırası (`MainPage.tsx`): Navbar → Hero → FAQ → AboutVision → WinterCampContent → KidsCampContent → DailySchedule → Contact (özet) → CampsComponent → Services → InstaSection → Footer. Bu sıra, `GELISTIRME_PLANI.md` Bölüm 4'te önerilen sırayla (SSS, Biz Kimiz, WinterCamp, Kids Kamp, Daily Schedule sırasıyla en üstte) örtüşüyor; yani planın anasayfa kısmı büyük oranda uygulanmış durumda.

## 5. Veri Yönetimi

Tüm içerik verisi statik/hardcoded:

- **`src/Components/data/dummydata.js`**: Tek merkezi veri dosyası, düz JavaScript (TypeScript değil). `about`, `campsData` (7 kamp, sabit fiyat/tarih), `blog` (kullanılmayan Lorem Ipsum placeholder verisi), `fotos` (13 kayıt, hepsi aynı `ornekResim.jpg` placeholder görseline işaret ediyor).
- FAQ, WinterCamp, KidsCamp, DailySchedule gibi yeni eklenen bölümlerin verisi ise kendi `.tsx` dosyaları içine gömülü (ör. `FAQ.tsx` içindeki `faqItems` dizisi) - `GELISTIRME_PLANI.md`'nin önerdiği ayrı `faqData.ts`/`winterCampData.ts` dosyalarına taşıma henüz yapılmamış.
- Kamp detay sayfasındaki eğitim programı (`scheduleData`) `CampDetail.tsx` içine gömülü, tüm kamplar için ortak/statik.
- Ortam değişkenleri yalnızca EmailJS için kullanılıyor (`REACT_APP_EMAILJS_SERVICE_ID/TEMPLATE_ID/USER_ID`), `.env` dosyası `.gitignore` içinde ve git'e commit edilmemiş (kontrol edildi - repoda izlenmiyor).

## 6. Stil ve Tasarım Sistemi

- Tailwind `tailwind.config.js` içinde marka renkleri tanımlı (`logoBlue`, `PrimaryColor`, `KırıkBeyaz` vb.) ancak isimlendirme tutarsız: Türkçe (`Turuncu`, `Gri`, `AcikMavi`) ve İngilizce (`snow`, `PrimaryColor`) renk adları karışık kullanılıyor; bazı renkler (`Mavi`, `KoyuMavi`, `AcikMavi`) tanımlı olup aktif kullanılıp kullanılmadığı belirsiz.
- Component bazlı `.css` dosyaları (ör. `NavbarComponent.css`, `FAQ.css`) Tailwind ile birlikte kullanılıyor - tam bir utility-first mimariye geçilmemiş, karma yaklaşım sürdürülüyor.
- Scroll animasyonları için `react-animate-on-scroll` standart hale getirilmiş; `GELISTIRME_PLANI.md` Bölüm 11'de bu yaklaşım detaylı olarak dokümante edilmiş ve `prefers-reduced-motion` desteği eklenmiş (plan checklist'ine göre tamamlanmış).

## 7. SEO Durumu

`public/index.html` içinde `lang="tr"`, Open Graph, Twitter Card meta etiketleri ve `description` mevcut - `GELISTIRME_PLANI.md` Bölüm 13'te planlanan temel SEO işlerinin çoğu uygulanmış (son commit'ler: "Add foundational SEO metadata", "Update SEO metadata and production sitemap", "Fix SEO heading JSX tags"). `robots.txt` üretim alan adını (`joywhite365.com`) referans alıyor, `sitemap.xml` mevcut (9 satır - küçük, statik).

**Dikkat edilmesi gereken nokta:** `public/index.html` içindeki title/description/OG metinlerinde ("Kayıtlar Başladı", "sıfır çığ riski bulunan sarıçam ormanları") ve `FAQ.tsx` içindeki bir cevapta ("sıfır çığ riski bulunan güvenli bir ortam") kullanılan ifadeler, `GELISTIRME_PLANI.md`'nin hem Bölüm 3.7 hem Bölüm 13.10'da açıkça "doğrulanmadan kullanılmamalı" dediği riskli ifadelerle birebir örtüşüyor. Yani planın kendi koyduğu içerik güvenlik kuralı ile üretimdeki mevcut metin arasında bir tutarsızlık var - bu ifadelerin gerçekten doğrulanıp doğrulanmadığı netleştirilmeli.

## 8. Git / Depo Durumu

- Bu dizin (`web/`) bağımsız bir git deposu (üst dizin `C:\Work\JoyWhite` git deposu değil).
- İki remote tanımlı: `origin` → GitLab (`gitlab.com/joywhite365/web.git`, CI/CD ve Docker deploy burada çalışıyor) ve `github` → `github.com/Nusretcan-Biber/JoyWhite.git`. Ayrıca `test/vercel-deployment` adlı bir branch hem yerelde hem her iki remote'ta mevcut - bu, GitLab+Docker+Nginx tabanlı üretim akışına ek olarak bir Vercel denemesi/alternatif deploy stratejisi olabileceğini gösteriyor; hangisinin güncel/canlı yayın hattı olduğu koddan net anlaşılmıyor.
- Şu an checkout edilen branch `github-main`.
- **Commit edilmemiş değişiklikler var:** `src/App.tsx` ve `src/Components/Navbar/NavbarComponent.tsx` değiştirilmiş (Biz-Kimiz route ve navbar linki eklenmiş), `src/Pages/BizKimiz/` klasörü tamamen untracked (yeni sayfa henüz hiç commit edilmemiş). Bu, üzerinde aktif çalışılan tamamlanmamış bir özellik olduğunu gösteriyor.
- Son commit geçmişi SEO ve animasyon işlerine odaklanmış; `GELISTIRME_PLANI.md` ile git log arasında tutarlı bir ilerleme görülüyor (plan → commit eşleşmesi büyük oranda sağlanmış).

## 9. Tespit Edilen Riskler ve Teknik Borç

1. **Eski/placeholder içerik canlı kodda duruyor** - `dummydata.js` içindeki `about` metni hâlâ "SnowMore Profesyonel Kayak Kulübü" markasından bahsediyor (JoyWhite'a geçiş sırasında güncellenmemiş kalıntı), `blog` dizisi tamamen Lorem Ipsum ve hiçbir yerde kullanılmıyor (dead code), `fotos` dizisindeki 13 kaydın tamamı aynı `ornekResim.jpg` placeholder'ını gösteriyor.
2. **Kamp tarihleri güncel değil** - `campsData` içindeki tüm kamp tarihleri Ocak-Mart 2025 aralığında; bugünün tarihi (15 Eylül 2026) dikkate alındığında bu veriler geçmişte kalmış, sitede yayında olan kamp listesi/fiyatları muhtemelen güncellenmesi gerekiyor.
3. **Doğrulanmamış/riskli pazarlama ifadeleri üretimde** - Bölüm 7'de detaylandırıldığı gibi "sıfır çığ riski" gibi ifadeler hem `index.html` hem `FAQ.tsx` içinde canlı, ancak projenin kendi geliştirme planı bunları "doğrulanmadan kullanılmamalı" olarak işaretlemiş.
4. **CRA (react-scripts) bakım modunda** - `react-scripts` 5.0.1 ile CRA, React ekosisteminde güncel önerilen araç değil; uzun vadede Vite vb. bir alternatife geçiş değerlendirilebilir. Kısa vadede acil değil.
5. **Test kapsamı yok** - Test kütüphaneleri kurulu ama hiç test dosyası yazılmamış; regresyonlar yalnızca manuel kontrolle yakalanabiliyor.
6. **Veri modeli parçalı/tutarsız** - Kamp verisi `.js` (untyped), yeni bölümlerin verisi (FAQ, WinterCamp, KidsCamp) ilgili `.tsx` dosyaları içine gömülü; `GELISTIRME_PLANI.md`'nin önerdiği merkezi `types/` ve ayrı veri dosyalarına geçiş henüz yapılmamış.
7. **Telefon/WhatsApp numarası tekrarlanıyor** - `+905056460234` numarası ve WhatsApp link mantığı `FooterComponent.tsx` ve `CampDetail.tsx` içinde ayrı ayrı hardcoded; merkezi bir sabitler/config dosyası yok, numara değiştiğinde birden fazla yerde güncelleme riski var.
8. **İki paralel ikon ve toast kütüphanesi** - Hem Font Awesome hem `react-icons`, hem `react-hot-toast` hem `react-toastify` aynı anda bağımlılıkta; muhtemelen sadece biri fiilen kullanılıyor, diğeri gereksiz bundle boyutu ekliyor (doğrulama gerektirir).
9. **Deploy stratejisi belirsizliği** - GitLab CI (Docker + SSH deploy) üretim hattı olarak görünüyor, ancak `test/vercel-deployment` branch'i ve iki ayrı git remote'u (GitHub + GitLab) hangi platformun gerçek kaynak/yayın deposu olduğu sorusunu açık bırakıyor.
10. **Tamamlanmamış "Biz Kimiz" sayfası commit edilmemiş** - Bölüm 8'de belirtildiği gibi yerel değişiklikler henüz versiyon kontrolüne alınmamış; iş kaybı riski var.
11. **`GELISTIRME_PLANI.md`'deki açık kararlar hâlâ açık** - Gerçek Sarıkamış fotoğrafı, Pavone'nin kesin KVKK/sözleşme/ödeme URL'leri ve Docker build'in bu makinede doğrulanamamış olması gibi maddeler planın "Kalan Uygulama İşleri" bölümünde hâlâ bekliyor.
12. **Tasarım kaynak dosyaları repoda** - `src/Assets/8841260.ai` ve `8841261.eps` gibi büyük ikili tasarım dosyaları kaynak koduyla birlikte versiyonlanıyor; bunlar build'e dahil olmadığından repo boyutunu gereksiz büyütüyor olabilir.

## 10. Özet Değerlendirme

Kod tabanı, standart bir CRA + TypeScript + Tailwind mimarisinde, orta karmaşıklıkta ve büyük ölçüde `GELISTIRME_PLANI.md`'de tarif edilen içerik/tasarım işlerini başarıyla hayata geçirmiş durumda (SSS, Biz Kimiz/Vizyon, WinterLabs, Kids Kamp, Günlük Program bölümleri, animasyonlar ve temel SEO çalışması commit geçmişiyle doğrulanabiliyor). Asıl açık noktalar; **içerik güncelliği** (2025 kamp tarihleri, SnowMore kalıntı metni, placeholder galeri görselleri), **doğrulanmamış pazarlama iddiaları** ve **deploy/depo stratejisindeki belirsizlik** (GitLab vs GitHub vs Vercel) etrafında toplanıyor - bunlar kod kalitesinden çok içerik/operasyon kararlarıyla ilgili ve önceliklendirilerek ele alınmalı.
