import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarComponent } from '../../Components/Navbar/NavbarComponent';
import { FooterComponent } from '../../Components/Footer/FooterComponent';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <>
      <NavbarComponent useScrolled={true} />
      <main className="not-found-page">
        <p className="not-found-page__code">404</p>
        <h1>Aradığınız sayfa bulunamadı</h1>
        <p className="not-found-page__text">
          Bağlantı hatalı olabilir ya da sayfa kaldırılmış olabilir. Anasayfaya dönerek
          kamplarımıza ve içeriklerimize göz atabilirsiniz.
        </p>
        <Link to="/" className="not-found-page__button">
          Anasayfaya Dön
        </Link>
      </main>
      <FooterComponent />
    </>
  );
};

export default NotFoundPage;
