import React from "react";
import { campsData } from "../data/dummydata"; // campsData'nın başka bir veri dosyasından alındığını varsayıyoruz
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import "./CampsComponent.css";
import ScrollAnimation from "react-animate-on-scroll";

const CampsComponent = () => {
  const navigate = useNavigate(); // Yönlendirme için kullanacağız

  const handleCardClick = (id: any) => {
    navigate(`/Training/${id}`); // Tıklanan kampın id'siyle yönlendir
  };

  const getPriceRange = (prices: { price: string }[]) => {
    const numericPrices = prices.map((price) =>
      parseFloat(price.price.replace(".", "").replace(",", "."))
    );
    const minPrice = Math.min(...numericPrices);
    const maxPrice = Math.max(...numericPrices);
    return `${minPrice.toLocaleString("tr-TR", {
      minimumFractionDigits: 2,
    })} TL - ${maxPrice.toLocaleString("tr-TR", {
      minimumFractionDigits: 2,
    })} TL`;
  };

  return (
    <div id="camps">
      {/* Boş div yerine absolute konumlandırma ile arka planın bir kısmı renklendirilecek */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Eğitimlerimiz
          </h1>
          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>

          <p className="mt-10 text-center text-gray-500 dark:text-gray-300">
            Çocuklarınız için özel olarak tasarlanmış kayak eğitimlerimizde,
            profesyonel eğitmenler eşliğinde güvenli ve eğlenceli bir öğrenme
            deneyimi sunuyoruz. Kayak becerilerini geliştirmek ve kış
            sporlarının tadını çıkarmak için mükemmel bir fırsat! Hem yeni
            başlayanlar hem de deneyimli kayakçılar için çeşitli
            programlarımızla, çocuklarınızın kayak keyfini yaşamasını
            sağlıyoruz.
          </p>

          <div className="grid grid-cols-1 gap-10 mt-6 md:grid-cols-2 lg:grid-cols-3">
            {campsData.map((camp) => (
              <Card
                key={camp.id}
                camp={camp}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampsComponent;
