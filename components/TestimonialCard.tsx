'use client'

import { motion } from 'framer-motion'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
}

export default function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* Content */}
      <p className="text-gray-700 leading-relaxed mb-6 italic">
        "{content}"
      </p>
      
      {/* Author */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
          <span className="text-primary-600 font-semibold text-sm">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="ml-3">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  )
} 