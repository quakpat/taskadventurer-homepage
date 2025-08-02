'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Actual screenshots from Cloudinary
const screenshots = [
  'https://res.cloudinary.com/dngg2bd91/image/upload/v1754125950/01_xl7ko6.png',
  'https://res.cloudinary.com/dngg2bd91/image/upload/v1754125951/02_la37sh.png',
  'https://res.cloudinary.com/dngg2bd91/image/upload/v1754125950/03_g3ejgh.png',
  'https://res.cloudinary.com/dngg2bd91/image/upload/v1754125951/04_waw4ly.png',
  'https://res.cloudinary.com/dngg2bd91/image/upload/v1754125951/05_xv8n5y.png',
  'https://res.cloudinary.com/dngg2bd91/image/upload/v1754125951/06_gz6vsy.png',
  'https://res.cloudinary.com/dngg2bd91/image/upload/v1754125951/07_mg8pgl.png',
  'https://res.cloudinary.com/dngg2bd91/image/upload/v1754125951/08_jxanw4.png',
]

export default function ScreenshotCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + screenshots.length) % screenshots.length)
  }

  const handleDragEnd = (event: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x)

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1)
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1)
    }
  }

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white h-[600px] lg:h-[700px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute w-full h-full"
          >
                         <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
               <img
                 src={screenshots[currentIndex]}
                 alt={`TaskAdventurer Screenshot ${currentIndex + 1}`}
                 className="w-full h-full object-contain"
               />
             </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors z-10"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>
      
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-colors z-10"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary-500 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Swipe hint */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 opacity-60">
        Swipe to explore
      </div>
    </div>
  )
} 