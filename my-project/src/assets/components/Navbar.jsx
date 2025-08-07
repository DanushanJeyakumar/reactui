import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">MyWebsite</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-indigo-600 transition">Home</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">About</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">Services</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md animate-slide-down">
          <a href="#" className="block text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">About</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">Services</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
