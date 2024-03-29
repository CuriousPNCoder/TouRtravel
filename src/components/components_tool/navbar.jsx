import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolling ? " bg-amber-500 shadow-md" : "bg-transparent"
      } transition duration-300 ease-in-out`}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <a
          href="/"
          className={`${
            scrolling ? "text-gray-800" : "text-white"
          } text-xl font-bold`}>
          TouRtravel
        </a>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`${
              mobileMenuOpen ? "text-gray-800" : "text-white"
            } focus:outline-none`}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 mt-4 md:mt-0`}>
          <li>
            <a
              href="#"
              className={`${
                scrolling ? "text-gray-800" : "text-white"
              } hover:text-gray-600`}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                scrolling ? "text-gray-800" : "text-white"
              } hover:text-gray-600`}>
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                scrolling ? "text-gray-800" : "text-white"
              } hover:text-gray-600`}>
              Destinations
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                scrolling ? "text-gray-800" : "text-white"
              } hover:text-gray-600`}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
