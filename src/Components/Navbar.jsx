import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 py-3 flex justify-center flex-wrap items-center gap-3 sm:gap-6 text-sm sm:text-base ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Link to="/" className="cursor-pointer text-gray-700 hover:text-blue-600">
        Home
      </Link>
      <Link to="/about" className="cursor-pointer text-gray-700 hover:text-blue-600">
        About
      </Link>
      <Link to="/skills" className="cursor-pointer text-gray-700 hover:text-blue-600">
        Skills
      </Link>
      <Link to="/projects" className="cursor-pointer text-gray-700 hover:text-blue-600">
        Project
      </Link>
      <Link to="/contact" className="cursor-pointer text-gray-700 hover:text-blue-600">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
