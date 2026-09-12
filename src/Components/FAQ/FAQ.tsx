import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import "./FAQ.css";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "Çocuğum daha önce hiç kayak yapmadı, bu kampa uyum sağlayabilir mi?",
    answer:
      "Kesinlikle. Eğitim modelimiz, çocukların karla ilk tanışmasını stres unsuru değil, eğlenceli bir keşif süreci olarak kurgular. Sıfır tecrübeyle kampa katılan çocuklarımız, adım adım güven kazanarak temel kayış becerilerini oyunla birlikte öğrenir.",
  },
  {
    question: "Eğitim sürecinde çocukların güvenliği nasıl planlanıyor?",
    answer:
      "Güvenlik en temel önceliğimizdir. En fazla 5 çocuktan oluşan butik gruplarımız, uzman antrenörler ve pedagojik formasyona sahip liderler eşliğinde çalışır. Eğitimler sınırları belirlenmiş güvenli alanlarda ve zorunlu kask kullanımıyla gerçekleştirilir.",
  },
  {
    question: "WinterLabs atölyeleri klasik bir kayak kampından nasıl farklılaşıyor?",
    answer:
      "Joy White yalnızca bir spor kursu değil, çok yönlü bir kış ekosistemidir. Çocuklarımız pistteki fiziksel deneyimlerini akşamları sanat, dijital tasarım ve yaratıcı drama ile birleştirir. Böylece motor becerilerin yanında iletişim, empati, problem çözme ve yaratıcılıklarını da geliştirir.",
  },
  {
    question: "Joy White Kış Kampı için neden özellikle Sarıkamış tercih ediliyor?",
    answer:
      "Sarıkamış'ın kendine özgü kar yapısı ve sarıçam ormanları, kış sporları için güçlü bir doğal ortam sunar. Bölgenin doğası, çocukların ilk kayak deneyimlerini güvenli ve keyifli bir öğrenme sürecine dönüştürmemize yardımcı olur.",
  },
  {
    question: "Kampın konaklama ve ulaşım süreçleri nasıl organize ediliyor?",
    answer: (
      <>
        Konaklama ve transfer süreçleri, profesyonel turizm partnerimiz Pavone Travel Agency iş birliğiyle yürütülür. Otel rezervasyonlarından havalimanı karşılamasına kadar lojistik detaylar için{" "}
        <a href="https://pavonemice.com/" target="_blank" rel="noreferrer">
          Pavone Travel Agency
        </a>{" "}
        üzerinden bilgi alabilirsiniz.
      </>
    ),
  },
  {
    question: "Kars Harakani Havalimanı'ndan otele ulaşım süreci nasıl yönetiliyor?",
    answer:
      "Misafirlerimiz havalimanında karşılanır ve özel transfer araçlarıyla doğrudan otele ulaştırılır. Havalimanı ile Sarıkamış arasındaki yolculuk yaklaşık 45 dakika sürer.",
  },
  {
    question: "Aileler kampa eşlik edebiliyor mu?",
    answer:
      "Elbette. Çocuklarımız gün boyunca kendi yaş gruplarında eğitim ve atölyelere katılırken, velilerimiz Sarıkamış'ın pistlerinden ve kış tatilinden yararlanabilir.",
  },
  {
    question: "Çocukların kayak malzemelerini satın almaları gerekiyor mu?",
    answer:
      "Hayır. Çocukların temel kayak ekipmanları, fiziksel özelliklerine uygun şekilde kamp kapsamında kiralanır. Ailelerin kask, kar gözlüğü ve kayak kıyafetleri gibi kişisel koruyucu eşyaları temin etmesi yeterlidir.",
  },
  {
    question: "Kamp kayıt, iptal/iade ve Mesafeli Satış Sözleşmesi bilgilerine nereden ulaşılabilir?",
    answer: (
      <>
        Kayıt, konaklama, transfer ve resmi süreçler Pavone Travel Agency tarafından yürütülür. Mesafeli Satış Sözleşmesi ve hizmet koşulları için{" "}
        <a href="https://pavonemice.com/" target="_blank" rel="noreferrer">
          pavonemice.com
        </a>{" "}
        adresini ziyaret edebilirsiniz.
      </>
    ),
  },
  {
    question: "Kişisel veriler ve çocuk bilgileri KVKK kapsamında nasıl korunuyor?",
    answer: (
      <>
        Kayıt sırasında paylaşılan bilgiler, 6698 sayılı KVKK kapsamında korunur. KVKK aydınlatma metni ve veri işleme politikaları için{" "}
        <a href="https://pavonemice.com/" target="_blank" rel="noreferrer">
          Pavone Travel Agency
        </a>{" "}
        sayfasını inceleyebilirsiniz.
      </>
    ),
  },
  {
    question: "Ödemeler nereye ve nasıl yapılır?",
    answer: (
      <>
        Ödeme ve faturalandırma süreçleri, yasal mevzuata uygun şekilde Pavone Travel Agency altyapısı üzerinden yürütülür. Güncel ödeme adımları ve taksit seçenekleri kayıt portalında paylaşılır.
      </>
    ),
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="faq-section__inner">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={false}>
          <div className="faq-section__intro">
            <p className="section-kicker">Joy White Kış Kampları</p>
            <h2 id="faq-title">Sıkça Sorulan Sorular</h2>
            <p>
              Kamp deneyimi, güvenlik ve kayıt süreci hakkında ailelerin en çok merak ettiği bilgileri bir araya getirdik.
            </p>
          </div>
        </ScrollAnimation>
        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={false}
                delay={index * 80}
                key={item.question}
              >
              <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <FaChevronDown aria-hidden="true" />
                </button>
                <div id={panelId} className="faq-answer" aria-hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
