import React from 'react'
import './FooterComponent.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { PHONE_TEL_HREF, buildWhatsappLink } from '../../config/contact';

export function FooterComponent() {

  const whatsappLink = buildWhatsappLink('Merhaba, JoyWhite Kayak Kulübü hakkında bilgi almak istiyorum.');

  const socialLinks = [
    { icon: faPhone, path: PHONE_TEL_HREF, label: 'Telefon' },
    { icon: faWhatsapp, path: whatsappLink, label: 'WhatsApp' },
    { icon: faInstagram, path: 'https://www.instagram.com/joywhite365/', label: 'Instagram' },
  ]

  const footerLinks = [
    {
      title: 'Menü',
      links: [
        { title: 'Anasayfa', path: '/' },
        { title: 'Eğitimlerimiz', path: '/Trainings' },
        { title: 'Biz Kimiz', path: '/Biz-Kimiz' },
        { title: 'İletişim', path: '/Contact' },
        { title: 'Galeri', path: '/Gallery' },
      ]
    },
    {
      title: 'Blog',
      links: [
        { title: 'Kayak sporu hakkında bilinmesi gerekenler', path: '/KayakSporuHakkindaBilinmesiGerekenler' },
        { title: 'Kayakçılar için önemli güvenlik kuralları', path: '/KayakcilarIcinOnemliGuvenlikKurallari' },
        { title: 'Sarıkamış kayak merkezi', path: '/SarikamisKayakMerkezi' },
      ]
    },
  ]

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__container footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src="/images/staticImages/joywhite-logo-white.png" alt="JoyWhite Kayak Kulübü" />
            </Link>
            <p className="footer__tagline">
              Sarıkamış'ta çocuklara güvenli, eğlenceli ve yaratıcı bir kış sporları deneyimi sunuyoruz.
            </p>
            <ul className="footer__social">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.path}
                    target={item.path.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={item.label}
                    className={`footer__social-link footer__social-link--${item.label.toLowerCase()}`}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerLinks.map((item) => (
            <div className="footer__links-item" key={item.title}>
              <h3>{item.title}</h3>
              <ul>
                {item.links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__container footer__bottom-inner">
          <p className="footer__copyright">
            © {new Date().getFullYear()} JoyWhite Kayak Kulübü. Tüm hakları saklıdır.
          </p>
          <p className="footer__agency">
            <strong>Pavone Travel Agency</strong>, Joy White Kayak Kulübünün resmî seyahat acentesidir · TÜRSAB Belge No: 18202
            {" "}
            <a href="https://pavonemice.com/" target="_blank" rel="noreferrer">
              pavonemice.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
