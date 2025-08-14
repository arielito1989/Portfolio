import { motion } from 'framer-motion'

/**
 * Componente que muestra una barra de progreso animada.
 *
 * @param {object} props - Las propiedades del componente.
 * @param {string} props.skill - El nombre de la habilidad.
 * @param {number} props.percentage - El porcentaje de la habilidad.
 * @param {string} props.color - El color de la barra de progreso.
 * @returns {JSX.Element} El componente de la barra de progreso.
 */
const ProgressBar = ({ skill, percentage, color }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-white">{skill}</span>
        <span className="text-sm font-medium text-white">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className={`h-2.5 rounded-full ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
