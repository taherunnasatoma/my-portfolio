import React from 'react';
import img from '../../assets/toma2.jpg';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Banner = () => {
  return (
    <div id='banner' className="max-w-7xl mx-auto rounded-2xl my-8 py-8 bg-[#F1F2F4] shadow-md hover:shadow-lg transition duration-300s">
      <div className="hero-content flex-col gap-24 lg:flex-row-reverse">
        <img src={img}   className="w-60 h-60 object-cover  rounded-full shadow-2xl" alt="Toma" />

        <div>
          <h1 className="text-5xl font-bold">Taherun Nasa Toma</h1>

          <p className="pt-6 pb-2 text-2xl font-semibold">MERN Stack Developer</p>
          <p>
            Passionate web developer specializing in building <br />
            responsive and user-friendly web applications.
          </p>

          
          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://www.facebook.com/share/1ECihkYSpT/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-2xl"
            >
              <FaFacebook />
            </a>

            <a
              href="https://github.com/taherunnasatoma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black text-2xl"
            >
              <FaGithub />
            </a>
            

            <a
              href="https://github.com/taherunnasatoma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>

         
          <div className="mt-4">
            <button className="btn bg-[#0f62fe] text-white">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
