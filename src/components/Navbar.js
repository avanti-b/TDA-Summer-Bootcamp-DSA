import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Join Us", path: "/recruitment" },
    { name: "Gallery", path: "/gallery" },      
    { name: "Graffiti Wall", path: "/graffiti" }, 
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-primary text-accent flex justify-between items-center p-4 shadow-md relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/tda-logo.png" alt="Logo" className="h-8 w-8" />
        <span className="text-xl font-bold">The Data Alchemists</span>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`hover:text-white transition ${
              location.pathname === item.path ? "font-bold underline" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}

        {/* Committees dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className={`hover:text-white transition ${
              location.pathname.includes("/committees")
                ? "font-bold underline"
                : ""
            }`}
          >
            Committees ▾
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-primary text-accent rounded shadow-lg z-50">
              <Link
                to="/committees/board"
                className="block px-4 py-2 hover:bg-accent hover:text-primary transition"
                onClick={() => setOpen(false)}
              >
                Board
              </Link>
              <Link
                to="/committees/mancom"
                className="block px-4 py-2 hover:bg-accent hover:text-primary transition"
                onClick={() => setOpen(false)}
              >
                Mancom
              </Link>
              <Link
                to="/committees/workcom"
                className="block px-4 py-2 hover:bg-accent hover:text-primary transition"
                onClick={() => setOpen(false)}
              >
                Workcom
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
