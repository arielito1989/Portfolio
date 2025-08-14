
import projects from '../../data/projects.json'
import ProjectCard from '../ui/ProjectCard'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../styles/animations'
import SectionTitle from '../ui/SectionTitle'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 bg-gray-900 px-4">
      <SectionTitle>{t('projects.title')}</SectionTitle>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} variants={itemVariants} />
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
