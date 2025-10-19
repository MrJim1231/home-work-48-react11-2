import React from "react";

const About: React.FC = () => {
  return (
    <div className="text-center my-10 px-4">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">About This App</h2>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md text-gray-700">
        <p className="mb-3">
          This project demonstrates how to build a clean and responsive React +
          TypeScript app using Tailwind CSS.
        </p>
        <p className="mb-3">
          You can dynamically create cards with a simple and elegant UI.
        </p>
        <p>
          It follows best practices for React structure, reusability, and
          responsive design.
        </p>
      </div>
    </div>
  );
};

export default About;
