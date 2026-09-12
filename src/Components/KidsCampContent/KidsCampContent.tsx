import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import "./KidsCampContent.css";

const includedItems = [
  "Sarıkamış Kayak Merkezi'nde tam pansiyon konaklama",
  "Kayak, bot ve baton kiralamaları",
  "WinterLabs yaratıcı atölye materyalleri",
];

const excludedItems = [
  "Kişisel koruyucu ekipmanlar: kask, gözlük ve kıyafet",
  "Uçak veya otobüs biletleri ve özel transfer harcamaları",
  "Veliler için özel kayak dersleri",
];

const KidsCampContent = () => {
  return (
    <section className="kids-camp-content" aria-labelledby="kids-camp-title">
      <div className="kids-camp-content__inner">
        <div className="kids-camp-content__heading">
          <p className="section-kicker">Çocuklar İçin Güvenli Kış Deneyimi</p>
          <h2 id="kids-camp-title">Joy White Kids Kamp İçerikleri</h2>
          <p>
            Çocukların yaş ve seviyelerine uygun eğitim, konaklama ve atölye deneyimini bir arada planlıyoruz.
          </p>
        </div>
        <div className="kids-camp-content__columns">
          <div className="kids-camp-list kids-camp-list--included">
            <h3>Kamp paketine dahil olanlar</h3>
            <ul>
              {includedItems.map((item) => (
                <li key={item}>
                  <FaCheck aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="kids-camp-list kids-camp-list--excluded">
            <h3>Kamp paketine dahil olmayanlar</h3>
            <ul>
              {excludedItems.map((item) => (
                <li key={item}>
                  <FaTimes aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsCampContent;
