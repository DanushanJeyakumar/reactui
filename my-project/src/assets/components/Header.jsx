import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Header = () => {
  return (
    <header
      className="h-96 relative min-h-screen flex items-center justify-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/SE.jpg')" }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <Typewriter
            words={['Welcome to My Website']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          Crafting digital experiences with modern web technologies
        </p>

        {/* Social Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://www.linkedin.com/in/danushanjeyakumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            <FaLinkedin className="text-xl" />
            Connect on LinkedIn
          </a>
          <a
            href="https://www.instagram.com/j.danushan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            <FaInstagram className="text-xl" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
