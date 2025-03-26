import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-white px-4 py-6 mx-auto space-y-4 overflow-hidden sm:px-6 lg:px-8 shadow-lg border-t">
      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center space-x-6">
        <a href="/faq" className="text-gray-600 hover:text-gray-900 transition duration-300">
          FAQ
        </a>
        <a href="/support" className="text-gray-600 hover:text-gray-900 transition duration-300">
          Support
        </a>
        <a href="/privacy-policy" className="text-gray-600 hover:text-gray-900 transition duration-300">
          Privacy
        </a>
        <a href="/timeline" className="text-gray-600 hover:text-gray-900 transition duration-300">
          Timeline
        </a>
        <a href="/terms-and-conditions" className="text-gray-600 hover:text-gray-900 transition duration-300">
          Terms
        </a>
      </nav>

      {/* Social Media Links */}
      <div className="flex justify-center mt-6 space-x-6">
        <a href="https://www.linkedin.com/company/codolio/" className="text-gray-600 hover:text-blue-600 transition duration-300">
          <FaLinkedin size={38} />
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-400 transition duration-300">
          <FaTwitter size={38} />
        </a>
        <a href="https://www.instagram.com/codolio_?igsh=ZWFmMzlrcXQyMmFr&utm_source=qr" className="text-gray-600 hover:text-pink-500 transition duration-300">
          <FaInstagram size={38} />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-center text-gray-500 text-sm">
        © 2025 CodeMinder, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
