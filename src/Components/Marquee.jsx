import React, { useEffect } from 'react';
import ParleLogo from '../assets/Parle.png'
import HotstarLogo from '../assets/disney-hotstar-logo-png_seeklogo-427118.png'
import NetflixLogo from '../assets/Netfilix.webp'
import PrimeLogo from '../assets/Amazon-Prime-Video-Emblem.png'
import ZeeLogo from '../assets/Zee5-official-logo.jpeg'
import SonyLivLogo from '../assets/SonyLIV_2020.png'
import VootLogo from '../assets/voot-logo-png_seeklogo-491488.png'
import JioCinemaLogo from '../assets/jio-cinema.png'
import AltBalaji from '../assets/altbalajji.jpg'
import MXPlayer from '../assets/maxplayer2.png'
import TeenPattiLogo from '../assets/Teenpatti.jpg'
import Youtube from '../assets/Yotube.jpg'

// Brand collections
const brands1 = [
  { id: 1, component: HotstarLogo, bgcolor: 'white' },
  { id: 2, component: NetflixLogo, bgcolor: 'black' },
  { id: 3, component: PrimeLogo, bgcolor: 'white' },
  { id: 4, component: ZeeLogo, bgcolor: 'black' },
  { id: 6, component: VootLogo, bgcolor: 'white' },
  { id: 5, component: SonyLivLogo, bgcolor: 'black' },
  { id: 7, component: JioCinemaLogo, bgcolor: 'white' },
  { id: 8, component: ParleLogo, bgcolor: 'white' },
];

const brands2 = [
  { id: 1, component: TeenPattiLogo, bgcolor: 'white' },
  { id: 2, component: AltBalaji, bgcolor: 'black' },
  { id: 3, component: MXPlayer, bgcolor: 'white' },
  { id: 4, component: Youtube, bgcolor: 'white' },
  { id: 5, component: HotstarLogo, bgcolor: 'white' },
  { id: 6, component: NetflixLogo, bgcolor: 'black' },
  { id: 7, component: PrimeLogo, bgcolor: 'white' },
  { id: 8, component: ZeeLogo, bgcolor: 'black' },
];

function BrandCarousel() {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      @keyframes scroll-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      
      .animate-scroll-left {
        animation: scroll-left 30s linear infinite;
      }
      
      .animate-scroll-right {
        animation: scroll-right 30s linear infinite;
      }
      
      .carousel-container:hover .animate-scroll-left,
      .carousel-container:hover .animate-scroll-right {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);

  const Marquee = ({ brands, direction = 'left' }) => {
    const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';
    
    return (
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-y-0 left-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-gray-900 via-purple-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-l from-violet-900 via-purple-900 to-transparent z-10 pointer-events-none"></div>
        
        <div className={`flex gap-3 sm:gap-4 md:gap-6 w-fit ${animationClass}`}>
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className={`flex-shrink-0 w-32 h-16 sm:w-36 sm:h-18 md:w-40 md:h-20 lg:w-48 lg:h-24 xl:w-52 xl:h-28 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20 p-2 ${
                brand.bgcolor === 'white' 
                  ? 'bg-white' 
                  : 'bg-black'
              }`}
            >
              <img 
                src={brand.component} 
                alt={`Brand ${brand.id}`}
                className="w-full h-full object-contain rounded-md"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="w-full max-w-full ">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight">
            Our Trusted Partners
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4">
            We've crafted viral meme campaigns for India's biggest OTT platforms, entertainment brands, and gaming companies
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* Carousel Section */}
        <div className="carousel-container space-y-4 sm:space-y-6 md:space-y-8">
          <Marquee brands={brands1} direction="left" />
          <Marquee brands={brands2} direction="right" />
        </div>
      </div>
    </div>
  );
}

export default BrandCarousel;