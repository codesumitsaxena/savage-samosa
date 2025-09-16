import React, { useState, useCallback, useMemo } from 'react';
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

  // Memoize menu items to prevent recreation on each render
  const menuItems = useMemo(() => [
    { text: 'HOME', icon: Home, href: '#home' },
    { text: 'ABOUT', icon: User, href: '#about' },
    { text: 'SERVICES', icon: Briefcase, href: '#services' },
    { text: 'PROJECTS', icon: FolderOpen, href: '#projects' },
    { text: 'CONTACT', icon: Mail, href: '#contact' },
    { text: "WE'RE HIRING", icon: Users, href: '#hiring' }
  ], []);

  // Use useCallback to prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleMenuClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 relative overflow-hidden">
      {/* Navbar - Hardware acceleration added */}
      <nav className="flex justify-between max-w-7xl mx-auto items-center p-6 lg:px-12 relative z-50 transform-gpu">
        <div className="flex items-center space-x-3">
          <img 
            src={logo} 
            alt="logo" 
            className="h-16 w-16 transform-gpu"
            loading="eager"
            decoding="async"
          />
        </div>
        
        <button
          onClick={toggleMenu}
          className="flex items-center space-x-2 text-white hover:text-blue-300 transition-all duration-200  hover:scale-105 z-50 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transform-gpu will-change-transform"
        >
          <span className="text-lg font-medium">Menu</span>
          <div className={`transition-transform duration-300 transform-gpu ${isMenuOpen ? 'rotate-180' : ''}`}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </nav>

      {/* Overlay - Optimized */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 transform-gpu ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Full Screen Menu - Performance optimized */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 backdrop-blur-xl transition-transform duration-500 ease-out z-50 overflow-hidden transform-gpu will-change-transform ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Optimized animated background elements - Reduced complexity */}
        <div className="absolute inset-0 transform-gpu">
          <div className="absolute top-12 right-12 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl animate-pulse transform-gpu"></div>
          <div className="absolute top-1/2 left-12 w-24 h-24 bg-purple-500/15 rounded-full blur-xl animate-pulse delay-1000 transform-gpu"></div>
          <div className="absolute bottom-12 right-1/3 w-20 h-20 bg-pink-500/15 rounded-full blur-lg animate-pulse delay-500 transform-gpu"></div>
        </div>

        <div className="relative h-full flex flex-col px-6 py-4">
          
          {/* Close Button */}
          <div className="flex justify-end lg:ms-12 lg:px-14 mb-6">
            <button
              onClick={toggleMenu}
              className={`group p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-200 hover:scale-110 hover:rotate-90 backdrop-blur-sm transform-gpu will-change-transform ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <X size={24} className="text-white group-hover:text-gray-200" />
            </button>
          </div>

          {/* Navigation Items - Optimized animations */}
          <nav className="flex-1 flex flex-col justify-center items-start space-y-3 max-w-full">
            {menuItems.map((item, index) => (
              <a
                key={item.text}
                href={item.href}
                onClick={handleMenuClick}
                className={`group text-gray-300 hover:text-white py-3 px-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-white/5 hover:to-white/2 hover:backdrop-blur-sm hover:border-white/20 border border-transparent w-full transform-gpu will-change-transform ${
                  isMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${200 + index * 50}ms`
                }}
              >
                <span className="text-2xl md:text-3xl font-bold tracking-wide group-hover:tracking-wider transition-all duration-200">
                  {item.text}
                </span>
              </a>
            ))}
          </nav>

          {/* Footer Section */}
          <div className={`pb-4 transition-all duration-500 delay-500 transform-gpu ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-center">
              <p className="text-gray-400 text-sm mb-1">Want an actual Hamburger?</p>
              <p className="text-white text-sm mb-2">Tell'em we sent you</p>
              <a
                href="mailto:connectsavagesamosa@gmail.com"
                className="text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors duration-200 inline-flex items-center"
              >
                connectsavagesamosa@gmail.com
                <div className="ml-2 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Optimized */}
      <div className="container mx-auto px-6 lg:px-12 py-8 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side Content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl transform-gpu">
                We make brands go viral with <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">memes, reels & internet culture.</span>
              </h1>
            </div>
          </div>

          {/* Right Side Images - Optimized with lazy loading */}
          <div className="relative max-w-lg  ml-auto">
            {/* First Row */}
            <div className="flex items-center justify-end mb-4 space-x-3">
              <div className="w-96 h-32 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl transform-gpu">
                <img 
                  src={pyarkyu} 
                  alt="pyarkyu gif" 
                  className="w-full h-full object-cover object-top opacity-90 transform-gpu" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="w-28 h-28 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl flex-shrink-0 transform-gpu">
                <img 
                  src={Bacchimeme} 
                  alt="Bacchimeme" 
                  className="w-full h-full object-cover opacity-90 transform-gpu"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="flex items-center justify-end mb-4 space-x-3">
              <div className="w-28 h-28 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl flex-shrink-0 transform-gpu">
                <video 
                  src={arjunKapoor} 
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover object-top opacity-90 transform-gpu" 
                />
              </div>
              <div className="w-96 h-32 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl transform-gpu">
                <video 
                  src={boatingChild} 
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover opacity-90 transform-gpu" 
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="flex items-center justify-end space-x-3">
              <div className="w-96 h-32 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl transform-gpu">
                <img 
                  src={majaaaeyga} 
                  alt="Maja gif"
                  className="w-full h-full object-cover opacity-90 transform-gpu"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="w-28 h-28 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl flex-shrink-0 transform-gpu">
                <img 
                  src={akshaypaaji} 
                  alt="Akshay" 
                  className="w-full h-full object-cover opacity-90 transform-gpu"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkBlueSavageSamosaWebsite;