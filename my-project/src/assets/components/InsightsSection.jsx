import React from 'react';
import { FiExternalLink, FiBookOpen, FiCode, FiTrendingUp, FiDownload } from 'react-icons/fi';

const InsightsSection = () => {
  return (
    <section className="bg-white px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Latest <span className="text-purple-600">News</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Article Card */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-2xl overflow-hidden flex flex-col md:flex-row">
            <img
              src="/news1.jpeg"
              alt="Frontend Tooling"
              className="w-full md:w-1/2 h-64 md:h-auto object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-3 text-sm mb-2">
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md font-semibold">
                  Technology
                </span>
                <span className="text-gray-500">Aug 4, 2025</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">
               Vite is Revolutionizing Frontend
              </h3>
              <p className="text-gray-600 mb-4">
Vite has grown far beyond "just another dev tool." With version 7.0, Rust-powered bundler plans (Rolldown), powerful dev tooling, a framework-neutral plugin ecosystem, and significant developer UX gains, it's asserting itself as a transformative force in frontend engineering. </p>
              <a
                href="#"
                className="text-indigo-600 font-semibold flex items-center gap-1 hover:underline"
              >
                Read full article <FiExternalLink />
              </a>
            </div>
          </div>

          {/* Right: Resource Links */}
          <div className="bg-gray-50 shadow-md rounded-2xl p-6 space-y-6">
            <h4 className="text-xl font-bold">Resources</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiBookOpen className="text-purple-600 mt-1" />
                <div>
                  <p className="font-semibold">Vite Documentation</p>
                  <p className="text-sm text-gray-500">Official guide to Vite's features and API</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiCode className="text-purple-600 mt-1" />
                <div>
                  <p className="font-semibold">React Guide</p>
                  <p className="text-sm text-gray-500">Learn React with practical examples</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiTrendingUp className="text-purple-600 mt-1" />
                <div>
                  <p className="font-semibold">Frontend Trends</p>
                  <p className="text-sm text-gray-500">Latest developments in frontend tech</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiDownload className="text-purple-600 mt-1" />
                <div>
                  <p className="font-semibold">Performance Tips</p>
                  <p className="text-sm text-gray-500">Optimize your web applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
