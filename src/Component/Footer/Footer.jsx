import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // Make sure the path is correct

const Footer = () => {
  return (
    <footer className="bg-[#66d4f7] text-black py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Logo and Name */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-contain rounded-full"
          />
          <div>
            <h4 className="text-xl text-white font-semibold">Taherun Nasa Toma</h4>
            <p className="text-sm text-white">MERN Stack Developer • Portfolio</p>
          </div>
        </div>

       
        <div className="flex gap-4 text-2xl justify-center">
          <a
            href="https://github.com/taherunnasatoma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/taherun-nasa-toma/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/share/1ECihkYSpT/"
            className="hover:text-white transition"
          >
            <FaFacebook />
          </a>
        </div>

        <div className="text-sm text-gray-500 text-center md:text-right">
          &copy; {new Date().getFullYear()} Taherun Toma. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
