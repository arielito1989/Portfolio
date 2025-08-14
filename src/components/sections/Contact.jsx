
import { useForm } from 'react-hook-form'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    // Aquí se podría implementar la lógica para enviar el formulario
    // a un servicio como EmailJS, Formspree, o un backend propio.
    console.log(data)
    alert('Mensaje enviado (simulación)')
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <SectionTitle>{t('contact.title')}</SectionTitle>
      <div className="container mx-auto flex flex-col md:flex-row gap-12 items-start">
        
        {/* Formulario */}
        <motion.div 
          className="md:w-2/3 bg-gray-800 p-8 rounded-lg shadow-lg shadow-blue-500/30"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold mb-6 text-blue-400">{t('contact.form_title')}</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2 font-medium">{t('contact.name')}</label>
              <input 
                type="text" 
                id="name" 
                {...register("name", { required: t('contact.name_required') })} 
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-green-400 focus:ring-green-400 transition"
              />
              {errors.name && <span className="text-red-500 mt-1 block">{errors.name.message}</span>}
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2 font-medium">{t('contact.email')}</label>
              <input 
                type="email" 
                id="email" 
                {...register("email", { 
                  required: t('contact.email_required'), 
                  pattern: { value: /\S+@\S+\.\S+/, message: t('contact.email_invalid') } 
                })} 
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-green-400 focus:ring-green-400 transition"
              />
              {errors.email && <span className="text-red-500 mt-1 block">{errors.email.message}</span>}
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2 font-medium">{t('contact.message')}</label>
              <textarea 
                id="message" 
                {...register("message", { required: t('contact.message_required') })} 
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:border-green-400 focus:ring-green-400 transition" 
                rows="5"
              ></textarea>
              {errors.message && <span className="text-red-500 mt-1 block">{errors.message.message}</span>}
            </div>
            <motion.button 
              type="submit" 
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('contact.send')}
            </motion.button>
          </form>
        </motion.div>

        {/* Redes Sociales */}
        <motion.div 
          className="md:w-1/3 bg-gray-800 p-8 rounded-lg shadow-lg shadow-green-500/30"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-green-400">{t('contact.other_contact')}</h3>
          <div className="space-y-4">
            <motion.a href="https://www.linkedin.com/in/ariel-nogueroles-81ab45166/" target="_blank" rel="noreferrer" className="flex items-center p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400" whileHover={{ scale: 1.05 }}>
              <FaLinkedin size={30} className="text-blue-400 mr-4" />
              <span className="text-white">LinkedIn</span>
            </motion.a>
            <motion.a href="https://github.com/arielito1989" target="_blank" rel="noreferrer" className="flex items-center p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400" whileHover={{ scale: 1.05 }}>
              <FaGithub size={30} className="text-green-400 mr-4" />
              <span className="text-white">GitHub</span>
            </motion.a>
            <motion.a href="mailto:ariel.nogueroles@example.com" className="flex items-center p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400" whileHover={{ scale: 1.05 }}>
              <FaEnvelope size={30} className="text-blue-400 mr-4" />
              <span className="text-white">Email</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
