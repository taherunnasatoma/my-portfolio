import React from 'react';

const AboutMe = () => {
    return (
        <section id="about" className="max-w-7xl mx-auto my-10 px-10 py-12 bg-[#F1F2F4] rounded-2xl shadow-md hover:shadow-lg transition duration-300s ">
            <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>
            <p className="text-lg leading-relaxed px-24">
                Hello! I'm <span className="font-semibold text-blue-600">Taherun Nasa Toma</span>, a passionate and dedicated <strong>MERN Stack Developer</strong> with a deep love for building dynamic, responsive, and user-friendly web applications.
                <br /><br />
                My journey in programming began with curiosity and a desire to create meaningful digital experiences. Over time, I developed strong skills in <span className="text-blue-600">JavaScript, React, Node.js, Express</span>, and <span className="text-blue-600">MongoDB</span>, and I’ve enjoyed solving real-world problems through code.
                <br /><br />
                I especially enjoy working on full-stack projects where I can bring ideas to life — from designing clean UI components to building scalable backend APIs. I take pride in writing clean, efficient code and continuously learning new tools and technologies to stay current in the ever-evolving tech world.
                <br /><br />
                Beyond coding, I’m a creative individual who enjoys <strong>exploring design trends, and occasionally diving into photography</strong>. I also love spending time outdoors, which helps me reset and recharge.
                <br /><br />
                I believe that curiosity, consistency, and collaboration are key ingredients for success — and I’m excited to continue growing as a developer and contributing to innovative projects.
            </p>
        </section>

    );
};

export default AboutMe;