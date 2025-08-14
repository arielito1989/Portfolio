import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

/**
 * @param {{ 
 *   project: { 
 *     image: string; 
 *     title: string; 
 *     description: string; 
 *     technologies: string[]; 
 *     github: string; 
 *     demo?: string; 
 *   }; 
 *   variants: any; 
 * }} props
 */
const ProjectCard = ({ project, variants }) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300"
      whileHover={{ y: -10 }}
      variants={variants}
    >
      <img src={project.image} alt={`Captura de pantalla del proyecto ${project.title}`} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-green-400">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className={`bg-gray-700 px-2 py-1 rounded-full text-sm ${index % 2 === 0 ? 'text-green-400' : 'text-blue-400'}`}>{tech}</span>
          ))}
        </div>
        <div className="flex justify-between">
          <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded"><FaGithub size={30} /></a>
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"><FaExternalLinkAlt size={30} /></a>}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
