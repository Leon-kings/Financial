/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  AccountCircle as AccountIcon,
  Dashboard as DashboardIcon,
  ExitToApp as LogoutIcon,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// Constants
const socialLinks = [
  { icon: <FacebookIcon className="text-blue-600" />, name: "Facebook" },
  { icon: <TwitterIcon className="text-blue-600" />, name: "Twitter" },
  { icon: <LinkedInIcon className="text-blue-600" />, name: "LinkedIn" },
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/89292" },
  { name: "Services", path: "/72820" },
  { name: "Contact", path: "/89201" },
];

const dropdownItems = [
  { name: "Projects", path: "/76282" },
  { name: "Features", path: "/13262" },
  { name: "Team Member", path: "/71810" },
  { name: "Testimonial", path: "/63720" },
];

// Components
const LoginForm = ({
  formData,
  handleInputChange,
  handleLogin,
  setIsLoginOpen,
  setIsRegisterOpen,
  switchToRegister,
}) => (
  <motion.div
    initial={{ y: "100vh", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: "100vh", opacity: 0 }}
    transition={{ type: "spring", damping: 20, stiffness: 300 }}
    className="max-w-md mx-auto p-8 rounded-2xl shadow-xl bg-gradient-to-br from-indigo-50 to-cyan-50"
  >
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, type: "spring" }}
      className="text-center mb-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center"
      >
        <AccountIcon className="h-10 w-10 text-white" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600"
      >
        Welcome Back
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-gray-500 mt-2"
      >
        Sign in to your account
      </motion.p>
    </motion.div>

    <form onSubmit={handleLogin} className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-4"
      >
        <div className="relative">
          <motion.label
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            Email
          </motion.label>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="relative"
          >
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 pl-10"
              required
              placeholder="your@email.com"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <EmailIcon className="h-5 w-5 text-gray-400" />
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <motion.label
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="password"
          >
            Password
          </motion.label>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 pl-10"
              required
              placeholder="••••••••"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-indigo-700 hover:to-cyan-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          Sign In
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="text-center mt-6"
      >
        <p className="text-gray-600">
          Don't have an account?{" "}
          <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
            onClick={switchToRegister}
          >
            Register here
          </button>
        </p>
      </motion.div>
    </form>
  </motion.div>
);

const RegisterForm = ({
  formData,
  handleInputChange,
  handleRegister,
  setIsLoginOpen,
  setIsRegisterOpen,
  switchToLogin,
}) => (
  <motion.div
    initial={{ y: "100vh", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: "100vh", opacity: 0 }}
    transition={{ type: "spring", damping: 20, stiffness: 300 }}
    className="max-w-md mx-auto p-8 rounded-2xl shadow-xl bg-gradient-to-br from-purple-50 to-blue-50"
  >
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, type: "spring" }}
      className="text-center mb-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
          />
        </svg>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"
      >
        Create Account
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-gray-500 mt-2"
      >
        Join our community today
      </motion.p>
    </motion.div>

    <form onSubmit={handleRegister} className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-4"
      >
        <div className="relative">
          <motion.label
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="name"
          >
            Full Name
          </motion.label>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="relative"
          >
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 pl-10"
              required
              placeholder="John Doe"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <AccountIcon className="h-5 w-5 text-gray-400" />
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <motion.label
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            Email
          </motion.label>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 pl-10"
              required
              placeholder="your@email.com"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <EmailIcon className="h-5 w-5 text-gray-400" />
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <motion.label
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="password"
          >
            Password
          </motion.label>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="relative"
          >
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 pl-10"
              required
              placeholder="••••••••"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      >
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          Register Now
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="text-center"
      >
        <p className="text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            className="font-medium text-purple-600 hover:text-purple-800 transition-colors duration-200"
            onClick={switchToLogin}
          >
            Login here
          </button>
        </p>
      </motion.div>
    </form>
  </motion.div>
);

const AuthModal = ({ isOpen, onClose, children }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 bg-black overflow-y-auto scrollbar bg-opacity-50 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg w-full max-w-md p-6"
          initial={{ y: -50, scale: 0.95 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: -50, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 px-4 py-2 rounded-lg shadow-md transition-colors"
          >
            <CloseIcon />
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const MobileMenu = ({
  isMenuOpen,
  isDropdownOpen,
  isLoggedIn,
  handleNavClick,
  setIsDropdownOpen,
  setIsMenuOpen,
  setIsLoginOpen,
  handleLogout,
  userStatus,
}) => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    if (userStatus === 'admin') {
      navigate('/Dash28739'); // Admin dashboard
    } else if (userStatus === 'user') {
      navigate('/user-dashboard'); // User dashboard
    }
    setIsMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="lg:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col space-y-3 px-2 pt-2 pb-4">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <button
                  className={`${
                    item.name === "Home"
                      ? "text-blue-600 w-full font-medium"
                      : "text-gray-600 w-full hover:text-blue-600"
                  } px-3 py-2`}
                  onClick={() => handleNavClick(item.name)}
                >
                  {item.name}
                </button>
              </Link>
            ))}

            <div className="relative">
              <button
                className="text-gray-600 hover:text-blue-600 px-3 py-2 flex items-center justify-between w-full"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Pages
                <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
                  <ExpandMoreIcon />
                </motion.div>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="pl-4 mt-2 space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {dropdownItems.map((item) => (
                      <Link key={item.name} to={item.path}>
                        <button
                          className="block w-full px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => {
                            handleNavClick(item.name);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {item.name}
                        </button>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {isLoggedIn ? (
              <div className="flex flex-col space-y-2 pt-2 px-3">
                <button
                  onClick={handleDashboardClick}
                  className="flex items-center text-gray-600 hover:text-blue-600 py-2"
                >
                  <DashboardIcon className="mr-2" />
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-600 hover:text-blue-600 py-2"
                >
                  <LogoutIcon className="mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2 pt-2 px-3">
                <button
                  onClick={() => {
                    setIsLoginOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center text-gray-600 hover:text-blue-600 py-2"
                >
                  <AccountIcon className="mr-2" />
                  Login
                </button>
              </div>
            )}

            <div className="flex space-x-3 pt-2 px-3">
              {socialLinks.map((social, index) => (
                <Link to={"/"} key={index}>
                  <button
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                    onClick={() => toast.info(`Redirecting to ${social.name}`)}
                  >
                    {social.icon}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DesktopNav = ({
  isDropdownOpen,
  isLoggedIn,
  handleNavClick,
  setIsDropdownOpen,
  toggleDropdown,
  setIsLoginOpen,
  handleLogout,
  userStatus,
}) => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    if (userStatus === 'admin') {
      navigate('/Dash28739'); // Admin dashboard
    } else if (userStatus === 'user') {
      navigate('/user-dashboard'); // User dashboard
    }
  };

  return (
    <div className="hidden lg:flex items-center space-x-8">
      <div className="flex space-x-8">
        {navItems.map((item) => (
          <Link to={item.path} key={item.name}>
            <motion.button
              className={`${
                item.name === "Home"
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick(item.name)}
            >
              {item.name}
            </motion.button>
          </Link>
        ))}

        <div className="relative">
          <motion.button
            className="text-gray-600 hover:text-blue-600 flex items-center"
            onClick={toggleDropdown}
            whileHover={{ scale: 1.05 }}
          >
            Pages
            <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
              <ExpandMoreIcon />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {dropdownItems.map((item) => (
                  <Link to={item.path} key={item.name}>
                    <button
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        handleNavClick(item.name);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {item.name}
                    </button>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex space-x-3 ml-4">
        {socialLinks.map((social, index) => (
          <Link to={"/"} key={index}>
            <motion.button
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
              whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
              onClick={() => toast.info(`Redirecting to ${social.name}`)}
            >
              {social.icon}
            </motion.button>
          </Link>
        ))}

        {isLoggedIn ? (
          <div className="flex items-center space-x-3 ml-4">
            <motion.button
              onClick={handleDashboardClick}
              className="flex items-center text-gray-600 hover:text-blue-600"
              whileHover={{ scale: 1.05 }}
            >
              <DashboardIcon className="mr-1" />
              Dashboard
            </motion.button>
            <motion.button
              onClick={handleLogout}
              className="flex items-center text-gray-600 hover:text-blue-600"
              whileHover={{ scale: 1.05 }}
            >
              <LogoutIcon className="mr-1" />
              Logout
            </motion.button>
          </div>
        ) : (
          <div className="flex items-center space-x-3 ml-4">
            <motion.button
              onClick={() => setIsLoginOpen(true)}
              className="flex items-center text-gray-600 hover:text-blue-600"
              whileHover={{ scale: 1.05 }}
            >
              <AccountIcon className="mr-1" />
              Login
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Component
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userStatus, setUserStatus] = useState(null); // 'admin' or 'user'
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  // Check auth status on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const status = localStorage.getItem("status");

    if (token) {
      setIsLoggedIn(true);
      setUserStatus(status || 'user'); // Default to 'user' if status not set
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNavClick = (item) => {
    toast.info(`Navigating to ${item}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      // Mock API response - replace with your actual API call
      const mockResponse = {
        data: {
          token: "mock-token-123",
          email: formData.email,
          status: formData.email.includes("admin") ? "admin" : "user", // Simple mock logic for demo
        }
      };
      
      // In a real app, you would use:
      // const response = await axios.post("https://your-api-endpoint.com/login", {
      //   email: formData.email,
      //   password: formData.password,
      // });

      localStorage.setItem("token", mockResponse.data.token);
      localStorage.setItem("email", mockResponse.data.email);
      localStorage.setItem("status", mockResponse.data.status);
      setIsLoggedIn(true);
      setUserStatus(mockResponse.data.status);
      setIsLoginOpen(false);
      toast.success("Login successful!");

      // Redirect to appropriate dashboard after login
      if (mockResponse.data.status === 'admin') {
        navigate('/Dash28739');
      } else {
        navigate('/user-dashboard');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      // Mock API response - replace with your actual API call
      const mockResponse = {
        data: {
          message: "Registration successful",
        }
      };
      
      // In a real app, you would use:
      // const response = await axios.post("https://your-api-endpoint.com/register", {
      //   name: formData.name,
      //   email: formData.email,
      //   password: formData.password,
      // });

      toast.success("Registration successful! Please login");
      setIsRegisterOpen(false);
      setIsLoginOpen(true);
      setFormData({ email: "", password: "", name: "" }); // Clear form
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("status");
    setIsLoggedIn(false);
    setUserStatus(null);
    toast.success("Logged out successfully");
    navigate("/");
  };

  const switchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const switchToLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <div className="w-full fixed top-0 mb-6 text-black left-0 z-50">
      {/* Main Navbar */}
      <motion.nav
        className="bg-white shadow-sm w-full mb-6 px-4 lg:px-5 py-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to={"/"}
            className="text-2xl font-bold text-blue-600"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick("Home")}
          >
            Finanza
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>

          <DesktopNav
            isDropdownOpen={isDropdownOpen}
            isLoggedIn={isLoggedIn}
            handleNavClick={handleNavClick}
            toggleDropdown={toggleDropdown}
            setIsLoginOpen={setIsLoginOpen}
            handleLogout={handleLogout}
            userStatus={userStatus}
          />
        </div>

        <MobileMenu
          isMenuOpen={isMenuOpen}
          isDropdownOpen={isDropdownOpen}
          isLoggedIn={isLoggedIn}
          handleNavClick={handleNavClick}
          setIsDropdownOpen={setIsDropdownOpen}
          setIsMenuOpen={setIsMenuOpen}
          setIsLoginOpen={setIsLoginOpen}
          handleLogout={handleLogout}
          userStatus={userStatus}
        />
      </motion.nav>

      {/* Auth Modals */}
      <AuthModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <LoginForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleLogin={handleLogin}
          setIsLoginOpen={setIsLoginOpen}
          setIsRegisterOpen={setIsRegisterOpen}
          switchToRegister={switchToRegister}
        />
      </AuthModal>

      <AuthModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      >
        <RegisterForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleRegister={handleRegister}
          setIsLoginOpen={setIsLoginOpen}
          setIsRegisterOpen={setIsRegisterOpen}
          switchToLogin={switchToLogin}
        />
      </AuthModal>
    </div>
  );
};