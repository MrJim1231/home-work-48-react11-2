import { Link, useLocation } from "react-router-dom";
import React from "react";

const Header: React.FC = () => {
  const location = useLocation();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-md font-medium transition-colors ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-xl font-semibold text-blue-600">
          MyTailwindApp
        </Link>
        <div className="flex gap-3">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
