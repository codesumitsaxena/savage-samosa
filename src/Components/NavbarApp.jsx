import React, { useState } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, FolderOpen, Phone, Users } from 'lucide-react';
import logo from '../assets/logo.jpg'
import Bacchimeme from '../assets/Bacchi meme.jpg'
import akshaypaaji from '../assets/akshaypaaji.jpg'
import arjunKapoor from '../assets/arjun-kapoor-angry-reaction.mp4'
import pyarkyu from '../assets/Koi-Aapse-Pyaar-Kyu-Karega.mp4'
import majaaaeyga from '../assets/maja.mp4'
import boatingChild from '../assets/boatingVideo.mp4'




const DarkBlueSavageSamosaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { text: 'HOME', icon: Home, href: '#home' },
    { text: 'ABOUT', icon: User, href: '#about' },
    { text: 'SERVICES', icon: Briefcase, href: '#services' },
    { text: 'PROJECTS', icon: FolderOpen, href: '#projects' },
    { text: 'CONTACT', icon: Mail, href: '#contact' },
    { text: "WE'RE HIRING", icon: Users, href: '#hiring' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 relative overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between max-w-7xl mx-auto items-center p-6 lg:px-12 relative z-50">
        <div className="flex items-center space-x-3">
       <img src={logo} alt="logo" className='h-16 w-16' />
        </div>
        
        <button
          onClick={toggleMenu}
          className="flex items-center space-x-2 text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-105 z-50 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20"
        >
          <span className="text-lg font-medium">Menu</span>
          <div className={`transition-transform duration-500 ${isMenuOpen ? 'rotate-180' : ''}`}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </nav>

      {/* Overlay */}
      <div 
        className={`fixed max-w-7xl inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Full Screen Menu - Reduced Height */}
      <div className={`fixed top-0 left-0 w-full h-[100vh] bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 backdrop-blur-xl transform transition-all duration-700 ease-out z-50 overflow-hidden ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-12 right-12 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-12 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-12 right-1/3 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/2 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        </div>

        <div className="relative h-full flex flex-col px-6 py-4">
          
          {/* Close Button - Now also controlled by main toggle */}
          <div className="flex justify-end lg:ms-12 lg:px-14 mb-6">
            <button
              onClick={toggleMenu}
              className={`group p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 hover:rotate-90 backdrop-blur-sm ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <X size={24} className="text-white group-hover:text-gray-200" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 flex flex-col justify-center items-start space-y-3 max-w-full">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={toggleMenu}
                className={`group text-gray-300 hover:text-white py-3 px-6 rounded-2xl transition-all duration-500 hover:bg-gradient-to-r hover:from-white/5 hover:to-white/2 hover:backdrop-blur-sm hover:border-white/20 border border-transparent transform w-full ${
                  isMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${300 + index * 80}ms`
                }}
              >
                <span className="text-2xl md:text-3xl font-bold tracking-wide group-hover:tracking-wider transition-all duration-300">
                  {item.text}
                </span>
              </a>
            ))}
          </nav>

          {/* Footer Section */}
          <div className={`pb-4 transition-all duration-700 delay-700 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-center">
              <p className="text-gray-400 text-sm mb-1">Want an actual Hamburger?</p>
              <p className="text-white text-sm mb-2">Tell'em we sent you</p>
              <a
                href="mailto:connectsavagesamosa@gmail.com"
                className="text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors duration-300 inline-flex items-center"
              >
                connectsavagesamosa@gmail.com
                <div className="ml-2 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 lg:px-12 py-8 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side Content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
                We make brands go viral with <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">memes, reels & internet culture.</span>
              </h1>
            </div>
          </div>

          {/* Right Side Images */}
          <div className="relative max-w-lg ml-auto">
            {/* First Row - Oval with team and Single circle */}
            <div className="flex items-center justify-end mb-4 space-x-3">
            <div className="w-96 h-32 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl">
  <video 
    src={pyarkyu} 
    autoPlay 
    muted 
    loop
    className="w-full h-full object-cover object-top opacity-90" 
  />
</div>

              <div className="w-28 h-28 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl flex-shrink-0">
                <img src={Bacchimeme} alt="Bacchimeme" className="w-full h-full object-cover opacity-90" />
              </div>
            </div>

            {/* Second Row - Single circle and Oval with team */}
            <div className="flex items-center justify-end mb-4 space-x-3">
              <div className="w-28 h-28 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl flex-shrink-0">
              <video 
    src={arjunKapoor} 
    autoPlay 
    muted 
    loop
    className="w-full h-full object-cover object-top opacity-90" 
  />
  
              </div>
              <div className="w-96 h-32 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl">
              <video 
    src={boatingChild} 
    autoPlay 
    muted 
    loop
    className="w-full h-full object-cover opacity-90" 
  />
                
              </div>
            </div>

            {/* Third Row - Oval with team and Single circle */}
            <div className="flex items-center justify-end space-x-3">
              <div className="w-96 h-32 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl">
              <video 
    src={majaaaeyga} 
    autoPlay 
    muted 
    loop
    className="w-full h-full object-cover opacity-90" 
  />
              </div>
              <div className="w-28 h-28 bg-gray-700 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl flex-shrink-0">
                <img src={akshaypaaji} alt="Person" className="w-full h-full object-cover opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-600/20 to-transparent rounded-full opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full opacity-40 -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-blue-500/10 rounded-full opacity-40 -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-cyan-400/15 rounded-full opacity-50 -z-10 animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default DarkBlueSavageSamosaWebsite;