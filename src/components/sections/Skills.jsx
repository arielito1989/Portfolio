
import ProgressBar from '../ui/ProgressBar'
import { motion } from 'framer-motion'
import skills from '../../data/skills.json'
import SectionTitle from '../ui/SectionTitle'
import { useTranslation } from 'react-i18next'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
}

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 bg-gray-900 px-4">
      <SectionTitle>{t('skills.title')}</SectionTitle>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg shadow-lg shadow-blue-500/30">
          <h3 className="text-2xl font-bold mb-4 text-green-400">{t('skills.languages')}</h3>
          {skills.languages.map((skill, index) => (
            <ProgressBar key={index} skill={skill.name} percentage={skill.percentage} color={index % 2 === 0 ? 'bg-green-500' : 'bg-green-500'} />
          ))}
        </motion.div>
        <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg shadow-lg shadow-green-500/30">
          <h3 className="text-2xl font-bold mb-4 text-green-400">{t('skills.frameworks')}</h3>
          {skills.frameworks.map((skill, index) => (
            <ProgressBar key={index} skill={skill.name} percentage={skill.percentage} color={index % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'} />
          ))}
        </motion.div>
        <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg shadow-lg shadow-blue-500/30">
          <h3 className="text-2xl font-bold mb-4 text-green-400">{t('skills.tools')}</h3>
          {skills.tools.map((skill, index) => (
            <ProgressBar key={index} skill={skill.name} percentage={skill.percentage} color={index % 2 === 0 ? 'bg-green-500' : 'bg-green-500'} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
