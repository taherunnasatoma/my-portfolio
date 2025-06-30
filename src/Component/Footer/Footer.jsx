import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // Make sure the path is correct

const Footer = () => {
  return (
    <footer className="bg-[#F1F2F4] text-black py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Logo and Name */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-contain rounded-full"
          />
          <div>
            <h4 className="text-xl text-blue-600  font-semibold">Taherun Toma</h4>
            <p className="text-sm text-gray-600">MERN Stack Developer • Portfolio</p>
          </div>
        </div>

       
        <div className="flex gap-4 text-2xl justify-center">
          <a
            href="https://github.com/taherunnasatoma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://github.com/taherunnasatoma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/share/1ECihkYSpT/"
            className="hover:text-blue-600 transition"
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
