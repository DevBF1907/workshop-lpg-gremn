import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";


const navLinks = [
  { to: "/", label: "Início" },
  { to: "/inscricao", label: "Inscrição" },
  { to: "/sobre", label: "Sobre" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading font-bold text-xl md:text-2xl text-primary-foreground">
              CGEMP
            </span>
            <span className="hidden sm:inline text-primary-foreground/60 text-sm font-body">
              | Workshop Formativo
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-heading text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.to
                    ? "text-accent"
                    : "text-primary-foreground/80 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/inscricao" className="btn-gold text-sm px-5 py-2">
              Inscreva-se
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground p-2"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-heading text-sm font-medium ${
                  location.pathname === link.to
                    ? "text-accent"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/inscricao"
              onClick={() => setIsOpen(false)}
              className="btn-gold text-sm px-5 py-2 mt-2 w-full text-center"
            >
              Inscreva-se
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
