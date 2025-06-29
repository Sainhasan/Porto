import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer position="top-center" />
      <div className="bg-gray-100 text-gray-800">
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
