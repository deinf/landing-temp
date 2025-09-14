
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Overview", path: "/" },
    { name: "dApps", path: "/dapps" },
    { name: "Tokenomics & Roadmap", path: "/tokenomics" },
    { name: "Business Model", path: "/business-model" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
       
        <div className="flex items-center gap-2">
          <img src="https://cdn.imweb.me/thumbnail/20250911/80e43f494dee2.png" alt="Logo" className="h-8 w-8" />
          <span
            className={`font-bold text-lg transition-colors duration-300 ${
              scrolled ? "text-blue-600" : "text-white"
            }`}
          >
            Babyboom
          </span>
        </div>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-200"
                } ${isActive ? "font-semibold" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className={`md:hidden flex flex-col items-center space-y-4 py-6 transition-all duration-300 ${
            scrolled ? "bg-white/95" : "bg-black/80"
          }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-lg ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-300"
                } ${isActive ? "font-semibold" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
