import { motion } from 'framer-motion'

const SectionTitle = ({ children }) => {
  return (
    <motion.h2
      className="text-3xl font-bold text-center mb-12 text-green-400"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  )
}

export default SectionTitle
