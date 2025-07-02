import { useState } from 'react'
import { FaBars, FaGithub, FaTimes } from 'react-icons/fa'
import Button from '../components/Button'
import Modal from '../components/Modal'

const navLinks: string[] = ['About', 'Skills', 'Projects', 'Contact'];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleMenu = (): void => setMenuOpen(!menuOpen);
  const toggleModal = (): void => setShowModal(!showModal);

  return (
    <header className="w-full fixed top-0 left-0 bg-black/80 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">VLADI</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link: string) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-brand transition"
            >
              {link}
            </a>
          ))}
          <a
            href="https://github.com/prointer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition"
          >
            <FaGithub size={22} />
          </a>
          <button
            onClick={toggleModal}
            className="bg-brand text-white px-4 py-1 rounded hover:bg-white hover:text-brand border border-brand transition"
          >
            Contact
          </button>
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
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
          <Button onClick={toggleModal} className="bg-brand text-white hover:bg-white hover:text-brand border border-brand">
  					Contact
					</Button>
        </div>
      )}
			{/* Modal */}
			<Modal isOpen={showModal} onClose={toggleModal} title="Связаться со мной">
  			<p>Email: vladyslav.omelianenko@gmail.com</p>
  			<p className="mt-2 text-sm text-gray-500">Форма будет позже 😎</p>
			</Modal>
    
    </header>
  );
};

export default Header;
