import React from 'react';

const FeatureSection = () => {
  return (
    <section className="bg-[#f9faff] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/react1.jpg"
            alt="React Coding"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-purple-600">Build Amazing </span>{' '}
             UIs  <span className="text-gray-900"> with React & Vitet</span>
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Fast, lightweight, and modern frontend development.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
