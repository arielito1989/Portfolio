import { useState } from 'react'
import blogPosts from '../../data/blog.json'
import BlogCard from '../ui/BlogCard'
import Modal from '../ui/Modal'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../../styles/animations'
import SectionTitle from '../ui/SectionTitle'
import { useTranslation } from 'react-i18next'

const Blog = () => {
  const { t } = useTranslation();
  const [selectedPost, setSelectedPost] = useState(null)

  const openModal = (post) => {
    setSelectedPost(post)
  }

  const closeModal = () => {
    setSelectedPost(null)
  }

  return (
    <section id="blog" className="py-20 bg-gray-900 px-4">
      <SectionTitle>{t('blog.title')}</SectionTitle>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} onClick={() => openModal(post)} variants={itemVariants} />
        ))}
      </motion.div>
      {selectedPost && (
        <Modal isOpen={!!selectedPost} onClose={closeModal}>
          <h2 className="text-2xl font-bold mb-4 text-green-400">{selectedPost.title}</h2>
          <p className="text-gray-500 text-sm mb-4">{new Date(selectedPost.date).toLocaleDateString()}</p>
          <p className="text-gray-400">{selectedPost.content}</p>
        </Modal>
      )}
    </section>
  )
}

export default Blog
