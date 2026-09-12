import React from 'react'
import './FooterComponent.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export function FooterComponent() {

  const whatsappMessage = `Merhaba, JoyWhite Kayak Kulübü hakkında bilgi almak istiyorum.`;

  const whatsappLink = `https://api.whatsapp.com/send?phone=905056460234&text=${encodeURIComponent(
    whatsappMessage
  )}`; // 123456789 kısmını kendi WhatsApp numaranızla değiştirin

  const footerLinks = [
    {
      title: 'Menü',
      links: [
        { title: 'Anasayfa', path: '/' },
        { title: 'Eğitimlerimiz', path: '/Trainings' },
        { title: 'İletişim', path: '/Contact' },
        { title: 'Galeri', path: '/Gallery' },
      ]
    },
    {
      title: 'Blog',
      links: [
        { title: 'Kayak Sporu hakkında bilinmesi gerekenler', path: '/KayakSporuHakkindaBilinmesiGerekenler' },
        { title: 'Kayakçılar için önemli güvenlik kuralları', path: '/KayakcilarIcinOnemliGuvenlikKurallari' },
        { title: 'Sarıkamış kayak merkezi', path: '/SarikamisKayakMerkezi' },
      ]

    },
    {
      title: 'Sosyal',
      icon: true,
      links: [
        { icon: faPhone, path: 'tel:+905056460234' },
        { icon: faWhatsapp, path: whatsappLink },
        { icon: faInstagram, path: 'https://www.instagram.com/joywhite365/' },
      ]
    },
  ]

  return (
    <footer className="footer px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-12">
        <div className="footer__logo logo">
          <Link to="/"><img src="/images/staticImages/joywhite-logo.png" alt="JoyWhite Kayak Kulübü" /></Link>
        </div>
        {
          footerLinks.map((item, index) => (
            <div className="footer__links__item" key={index}>
              <h3>{item.title}</h3>
              <ul className={`${item.icon ? 'icon' : 'text'}`}>
                {
                  item.links.map((link, index) => (
                    <li key={index} className={`${'icon' in link ? 'icon' : 'text'}`}>
                      {
                        link.path.includes('http') ?
                          <a href={link.path} target="_blank" rel="noreferrer">{'icon' in link ? <FontAwesomeIcon icon={link.icon} /> : link.title}</a>
                          :
                          <Link to={link.path}>{'title' in link ? link.title : <FontAwesomeIcon icon={link.icon} />}</Link>
                      }
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
      <div className="footer__bottom">
        <div className="container mx-auto">
          <p>© 2024 JoyWhite Kayak Kulübü. Tüm hakları saklıdır.</p>
          <p className="footer__agency">
            Pavone Travel Agency, Joy White Kayak Kulübünün resmî seyahat acentesidir.
            <br />
            TÜRSAB Belge No: 18202 ·{" "}
            <a href="https://pavonemice.com/" target="_blank" rel="noreferrer">
              pavonemice.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
