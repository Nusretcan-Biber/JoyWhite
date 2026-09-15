import React, { FormEvent, useRef, useState } from 'react'
import './ContactPage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

import { NavbarComponent } from "../../Components/Navbar/NavbarComponent";
import { FooterComponent } from "../../Components/Footer/FooterComponent";
import PhotoHeroSection from "../../Components/HeroSection/PhotoHeroSection";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { PHONE_DISPLAY, PHONE_TEL_HREF, buildWhatsappLink } from "../../config/contact";


const Contact = () => {

  const whatsappLink = buildWhatsappLink('Merhaba, JoyWhite Kayak Kulübü hakkında bilgi almak istiyorum.');

  const instagramLink = `https://www.instagram.com/joywhite365/`;

  interface Errors {
    user_name: string;
    user_email: string;
    message: string;
  }

  const formRef = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState<Errors>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!checkForm()) {
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.REACT_APP_EMAILJS_USER_ID!
      )
      .then(() => {
        formRef.current!.reset();
        setLoading(false);
        toast.success("Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
          {
            position: "top-center"
          }
        );
      })
      .catch((e) => {
        setLoading(false);
        const errorMessage = "Bir hata oluştu. Lütfen daha sonra tekrar deneyin";
        toast.error(errorMessage,
          {
            position: "top-center"
          }
        );
        console.log(e);
      });
  };

  const checkEmail = (email: string): boolean => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const checkForm = (): boolean => {
    const form = formRef.current!;
    let isValid = true;
    const newErrors = { ...errors };

    if (!form.user_name.value.trim()) {
      newErrors.user_name = "Ad Soyad bilgisi gerekli";
      isValid = false;
    } else if (form.user_name.value.trim().length < 3) {
      newErrors.user_name = "Ad Soyad en az 3 karakter uzunluğunda olmalı";
      isValid = false;
    } else {
      newErrors.user_name = "";
    }

    if (!form.user_email.value.trim()) {
      newErrors.user_email = "E-posta bilgisi gerekli";
      isValid = false;
    } else if (!checkEmail(form.user_email.value)) {
      newErrors.user_email = "Geçersiz e-posta adresi";
      isValid = false;
    } else {
      newErrors.user_email = "";
    }

    if (!form.message.value.trim()) {
      newErrors.message = "Mesaj gerekli";
      isValid = false;
    } else if (form.message.value.trim().length < 10) {
      newErrors.message = "Mesaj en az 10 karakter uzunluğunda olmalı";
      isValid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <>
      <NavbarComponent />

      <PhotoHeroSection sectionName="İletişim" />

      <section id="contact" className="contact-section">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="contact-info">
              <div className="contact-header">
                <h1 className="contact-title">İletişim Bilgileri</h1>
                <div className="flex">
                  <span className="inline-block w-40 h-1 bg-logoBlue rounded-full"></span>
                  <span className="inline-block w-3 h-1 mx-1 bg-logoBlue rounded-full"></span>
                  <span className="inline-block w-1 h-1 bg-logoBlue rounded-full"></span>
                </div>
              </div>
              <div className="contact-items">
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  <a href={PHONE_TEL_HREF} className="contact-text" rel="noreferrer">{PHONE_DISPLAY}</a>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
                  <a href={whatsappLink} target="_blank" className="contact-text" rel="noreferrer">{PHONE_DISPLAY}</a>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
                  <a href={instagramLink} target="_blank" className="contact-text" rel="noreferrer">@joywhite365</a>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                  <span className="contact-text">İnönü, bayrak tepe kayak merkezi no:30, 36500 Sarıkamış/Kars</span>
                </div>
              </div>
              <div className="contact-agency-note">
                <strong>Pavone Travel Agency</strong>, Joy White Kayak Kulübünün resmî seyahat acentesidir.
                <br />
                TÜRSAB Belge No: 18202
                <br />
                <a href="https://pavonemice.com/" target="_blank" rel="noreferrer">
                  Kayıt, ödeme, sözleşme ve KVKK bilgileri için pavonemice.com
                </a>
              </div>
            </div>
            <div className="">
              <div className="contact-header">
                <h1 className="contact-title">Bize Ulaşın</h1>
                <div className="flex">
                  <span className="inline-block w-40 h-1 bg-logoBlue rounded-full"></span>
                  <span className="inline-block w-3 h-1 mx-1 bg-logoBlue rounded-full"></span>
                  <span className="inline-block w-1 h-1 bg-logoBlue rounded-full"></span>
                </div>
              </div>
              <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Ad Soyad"
                  name="user_name"
                />
                <p className="contact-error">{errors.user_name}</p>
                <input
                  className="contact-input"
                  type="email"
                  placeholder="E-posta"
                  name="user_email"
                />
                <p className="contact-error">{errors.user_email}</p>
                <textarea
                  className="contact-input contact-input--textarea"
                  placeholder="Mesaj"
                  name="message"
                ></textarea>
                <p className="contact-error">{errors.message}</p>

                <button
                  className="contact-button"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Gönderiliyor..." : "Gönder"}
                </button>
              </form>


            </div>
          </div>
        </div>

        <div className="contact-map w-full h-96 mt-32">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.869222938713!2d42.614557677267946!3d40.32305986133314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406961e3d82394e7%3A0x3efaded11587e122!2sJoy%20White%20Kayak%20ve%20Snowboard%20Okulu!5e0!3m2!1str!2str!4v1729931698385!5m2!1str!2str"
            title="Joy White Kayak ve Snowboard Okulu konumu"
            loading="lazy" className="w-full h-full map" allowFullScreen></iframe>
        </div>
      </section>

      <FooterComponent />
    </>
  )
}

export default Contact