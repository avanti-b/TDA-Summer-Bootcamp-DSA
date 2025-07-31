import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Committees from "./pages/Committees";
import Events from "./pages/Events";
import Recruitment from "./pages/Recruitment";
import Sponsors from "./pages/Sponsors";
import Gallery from "./pages/Gallery";
import GraffitiWall from "./pages/GraffitiWall";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import ChatBot from "./components/Chatbot";
import Navbar from "./components/Navbar";

import Board from "./pages/Board";
import Mancom from "./pages/Mancom";
import Workcom from "./pages/Workcom";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-primary text-white">
        {/* Navbar */}
        <Navbar />


        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/committees/board" element={<Board />} />
            <Route path="/committees/mancom" element={<Mancom />} />
            <Route path="/committees/workcom" element={<Workcom />} />
            <Route path="/events" element={<Events />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/graffiti" element={<GraffitiWall />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Floating ChatBot */}
        <ChatBot />

        <footer className="bg-primary text-accent text-center p-4">
          © {new Date().getFullYear()} The Data Alchemists, MIT Manipal
        </footer>
      </div>
    </Router>
  );
}
