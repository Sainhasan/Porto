import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50 px-4 py-3 flex justify-center flex-wrap gap-4 text-sm sm:text-base">
      <Link
        to="home"
        smooth={true}
        duration={100}
        spy={true}
        activeClass="underline"
        className="cursor-pointer text-gray-700 hover:text-blue-600"
      >
        Home
      </Link>
      <Link
        to="about"
        smooth={true}
        spy={true}
        duration={100}
        activeClass="underline"
        className="cursor-pointer text-gray-700 hover:text-blue-600"
      >
        About
      </Link>
      <Link
        to="skills"
        smooth={true}
        spy={true}
        duration={100}
        activeClass="underline"
        className="cursor-pointer text-gray-700 hover:text-blue-600"
      >
        Skills
      </Link>
      <Link
        to="projects"
        smooth={true}
        spy={true}
        duration={100}
        activeClass="underline"
        className="cursor-pointer text-gray-700 hover:text-blue-600"
      >
        Project
      </Link>
      <Link
        to="contact"
        smooth={true}
        spy={true}
        duration={100}
        activeClass="underline"
        className="cursor-pointer text-gray-700 hover:text-blue-600"
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
