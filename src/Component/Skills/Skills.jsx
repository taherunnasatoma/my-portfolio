import React from 'react';
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

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-[#F1F2F4] max-w-7xl mx-auto rounded-2xl px-4 shadow-md hover:shadow-lg transition duration-300s">
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

      {skillsData.map((section, index) => (
        <div key={index} className="mb-10">
          <h3 className={`text-xl font-semibold px-30 mb-4 ${section.color}`}>{section.category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 px-30  gap-6 ">
            {section.skills.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
                title={skill.name}
              >
                <div className={`text-4xl mb-2 ${section.color}`}>{skill.icon}</div>
                <p className="text-sm font-medium text-gray-700">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
