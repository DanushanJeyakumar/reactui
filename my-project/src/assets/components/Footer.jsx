import React from 'react';
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400 mb-2">My Website</h2>
          <p>
            Empowering Digital Ideas with Modern Web Solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-white font-semibold mb-3">Technologies</h3>
          <ul className="space-y-2">
            <li>React</li>
            <li>Vite</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#"><FiTwitter className="hover:text-white" /></a>
            <a href="#"><FiGithub className="hover:text-white" /></a>
            <a href="#"><FiLinkedin className="hover:text-white" /></a>
            <a href="#"><FiMail className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © 2025 MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
