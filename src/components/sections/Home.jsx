
import perfil from '/images/perfil.png'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const { t, i18n } = useTranslation();

  const cvPath = i18n.language === 'es' 
    ? '/CV_Ariel_Nogueroles.pdf' 
    : '/CV_Ariel_english.pdf';

  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen pt-20 px-4 container mx-auto">
      <div className="md:w-1/3 flex justify-center md:justify-end mb-8 md:mb-0 md:pr-8">
        <img 
          src={perfil} 
          alt="Ariel Nogueroles" 
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-contain shadow-lg shadow-green-500/50"
          loading="lazy"
        />
      </div>
      <div className="md:w-2/3 text-center md:text-left">
        <h1 
          className="text-4xl md:text-5xl font-bold text-green-400"
        >
          {t('home.greeting')}
        </h1>
        <TypeAnimation
          sequence={[
            'Programador Full Stack',
            1500,
            'Especialista en Ciberseguridad',
            1500,
            'Apasionado por la Tecnología',
            1500,
          ]}
          wrapper="h2"
          speed={50}
          className="text-xl md:text-2xl text-white mt-2"
          repeat={Infinity}
        />
        <p 
          className="mt-4 max-w-2xl text-base md:text-lg"
        >
          {t('home.bio')}
        </p>
        <div 
          className="flex space-x-6 mt-6 justify-center md:justify-start"
        >
          <a href="https://github.com/arielito1989" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 rounded"><FaGithub size={32} /></a>
          <a href="https://www.linkedin.com/in/ariel-nogueroles-81ab45166/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 rounded"><FaLinkedin size={32} /></a>
          <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 rounded"><FaEnvelope size={32} /></a>
        </div>
        {/* CTA Buttons */}
        <div className="flex gap-4 mt-8 justify-center md:justify-start">
          <a 
            href="#projects"
            className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 w-40 text-center"
          >
            {t('home.projects_button')}
          </a>
          <a 
            href={cvPath} 
            download
            className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 w-40 text-center"
          >
            {t('home.cv_button')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
