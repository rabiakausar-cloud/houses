import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";

export const Base = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in based on token
    const token = localStorage.getItem("access");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Remove tokens
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      {/* Header */}
      <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="flex flex-row justify-between items-center h-[60px] px-6 md:px-16">
          {/* Logo */}
          <div className="flex items-center">
            <i className="fa fa-home pr-2 text-2xl" style={{ color: "#fc640a" }}></i>
            <h1 className="font-bold text-xl" style={{ color: "#fc640a" }}>Relasto</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-around w-2/5">
            <Link to="/" className="hover:text-orange-500">Home</Link>
            <Link to="/listing" className="hover:text-orange-500">Listing</Link>
            <Link to="/agents" className="hover:text-orange-500">Agents</Link>
            <Link to="/property" className="hover:text-orange-500">Property</Link>
            <Link to="/blog" className="hover:text-orange-500">Blog</Link>
          </nav>

          {/* Search + Login/Logout */}
          <div className="hidden md:flex items-center">
            <i className="fa fa-search mr-2"></i>
            <input
              type="search"
              placeholder="Search"
              className="w-[100px] focus:outline-0 border-b border-gray-300 text-sm"
            />
            {!isLoggedIn && (
              <Link to="/login">
                <button className="bg-black text-white text-sm px-4 py-2 rounded-lg ml-3 hover:bg-orange-600 transition-all">
                  Login
                </button>
              </Link>
            )}
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="bg-black text-white text-sm px-4 py-2 rounded-lg ml-3 hover:bg-orange-600 transition-all"
              >
                Logout
              </button>
            )}
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-2xl text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg flex flex-col items-start px-6 py-4 space-y-4">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/listing" onClick={() => setMenuOpen(false)}>Listing</Link>
            <Link to="/agents" onClick={() => setMenuOpen(false)}>Agents</Link>
            <Link to="/property" onClick={() => setMenuOpen(false)}>Property</Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>

            <div className="flex items-center gap-2">
              <i className="fa fa-search"></i>
              <input
                type="search"
                placeholder="Search"
                className="w-[150px] focus:outline-0 border-b border-gray-300 text-sm"
              />
            </div>

            {!isLoggedIn && (
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <button className="bg-black text-white text-sm px-6 py-2 rounded-lg hover:bg-orange-600 transition-all">
                  Login
                </button>
              </Link>
            )}
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="bg-black text-white text-sm px-6 py-2 rounded-lg hover:bg-orange-600 transition-all"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </header>

      {/* Page Outlet */}
      <div className="pt-[60px]">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="flex flex-row justify-evenly py-10 flex-wrap bg-gray-100 mt-10">
        <div className="flex flex-col justify-evenly">
          <div className="flex items-center">
            <i className="fa fa-home pr-2 text-2xl" style={{ color: "#fc640a" }}></i>
            <h1 className="font-bold text-xl" style={{ color: "#fc640a" }}>Relasto</h1>
          </div>
          <p>7th Street 40 E 7th St, New York, NY 10003, USA</p>
          <p>+(123)4533636</p>
          <p>info@gmail.com</p>
          <ul className="flex flex-row justify-start gap-10">
            <li><i className="fa-brands fa-facebook text-orange-500"></i></li>
            <li><i className="fa-brands fa-square-instagram text-orange-500"></i></li>
            <li><i className="fa-brands fa-twitter text-orange-500"></i></li>
            <li><i className="fa-brands fa-linkedin text-orange-500"></i></li>
            <li><i className="fa-brands fa-youtube text-orange-500"></i></li>
          </ul>
        </div>
        <div>
          <h1>Features</h1>
          <ul className="decoration-0">
            <li>Home V1</li>
            <li>Home V2</li>
            <li>About</li>
            <li>Contact</li>
            <li>Search</li>
          </ul>
        </div>
        <div>
          <h1>Information</h1>
          <ul className="decoration-0">
            <li>Listing V1</li>
            <li>Listing V2</li>
            <li>Property Details</li>
            <li>Agents</li>
            <li>Agent Profile</li>
          </ul>
        </div>
        <div>
          <h1>Documentation</h1>
          <ul className="decoration-0">
            <li>Blog</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>License</li>
          </ul>
        </div>
        <div>
          <h1>Others</h1>
          <ul className="decoration-0">
            {!isLoggedIn && <li>Login</li>}
            <li>Enter OTP</li>
            <li>New Password</li>
            <li>Reset Password</li>
            <li>Create Account</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
