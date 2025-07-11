import React from 'react';
import img from '../../assets/toma3.jpg';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Banner = () => {
  return (
    <div id='banner' className="max-w-7xl mx-auto rounded-2xl my-8 py-8 bg-[#66d4f7] shadow-md hover:shadow-lg transition duration-300s">
      <div className="hero-content flex-col gap-24 lg:flex-row-reverse">
        <img src={img}   className="w-60 h-60 object-cover  rounded-full shadow-2xl" alt="Toma" />

        <div>
          <h1 className="text-5xl text-white font-bold">Taherun Nasa Toma</h1>

          <p className="pt-6 pb-2 text-2xl text-white font-semibold">MERN Stack Developer</p>
          <p className='text-white'>
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
              href="https://www.linkedin.com/in/taherun-nasa-toma/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>

         
          <div className="mt-4">
            <button ><a
          href="/taherun_nasa_toma_resume.pdf"
          download
          className="btn bg-white text-black"
        >
          Resume
        </a></button>
          </div>
        </div>
      </div>
    </div>
  );
};




export default Banner;
