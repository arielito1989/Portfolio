import { useState } from 'react'
import blogPosts from '../../data/blog.json'
import BlogCard from '../ui/BlogCard'
import Modal from '../ui/Modal'
import Section from '../ui/Section'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { useTranslation } from 'react-i18next'
import { itemVariants } from '../../styles/animations'

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
    <Section id="blog" className="bg-gray-900">
      <motion.div variants={itemVariants}>
        <SectionTitle>{t('blog.title')}</SectionTitle>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 container mx-auto">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} onClick={() => openModal(post)} variants={itemVariants} />
        ))}
      </div>
      {selectedPost && (
        <Modal isOpen={!!selectedPost} onClose={closeModal}>
          <h2 className="text-2xl font-bold mb-4 text-green-400">{selectedPost.title}</h2>
          <p className="text-gray-500 text-sm mb-4">{new Date(selectedPost.date).toLocaleDateString()}</p>
          <p className="text-gray-400">{selectedPost.content}</p>
        </Modal>
      )}
    </Section>
  )
}

export default Blog
