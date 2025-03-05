import Accounts from '@/Components/Accounts';
import BasicInfo from '@/Components/BasicInfo';
import Socials from '@/Components/Socials';
import { Outdent } from 'lucide-react';
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

function ProfileEdit() {
  const [isOpen, setIsOpen] = useState(false);
   const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted", formData);
  };
  return (
    <div className='pt-20 flex flex-row'>
      <div className="bg-white dark:bg-darkBox-800 lg:dark:bg-darkBox-900 dark:border-darkBorder-800 border lg:p-4 p-2 rounded-lg lg:min-w-[300px]">
      <div className="flex justify-end lg:hidden">
        <button className="dark:text-darkText-400" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </button>
      </div>
      <div className={`flex-col w-full gap-2 lg:flex ${isOpen ? 'flex' : 'hidden'}`}>
        {[
          {path:"basicinfo", label: "Basic Info", icon: "M230.92,212c-15.23-26.33..." },
          { path:"socials",label: "Socials", icon: "M69.12,94.15,28.5,128l40.62..." },
          { path:"platform",label: "Platform", icon: "M104,40H56A16,16,0,0,0,40..." },
          { path:"accounts",label: "Accounts", icon: "M184,128a246.64,246.64,0..." },
        ].map((item, index) => (
          <Link to={item.path}
            key={index}
            className="text-gray-500 dark:text-darkText-400 flex font-[500] dark:border-darkBorder-800 hover:text-black hover:outline hover:outline-1 active:outline-none focus:outline-none hover:outline-gray-200 transition-colors duration-200 rounded-lg gap-4 p-3 hover:bg-gray-50 dark:hover:bg-darkBox-800 dark:outline-darkBorder-800"
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d={item.icon}></path>
              </svg>
            </div>
            <div>{item.label}</div>
          </Link>
        ))}
      </div>
    </div>
    {/* <Socials/> */}
    {/* <Accounts/> */}
    <Outlet/>
    </div>
  )
}

export default ProfileEdit
