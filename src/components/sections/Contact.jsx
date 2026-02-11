
import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form'
import { FaLinkedin, FaEnvelope, FaGithub, FaWhatsapp } from 'react-icons/fa'
import Section from '../ui/Section'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { useTranslation } from 'react-i18next'
import { itemVariants } from '../../styles/animations'

const Contact = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const messageRef = useRef(null);

  useEffect(() => {
    if (submitMessage && messageRef.current) {
      messageRef.current.focus();

      const timer = setTimeout(() => {
        setSubmitMessage(null);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  const onSubmit = async (data) => {
    // Honeypot check - if website field is filled, it's a bot
    if (data.website) {
      console.log("Honeypot field filled, likely a bot.");
      setSubmitMessage("¡Mensaje enviado con éxito! Gracias por contactarme, te responderé lo antes posible.");
      setMessageType('success');
      reset();
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Get reCAPTCHA token
      const token = await window.grecaptcha.execute('6LfYfmgsAAAAAMvS_nXUmVaRDcI7gsGgfq8qcqSa', { action: 'submit' });
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken: token
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (response.status === 429) {
          throw new Error('Demasiados intentos. Por favor, espera un momento antes de volver a intentar.');
        }
        throw new Error(errorData.message || 'Network response was not ok');
      }

      setSubmitMessage("¡Mensaje enviado con éxito! Gracias por contactarme, te responderé lo antes posible.");
      setMessageType('success');
      reset();
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitMessage(error.message || "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde o contáctame directamente por otro medio.");
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-gray-900">
      <motion.div variants={itemVariants}>
        <SectionTitle>{t('contact.title')}</SectionTitle>
      </motion.div>
      <div className="container mx-auto flex flex-col md:flex-row gap-12 items-start">
        
        <motion.div 
          className="md:w-2/3 bg-gray-800 p-8 rounded-lg shadow-lg shadow-blue-500/30"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold mb-6 text-green-400">{t('contact.form_title')}</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="hidden">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" {...register("website")} autoComplete="off" tabIndex="-1" />
            </div>

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
            {isSubmitting && (
              <p className="text-center text-green-400 font-medium">
                Procesando solicitud... Estableciendo conexión segura...
              </p>
            )}
            {submitMessage && (
              <motion.p
                ref={messageRef}
                tabIndex="-1"
                role="alert"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center p-3 rounded-lg ${messageType === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'} focus:outline-none focus:ring-2 focus:ring-white`}
              >
                {submitMessage}
              </motion.p>
            )}
            <motion.button 
              type="submit" 
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : t('contact.send')}
            </motion.button>
          </form>
        </motion.div>

        <motion.div 
          className="md:w-1/3 bg-gray-800 p-8 rounded-lg shadow-lg shadow-green-500/30"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold mb-6 text-green-400">{t('contact.other_contact')}</h3>
          <div className="space-y-4">
            <motion.a href="https://www.linkedin.com/in/ariel-nogueroles-81ab45166/" target="_blank" rel="noreferrer" className="flex items-center p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400" whileHover={{ scale: 1.05 }}>
              <FaLinkedin size={30} className="text-green-400 mr-4" />
              <span className="text-white">LinkedIn</span>
            </motion.a>
            <motion.a href="https://github.com/arielito1989" target="_blank" rel="noreferrer" className="flex items-center p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400" whileHover={{ scale: 1.05 }}>
              <FaGithub size={30} className="text-green-400 mr-4" />
              <span className="text-white">GitHub</span>
            </motion.a>
            <motion.a href="mailto:nicolasariel1989@gmail.com" className="flex items-center p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400" whileHover={{ scale: 1.05 }}>
              <FaEnvelope size={30} className="text-green-400 mr-4" />
              <span className="text-white">Email</span>
            </motion.a>
            <motion.a href="https://wa.me/5491125419672" target="_blank" rel="noreferrer" className="flex items-center p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400" whileHover={{ scale: 1.05 }}>
              <FaWhatsapp size={30} className="text-green-400 mr-4" />
              <span className="text-white">WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </Section>
  )
}

export default Contact
