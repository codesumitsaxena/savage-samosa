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
        "We design engaging WhatsApp campaigns that deliver messages straight to your audience’s phone. From personalized promotions to automated chat flows, we help you boost conversions effortlessly.",
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
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-white">Expertise</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Finding the top digital innovations for forward-thinking brands hoping to push the 
            envelope and make a big impact is something we are enthusiastic about.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-0 border border-white rounded-t-2xl rounded-b-lg overflow-hidden">
  {services.map((service, index) => (
    <div
      key={service.id}
      className={`relative group cursor-pointer 
        ${index === 0 ? 'rounded-t-2xl' : ''} 
        ${index === services.length - 1 ? 'rounded-b-lg' : ''} 
        border-t border-white`}
      onMouseEnter={() => setHoveredService(service.id)}
      onMouseLeave={() => setHoveredService(null)}
    >
      <div className={`px-6 hover:bg-gray-900/30 transition-all duration-300 ease-out ${
        hoveredService === service.id || index === 0 
          ? 'py-8' 
          : 'py-4'
      }`}>
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
                    ? 'text-4xl md:text-5xl'
                    : 'text-2xl md:text-3xl'
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
            
            {/* Details */}
            <div
              className={`grid md:grid-cols-2 gap-8 transition-all duration-300 ease-out ${
                hoveredService === service.id || index === 0
                  ? 'opacity-100 max-h-96'
                  : 'opacity-0 max-h-0 overflow-hidden'
              }`}
            >
              <div>
                <h4 className="text-lg font-semibold mb-3 text-yellow-400">
                  {service.subtitle}
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-yellow-400">
                  {service.whyChoose}
                </h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span className="w-1 h-1 bg-yellow-400 rounded-full mt-2.5 flex-shrink-0"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right Arrow and Image */}
          <div className="flex items-center justify-end min-w-[320px] relative">
            {/* Arrow with White Circular Background - Perfect Center */}
            <div 
              className={`relative w-14 h-14 flex items-center justify-center transition-all duration-300 ease-out will-change-transform ${
                hoveredService === service.id || index === 0
                  ? 'transform translate-x-[-180px]'
                  : 'transform translate-x-0'
              }`}
            >
              {/* White Circular Background */}
              <div 
                className={`absolute inset-0 rounded-full bg-white shadow-lg transition-all duration-300 ease-out ${
                  hoveredService === service.id || index === 0
                    ? 'border-2 border-gray-200 scale-110'
                    : 'border border-gray-100 scale-100'
                }`}
              />
              
              {/* Arrow - Perfectly Centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <ArrowUpRight
                  className={`transition-all duration-300 ease-out will-change-transform ${
                    hoveredService === service.id || index === 0
                      ? 'w-6 h-6 text-gray-800 transform rotate-45'
                      : 'w-5 h-5 text-gray-600 transform rotate-0'
                  }`}
                />
              </div>
            </div>
            
            {/* Image - Hardware Accelerated */}
            <div
              className={`absolute right-0 rounded-xl overflow-hidden will-change-transform transition-all duration-300 ease-out ${
                hoveredService === service.id || index === 0
                  ? 'opacity-100 translate-x-0 w-80 h-48 z-10 shadow-2xl'
                  : 'opacity-0 translate-x-full w-80 h-48 pointer-events-none z-0'
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
              
              {/* Optimized Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20"></div>
              
              {/* Image Hover Effect */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-200">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-6 h-6 text-white rotate-45" />
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
  ))}
</div>


        
        {/* Bottom border */}
        <div className="border-t border-gray-800 mt-1"></div>
      </div>
    </div>
  );
};

export default ServicesSection;