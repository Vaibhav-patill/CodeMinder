import React, { useState } from 'react'
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const ProfileCardLeftSide = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-4 w-full max-w-xs md:max-w-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        fill="currentColor"
        className="w-6 h-6 mt-9"
      >
        <path d="M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h80a8,8,0,0,1,0,16H48V208H208V128a8,8,0,0,1,16,0Z"></path>
      </svg>
      
      <div className="flex flex-col justify-center items-center flex-1 overflow-y-scroll no-scrollbar gap-1">
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocJXriI3IC7Uid_pGGNTsU8QvNDUGVCXQdej7fzwO3vq3na_Kg=s96-c"
          alt="YoZzXkbH"
          className="object-cover w-[140px] h-[140px] mx-auto overflow-hidden rounded-full aspect-square"
        />
        
        <h3 className="text-xl font-semibold md:text-2xl">Vaibhav Patil</h3>
        <div className="flex items-center gap-1">
          <span className="text-xs font-semibold text-blue-500">@YoZzXkbH</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="text-green-500">
            <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Z"></path>
          </svg>
        </div>
      </div>
      
      <div className="flex flex-col gap-2 my-2">
        <div className="w-full text-sm flex justify-between">
          <span>Last Refresh:</span>
          <span className="font-[450]">19 Mar 2025</span>
        </div>
        <div className="w-full text-sm flex justify-between">
          <span>Profile Views:</span>
          <span className="font-[450]">0</span>
        </div>
      </div>
      
      <button
        className="w-full py-2 text-sm font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-md hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        Problem Solving Stats
      </button>

      {isOpen && (
        <div className="flex flex-col gap-2 mt-2 w-full">
          <a href="https://leetcode.com" className="flex items-center gap-2 text-sm text-gray-800">
            <SiLeetcode className="w-4 h-4" /> LeetCode
          </a>
          <a href="https://www.geeksforgeeks.org" className="flex items-center gap-2 text-sm text-gray-800">
            <SiGeeksforgeeks className="text-[#008F3C] w-6 h-6" /> GeeksForGeeks
          </a>
        </div>
      )}
    </div>
  )
}

export default ProfileCardLeftSide
