import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-800 text-gray-400 p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Ariel Nogueroles. Todos los derechos reservados.
        </p>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="https://github.com/arielito1989" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/ariel-nogueroles-81ab45166/" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors"><FaLinkedin size={24} /></a>
          <a href="#contact" className="hover:text-green-400 transition-colors"><FaEnvelope size={24} /></a>
        </div>
        <button
          onClick={scrollToTop}
          className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
          aria-label="Volver arriba"
        >
          <FaArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;