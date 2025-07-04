import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="w-full bg-white text-black mt-4 mb-2 rounded-2xl">
      <div className="container text-center  py-20">
        <h1 className="text-6xl font-bold text-red-400 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-red-700 mb-6">Page Not Found</h2>
        <p className="text-lg text-red-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

