
import { motion } from 'framer-motion'

/**
 * @param {{ 
 *   certificate: { 
 *     logo: string; 
 *     issuer: string; 
 *     title: string; 
 *     date: string; 
 *   }; 
 *   onClick: () => void; 
 * }} props
 */
const CertificateCard = ({ certificate, onClick }) => {
  return (
    <motion.button 
      className="bg-gray-800 p-4 rounded-lg flex items-center cursor-pointer border border-transparent hover:border-green-400 transition-colors duration-300 w-full text-left focus:outline-none focus:ring-2 focus:ring-green-400"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={certificate.logo} alt={`Logo de ${certificate.issuer}`} className="w-16 h-16 mr-4" loading="lazy" />
      <div>
        <h4 className="font-bold text-blue-400">{certificate.title}</h4>
        <p className="text-sm text-gray-400">{certificate.issuer} - {certificate.date}</p>
      </div>
    </motion.button>
  )
}

export default CertificateCard
