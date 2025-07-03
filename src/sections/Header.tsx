import { useState } from "react";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";
import Button from "../components/Button";
import Logo from "../components/Logo"; // Adjust the path if necessary
import Modal from "../components/Modal";

const navLinks: string[] = ["About", "Skills", "Projects", "Contact"];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleMenu = (): void => setMenuOpen(!menuOpen);
  const toggleModal = (): void => setShowModal(!showModal);

  return (
    <header className=" flex justify-between items-center w-full fixed top-0 left-0 right-0 bg-bgbrand/80 dark:bg-bgbrand-dark/80 text-white shadow-lg z-50 transition-all duration-300  border-white/60 backdrop-blur-md ">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center ">
          {navLinks.map((link: string) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-green-700 transition font-bold"
            >
              {link}
            </a>
          ))}
          <a
            href="https://github.com/prointer"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-2 py-2 hover:bg-teal-500 hover:font-sans hover:scale-110 hover:transition-transform duration-300 active:shadow-ml border rounded  border-gray-500 transition"
          >
            <FaGithub size={24} />
          </a>
          <button
            type="button"
            onClick={toggleModal}
            className="bg-cyan-400 easy-in text-white px-2 py-2 hover:bg-cyan-300 hover:font-bold  hover:text-black/70 hover:scale-110 transition-transform duration-300 shadow-ml border rounded  border-gray-500 transition"
          >
            Contact
          </button>
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button type="button" onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((link: string) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-brand"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="https://github.com/prointer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand"
          >
            GitHub
          </a>
          <Button
            onClick={toggleModal}
            className="bg-brand text-white hover:bg-black/80 hover:text-brand-black border border-brand"
          >
            Contact
          </Button>
        </div>
      )}
      {/* Modal */}
      <Modal isOpen={showModal} onClose={toggleModal} title="Связаться со мной">
        <p>Email: example@email.com</p>
        <p className="mt-2 text-sm text-gray-500">Форма будет позже 😎</p>
      </Modal>
    </header>
  );
};

export default Header;
