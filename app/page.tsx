'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Download, Shield, Users, Zap, Award, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScreenshotCarousel from '@/components/ScreenshotCarousel'
import FeatureCard from '@/components/FeatureCard'
import TestimonialCard from '@/components/TestimonialCard'

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState('home')

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Gamified Tasks",
      description: "Transform boring chores into exciting quests with your child's favorite adventurer companion!",
      color: "bg-primary-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Reward System",
      description: "Earn coins and unlock rewards as children complete tasks and level up their adventurers.",
      color: "bg-tertiary-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Focused",
      description: "Perfect for families with multiple children. Each child gets their own adventurer and progression.",
      color: "bg-secondary-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Parent Control",
      description: "Full parental oversight with customizable tasks, rewards, and safety features.",
      color: "bg-success"
    }
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Parent of 2",
      content: "My kids actually look forward to doing their chores now! The adventurer theme is brilliant.",
      rating: 5
    },
    {
      name: "Mike R.",
      role: "Father of 3",
      content: "Finally found an app that makes task management fun for the whole family. Highly recommend!",
      rating: 5
    },
    {
      name: "Lisa K.",
      role: "Mother of 1",
      content: "The reward system is perfect. My daughter loves collecting coins and unlocking new adventurers.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-2 fill-current" />
                #1 Family Task Management App
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Chores into{' '}
                <span className="text-primary-500">Epic Adventures</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                TaskAdventurer makes task management fun for families with gamified rewards, 
                leveling up adventurers, and engaging challenges that motivate children to 
                complete their responsibilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl shadow-lg hover:bg-primary-600 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
                >
                  Watch Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-primary-200 border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="ml-3">10,000+ families trust us</span>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2">4.9/5 rating</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <ScreenshotCarousel />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-200/20 to-secondary-200/20 rounded-3xl blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Families Love TaskAdventurer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach combines fun gaming elements with real-world responsibility 
              building, creating an engaging experience for the whole family.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Parents Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of families who have transformed their daily routines 
              with TaskAdventurer.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your Family's Adventure?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Download TaskAdventurer today and transform your family's daily routines 
              into exciting quests!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-xl shadow-lg hover:bg-gray-50 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Get Started Free
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 