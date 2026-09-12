import React from 'react';

interface PhotoHeroSectionProps {
  sectionName: string;
}

const PhotoHeroSection: React.FC<PhotoHeroSectionProps> = ({ sectionName }) => {
  return (
    <>
      <header className="test">
        <div
          className="w-full bg-center bg-cover h-[20rem] md:h-[25rem] relative"
          style={{
            backgroundImage: `url('/images/staticImages/photo-hero.jpg')`, // Burada 'url' fonksiyonunu ekledik
          }}
        >
          <div className="flex items-center justify-center w-full h-full custom-gradient">
            <div className="text-center overflow-hidden">
              <h1 className="photohero-section-name">{sectionName}</h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default PhotoHeroSection;
