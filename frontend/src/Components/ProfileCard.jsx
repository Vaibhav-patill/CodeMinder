import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
        <img
          className="w-24 h-24 rounded-full mx-auto border-4 border-gray-300"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <h2 className="text-xl font-semibold mt-4">Vaibhav Patil</h2>
        <p className="text-gray-600">Full Stack Developer</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            GitHub
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            LinkedIn
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Portfolio
          </a>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
