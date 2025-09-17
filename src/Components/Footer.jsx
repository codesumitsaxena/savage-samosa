import React from 'react';
import { ArrowRight } from 'lucide-react';
import logo from '../assets/logo-png2.png';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white relative overflow-hidden">
      {/* Background Pattern with Smoke Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1%,transparent_60%)] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Section - Contact Info */}
          <div className="space-y-6">
            {/* Phone */}
            <div>
              <a
                href="tel:+919369108596"
                className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200"
              >
                +91 9369108596
              </a>
            </div>

            {/* Email */}
            <div>
              <a
                href="mailto:connectsavagesamosa@gmail.com"
                className="text-2xl sm:text-3xl lg:text-4xl font-light text-white hover:text-blue-300 transition-colors duration-200"
              >
                connectsavagesamosa@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>Sector 62, Noida</p>
              <p>Uttar Pradesh | India</p>
            </div>

            {/* Logo with Tagline */}
            <div className="pt-8 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <img src={logo} alt="logo" className="w-16 h-16" />
              <div className="text-center sm:text-left">
                <h4 className="text-lg sm:text-xl font-semibold text-white">
                  Meme <br/>Marketing Agency
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  “Turning brands into viral sensations with memes, reels & internet culture.”
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Newsletter & Navigation */}
          <div className="space-y-8">
            {/* Newsletter Section */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white">
                Stay Connected
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">
                Join our newsletter and stay updated on <br />
                the latest trends in digital.
              </p>

              {/* Email Input */}
              <div className="relative max-w-md">
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full bg-transparent border-b-2 border-white-300 pb-3 pt-2 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-200"
                />
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
  <ArrowRight className="w-4 h-4 text-black" />
</button>

              </div>
            </div>

            {/* Navigation Links */}
            <div className="pt-8">
              <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm sm:text-base">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  HOME
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  ABOUT US
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  SERVICES
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  OUR PROJECT
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  BLOGS
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  CONTACT US
                </a>
               
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-white-700/50">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="text-xs sm:text-sm text-gray-400">
              © 2025 All rights reserved. | Designed by Savage Samosa Team
            </div>

            {/* Social Media */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
              {/* Footer Links */}
              <div className="flex space-x-4 text-xs sm:text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  CHANGELOG
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  STYLEGUIDE
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  LICENSE
                </a>
              </div>

              {/* Social Media */}
              <div className="text-xs sm:text-sm text-gray-400">
                <span className="block sm:inline mb-2 sm:mb-0 sm:mr-4">
                  SOCIAL MEDIA
                </span>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    X (Twitter)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
