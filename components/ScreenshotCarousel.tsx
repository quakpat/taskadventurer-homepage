'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const screenshots = [
  '/screenshots/01.png',
  '/screenshots/02.png',
  '/screenshots/03.png',
  '/screenshots/04.png',
  '/screenshots/05.png',
  '/screenshots/06.png',
  '/screenshots/07.png',
  '/screenshots/08.png',
]

export default function ScreenshotCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [imageError, setImageError] = useState<string | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)

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

  const handleImageError = (src: string) => {
    console.error('Failed to load image:', src)
    setImageError(src)
    setImageLoaded(false)
  }

  const handleImageLoad = () => {
    console.log('Image loaded successfully:', screenshots[currentIndex])
    setImageLoaded(true)
    setImageError(null)
  }

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Debug info */}
      <div className="text-xs text-gray-500 mb-2">
        Current: {currentIndex + 1}/{screenshots.length} - {imageLoaded ? 'Loaded' : 'Loading...'}
        {imageError && <span className="text-red-500"> - Error: {imageError}</span>}
      </div>
      
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
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
            <div className="relative w-full h-[600px] lg:h-[700px]">
              <img
                src={screenshots[currentIndex]}
                alt={`TaskAdventurer Screenshot ${currentIndex + 1}`}
                className="w-full h-full object-cover"
                onError={() => handleImageError(screenshots[currentIndex])}
                onLoad={handleImageLoad}
              />
              {/* Phone frame overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
              </div>
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