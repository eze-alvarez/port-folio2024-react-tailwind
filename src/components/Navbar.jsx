import { NavLink } from 'react-router-dom';
import logoNav from '../assets/logo nav 2.png';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWindowClose, FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-14 shadow-xl bg-nav z-30 top-0 text-white">
      <div className='container mx-auto xl:max-w-5xl 2xl:max-w-7xl flex justify-between items-center h-full w-full px-8'>
        <NavLink to="/" className="cursor-pointer font-bold">
          <img src={logoNav} alt='mano' className="h-11 w-auto cursor-pointer" />
        </NavLink>

        <div className="hidden font-semibold tracking-wider landscape:flex sm:flex">
          <ul className='flex gap-x-3 text-sm xl:text-xl xl:gap-x-5'>
            <NavLink exact to="/" activeClassName="text-yellow-400">
              <li className="uppercase hover:scale-[1.1]">home</li>
            </NavLink>

            <NavLink to="/education" activeClassName="text-yellow-400">
              <li className="uppercase hover:scale-[1.1]">education</li>
            </NavLink>

            <NavLink to="/projects" activeClassName="text-yellow-400">
              <li className="uppercase hover:scale-[1.1]">proyectos</li>
            </NavLink>

            <NavLink to="/contact" activeClassName="text-yellow-400">
              <li className="uppercase hover:scale-[1.1]">contacto</li>
            </NavLink>
          </ul>
        </div>

        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <div className='border-2 border-yellow1 rounded-md p-2'>
            <FaBars size={15} />
          </div>
        </div>
      </div>

      {/* Menú desplegable para dispositivos móviles */}
      <div className={
        menuOpen
          ? "fixed left-0 top-0 z-20 w-[65%] sm:hidden h-screen bg-nav p-10 ease-in duration-500"
          : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-500"
      }>
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer border-2 border-yellow1 rounded-md p-1">
            <FaWindowClose size={25} />
          </div>
        </div>

        <div className="flex-col py-4 font-bold tracking-wider">
          <ul>
            <NavLink exact to="/" activeClassName="text-yellow-400">
              <li onClick={() => setMenuOpen(false)}
                className="hover:ring hover:ring-offset-0 hover:ring-yellow1 rounded p-2 cursor-pointer">Home
              </li>
            </NavLink>

            <NavLink to="/education" activeClassName="text-yellow-400">
              <li onClick={() => setMenuOpen(false)}
                className="hover:ring hover:ring-offset-0 hover:ring-yellow1 rounded p-2 cursor-pointer">Educación
              </li>
            </NavLink>

            <NavLink to="/projects" activeClassName="text-yellow-400">
              <li onClick={() => setMenuOpen(false)}
                className="hover:ring hover:ring-offset-0 hover:ring-yellow1 rounded p-2 cursor-pointer">Proyectos
              </li>
            </NavLink>

            <NavLink to="/contact" activeClassName="text-yellow-400">
              <li onClick={() => setMenuOpen(false)}
                className="hover:ring hover:ring-offset-0 hover:ring-yellow1 rounded p-2 cursor-pointer">Contacto
              </li>
            </NavLink>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="flex pt-10 items-center mb-16 font-medium px-2">
          <ul>
            <li>
              <a href='https://www.linkedin.com/in/ezzequiel-alvarez/' target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 mt-2">
                <FaLinkedinIn size={25} className="cursor-pointer hover:fill-yellow1" />
                <span className="font-semibold hover:text-yellow1">Linkedin</span>
              </a>
            </li>

            <li>
              <a href='https://github.com/eze-alvarez' target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 mt-3">
                <FaGithub size={25} className="cursor-pointer hover:fill-yellow1" />
                <span className="font-semibold hover:text-yellow1">Github</span>
              </a>
            </li>

            <li>
              <a href='mailto:ezenigm@hotmail.com' target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 mt-3">
                <FaEnvelope size={25} className="cursor-pointer hover:fill-yellow1" />
                <span className="font-semibold hover:text-yellow1">Email</span>
              </a>
            </li>
          </ul>
        </div>

        <NavLink to="/">
          <img src={logoNav} alt='logo' width={205} height={75} className="cursor-pointer" />
        </NavLink>
      </div>
    </nav>
  );
}
