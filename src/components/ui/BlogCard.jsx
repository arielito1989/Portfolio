import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

/**
 * @param {{ 
 *   post: { 
 *     title: string; 
 *     date: string; 
 *     description: string; 
 *   }; 
 *   onClick: () => void; 
 *   variants: any; 
 * }} props
 */
const BlogCard = ({ post, onClick, variants }) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 p-6 cursor-pointer"
      whileHover={{ y: -10 }}
      variants={variants}
      onClick={onClick}
    >
      <h3 className="text-xl font-bold mb-2 text-green-400">{post.title}</h3>
      <p className="text-gray-500 text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
      <p className="text-gray-400 mb-4">{post.description}</p>
      <div className="flex justify-end">
        <div className="text-gray-400 hover:text-green-400 flex items-center">
          Leer más <FaArrowRight className="ml-2" />
        </div>
      </div>
    </motion.div>
  )
}

export default BlogCard
