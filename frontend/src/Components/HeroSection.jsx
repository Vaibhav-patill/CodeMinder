import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center text-center pt-16 px-4 space-y-6">
            <span className="sr-only">Track, analyze & share</span>

            {/* Heading with Animation */}
            <motion.h1 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-snug"
            >
                Elevate,{" "}
                <motion.span 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="text-blue-600"
                >
                    Optimize
                </motion.span>{" "}
                & Conquer
            </motion.h1>

            {/* Subtitle with Animation */}
            <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-lg sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl"
            >
                <span className="text-black dark:text-white font-semibold">Code</span>
                <span className="text-blue-600 font-semibold">Minder</span> : Your Ultimate Companion in the Coding Odyssey!
            </motion.p>

            {/* Buttons with Hover Effects */}
            <div className="flex flex-wrap justify-center gap-4">
                <motion.a 
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.2 }}
                    href="/question-tracker"
                    className="px-6 py-3 text-lg font-medium text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                    Question Tracker
                </motion.a>
                
                <motion.a 
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.2 }}
                    href="/profile/Rohitmali9421"
                    className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
                >
                    Profile Tracker
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </motion.a>
            </div>

            {/* Image with Hover Zoom Effect */}
            <motion.a 
                whileHover={{ scale: 1.02 }} 
                transition={{ duration: 0.3 }}
                href="/profile/siddharthsingh"
            >
                <motion.img
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    alt="Codolio Landing"
                    fetchPriority="high"
                    width="800"
                    height="450"
                    decoding="async"
                    className="w-full max-w-3xl rounded-2xl border border-gray-300 dark:border-gray-700 shadow-lg dark:shadow-gray-800"
                    src="https://codolio.com/landing/landing_light.png"
                />
            </motion.a>
        </section>
    );
};

export default HeroSection;
