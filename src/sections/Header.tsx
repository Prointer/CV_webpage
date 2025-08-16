import { useEffect, useRef, useState } from "react"
import { FaBars, FaGithub, FaTimes } from "react-icons/fa"
import Logo from "../components/Logo"

const navLinks: navLink[] = [{name:"About", targetId:"hero"}, {name:"Skills", targetId:"skills"}, {name:"Portfolio",targetId:"portfolio"}, {name: "Contact", targetId:"footer"}];

interface HeaderProps{
  toggleModal: () => void;
}
interface navLink{
  name:string,
  targetId:string
}


const Header: React.FC<HeaderProps> = ({ toggleModal }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const headerRef = useRef<HTMLElement | null>(null);

  // initially set the header height variable
  useEffect(() => {
    const setVar = () =>{
      if (!headerRef.current) return;
      const h =headerRef.current.offsetHeight
      document.documentElement.style.setProperty('--header-h', `${h}px`);
    };
    setVar();
    const onResize = () => setVar();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  },[]);

  useEffect(()=>{
    if(!headerRef.current) return;
    const h = headerRef.current.offsetHeight;
    document.documentElement.style.setProperty('--header-h', `${h}px`);
  },[menuOpen])

  const toggleMenu = (): void => setMenuOpen((v)=>!v)

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 w-full text-white shadow-lg z-50 border-b border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-2 py-2 flex items-center justify-between relative">
        
        {/* Логотип */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Навигация по центру */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-10 items-center box-content">
          {navLinks.map((link: navLink) => (
            <a
              key={link.name}
              href={`#${link.targetId.toLowerCase()}`}
              className="transition font-code text-white hover:text-green-400 hover:drop-shadow-[0_0_5px_rgba(34,197,94,0.8)] hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Кнопки справа */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/prointer"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-2 hover:bg-teal-500 hover:scale-110 transition-transform duration-300 border rounded border-gray-500"
          >
            <FaGithub size={24} />
          </a>
          <button
            type="button"
            onClick={toggleModal} className="relative px-4 py-2 text-sm font-bold text-sky-400 border-2 border-dashed border-sky-400 hover:bg-sky-400/10 transition-all duration-300"
          >
            <span className="z-10 relative">Contact</span>
                  
            {/* Pixel edges */}
            <svg width="6" height="6" viewBox="0 0 5 5" className="absolute -top-1 -left-1 fill-sky-400">
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
            <svg width="6" height="6" viewBox="0 0 5 5" className="absolute -top-1 -right-1 fill-sky-400">
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
            <svg width="6" height="6" viewBox="0 0 5 5" className="absolute -bottom-1 -left-1 fill-sky-400">
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
            <svg width="6" height="6" viewBox="0 0 5 5" className="absolute -bottom-1 -right-1 fill-sky-400">
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
            </svg>
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button type="button" onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-4 flex flex-row flex-wrap gap-6 justify-center items-center border-t border-white/30 backdrop-blur-md shadow-lg">
          {navLinks.map((link: navLink) => (
            <a
              key={link.name}
              href={`#${link.targetId.toLowerCase()}`}
              className="hover:text-green-400 font-semibold px-3 py-1 rounded transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {/* Кнопки GitHub + Contact в мобилке */}
          <div className="flex flex-row gap-6 mt-2">
            <a
              href="https://github.com/prointer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-2 hover:bg-teal-500 hover:scale-110 transition-transform duration-300 border rounded border-gray-500"
            >
              <FaGithub size={24} />
            </a>

            <button
              onClick={() => {
                toggleModal()
                setMenuOpen(false)
              }}
              className="relative px-4 py-2 text-sm font-semibold text-sky-400 border-2 border-dashed border-sky-400 bg-sky-400/10 hover:bg-sky-400/15 transition"
            >
              Contact
            
              <svg width="6" height="6" viewBox="0 0 5 5" className="absolute -top-1 -left-1 fill-sky-400">
                <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
              </svg>
              <svg width="6" height="6" viewBox="0 0 5 5" className="absolute -top-1 -right-1 fill-sky-400">
                <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
              </svg>
              <svg width="6" height="6" viewBox="0 0 5 5" className="absolute -bottom-1 -left-1 fill-sky-400">
                <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
              </svg>
              <svg width="6" height="6" viewBox="0 0 5 5" className="absolute -bottom-1 -right-1 fill-sky-400">
                <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
              </svg>
            </button>
          </div>
        </div>
      )}

    </header>
  )
}

export default Header