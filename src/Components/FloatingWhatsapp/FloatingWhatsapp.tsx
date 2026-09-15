import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { buildWhatsappLink } from '../../config/contact';
import './FloatingWhatsapp.css';

const FloatingWhatsapp = () => {
  const link = buildWhatsappLink('Merhaba, JoyWhite Kayak Kulübü hakkında bilgi almak istiyorum.');

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
      aria-label="WhatsApp üzerinden bize ulaşın"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
};

export default FloatingWhatsapp;
