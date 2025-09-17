import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, FolderOpen, Phone, Users } from 'lucide-react';
import logo from '../assets/logo.jpg'
import Bacchimeme from '../assets/Bacchi meme.jpg'
import akshaypaaji from '../assets/akshaypaaji.jpg'
import arjunKapoor from '../assets/arjun-kapoor-angry-reaction.mp4'
import pyarkyu from '../assets/Koi-Aapse-Pyaar-Kyu-Karega-ezgif.com-video-to-gif-converter.gif'
import majaaaeyga from '../assets/maja-ezgif.com-cut.gif'
import boatingChild from '../assets/boatingVideo.mp4'



const DarkBlueSavageSamosaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Memoize menu items
  const menuItems = useMemo(() => [
    { text: 'HOME', icon: Home, href: '#home' },
    { text: 'ABOUT', icon: User, href: '#about' },
    { text: 'SERVICES', icon: Briefcase, href: '#services' },
    { text: 'PROJECTS', icon: FolderOpen, href: '#projects' },
    { text: 'CONTACT', icon: Mail, href: '#contact' },
    { text: "WE'RE HIRING", icon: Users, href: '#hiring' }
  ], []);

  // Optimized callbacks
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleMenuClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 relative overflow-hidden">
      {/* Navbar - Fully Responsive */}
      <nav className="flex justify-between items-center p-4 sm:p-6 lg:px-12 lg:py-6 max-w-7xl mx-auto relative z-50">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img 
            src={logo} 
            alt="Savage Samosa Logo" 
            className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 transform transition-transform duration-200 hover:scale-105"
            loading="eager"
          />
          <div className="hidden sm:block">
            <h2 className="text-white font-bold text-lg sm:text-xl">Savage Samosa</h2>
          </div>
        </div>
        
        <button
          onClick={toggleMenu}
          className="flex items-center space-x-2 text-white hover:text-blue-300 transition-all duration-300 hover:scale-105 z-50 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full border border-white/20 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          aria-label="Toggle menu"
        >
          <span className="text-sm sm:text-base lg:text-lg font-medium">Menu</span>
          <div className={`transition-all duration-300 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
            {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </div>
        </button>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Full Screen Menu - Smooth Animation */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 backdrop-blur-xl z-50 overflow-hidden transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 sm:top-12 sm:right-12 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/15 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/2 left-8 sm:left-12 w-16 h-16 sm:w-24 sm:h-24 bg-purple-500/15 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-10 right-1/3 w-12 h-12 sm:w-20 sm:h-20 bg-pink-500/15 rounded-full blur-lg animate-pulse animation-delay-500"></div>
        </div>

        <div className="relative h-full flex flex-col px-4 sm:px-6 py-4">
          
          {/* Close Button */}
          <div className="flex justify-end mb-6 sm:mb-8 lg:ms-12 lg:px-14">
            <button
              onClick={toggleMenu}
              className={`group p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 hover:rotate-90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30 ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
              aria-label="Close menu"
            >
              <X size={20} className="sm:w-6 sm:h-6 text-white group-hover:text-gray-200" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 flex flex-col justify-center items-start space-y-2 sm:space-y-3 max-w-full px-2 sm:px-0">
            {menuItems.map((item, index) => (
              <a
                key={item.text}
                href={item.href}
                onClick={handleMenuClick}
                className={`group text-gray-300 hover:text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-white/5 hover:to-white/2 hover:backdrop-blur-sm hover:border-white/20 border border-transparent w-full focus:outline-none focus:ring-2 focus:ring-white/30 ${
                  isMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${200 + index * 50}ms`
                }}
              >
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide group-hover:tracking-wider transition-all duration-200">
                  {item.text}
                </span>
              </a>
            ))}
          </nav>

          {/* Footer Section */}
          <div className={`pb-4 sm:pb-6 transition-all duration-500 delay-500 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 text-center">
              <p className="text-gray-400 text-xs sm:text-sm mb-1">Want an actual Hamburger?</p>
              <p className="text-white text-xs sm:text-sm mb-2">Tell'em we sent you</p>
              <a
                href="mailto:connectsavagesamosa@gmail.com"
                className="text-orange-400 text-xs sm:text-sm font-medium hover:text-orange-300 transition-colors duration-200 inline-flex items-center focus:outline-none focus:underline"
              >
                connectsavagesamosa@gmail.com
                <div className="ml-2 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Fully Responsive */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center min-h-[60vh] sm:min-h-[70vh]">
          
          {/* Left Side Content */}
          <div className="space-y-6 sm:space-y-8 text-start">
            <div className="space-y-4 sm:space-y-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white drop-shadow-2xl lg:text-left">
                We make brands go viral with{' '}
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  memes, reels & internet culture.
                </span>
              </h1>
              
             
            </div>
          </div>

          {/* Right Side - Desktop & Tablet: Images, Phone: About Us */}
          <div className="relative max-w-lg ml-auto">
            
            {/* Desktop & Tablet: Show Images */}
            <div className="hidden md:block">
              {/* First Row */}
              <div className="flex items-center justify-end mb-4 space-x-3">
                <div className="w-60 md:w-80 xl:w-96 h-24 md:h-28 xl:h-32 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl hover:scale-105 transition-transform duration-300">
                  <img 
                    src={pyarkyu} 
                    alt="Pyar Kyu gif" 
                    className="w-full h-full object-cover object-center opacity-90" 
                    loading="lazy"
                  />
                </div>
                <div className="w-20 md:w-24 xl:w-28 h-20 md:h-24 xl:h-28 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl flex-shrink-0 hover:scale-105 transition-transform duration-300">
                  <video 
                    src={arjunKapoor} 
                    alt="arjunKapoor" 
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover opacity-90"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="flex items-center justify-end mb-4 space-x-3">
                <div className="w-20 md:w-24 xl:w-28 h-20 md:h-24 xl:h-28 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl flex-shrink-0 hover:scale-105 transition-transform duration-300">
                <img 
                    src={pyarkyu} 
                    alt="Pyar Kyu gif" 
                    className="w-full h-full object-cover object-center opacity-90" 
                    loading="lazy"
                  />
                </div>
                <div className="w-60 md:w-80 xl:w-96 h-24 md:h-28 xl:h-32 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl hover:scale-105 transition-transform duration-300">
                <video 
                    src={boatingChild} 
                    alt="boatingChild" 
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover object-center opacity-90" 
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Third Row */}
              <div className="flex items-center justify-end space-x-3">
                <div className="w-60 md:w-80 xl:w-96 h-24 md:h-28 xl:h-32 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl hover:scale-105 transition-transform duration-300">
                  <img 
                    src={majaaaeyga} 
                    alt="Maja gif"
                    className="w-full h-full object-cover opacity-90"
                    loading="lazy"
                  />
                </div>
                <div className="w-20 md:w-24 xl:w-28 h-20 md:h-24 xl:h-28 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl flex-shrink-0 hover:scale-105 transition-transform duration-300">
                  <img 
                    src={akshaypaaji} 
                    alt="Akshay" 
                    className="w-full h-full object-cover opacity-90"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Phone Only: Show About Us with White Background */}
            <div className="md:hidden bg-white rounded-2xl p-6 shadow-2xl border border-gray-200 mx-auto max-w-sm">
  <div className="text-center mb-6">
    <h2 className="text-xl font-bold text-gray-800 mb-2">
      About <span className="text-blue-600">Savage Samosa</span>
    </h2>
    <p className="text-sm text-gray-500 font-medium italic">
      "Nam To Suna Hi Hoga"
    </p>
  </div>

  <div className="space-y-4 text-gray-700 text-sm leading-relaxed text-left">
    <p>
      We're a creative digital agency specializing in viral content creation,
      meme marketing, and internet culture strategies. Our mission is to make
      brands unforgettable by connecting them authentically with Gen Z and
      millennials through content that not only goes viral but creates lasting
      impact.
    </p>

    
  </div>
</div>

          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
    </div>
  );
};

export default DarkBlueSavageSamosaWebsite;