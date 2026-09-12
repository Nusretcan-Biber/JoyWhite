import React, { useEffect, useState } from "react"; // React'ı içe aktar
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import './NavbarComponent.css';

export function NavbarComponent({ useScrolled = false }) {
  const [isScrolled, setIsScrolled] = useState(useScrolled); // Scroll durumu
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menü açılma durumu
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(useScrolled ? useScrolled : window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dropdown tıklandığında sayfanın en üstüne kaymasını önlemek için
  const handleDropdownClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
  };

  // Mobil menüyü açıp kapatma fonksiyonu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar
        className={`top-0 left-0 right-0 z-10 h-24 transition-all duration-2000 pt-5 ${isScrolled ? "fixed bg-KırıkBeyaz p-5 h-25 text-black" : "absolute bg-transparent text-white"
          }`}
      >
        <Navbar.Brand
          href="/"
          className="flex flex-row justify-center items-center"
        >
          <img
            src="/images/staticImages/joywhite-logo.png"
            alt="JoyWhite Kayak Kulübü"
            className={` mr-2  ${isScrolled ? "h-20" : "h-32"}   `}
          />
          <span className={`nav-logo-text font-bold ${isScrolled ? "text-black" : "text-white hidden"
            }`}>
            JOYWHITE
          </span>
        </Navbar.Brand>

        {/* Mobil menü butonu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {/* Hamburger menü simgesi */}
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <Navbar.Collapse
          className={`md:flex md:items-center md:justify-end bg-KırıkBeyaz md:bg-transparent rounded-lg container ${isMenuOpen ? "block fade-in" : "hidden"
            } md:block`}
        >

          <Navbar.Link
            href="/"
            className={`text-md md:text-lg !transition-all !duration-100 hover:!text-Gri ${isScrolled || isMenuOpen ? "text-black" : "text-white"
              }`}
          >
            Anasayfa
          </Navbar.Link>
          <Navbar.Link
            href="/Trainings"
            className={`text-md md:text-lg !transition-all !duration-100 hover:!text-Gri ${isScrolled || isMenuOpen ? "text-black" : "text-white"
              }`}
          >
            Eğitimlerimiz
          </Navbar.Link>
          <Navbar.Link
            href="/Contact"
            className={`text-md md:text-lg !transition-all !duration-100 hover:!text-Gri ${isScrolled || isMenuOpen ? "text-black" : "text-white"
              }`}
          >
            İletişim
          </Navbar.Link>
          <Navbar.Link
            href="/Gallery"
            className={`text-md md:text-lg !transition-all !duration-100 hover:!text-Gri ${isScrolled || isMenuOpen ? "text-black" : "text-white"
              }`}
          >
            Galeri
          </Navbar.Link>
          <span
            className={`py-2 pl-3 pr-4 md:p-0 !transition-all !duration-100 hover:!text-Gri ${isScrolled || isMenuOpen ? "text-black" : "text-white"
              }`}
          >
            <Dropdown
              arrowIcon={true}
              inline
              label={
                <span
                  onClick={handleDropdownClick}
                  className={`text-md md:text-lg text-black cursor-pointer hover:!text-Gri ${isScrolled || isMenuOpen ? "text-black" : "text-white"
                    }`}
                >
                  Blog
                </span>
              }
              className="text-black border-none bg-KırıkBeyaz"
            >
              <Dropdown.Item
                className="text-black hover:!text-white p-4 hover:!bg-black"
                href="/KayakSporuHakkindaBilinmesiGerekenler"
              >
                Kayak Sporu hakkında bilinmesi gerekenler
              </Dropdown.Item>
              <Dropdown.Item
                className="text-black hover:!text-white p-4 hover:!bg-black"
                href="/KayakcilarIcinOnemliGuvenlikKurallari"
              >
                Kayakçılar için önemli güvenlik kuralları
              </Dropdown.Item>
              <Dropdown.Item
                className="text-black hover:!text-white p-4 hover:!bg-black"
                href="/SarikamisKayakMerkezi"
              >
                Sarıkamış kayak merkezi
              </Dropdown.Item>
            </Dropdown>
          </span>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
