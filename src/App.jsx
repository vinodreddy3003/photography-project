import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import PreWedding from "./components/PreWedding";
import Modeling from "./components/Modeling";
import Birthday from "./components/Birthday";
import Wedding from "./components/Wedding";
import Reception from "./components/Reception";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
// Import the ScrollToTop component

function App() {
  return (
    <>
      <Navbar />
      < ScrollToTop /> {/* Place the ScrollToTop component here */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/prewedding" element={<PreWedding />} />
          <Route path="/modeling" element={<Modeling />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/reception" element={<Reception />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
