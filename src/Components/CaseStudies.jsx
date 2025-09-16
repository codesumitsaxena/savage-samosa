import React from 'react';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text px-3 py-1 rounded-lg">latest</span> projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Check out some examples of our recent design work. We've helped startups across various industries achieve their visual communication goals.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {/* Starthub X - Large Card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-2 bg-gradient-to-br from-yellow-400 via-orange-400 to-blue-500 rounded-3xl p-8 relative overflow-hidden min-h-[400px]">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-yellow-500 rounded"></div>
                </div>
                <h3 className="text-black font-bold text-xl">Starthub X</h3>
              </div>
              <div className="flex gap-4">
                {/* Phone mockups */}
                <div className="bg-white rounded-2xl p-4 shadow-2xl transform rotate-12 w-32">
                  <div className="bg-gray-100 rounded-xl h-20 mb-2"></div>
                  <div className="space-y-2">
                    <div className="bg-gray-200 h-2 rounded"></div>
                    <div className="bg-gray-200 h-2 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-2xl transform -rotate-6 w-32 mt-8">
                  <div className="bg-blue-100 rounded-xl h-20 mb-2"></div>
                  <div className="space-y-2">
                    <div className="bg-gray-200 h-2 rounded"></div>
                    <div className="bg-gray-200 h-2 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-600 to-transparent rounded-full transform translate-x-16 translate-y-16"></div>
          </div>

          {/* Colorfolio X */}
          <div className="bg-gray-800 rounded-3xl p-6 relative overflow-hidden min-h-[180px]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
                <h3 className="font-semibold">Colorfolio X</h3>
              </div>
              <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
            </div>
            <div className="bg-white rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-purple-200 rounded-full"></div>
                <div className="space-y-1">
                  <div className="bg-gray-300 h-1 w-16 rounded"></div>
                  <div className="bg-gray-200 h-1 w-12 rounded"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-tl from-purple-500 to-transparent rounded-full"></div>
          </div>
{/* PowerShell-like App */}
          <div className="bg-blue-600 rounded-3xl p-6 flex items-center justify-center min-h-[180px]">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 7l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 19h8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Orange App */}
          <div className="bg-orange-500 rounded-3xl p-6 flex items-center justify-center min-h-[180px]">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-2 border-white rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Blue Circular App */}
          <div className="bg-blue-800 rounded-3xl p-6 flex items-center justify-center min-h-[180px]">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            </div>
          </div>

          {/* 3D Cube App */}
          <div className="bg-purple-700 rounded-3xl p-6 flex items-center justify-center min-h-[180px]">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 transform rotate-12 rounded-lg shadow-xl"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 transform -rotate-12 rounded-lg shadow-xl absolute -top-2 -right-2"></div>
            </div>
          </div>

          {/* Pastel X */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-gray-800 rounded-3xl p-6 relative min-h-[180px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              <h3 className="font-semibold text-sm">Pastel X</h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full">
              <div className="bg-gradient-to-t from-purple-500 to-transparent h-16 rounded-b-3xl opacity-30"></div>
            </div>
          </div>

          {/* Startup Guide */}
          <div className="bg-gray-100 rounded-3xl p-6 relative min-h-[180px]">
            <div className="text-gray-900">
              <h3 className="font-bold text-sm mb-2">The first survival guide for startups</h3>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="space-y-2">
                  <div className="bg-gray-200 h-2 rounded w-full"></div>
                  <div className="bg-gray-200 h-2 rounded w-3/4"></div>
                  <div className="bg-gray-200 h-2 rounded w-1/2"></div>
                </div>
                <div className="mt-3 flex gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  <div className="flex-1 space-y-1">
                    <div className="bg-gray-200 h-1 rounded"></div>
                    <div className="bg-gray-200 h-1 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get in touch
          </button>
          <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            Browse all services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
