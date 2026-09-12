import React from "react";
import "./DailySchedule.css";

interface ScheduleItem {
  time: string;
  activity: string;
  location: string;
}

const scheduleItems: ScheduleItem[] = [
  { time: "08:30 - 09:30", activity: "Güne Hazırlık ve Enerji Kahvaltısı", location: "Otel Restoranı" },
  { time: "10:00 - 12:00", activity: "Pistte İlk Adımlar: Temel Kayak ve Denge Eğitimi", location: "Pistler" },
  { time: "12:30 - 13:30", activity: "Öğle Yemeği ve Serbest Dinlenme", location: "Otel Restoranı" },
  { time: "14:00 - 16:00", activity: "Pistte Emin Adımlar: Temel Kayak Eğitimi", location: "Pistler" },
  { time: "16:30 - 17:30", activity: "Kayak Odasında Günün Değerlendirmesi", location: "Kayak Odası Lobisi" },
  { time: "18:00 - 19:30", activity: "WinterLabs: Yaratıcı Tasarım ve Drama Atölyesi", location: "Etkinlik Salonu" },
  { time: "19:30 - 20:30", activity: "Akşam Yemeği", location: "Otel Restoranı" },
];

const DailySchedule = () => {
  return (
    <section className="daily-schedule" aria-labelledby="daily-schedule-title">
      <div className="daily-schedule__inner">
        <div className="daily-schedule__heading">
          <p className="section-kicker">Kamp Deneyimi</p>
          <h2 id="daily-schedule-title">Sarıkamış&apos;ta Bir Gün Nasıl Geçiyor?</h2>
          <p>
            Çocukların kayak, dinlenme ve yaratıcı atölye zamanlarını dengeli şekilde yaşayacağı örnek günlük akış.
          </p>
        </div>
        <ol className="daily-schedule__list">
          {scheduleItems.map((item) => (
            <li className="daily-schedule__item" key={`${item.time}-${item.activity}`}>
              <time>{item.time}</time>
              <div>
                <h3>{item.activity}</h3>
                <p>{item.location}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default DailySchedule;
