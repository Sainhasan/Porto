import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AboutPage from "../Pages/AboutPage";
import ProjectPage from "../Pages/ProjectPage";
import Home from "../Pages/Home";
import SkillPage from "../Pages/SkillPage";
import ContactPage from "../Pages/ContactPage";

const pageTransition = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
  transition: { duration: 0.6 },
};

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div {...pageTransition}>
              <AboutPage />
            </motion.div>
          }
        />
        <Route
          path="/skills"
          element={
            <motion.div {...pageTransition}>
              <SkillPage />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div {...pageTransition}>
              <ProjectPage />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div {...pageTransition}>
              <ContactPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
