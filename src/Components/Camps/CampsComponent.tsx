import React, { useMemo, useState } from "react";
import { campsData } from "../data/dummydata";
import Card from "../Card/Card";
import "./CampsComponent.css";

interface CampsComponentProps {
  showFilter?: boolean;
}

const getMonth = (beginDate: string) => beginDate.trim().split(" ").pop() as string;

const CampsComponent = ({ showFilter = false }: CampsComponentProps) => {
  const months = useMemo(() => {
    const seen = new Set<string>();
    campsData.forEach((camp) => seen.add(getMonth(camp.BeginDate)));
    return Array.from(seen);
  }, []);

  const [selectedMonth, setSelectedMonth] = useState<string>("Tümü");

  const visibleCamps = useMemo(() => {
    if (!showFilter || selectedMonth === "Tümü") return campsData;
    return campsData.filter((camp) => getMonth(camp.BeginDate) === selectedMonth);
  }, [showFilter, selectedMonth]);

  return (
    <div id="camps">
      {/* Boş div yerine absolute konumlandırma ile arka planın bir kısmı renklendirilecek */}
      <section className="bg-white py-12">
        <div className="container px-6 py-10 mx-auto">
          <h2 className="section-heading-lg text-center capitalize">
            Eğitimlerimiz
          </h2>
          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-logoBlue rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-logoBlue rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-logoBlue rounded-full"></span>
          </div>

          <p className="mt-10 text-center text-gray-500">
            Çocuklarınız için özel olarak tasarlanmış kayak eğitimlerimizde,
            profesyonel eğitmenler eşliğinde güvenli ve eğlenceli bir öğrenme
            deneyimi sunuyoruz. Kayak becerilerini geliştirmek ve kış
            sporlarının tadını çıkarmak için mükemmel bir fırsat! Hem yeni
            başlayanlar hem de deneyimli kayakçılar için çeşitli
            programlarımızla, çocuklarınızın kayak keyfini yaşamasını
            sağlıyoruz.
          </p>

          {showFilter && (
            <div className="camps-filter" role="group" aria-label="Aya göre filtrele">
              {["Tümü", ...months].map((month) => (
                <button
                  key={month}
                  type="button"
                  onClick={() => setSelectedMonth(month)}
                  className={`camps-filter__pill ${selectedMonth === month ? "is-active" : ""}`}
                >
                  {month}
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 gap-10 mt-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleCamps.map((camp) => (
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
