import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo1.png";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../ContextApi/AuthContext";

const NAV_LINKS = [
  { key: 1, label: "Home", href: "/" },
  { key: 4, label: "Products", href: "/productPage/All" },
  { key: 2, label: "Bidding", href: "/Bidding" },
  { key: 5, label: "About us", href: "/aboutus" },
  { key: 3, label: "Services", href: "/services" },
];

const Navbar = () => {
  let {logout} = useAuth()
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const storedUser = localStorage.getItem("loggedInUser");
 
  useEffect(()=>{
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  },[storedUser])
  // Close dropdown when clicking outside
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown-menu")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
   
    logout()
    setUser(null);
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className="relative flex justify-between items-center w-full px-6 py-3 backdrop-blur-lg bg-transparent border-none">
        {/* Logo and Heading */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={logo} alt="logo" className="w-12 h-12 cursor-pointer" />
          </Link>
          <Link to="/" className="text-lg font-bold text-gray-800 cursor-pointer">
            Agri Shop
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex gap-6 items-center ml-8">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="text-gray-800 hover:underline cursor-pointer">
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden lg:flex items-center space-x-4 ml-auto">
          <Link to="/cart" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
            <FaShoppingCart className="text-2xl" />
          </Link>

          {user ? (
            <div className="relative">
              <button
                type="button"
                className="px-4 py-2 text-white bg-green-700 hover:bg-green-800 rounded-full cursor-pointer"
                onClick={toggleDropdown}
              >
                {user.name}
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-xl dropdown-menu">
                  <button
                    onClick={handleLogout}
                    className="block px-4 cursor-pointer py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/signup" className="px-4 py-2 text-white bg-green-700 hover:bg-green-800 rounded-full cursor-pointer">
                Sign Up
              </Link>
              <Link to="/login" className="px-4 py-2 text-white bg-green-700 hover:bg-green-800 rounded-full cursor-pointer">
                Login
              </Link>
            </>
          )}
        </div>

        {/* Menu button for small screens */}
        <div className="flex lg:hidden items-center space-x-2">
          <button className="px-4 py-2 text-white bg-green-700 hover:bg-green-800 cursor-pointer rounded-full" onClick={toggleSidebar}>
            Menu
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white border-r transform transition-transform w-64 z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <button className="text-gray-800 font-bold text-xl cursor-pointer" onClick={toggleSidebar}>
            ×
          </button>
          <span className="font-bold text-xl">Menu</span>
        </div>
        <ul className="mt-6 space-y-4 px-4">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link to={link.href} className="text-gray-800 hover:underline cursor-pointer">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sidebar Authentication Buttons */}
        <div className="mt-6 px-4">
          <Link to="/cart" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
            <FaShoppingCart className="text-2xl" />
          </Link>

          {user ? (
            <div className="relative">
              <button
                type="button"
                className="w-full px-4 py-2 cursor-pointer text-white bg-green-700 hover:bg-green-800 rounded-full block mt-2"
                onClick={toggleDropdown}
              >
                {user.name}
              </button>

              {dropdownOpen && (
                <div className="absolute  left-0 mt-2 py-2 w-32 bg-white rounded-md shadow-xl z-50 dropdown-menu">
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/signup" className="w-full px-4 py-2 text-white bg-green-700 hover:bg-green-800 rounded-full block mt-2 cursor-pointer">
                Sign Up
              </Link>
              <Link to="/login" className="w-full px-4 py-2 text-white bg-green-700 hover:bg-green-800 rounded-full block mt-2 cursor-pointer">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
