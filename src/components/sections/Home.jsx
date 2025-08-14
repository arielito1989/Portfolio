
import perfil from '/images/perfil.png'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center pt-20 px-4">
      <img 
        src={perfil} 
        alt="Ariel Nogueroles" 
        className="w-40 h-40 md:w-48 md:h-48 rounded-full mb-4 shadow-lg shadow-blue-500/50"
        loading="lazy"
      />
      <h1 
        className="text-3xl md:text-4xl font-bold text-green-400"
      >
        {t('home.greeting')}
      </h1>
      <h2 
        className="text-xl md:text-2xl text-blue-400 mt-2"
      >
        {t('home.role')}
      </h2>
      <p 
        className="mt-4 max-w-2xl text-base md:text-lg"
      >
        {t('home.bio')}
      </p>
      <div 
        className="flex space-x-6 mt-6"
      >
        <a href="https://github.com/arielito1989" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 rounded"><FaGithub size={32} /></a>
        <a href="https://www.linkedin.com/in/ariel-nogueroles-81ab45166/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"><FaLinkedin size={32} /></a>
        <a href="mailto:ariel.nogueroles@example.com" className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 rounded"><FaEnvelope size={32} /></a>
      </div>
    </section>
  )
}

export default Home
