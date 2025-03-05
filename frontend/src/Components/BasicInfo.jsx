import React, { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

function BasicInfo() {
  const [profileImage, setProfileImage] = useState(
    "https://lh3.googleusercontent.com/a/ACg8ocJXriI3IC7Uid_pGGNTsU8QvNDUGVCXQdej7fzwO3vq3na_Kg=s96-c"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const degrees = [
    "Bachelor of Technology",
    "Master of Technology",
    "Bachelor of Engineering",
    "Master of Computer Applications",
    "Bachelor of Computer Applications",
    "Bachelor of Science",
    "Other",
  ];

  const branches = [
    "Computer Science",
    "Information Technology",
    "Electronics and Communication",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Software Engineering",
    "VLSI Design",
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Aerospace Engineering",
    "Biomedical Engineering",
    "Mining Engineering",
    "Human Resources",
    "Others",
  ];

  const years = Array.from({ length: 55 }, (_, i) => 2030 - i);

  return (
    <div className="w-full p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-medium text-gray-800 dark:text-darkText-300">
          Basic Info
        </h3>
        <p className="text-sm text-gray-500 dark:text-darkText-500">
          You can manage your details here.
        </p>
      </div>

      {/* Profile Image */}
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="relative p-2">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img
              src={profileImage}
              alt="user"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative">
            <input
              accept="image/*"
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label
              htmlFor="fileInput"
              className="absolute right-0 bottom-1 flex items-center justify-center w-8 h-8 p-1 text-white bg-blue-500 rounded-full cursor-pointer group"
            >
              <FiEdit size={18} />
            </label>
            <button
              type="button"
              className="absolute left-0 bottom-1 flex items-center justify-center w-8 h-8 p-1 text-white bg-red-500 rounded-full cursor-pointer"
              onClick={() => setProfileImage("")}
            >
              <FiX size={18} />
            </button>
          </div>
        </div>

        {/* Name Fields */}
        <div className="flex flex-col w-full gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-darkText-300">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-darkText-300"
                placeholder="First Name"
                value="Vaibhav"
                readOnly
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-darkText-300">
                Last Name
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 dark:text-darkText-300"
                placeholder="Last Name"
                value="Patil"
                readOnly
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-darkText-300">
              Email
            </label>
            <div className="px-3 py-2 text-sm bg-gray-100 border border-gray-300 rounded-md dark:bg-darkBox-800 dark:border-darkBorder-700">
              vaibhavpatil00913@gmail.com
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-16">
      <h3 className="text-xl font-medium dark:text-darkText-400">
        Educational Details
      </h3>
      
      <div className="w-full text-sm">
        <label htmlFor="college" className="block mb-1 text-sm font-medium">
          College <sup className="text-red-500">*</sup>
        </label>
        <input
          id="college"
          placeholder="Search for your college"
          className="block w-full px-4 outline-none dark:bg-darkBox-800 py-2 border dark:border-darkBorder-700 round-border"
          type="text"
        />
      </div>
      
      <div className="w-full text-sm">
        <label htmlFor="degree" className="block text-sm font-medium dark:text-darkText-300 text-gray-700 mb-1.5">
          Degree <sup className="text-red-500">*</sup>
        </label>
        <select
          id="degree"
          className="block w-full px-4 py-2.5 border round-border dark:text-darkText-300 dark:border-zinc-700 outline-none placeholder:text-gray-500 dark:bg-zinc-800"
        >
          <option value="" disabled>
            Select a degree
          </option>
          {["Bachelor of Technology", "Master of Technology", "Bachelor of Engineering", "Master of Computer Applications", "Bachelor of Computer Applications", "Bachelor of Science", "Other"].map(degree => (
            <option key={degree} value={degree}>{degree}</option>
          ))}
        </select>
      </div>
      
      <div className="w-full text-sm">
        <label htmlFor="branch" className="block font-medium dark:text-darkText-300 text-gray-700 mb-1.5">
          Branch <sup className="text-red-500">*</sup>
        </label>
        <select
          id="branch"
          className="block w-full px-4 py-2.5 border round-border dark:text-darkText-300 dark:border-zinc-700 outline-none placeholder:text-gray-500 dark:bg-zinc-800"
        >
          <option value="" disabled>
            Select your branch
          </option>
          {["Computer Science", "Information Technology", "Electronics and Communication", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Chemical Engineering", "Software Engineering", "VLSI Design", "Data Science", "Artificial Intelligence", "Machine Learning", "Aerospace Engineering", "Biomedical Engineering", "Mining Engineering", "Human Resources", "Others"].map(branch => (
            <option key={branch} value={branch}>{branch}</option>
          ))}
        </select>
      </div>
      
      <div className="w-full text-sm">
        <label htmlFor="yearOfGraduation" className="block font-medium dark:text-darkText-300 text-gray-700 mb-1.5">
          Year of Graduation <sup className="text-red-500">*</sup>
        </label>
        <select
          id="yearOfGraduation"
          className="block w-full px-4 py-2.5 border round-border dark:text-darkText-300 dark:border-zinc-700 outline-none placeholder:text-gray-500 dark:bg-zinc-800"
        >
          <option value="" disabled>
            Select a year
          </option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
    {/* Update Button */}
    <div className="mt-6 text-right">
        <button className="px-6 py-2 text-sm text-white bg-blue-500 rounded-md">
          Update
        </button>
      </div>
    </div>
  );
}

export default BasicInfo;
