
import projects from '../../data/projects.json'
import ProjectCard from '../ui/ProjectCard'
import Section from '../ui/Section'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { useTranslation } from 'react-i18next'
import { itemVariants } from '../../styles/animations'

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Section id="projects" className="bg-gray-900">
      <motion.div variants={itemVariants}>
        <SectionTitle>{t('projects.title')}</SectionTitle>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 container mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} variants={itemVariants} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
