import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-6 pt-10 mx-auto">
        <ScrollAnimation animateIn="fadeInDown" animateOnce={false}>
          <h2 className="section-heading-lg text-center capitalize">
            Hakkımızda
          </h2>

          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-logoBlue rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-logoBlue rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-logoBlue rounded-full"></span>
          </div>
        </ScrollAnimation>

        {/* <p className=" mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
              Kars'ın kalbinde yer alan köklü kayak kulübümüz, çocukların kayak
              eğitimi alarak hem eğlenip hem de güvenli bir şekilde
              öğrenmelerini sağlamak için özenle hazırlanmış programlar
              sunmaktadır. Deneyimli eğitmenlerimiz, her yaş grubuna uygun
              eğitimler ile çocuklarınızın kayak becerilerini geliştirmesine
              yardımcı olurken, ailelerin de içi rahat bir şekilde bu deneyimi
              izlemelerini sağlar.
            </p> */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-10">
          <div className="md:w-1/2">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={false}>
              <img
                className="object-cover w-full rounded-xl shadow-lg about-imagea aspect-square"
                src="/images/staticImages/contactImage.jpg"
                alt="about"
              />
            </ScrollAnimation>
          </div>
          <div className="md:w-1/2">
            <ScrollAnimation animateIn="fadeInRight" animateOnce={false}>
              <h2 className="text-4xl font-semibold text-gray-700 capitalize">
                JoyWhite Kayak Kulübü
              </h2>

              <p className="mt-4 text-gray-600">
                Kayak eğitimi alanında uzmanlaşmış ekibimiz, çocuklarınızın
                güvenliğini ve mutluluğunu öncelikli hedef olarak
                belirlemektedir. Eğlenceli bir ortamda öğrenim sağlarken, sporun
                keyfini çıkarmalarını sağlıyoruz.
              </p>

              <p className="mt-4 text-gray-600">
                Sosyal medyalarımızdan bizimle iletişime geçerek, çocuklarınız
                için en iyi kayak deneyimini nasıl sunabileceğimizi
                öğrenebilirsiniz.
              </p>

              <p className="mt-4 text-gray-600">
                Kars'ın kalbinde yer alan köklü kayak kulübümüz, çocukların kayak
                eğitimi alarak hem eğlenip hem de güvenli bir şekilde
                öğrenmelerini sağlamak için özenle hazırlanmış programlar
                sunmaktadır. Deneyimli eğitmenlerimiz, her yaş grubuna uygun
                eğitimler ile çocuklarınızın kayak becerilerini geliştirmesine
                yardımcı olurken, ailelerin de içi rahat bir şekilde bu deneyimi
                izlemelerini sağlar.
              </p>

              <div className="mt-10">
                <Link to="/Contact" className="my-btn">
                  Bize Ulaşın
                </Link>
              </div>
            </ScrollAnimation>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
