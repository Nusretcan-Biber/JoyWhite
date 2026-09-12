import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { campsData } from "../data/dummydata"; // campsData'yı import ettik
import { NavbarComponent } from "../Navbar/NavbarComponent";
import { FooterComponent } from "../Footer/FooterComponent";
import { Tabs, Table, Card, ListGroup } from "flowbite-react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import './CampDetail.css';
import { faSnowflake, faSkiing, faPhone, faChild } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard, faUsers } from "@fortawesome/free-solid-svg-icons";
import ScrollAnimation from "react-animate-on-scroll";

const CampDetail = () => {
  const { id } = useParams();
  const camp = campsData.find((camp) => camp.id === Number(id)); // id'yi Number'a çeviriyoruz

  // Eğer kamp bulunamazsa bir mesaj göster
  if (!camp) {
    return <div className="text-center">Eğitim bilgisi bulunamadı.</div>;
  }

  // WhatsApp mesajı için metin oluştur
  const whatsappMessage = `Merhaba, ${camp.BeginDate} başlangıç tarihli ${camp.name} hakkında bilgi almak istiyorum.`;

  // WhatsApp linkini oluştur
  const whatsappLink = `https://api.whatsapp.com/send?phone=905056460234&text=${encodeURIComponent(
    whatsappMessage
  )}`; // 123456789 kısmını kendi WhatsApp numaranızla değiştirin


  const scheduleData = [
    {
      title: "Birinci Gün",
      rows: [
        // { time: '14:00 – 14:30', activity: 'Otel’e Giriş ve Odalara Yerleşme' },
        { time: '14:30 – 15:00', activity: 'Kayak Odasında Buluşma ve Hazırlanma' },
        { time: '15:00 – 16:30', activity: 'Kayak Eğitimi' },
        { time: '17:00 – 18:00', activity: 'Serbest Zaman & 5 Çayı' },
        { time: '18:00 – 19:00', activity: 'Tüm Çocuk, Veli ve Hocalarla Tanışma Buluşması (Kaynaşma Soruları)' },
        { time: '19:00 – 20:00', activity: 'Akşam Yemeği' },
      ]
    },
    {
      title: "Diğer Günler",
      rows: [
        { time: '07:30 – 08:45', activity: 'Kahvaltı' },
        { time: '09:30 – 12:00', activity: 'Kayak Eğitimi' },
        { time: '12:00 – 13:30', activity: 'Öğle Yemeği' },
        { time: '14:00 – 16:00', activity: 'Kayak Eğitimi' },
        { time: '17:00 – 18:00', activity: 'Çocuklar için Akşam Sporu / Veliler için 5 Çayı' },
        { time: '18:30 – 19:00', activity: 'Sertifika Töreni (Son Gece)' },
      ],
    },
    {
      title: "Son Gün",
      rows: [
        // { time: '07:30 – 08:45', activity: 'Kahvaltı' },
        { time: '09:00 – 10:30', activity: 'Kayak Eğitimi' },
        // { time: '11:00', activity: 'Odaların Boşaltılması' },
      ],
    }
  ];

  return (
    <>
      <NavbarComponent useScrolled={true} />
      <div>
        <section className="text-gray-600 body-font overflow-hidden mt-24">
          <div className="sm:h-full container px-5 my-28 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={false} className="lg:col-span-6">
              <div className="campdetail-img">
                <img
                  alt={camp.name}
                  src={camp.cover} // Kampın kapak resmini buradan alıyoruz
                />
              </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInRight" animateOnce={false} delay={140} className="lg:col-span-6">
              <div className="flex flex-col items-start gap-4 justify-center">
                <ScrollAnimation animateIn="fadeInUp" animateOnce={false} delay={120}>
                <div>
                  <h2 className="campdetail-subtitle">{camp.BeginDate} - {camp.EndDate}</h2>
                  <h2 className="campdetail-subtitle">{camp.Location}</h2>
                  <h1 className="campdetail-title">{camp.name}</h1>
                </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" animateOnce={false} delay={180}>
                <p className="leading-relaxed">{camp.description}</p>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" animateOnce={false} delay={240}>
                <div className="reach-out">
                  <h3 className="text-PrimaryColor font-bold">Bilgi ve Rezervasyon:</h3>
                  <div className="reach-out-buttons">
                    <a href="tel:+905056460234" className="reach-out-button">
                      <FontAwesomeIcon icon={faPhone} className="reach-out-icon" />
                      <span>Ara</span>
                    </a>
                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="reach-out-button">
                      <FontAwesomeIcon icon={faWhatsapp} className="reach-out-icon" />
                      <span>WhatsApp</span>
                    </a>
                    <a href="https://www.instagram.com/joywhite365/" target="_blank" rel="noreferrer" className="reach-out-button">
                      <FontAwesomeIcon icon={faInstagram} className="reach-out-icon" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" animateOnce={false} delay={300} className="w-full">
                <Table>
                  <Table.Head>
                    <Table.HeadCell>Katılımcı</Table.HeadCell>
                    <Table.HeadCell>Ücret (TL)</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {camp.Price.adultChildCombination.map((priceOption) => (
                      <Table.Row key={priceOption.type}>
                        <Table.Cell>{priceOption.type}</Table.Cell>
                        <Table.Cell>{priceOption.price} TL</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
                </ScrollAnimation>

              </div>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="fadeInUp" animateOnce={false} className="mt-24">
            <div>
              <Tabs className="detail-tabs" variant="fullWidth">
                <Tabs.Item active title="Açıklama" icon={HiUserCircle}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h1 className="text-PrimaryColor font-bold p-2">
                        Kimler katılabilir?
                      </h1>
                      <h1 className=" text-gray-500 dark:text-gray-400 p-2">
                        4-12 yaş arası çocuklar katılabilir. 09:00-11:00 /
                        13:00-15:00 arası eğitmenlerimizle geçirebilir.
                      </h1>

                      <h1 className="text-PrimaryColor font-bold p-2 my-4">
                        Eğitim Paketimize Neler Dahil?
                      </h1>

                      {/* Bilgilendirici Metin Bölümleri */}
                      <div className="space-y-5 mb-5">
                        {/* <div className="flex items-start space-x-2">
                          <div className="sm:w-16 sm:h-16 text-1xl h-10 w-10 sm:mr-5 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 md:text-2xl transition-transform duration-200 ease-in-out hover:scale-110">
                            <FontAwesomeIcon icon={faShuttleVan} className="text-blue-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Havalimanı Transferi</h3>
                            <p>
                              Havalimanından otelinize rahat ve güvenli bir transfer! 45 dakikalık yolculuk sırasında Sarıkamış’ın güzel manzaralarını keşfedin.
                            </p>
                          </div>
                        </div> */}

                        {/* <div className="flex items-start space-x-2">
                          <div className="sm:w-16 sm:h-16 text-1xl h-10 w-10 sm:mr-5 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 md:text-2xl transition-transform duration-200 ease-in-out hover:scale-110">
                            <FontAwesomeIcon icon={faHotel} className="text-blue-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Habitat Otel Konaklama</h3>
                            <p>
                              Sabah, öğle ve akşam yemekleri dahil, yerel ve uluslararası mutfaklardan lezzetler ile konforlu bir konaklama deneyimi sunulmaktadır.
                            </p>
                          </div>
                        </div> */}

                        <div className="flex items-start space-x-2">
                          <div className="sm:w-16 sm:h-16 text-1xl h-10 w-10 sm:mr-5 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 md:text-2xl transition-transform duration-200 ease-in-out hover:scale-110">
                            <FontAwesomeIcon icon={faSnowflake} className="text-blue-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Kristal Kar Kalitesi</h3>
                            <p>
                              Sarıkamış, Alpler’de görülen kristal kar yapısına sahip Türkiye’deki nadir kayak merkezlerinden biridir.
                            </p>
                          </div>
                        </div>

                        {/* <div className="flex items-start space-x-2">
                          <div className="sm:w-16 sm:h-16 text-1xl h-10 w-10 sm:mr-5 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 md:text-2xl transition-transform duration-200 ease-in-out hover:scale-110">
                            <FontAwesomeIcon icon={faPlaneArrival} className="text-blue-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">45 Dakika Ulaşım</h3>
                            <p>
                              Kars Havaalanı’ndan otele ulaşım yaklaşık 45 dakika sürmektedir. Rahat bir yolculuk ile otelinize kolayca varabilirsiniz.
                            </p>
                          </div>
                        </div> */}

                        <div className="flex items-start space-x-2">
                          <div className="sm:w-16 sm:h-16 text-1xl h-10 w-10 sm:mr-5 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 md:text-2xl transition-transform duration-200 ease-in-out hover:scale-110">
                            <FontAwesomeIcon icon={faSkiing} className="text-blue-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Kayak Eğitimi</h3>
                            <p>
                              Eğitmenler eşliğinde 2, 3 veya 4 gecelik kamplarda çocuklar için toplam 8, 12 veya 16 saat kayak eğitimi verilmektedir.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <div className="sm:w-16 sm:h-16 text-1xl h-10 w-10 sm:mr-5 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 md:text-2xl transition-transform duration-200 ease-in-out hover:scale-110">
                            <FontAwesomeIcon icon={faChild} className="text-blue-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Ücretsiz Ekipman & SkiPass</h3>
                            <p>
                              Çocuklar için kayak ekipmanı ve SkiPass ücretsiz. Veliler için pistte eğlenceli vakit geçirebileceğiniz SkiPass imkânı sağlanmaktadır.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <div className="sm:w-16 sm:h-16 text-1xl h-10 w-10 sm:mr-5 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 md:text-2xl transition-transform duration-200 ease-in-out hover:scale-110">
                            <FontAwesomeIcon icon={faUsers} className="text-blue-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Eğitim Grupları</h3>
                            <p>
                              Eğitimler 5 kişilik gruplarda, seviyelere göre düzenlenir. Her yaştan katılımcıya uygun eğitimler mevcuttur.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <div className="sm:w-16 sm:h-16 text-1xl h-10 w-10 sm:mr-5 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 md:text-2xl transition-transform duration-200 ease-in-out hover:scale-110">
                            <FontAwesomeIcon icon={faCreditCard} className="text-blue-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Ödeme Şartları</h3>
                            <p>
                              Kredi kartı, EFT, havale veya nakit ödeme seçenekleri ile ödeme yapabilirsiniz. Taksitli ödeme imkanı da mevcuttur.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-stretch">
                      <div style={{ backgroundImage: "url('/images/galery/resim4.jpg')" }} className="bg-cover bg-center w-full h-full"></div>
                    </div>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Eğitim Programı" icon={MdDashboard}>
                  <div className="mx-auto max-w-3xl mt-10">
                    {scheduleData.map((day, index) => (
                      <div key={day.title} className="mb-10 campdetail-schedule-day" style={{ animationDelay: `${index * 100}ms` }}>
                        <Table>
                          <Table.Head>
                              <Table.HeadCell className="w-40">{day.title}</Table.HeadCell>
                              <Table.HeadCell>Program</Table.HeadCell>
                          </Table.Head>
                          <Table.Body>
                            {day.rows.map((row, index) => (
                              <Table.Row key={index}>
                                <Table.Cell>{row.time}</Table.Cell>
                                <Table.Cell>{row.activity}</Table.Cell>
                              </Table.Row>
                            ))}
                          </Table.Body>
                        </Table>
                      </div>
                    ))}
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Eğitim ve Kayak Merkezi" icon={HiAdjustments}>
                  <Card>
                    <h2 className="text-PrimaryColor font-bold text-lg">Eğitim</h2>
                    <ListGroup>
                      <ListGroup.Item>
                        6 yaş ve üzeri çocuklar seviyelerine göre gruplandırılır ve en fazla 5 kişilik gruplarda eğitim alırlar.
                      </ListGroup.Item>
                      <ListGroup.Item>
                        4-6 yaş aralığındaki çocuklar birebir veya 2'li gruplarda eğitim alır. Bu yaş grubundaki çocukların eğitim süreleri günde 2 saattir.
                      </ListGroup.Item>
                      <ListGroup.Item>
                        6-12 yaş ve üzeri çocukların eğitim süreleri günde 4 saattir.
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Eğitimin güvenli ve eğlenceli bir şekilde yapılması temel önceliğimizdir.
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Kamp sonunda çocuklar için madalya ve sertifika seronomisi yapılmaktadır.
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>

                  {/* Sarıkamış Pistleri Kartı */}
                  <Card className="mt-4">
                    <h2 className="text-PrimaryColor font-bold text-lg">Sarıkamış Pistleri Hakkında</h2>
                    <ListGroup>
                      <ListGroup.Item>
                        Kars-Sarıkamış; Bayraktepe Kayak Merkezi ve pistleri bölgeye özgü sarıçam ormanlarının içindedir.
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Rakımı 2200-2600 metre yükseklikteki kayak merkezi Kars hava alanına 40 dakikadır.
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Sarıçamlar arasındaki pistlerde 1,5 metreye ulaşan kar kalınlığı bölgede uzun bir sezonda kayak yapma olanağı sunmaktadır.
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Özellikle “kristal” şeklinde yağan kar Alplerdeki pudra kar niteliği ile kayak sevenlerin tutkusu haline gelmiştir.</strong>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Tabs.Item>
                
              </Tabs>
            </div>
            </ScrollAnimation>
          </div>
        </section >
      </div >
      <FooterComponent />
    </>
  );
};

export default CampDetail;
