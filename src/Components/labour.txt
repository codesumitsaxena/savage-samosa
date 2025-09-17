import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "MEME MARKETING",
      subtitle: "Make Your Brand Go Viral",
      description:
        "We craft witty, relatable, and trending memes that cut through the internet noise. Meme marketing helps brands connect with Gen Z and millennials in the most authentic way, turning your brand into a conversation starter.",
      whyChoose: "Why Savage Samosa?",
      benefits: [
        "Experts in viral meme creation that audiences instantly share",
        "Deep knowledge of internet culture and latest trends",
        "Boosts brand recall with humor and relatability"
      ],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=350&fit=crop"
    },
    {
      id: 2,
      title: "INFLUENCER MARKETING",
      subtitle: "Amplify with the Right Voices",
      description:
        "We connect your brand with the right influencers who genuinely engage their audience. From micro to macro influencers, we help you build authentic partnerships that drive real impact.",
      whyChoose: "Why Savage Samosa?",
      benefits: [
        "Access to a wide network of trusted influencers",
        "End-to-end campaign management and tracking",
        "Authentic collaborations that increase trust and conversions"
      ],
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=350&fit=crop"
    },
    {
      id: 3,
      title: "PAID PROMOTION",
      subtitle: "Reach Bigger, Faster",
      description:
        "We design high-performing paid ad campaigns across Meta, Google, and TikTok that deliver measurable results. From targeting the right audience to optimizing creatives, we maximize your ROI.",
      whyChoose: "Why Savage Samosa?",
      benefits: [
        "Data-driven ad strategies with precise targeting",
        "Creative ad designs that grab attention instantly",
        "Continuous optimization for maximum ROI"
      ],
      image:
        "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=500&h=350&fit=crop"
    },
    {
      id: 4,
      title: "PR MARKETING",
      subtitle: "Build Buzz That Lasts",
      description:
        "We help brands get featured in top publications, blogs, and media platforms. PR marketing builds credibility, boosts brand authority, and makes sure your brand is always in the spotlight.",
      whyChoose: "Why Savage Samosa?",
      benefits: [
        "Strong media network with journalists and editors",
        "Storytelling that captures attention and builds trust",
        "Long-term reputation and authority building"
      ],
      image:
        "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=500&h=350&fit=crop"
    },
    {
      id: 5,
      title: "WHATSAPP MARKETING",
      subtitle: "Connect Directly with Customers",
      description:
        "We design engaging WhatsApp campaigns that deliver messages straight to your audience's phone. From personalized promotions to automated chat flows, we help you boost conversions effortlessly.",
      whyChoose: "Why Savage Samosa?",
      benefits: [
        "Direct customer engagement with high open rates",
        "Personalized campaigns that feel authentic",
        "Seamless automation for lead generation and sales"
      ],
      image:
        "https://images.unsplash.com/photo-1603898037225-3e6a9b9dc5df?w=500&h=350&fit=crop"
    }
  ];
  

  return (
    <div className="min-h-screen bg-black text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Fully Responsive */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 tracking-tight">
            <span className="text-white">Expertise</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-base max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
            Finding the top digital innovations for forward-thinking brands hoping to push the 
            envelope and make a big impact is something we are enthusiastic about.
          </p>
        </div>

        {/* Services - Mobile First Design */}
        <div className="space-y-0 border border-white rounded-t-xl sm:rounded-t-2xl rounded-b-lg overflow-hidden">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative group cursor-pointer 
                ${index === 0 ? 'rounded-t-xl sm:rounded-t-2xl' : ''} 
                ${index === services.length - 1 ? 'rounded-b-lg' : ''} 
                border-t border-white`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => {
                // Mobile tap to expand
                if (window.innerWidth < 1024) {
                  setHoveredService(hoveredService === service.id ? null : service.id);
                }
              }}
            >
              <div className={`px-3 sm:px-4 lg:px-6 hover:bg-gray-900/30 transition-all duration-300 ease-out ${
                hoveredService === service.id || index === 0 
                  ? 'py-6 sm:py-7 lg:py-8' 
                  : 'py-3 sm:py-4 lg:py-4'
              }`}>
                
                {/* Mobile & Tablet Layout (Below lg) */}
                <div className="lg:hidden">
                  
                  {/* Title Section */}
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 uppercase transition-all duration-300 ease-out ${
                        hoveredService === service.id || index === 0
                          ? 'text-xl sm:text-2xl md:text-3xl'
                          : 'text-lg sm:text-xl md:text-2xl'
                      }`}
                      style={{
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        fontWeight: '900',
                        WebkitTextStroke: '0.5px rgba(255,255,255,0.1)'
                      }}
                    >
                      {service.title}
                    </h3>
                    
                    {/* Arrow */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 ease-out ${
                      hoveredService === service.id || index === 0
                        ? 'transform rotate-45'
                        : 'transform rotate-0'
                    }`}>
                      <div className="w-full h-full rounded-full bg-white shadow-lg flex items-center justify-center">
                        <ArrowUpRight
                          className={`transition-all duration-300 ease-out ${
                            hoveredService === service.id || index === 0
                              ? 'w-5 h-5 sm:w-6 sm:h-6 text-gray-800'
                              : 'w-4 h-4 sm:w-5 sm:h-5 text-gray-600'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Expandable Content */}
                  <div
                    className={`transition-all duration-300 ease-out ${
                      hoveredService === service.id || index === 0
                        ? 'opacity-100 max-h-[800px]'
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    {/* Image */}
                    <div className="mb-4 sm:mb-6">
                      <div className="w-full h-40 sm:h-48 md:h-56 rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20"></div>
                      </div>
                    </div>
                    
                    {/* Details */}
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-yellow-400">
                          {service.subtitle}
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          {service.description}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-yellow-400">
                          {service.whyChoose}
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="text-gray-300 text-sm sm:text-base leading-relaxed flex items-start gap-2 sm:gap-3"
                            >
                              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-400 rounded-full mt-2 sm:mt-2.5 flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout (lg and above) */}
                <div className="hidden lg:block">
                  <div className="flex items-center justify-between">
                    
                    {/* Left Content */}
                    <div
                      className={`transition-all duration-300 ease-out ${
                        hoveredService === service.id || index === 0
                          ? 'transform translate-x-6'
                          : 'transform translate-x-0'
                      }`}
                    >
                      <div className="flex items-center gap-6 mb-6">
                        <h3
                          className={`font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 uppercase transition-all duration-300 ease-out ${
                            hoveredService === service.id || index === 0
                              ? 'text-4xl xl:text-5xl'
                              : 'text-2xl xl:text-3xl'
                          }`}
                          style={{
                            fontFamily: 'system-ui, -apple-system, sans-serif',
                            fontWeight: '900',
                            WebkitTextStroke: '1px rgba(255,255,255,0.1)'
                          }}
                        >
                          {service.title}
                        </h3>
                      </div>
                      
                      {/* Desktop Details */}
                      <div
                        className={`grid xl:grid-cols-2 gap-6 xl:gap-8 transition-all duration-300 ease-out ${
                          hoveredService === service.id || index === 0
                            ? 'opacity-100 max-h-96'
                            : 'opacity-0 max-h-0 overflow-hidden'
                        }`}
                      >
                        <div>
                          <h4 className="text-lg xl:text-xl font-semibold mb-3 text-yellow-400">
                            {service.subtitle}
                          </h4>
                          <p className="text-gray-300 leading-relaxed text-sm xl:text-base">
                            {service.description}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg xl:text-xl font-semibold mb-3 text-yellow-400">
                            {service.whyChoose}
                          </h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                className="text-gray-300 text-sm xl:text-base leading-relaxed flex items-start gap-2"
                              >
                                <span className="w-1 h-1 bg-yellow-400 rounded-full mt-2.5 flex-shrink-0"></span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Arrow and Image - Desktop Only */}
                    <div className="flex items-center justify-end min-w-[280px] xl:min-w-[320px] relative">
                      {/* Arrow with White Circular Background */}
                      <div 
                        className={`relative w-12 h-12 xl:w-14 xl:h-14 flex items-center justify-center transition-all duration-300 ease-out will-change-transform ${
                          hoveredService === service.id || index === 0
                            ? 'transform translate-x-[-160px] xl:translate-x-[-180px]'
                            : 'transform translate-x-0'
                        }`}
                      >
                        <div 
                          className={`absolute inset-0 rounded-full bg-white shadow-lg transition-all duration-300 ease-out ${
                            hoveredService === service.id || index === 0
                              ? 'border-2 border-gray-200 scale-110'
                              : 'border border-gray-100 scale-100'
                          }`}
                        />
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ArrowUpRight
                            className={`transition-all duration-300 ease-out will-change-transform ${
                              hoveredService === service.id || index === 0
                                ? 'w-5 h-5 xl:w-6 xl:h-6 text-gray-800 transform rotate-45'
                                : 'w-4 h-4 xl:w-5 xl:h-5 text-gray-600 transform rotate-0'
                            }`}
                          />
                        </div>
                      </div>
                      
                      {/* Desktop Image */}
                      <div
                        className={`absolute right-0 rounded-xl overflow-hidden will-change-transform transition-all duration-300 ease-out ${
                          hoveredService === service.id || index === 0
                            ? 'opacity-100 translate-x-0 w-64 h-40 xl:w-80 xl:h-48 z-10 shadow-2xl'
                            : 'opacity-0 translate-x-full w-64 h-40 xl:w-80 xl:h-48 pointer-events-none z-0'
                        }`}
                        style={{
                          transform: `translateX(${hoveredService === service.id || index === 0 ? '0' : '100%'})`,
                          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
                        }}
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20"></div>
                        
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-200">
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                            <div className="text-center">
                              <div className="w-10 h-10 xl:w-12 xl:h-12 mx-auto mb-2 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <ArrowUpRight className="w-5 h-5 xl:w-6 xl:h-6 text-white rotate-45" />
                              </div>
                              <p className="text-white text-xs font-medium">View</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom border */}
        <div className="border-t border-gray-800 mt-1"></div>
      </div>
    </div>
  );
};

export default ServicesSection;