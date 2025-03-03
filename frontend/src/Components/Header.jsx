import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    // Apply dark mode on mount
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
    

    return (
        <header className="flex fixed top-0 left-0 px-4 md:px-2 border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 items-center z-50 justify-between w-full shadow-md">
            {/* Logo Section */}
            <a className="flex items-center gap-2 py-2 text-lg sm:ml-4" href="/">
                <img src="https://codolio.com/codolio_assets/codolio.svg" alt="Codolio" width="30" height="30" />
                <div>
                    <span className="font-bold text-black">Code</span>
                    <span className="font-bold text-blue-600">Minder</span>
                </div>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
                className="block md:hidden -mr-1"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                </svg>
            </button>

            {/* Navigation Links */}
            <nav
                className={`md:flex items-center justify-center gap-2 mr-2 hidden ${menuOpen ? "block" : "hidden"
                    }`}
            >
                <a className="px-2 py-1.5 text-sm font-medium text-black dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 rounded" href="/question-tracker">
                    Question Tracker
                </a>
                <a className="px-2 py-1.5 text-sm font-medium text-black dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 rounded" href="/event-tracker">
                    Event Tracker
                </a>
                <a className="px-2 py-1.5 text-sm font-medium text-black dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 rounded" href="/profile/Rohitmali9421">
                    Profile Tracker
                </a>
            </nav>

            {/* Profile & Theme Toggle */}
            <div className="flex items-center gap-2">
                {/* Theme Toggle (Dark/Light Mode) */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 hidden md:block rounded-full bg-gray-500 dark:bg-gray-800"
                >
                    {darkMode ? (
                        // Sun icon for light mode
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,88a40,40,0,1,1,40-40A40.05,40.05,0,0,1,128,168ZM128,40a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H136A8,8,0,0,1,128,40Zm48,88a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h16A8,8,0,0,1,176,128ZM128,216a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h16A8,8,0,0,1,128,216Zm-48-88a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H88A8,8,0,0,1,80,128ZM48,128a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H56A8,8,0,0,1,48,128Zm160,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H216A8,8,0,0,1,208,128Zm-80-80a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H136A8,8,0,0,1,128,48ZM80,208a8,8,0,0,1-8-8V184a8,8,0,0,1,16,0v16A8,8,0,0,1,80,208ZM176,208a8,8,0,0,1-8-8V184a8,8,0,0,1,16,0v16A8,8,0,0,1,176,208Z"></path>
                        </svg>
                    ) : (
                        // Moon icon for dark mode
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23Z"></path>
                        </svg>
                    )}
                </button>

                {/* Profile Picture */}
                <div className="relative">
                    <Link
                        to="/login"
                        className="py-1.5 font-[500] px-3 text-sm bg-blue-800 rounded-md text-white round-border"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
