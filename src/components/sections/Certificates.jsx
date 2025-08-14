
import { useState } from 'react'
import certificates from '../../data/certificates.json'
import CertificateCard from '../ui/CertificateCard'
import Modal from '../ui/Modal'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { useTranslation } from 'react-i18next'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

const Certificates = () => {
  const { t } = useTranslation();
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="certificates" className="py-20 px-4">
      <SectionTitle>{t('certificates.title')}</SectionTitle>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {certificates.map((cert, index) => (
          <motion.div key={index} variants={itemVariants}>
            <CertificateCard certificate={cert} onClick={() => setSelectedCert(cert)} />
          </motion.div>
        ))}
      </motion.div>
      <Modal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)}>
        {selectedCert && (
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">{selectedCert.title}</h3>
            <p className="text-lg mb-2">{selectedCert.issuer} - {selectedCert.date}</p>
            <p>{selectedCert.description}</p>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Certificates
