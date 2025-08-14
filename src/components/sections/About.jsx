
import certificates from '../../data/certificates.json'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import CertificateCard from '../ui/CertificateCard'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-800 px-4">
      <SectionTitle>{t('about.title')}</SectionTitle>
      <div className="flex flex-col md:flex-row items-start container mx-auto gap-12" role="main">
        <motion.div 
          className="md:w-1/2 md:pr-8 bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg shadow-blue-500/30"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 text-base md:text-lg leading-relaxed">
            {t('about.paragraph1')}
          </p>
          <p className="mb-4 text-base md:text-lg leading-relaxed">
            {t('about.paragraph2')}
          </p>
          <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-blue-400">{t('about.interests')}</h3>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
            <li className="text-green-400"><span className="text-white">{t('about.interest1')}</span></li>
            <li className="text-green-400"><span className="text-white">{t('about.interest2')}</span></li>
            <li className="text-green-400"><span className="text-white">{t('about.interest3')}</span></li>
          </ul>
        </motion.div>
        <motion.div 
          className="md:w-1/2 mt-8 md:mt-0 bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg shadow-green-500/30"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-400">{t('about.certificates')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <CertificateCard key={index} certificate={cert} onClick={() => {}} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
