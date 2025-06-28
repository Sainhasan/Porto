import AboutMe from "./Components/AboutMe.jsx";
import Skills from "./Components/Skills.jsx";
import ProjectList from "./Components/ProjectList.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Contact from "./Components/Contact.jsx";
import { useState, useEffect } from "react";

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setReady(true), 10);

    return () => clearTimeout(timer);
  }, []);
  if (!ready) return null;

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 text-gray-800">
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Halo Saya Hasan
          </h1>
          <p className="text-lg md:text-xl max-w-xl text-gray-700 mb-6">
            Saya sedang belajar{" "}
            <strong className="text-blue-700">React + Tailwind</strong> karena
            pengen banget jadi Web Engineer.
          </p>
        </section>
        <section id="about" className="px-6 py-16">
          <AboutMe />
        </section>
        <section id="skills" className="px-6 py-16">
          <Skills />
        </section>
        <section id="projects" className="px-6 py-16">
          <ProjectList />
        </section>
        <section id="contact" className="mt-16 px-6 py-16 min-h-screen flex justify-center items-center">
        <Contact />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
