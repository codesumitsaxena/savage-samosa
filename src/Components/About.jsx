import React from 'react';

const AboutSavageSamosa = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#ECE9E6] to-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-900 mb-6 font-inter tracking-tight">
            About Savage Samosa
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black font-inter">
            Nam to Suna hi hoga
          </h2>
          <div className="mt-8 w-24 h-1 bg-blue-800 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction Card */}
          <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-xl border border-white/50 mb-12">
            <div className="text-center mb-8">
              <div className="text-8xl mb-6">🥟</div>
              <h3 className="text-3xl font-bold text-blue-900 font-inter mb-4">
                India's Sabse Savage Meme Marketing Agency
              </h3>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed font-inter text-gray-800">
              <p className="text-center text-xl font-medium text-black">
                Hum woh log hain jo aapke brand ko viral banate hain - ek samosa ki tarah crispy aur addictive! 
              </p>
              
              <p>
                <span className="font-bold text-blue-900">Savage Samosa</span> sirf ek agency nahi hai, yeh ek movement hai. Hum memes ki duniya mein brands ko superhero banate hain. Jahan traditional marketing fail ho jati hai, wahan humari meme magic shuru hoti hai.
              </p>
              
              <p>
                Samosa ki tarah layered approach se hum aapke brand ki story banate hain - har layer mein ek naya flavor, har bite mein ek nayi engagement. Hum jaante hain ki internet pe attention span kitni kam hai, isliye hum 3 second mein impact create karte hain.
              </p>
              
              <p>
                From <span className="font-semibold">viral reels</span> to <span className="font-semibold">trending hashtags</span>, from <span className="font-semibold">meme templates</span> to <span className="font-semibold">social media domination</span> - hum sab kuch karte hain, bas boring content nahi banate!
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3 font-inter">Viral Guarantee</h4>
              <p className="text-gray-700 font-inter">
                Humara formula simple hai - relatable content + perfect timing + desi tadka = Viral Success!
              </p>
            </div>
            
            <div className="bg-orange-50/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3 font-inter">Target Accurate</h4>
              <p className="text-gray-700 font-inter">
                Gen Z ho ya Millennials, hum jaante hain ki kiska kya pasand hai. Audience segmentation humara specialty hai.
              </p>
            </div>
            
            <div className="bg-green-50/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3 font-inter">Lightning Fast</h4>
              <p className="text-gray-700 font-inter">
                Trend aate hi hum ready! 24/7 social media monitoring aur instant content creation.
              </p>
            </div>
            
            <div className="bg-purple-50/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="text-4xl mb-4">💎</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3 font-inter">Premium Quality</h4>
              <p className="text-gray-700 font-inter">
                Memes funny hote hain, lekin humara approach bilkul professional. Quality compromise nahi karte.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-inter">
              Ready to Make Your Brand Savage?
            </h3>
            <p className="text-lg mb-6 opacity-90 font-inter">
              Bas ek call ki duri par hai viral success!
            </p>
            <button className="bg-white text-blue-800 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg font-inter">
              Let's Go Savage! 🔥
            </button>
          </div>
        </div>

        {/* Floating Samosas */}
        <div className="fixed top-20 left-10 text-4xl animate-bounce opacity-20 pointer-events-none hidden lg:block">
          🥟
        </div>
        <div className="fixed bottom-20 right-10 text-4xl animate-pulse opacity-20 pointer-events-none hidden lg:block">
          🥟
        </div>
        <div className="fixed top-1/2 right-20 text-3xl animate-bounce opacity-20 pointer-events-none hidden xl:block" style={{animationDelay: '1s'}}>
          🔥
        </div>
      </div>
    </section>
  );
};

export default AboutSavageSamosa;