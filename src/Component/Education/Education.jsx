import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#F1F2F4] text-center max-w-7xl mx-auto my-10 px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 lg:py-20 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Education</h2>

      <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-2">
        Bachelor of Science in Computer Science and Engineering (BCSE)
      </h3>

      <p className="text-lg sm:text-2xl text-gray-700 font-medium">
        IUBAT – International University of Business Agriculture and Technology
      </p>

      <p className="text-base sm:text-xl text-gray-500 mt-1">Graduated: 2024</p>

      <p className="text-base sm:text-lg text-gray-500">CGPA: 3.7 / 4.0</p>
    </section>
  );
};

export default Education;
