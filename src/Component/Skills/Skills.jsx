import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaFigma, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const skillsData = [
  {
    category: 'Frontend',
    color: 'text-blue-500',
    skills: [
      { icon: <FaHtml5 />, name: 'HTML5' },
      { icon: <FaCss3Alt />, name: 'CSS3' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
      { icon: <FaReact />, name: 'React.js' },
      { icon: <FaFigma />, name: 'Figma' },
    ],
  },
  {
    category: 'Backend',
    color: 'text-green-500',
    skills: [
      { icon: <FaNodeJs />, name: 'Node.js' },
      { icon: <SiExpress />, name: 'Express.js' },
      { icon: <SiMongodb />, name: 'MongoDB' },
      { icon: <FaDatabase />, name: 'Database Design' },
    ],
  },
  {
    category: 'Tools & Others',
    color: 'text-purple-500',
    skills: [
      { icon: <FaGithub />, name: 'GitHub' },
      { icon: <FaFigma />, name: 'Figma' },
    ],
  },
];

const marqueeVariants = {
  animate: {
    x: ['0%', '-50%'], 
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear',
      },
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 bg-[#F1F2F4] max-w-7xl mx-auto rounded-2xl px-4 sm:px-8 shadow-md transition duration-300"
    >
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

      {skillsData.map((section, idx) => (
        <div key={idx} className="mb-10 overflow-hidden">
          <h3 className={`text-xl text-center sm:text-2xl font-semibold mb-6 ${section.color}`}>{section.category}</h3>


          <motion.div
            className="flex w-[200%]"
            variants={marqueeVariants}
            animate="animate"
          >
            {[...section.skills, ...section.skills].map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md w-1/3 sm:w-1/4 md:w-1/6 mx-1"
                title={skill.name}
              >
                <div className={`text-4xl sm:text-5xl md:text-6xl mb-2 ${section.color}`}>
                  {skill.icon}
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-700">{skill.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
