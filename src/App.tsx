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
import ScrollTop from './Components/ScrollTop/ScrollTop';
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
      <Toaster />
      <Routes>
        <Route path="*" element={<Navigate to="/404" replace />} />
        {/* <Route path="/" element={<Navigate to="/MainPage" replace />} /> */}
        <Route path="/404" element={<div className='text-center text-4xl font-bold mt-20'>404 Not Found</div>} />
        <Route path="/" element={<MainPage />} />
        <Route path="/Trainings" element={<Camps />} />
        <Route path="/Training/:id" element={<CampDetail />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/KayakSporuHakkindaBilinmesiGerekenler" element={<WhatsSki />} />
        <Route path="/KayakcilarIcinOnemliGuvenlikKurallari" element={<SkiImportantInfo />} />
        <Route path="/SarikamisKayakMerkezi" element={<Sarikamis />} />


      </Routes>
    </>
  );
}

export default App;
