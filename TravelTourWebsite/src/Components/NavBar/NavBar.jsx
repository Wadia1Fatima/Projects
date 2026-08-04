import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`transition-all duration-300 ${
        isScrolled
            ? "bg-black shadow-[0_12px_35px_rgba(0,0,0,0.5)] py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          <Link to="/">
            <h1
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              Travel<span className="text-red-500">Partner</span>
            </h1>
          </Link>

          <div className="flex items-center gap-5">
            <nav className="hidden md:flex items-center gap-7">
              <ul
                className={`flex items-center font-semibold text-xl gap-7 transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                <Link to="/">
                  <li className="hover:text-red-500 transition-colors">
                    Home
                  </li>
                </Link>

                <Link to="/about">
                  <li className="hover:text-red-500 transition-colors">
                    About Us
                  </li>
                </Link>

                <Link to="/tours">
                  <li className="hover:text-red-500 transition-colors">
                    Tours
                  </li>
                </Link>

                <Link to="/contact">
                  <li className="hover:text-red-500 transition-colors">
                    Contact
                  </li>
                </Link>
              </ul>

              <button className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-black transition-all">
                Book Now
              </button>
            </nav>

            <HiMenuAlt1
              onClick={toggleMenu}
              size={30}
              className={`cursor-pointer md:hidden transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-white"
              }`}
            />
          </div>
        </div>

        <ResponsiveMenu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      </div>
    </header>
  );
};

export default NavBar;