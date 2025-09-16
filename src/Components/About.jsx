import React from 'react';

const AboutSavageSamosa = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#ECE9E6] to-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-6xl lg:text-4xl font-bold text-blue-900 mb-6 font-inter tracking-tight">
            About Savage Samosa
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black font-inter">
            Nam to Suna hi hoga
          </h2>
          <div className="mt-8 w-24 h-1 bg-blue-800 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
   
        <p className="text-lg sm:text-xl text-black-700 font-inter">
  At <span className="font-bold">Savage Samosa</span>, we believe that memes aren’t 
  just jokes—they are the language of the internet. Our agency is built on the idea 
  that humor, when used smartly, can connect brands with audiences in the most 
  authentic way possible. 
  <br /><br />
  From viral Instagram reels to relatable Twitter threads, we craft content that 
  makes people laugh, share, and engage—while keeping your brand at the center of 
  the conversation. Our team blends creativity, cultural awareness, and sharp 
  storytelling to deliver campaigns that spread like wildfire across social media. 
  <br /><br />
  Whether you’re a startup looking to make noise or an established brand aiming to 
  stay relevant, <span className="font-bold">Savage Samosa</span> helps you 
  cut through the clutter with memes, reels, and internet culture that stick in 
  people’s minds and screens.
</p>

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