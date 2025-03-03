import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../ContextApi/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [userName, setUserName] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  let {signin,logout} = useAuth()

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
  signin(null)
  logout()
  navigate('/')
    setUserName(null);
    setFormData({ email: "", password: "" });
    setDropdownOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    signin(formData)
    // try {
    //   const response = await fetch("http://localhost:3000/api/users/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    //   const data = await response.json();
    //   localStorage.setItem("token", data.token);
    //   localStorage.setItem("user", JSON.stringify(data.user));

    //   setUserName(data.user.full_name);
    //   navigate("/");
    // } catch (error) {
    //   console.error("Login failed:", error);
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-[#01411c]">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Log in to continue to Agri Shop!
        </p>

        {userName ? (
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              className="mt-4 text-sm text-center text-[#01411c] font-medium"
              onClick={toggleDropdown}
            >
              {userName}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-xl z-10">
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#01411c] focus:border-[#01411c] sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#01411c] focus:border-[#01411c] sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#01411c] text-white font-bold rounded-md hover:bg-[#005f40] focus:outline-none focus:ring-2 focus:ring-[#005f40] focus:ring-offset-2"
            >
              Log In
            </button>
          </form>
        )}
        {!userName && (
          <p className="mt-4 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <a href="/signup" className="text-[#01411c] hover:underline font-medium">
              Sign Up
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
