
import { useState } from 'react'
import certificates from '../../data/certificates.json'
import CertificateCard from '../ui/CertificateCard'
import Modal from '../ui/Modal'
import Section from '../ui/Section'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { useTranslation } from 'react-i18next'
import { itemVariants } from '../../styles/animations'

const Certificates = () => {
  const { t } = useTranslation();
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <Section id="certificates">
      <motion.div variants={itemVariants}>
        <SectionTitle>{t('certificates.title')}</SectionTitle>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {certificates.map((cert, index) => (
          <motion.div key={index} variants={itemVariants}>
            <CertificateCard certificate={cert} onClick={() => setSelectedCert(cert)} />
          </motion.div>
        ))}
      </div>
      <Modal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)}>
        {selectedCert && (
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-4 text-green-400">{selectedCert.title}</h3>
            <p className="text-lg mb-2 text-gray-400">{selectedCert.issuer} - {selectedCert.date}</p>
            {selectedCert.description_long && <p className="mb-4 text-gray-300">{selectedCert.description_long}</p>}
            
            {selectedCert.learned && selectedCert.learned.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2 text-green-400">Lo que aprendí:</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {selectedCert.learned.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedCert.tools_used && selectedCert.tools_used.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2 text-green-400">Herramientas y Tecnologías:</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {selectedCert.tools_used.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedCert.experience_gained && selectedCert.experience_gained.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2 text-green-400">Experiencia Adquirida:</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {selectedCert.experience_gained.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedCert.benefits && selectedCert.benefits.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2 text-green-400">Beneficios Clave:</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {selectedCert.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </Modal>
    </Section>
  )
}

export default Certificates
