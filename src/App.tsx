import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import Camps from './Pages/Camps/Camps';
import CampDetail from './Components/CampDetail/CampDetail';
import Gallery from './Pages/Gallery/Gallery';
import WhatsSki from './Pages/Blogs/WhatsSki';
import SkiImportantInfo from './Pages/Blogs/SkiImportantInfo';
import Sarikamis from './Pages/Blogs/Sarikamis';
import ContactPage from './Pages/Contact/ContactPage';
import BizKimizPage from './Pages/BizKimiz/BizKimizPage';
import NotFoundPage from './Pages/NotFound/NotFoundPage';
import ScrollTop from './Components/ScrollTop/ScrollTop';
import FloatingWhatsapp from './Components/FloatingWhatsapp/FloatingWhatsapp';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ScrollTop />
      <FloatingWhatsapp />
      <Toaster />
      <Routes>
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/Trainings" element={<Camps />} />
        <Route path="/Training/:id" element={<CampDetail />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Biz-Kimiz" element={<BizKimizPage />} />
        <Route path="/KayakSporuHakkindaBilinmesiGerekenler" element={<WhatsSki />} />
        <Route path="/KayakcilarIcinOnemliGuvenlikKurallari" element={<SkiImportantInfo />} />
        <Route path="/SarikamisKayakMerkezi" element={<Sarikamis />} />


      </Routes>
    </>
  );
}

export default App;
