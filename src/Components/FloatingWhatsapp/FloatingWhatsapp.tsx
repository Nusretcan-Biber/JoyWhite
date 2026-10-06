import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { buildWhatsappLink } from '../../config/contact';
import './FloatingWhatsapp.css';

const FloatingWhatsapp = () => {
  const link = buildWhatsappLink('Merhaba, JoyWhite Kayak Kulübü hakkında bilgi almak istiyorum.');
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="floating-whatsapp-wrapper">
      {showBubble && (
        <div className="whatsapp-bubble" role="note">
          <button
            type="button"
            className="whatsapp-bubble-close"
            aria-label="Mesajı kapat"
            onClick={() => setShowBubble(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <a href={link} target="_blank" rel="noreferrer" className="whatsapp-bubble-text">
            Eğitimler, kamplar ve konaklama hakkında merak ettiklerini hemen sor!
          </a>
        </div>
      )}
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="WhatsApp üzerinden bize ulaşın"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default FloatingWhatsapp;
