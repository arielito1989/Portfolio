import { motion } from 'framer-motion'
import skills from '../../data/skills.json'
import SectionTitle from '../ui/SectionTitle'
import { useTranslation } from 'react-i18next'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'

const allIcons = { ...FaIcons, ...SiIcons };

const DynamicIcon = ({ name, color }) => {
  const IconComponent = allIcons[name];

  if (!IconComponent) {
    return null;
  }

  const style = color ? { color } : {};

  return <IconComponent size={48} className="mb-2" style={style} />;
};


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const categoryVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const skillVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
}

const Skills = () => {
  const { t } = useTranslation();
  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="py-20 bg-gray-900 px-4">
      <SectionTitle>{t('skills.title')}</SectionTitle>
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map(([category, skillList]) => (
          <motion.div
            key={category}
            className="mb-12"
            variants={categoryVariants}
          >
            <h3 className="text-3xl font-bold mb-8 text-center text-green-400">{t(`skills.${category}`)}</h3>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center"
              variants={categoryVariants}
            >
              {skillList.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow duration-300"
                  variants={skillVariants}
                  whileHover={{ y: -5 }}
                >
                  <DynamicIcon name={skill.icon} color={skill.color} />
                  <span className="text-lg">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills