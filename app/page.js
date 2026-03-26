'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Camera, Heart, Megaphone, Menu, X, ChevronRight, Star, Calendar, Mail, Phone, MapPin, Sparkles, Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

// Hand-drawn SVG decorative elements
const Doodles = {
  Arrow: () => (
    <svg width="120" height="60" viewBox="0 0 120 60" className="absolute">
      <motion.path
        d="M10,30 Q40,10 70,25 T110,30"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
      <motion.path
        d="M100,20 L110,30 L100,40"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </svg>
  ),
  Underline: ({ color = 'currentColor' }) => (
    <svg width="100%" height="20" viewBox="0 0 200 20" preserveAspectRatio="none" className="absolute bottom-0 left-0">
      <motion.path
        d="M5,15 Q50,5 100,12 T195,10"
        stroke={color}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </svg>
  ),
  Circle: ({ className }) => (
    <motion.div
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <svg width="100" height="100" viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
      </svg>
    </motion.div>
  ),
  Star: ({ className }) => (
    <motion.div
      className={className}
      animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.7-6.3 4.7 2.3-7-6-4.6h7.6z" />
      </svg>
    </motion.div>
  ),
  Sparkle: ({ className, delay = 0 }) => (
    <motion.div
      className={className}
      animate={{ 
        scale: [0, 1, 0],
        rotate: [0, 180, 360]
      }}
      transition={{ duration: 2, repeat: Infinity, delay }}
    >
      <Sparkles size={20} />
    </motion.div>
  )
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0)
  const { scrollYProgress } = useScroll()

  // Hero carousel images - aapki attached images
  const heroImages = [
    'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/ze1mk8or_image.png',
    'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/lq1gy9c8_image.png',
    'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/uslpg1dq_image.png'
  ]

  // Autoplay carousel effect for hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(timer)
  }, [])

  // Gallery carousel with project details
  const portfolioProjects = [
    {
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/87k1a1ec_image.png',
      title: 'Traditional Wedding Ceremony',
      client: 'Sharma Family',
      date: 'December 2024',
      type: 'Full Wedding Planning',
      description: 'Complete traditional Indian wedding with Shaadi, Mehendi, and Sangeet ceremonies',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/a08pcvzz_1774524772570-019d29ea-86f6-744f-8194-cd0efde6e851.png',
      title: 'Corporate Event Coverage',
      client: 'TechCorp Solutions',
      date: 'January 2025',
      type: 'Video Production',
      description: 'Professional videography for annual corporate summit with live streaming',
      color: 'from-green-500 to-teal-500'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/jk7v1xhu_fsb.jpg',
      title: 'Digital Marketing Campaign',
      client: 'StartupHub India',
      date: 'November 2024',
      type: 'Media & Marketing',
      description: 'Complete digital marketing strategy with social media management and SEO',
      color: 'from-blue-500 to-purple-500'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/32gistms_mehendi.jpg',
      title: 'Mehendi Ceremony Special',
      client: 'Patel Family',
      date: 'October 2024',
      type: 'Event Planning & Photography',
      description: 'Beautiful mehendi ceremony with traditional decorations and photography',
      color: 'from-pink-500 to-rose-500'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/3ojyc5ff_1774525203148-019d29f0-2e2e-7042-899c-940d4336fd31.png',
      title: 'Adventure Photo Shoot',
      client: 'Wanderlust Magazine',
      date: 'September 2024',
      type: 'Professional Photography',
      description: 'Desert adventure photography shoot for travel magazine feature',
      color: 'from-yellow-600 to-orange-600'
    }
  ]

  // Autoplay carousel effect for gallery
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGallerySlide((prev) => (prev + 1) % portfolioProjects.length)
    }, 6000) // Change slide every 6 seconds
    return () => clearInterval(timer)
  }, [])

  // Manual navigation functions
  const nextSlide = () => {
    setCurrentGallerySlide((prev) => (prev + 1) % portfolioProjects.length)
  }

  const prevSlide = () => {
    setCurrentGallerySlide((prev) => (prev - 1 + portfolioProjects.length) % portfolioProjects.length)
  }

  const services = [
    {
      icon: Heart,
      title: 'Marriage Planning',
      emoji: '💒',
      description: 'Complete wedding solutions for Shaadi, Mehendi, Sangeet, and all Indian wedding ceremonies!',
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/ofjy98n1_image.png',
      features: ['✨ Traditional Ceremonies', '🎊 Venue Decoration', '🍽️ Catering Magic', '👥 Guest Management'],
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: Camera,
      title: 'Professional Photography',
      emoji: '📸',
      description: 'Capture your precious moments with our expert photography services!',
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/o729vcmr_image.png',
      features: ['💍 Wedding Photography', '🎉 Event Coverage', '🤳 Portrait Sessions', '🎬 Cinematic Videos'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Megaphone,
      title: 'Media Enterprise',
      emoji: '🎯',
      description: 'Elevate your brand with our comprehensive media services!',
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/fze67wl6_image.png',
      features: ['📱 Digital Marketing', '🎵 Music Videos', '📢 PR Campaigns', '🌟 Social Media'],
      color: 'from-purple-400 to-violet-400'
    }
  ]

  const gallery = []

  const testimonials = [
    { name: 'Priya & Rahul', event: 'Wedding Ceremony', text: 'Our wedding was absolutely perfect! Every detail was beautifully executed. Thank you!', rating: 5, emoji: '😍' },
    { name: 'Ananya Sharma', event: 'Baby Shower', text: 'The photography team captured every precious moment. We will cherish them forever!', rating: 5, emoji: '🥰' },
    { name: 'Vikram Enterprises', event: 'Marketing Campaign', text: 'Their media services took our brand to the next level. Excellent ROI!', rating: 5, emoji: '🚀' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6D3] via-[#E8DCC4] to-[#F5E6D3] overflow-hidden">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <Doodles.Star className="absolute top-20 left-10 text-yellow-400" />
        <Doodles.Star className="absolute top-40 right-20 text-pink-400" />
        <Doodles.Sparkle className="absolute top-60 left-1/4 text-blue-400" delay={0.5} />
        <Doodles.Sparkle className="absolute bottom-40 right-1/3 text-purple-400" delay={1} />
        <Doodles.Circle className="absolute top-1/3 right-10 text-rose-300 opacity-30" />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{
          background: 'linear-gradient(135deg, #2C2C2C 0%, #3A3A3A 100%)',
          borderBottom: '4px solid #E8DCC4',
          boxShadow: '0 4px 0 rgba(232, 220, 196, 0.3)'
        }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl md:text-3xl font-bold text-[#E8DCC4] relative"
              style={{ fontFamily: 'var(--font-playful)' }}
              whileHover={{ rotate: [-2, 2, -2, 0] }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative inline-block">
                Elegant Events ✨
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                  <path d="M5,5 Q50,2 100,4 T195,3" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-6">
              {['Services', 'Gallery', 'Testimonials', 'Contact'].map((item, idx) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#E8DCC4] hover:text-white transition-colors font-medium relative group"
                  style={{ fontFamily: 'var(--font-playful)' }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
              <motion.div whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-[#2C2C2C] hover:from-yellow-500 hover:to-orange-500 font-bold rounded-full px-6 border-4 border-[#2C2C2C] shadow-[4px_4px_0_#2C2C2C] hover:shadow-[2px_2px_0_#2C2C2C] transition-all">
                  Book Now! 🎉
                </Button>
              </motion.div>
            </div>

            <button className="md:hidden text-[#E8DCC4]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="md:hidden mt-4 space-y-4"
            >
              {['Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-[#E8DCC4] font-medium" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-[#2C2C2C] font-bold rounded-full">Book Now! 🎉</Button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section with Autoplay Carousel */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Carousel Background - No Blur, No Controls */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.1
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${image}')` }}
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#2C2C2C]/70 via-[#2C2C2C]/60 to-[#2C2C2C]/80" />
            </motion.div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center relative">
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-10 left-10 text-6xl"
            animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🎊
          </motion.div>
          <motion.div
            className="absolute top-20 right-10 text-6xl"
            animate={{ rotate: [0, -10, 10, 0], y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            💝
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-8xl font-black text-[#E8DCC4] mb-6 relative inline-block"
              style={{ 
                fontFamily: 'var(--font-playful)',
                textShadow: '4px 4px 0 rgba(245, 158, 11, 0.5), -2px -2px 0 rgba(236, 72, 153, 0.3)'
              }}
              animate={{ 
                rotate: [-1, 1, -1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Creating Unforgettable
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 relative">
                Moments! ✨
                <motion.div
                  className="absolute -bottom-4 left-0 w-full h-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <svg width="100%" height="20" viewBox="0 0 200 20" preserveAspectRatio="none">
                    <path d="M5,15 Q50,5 100,12 T195,10" stroke="#F59E0B" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </svg>
                </motion.div>
              </span>
            </motion.h1>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-xl md:text-3xl mb-8 font-bold"
              style={{ fontFamily: 'var(--font-playful)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.span 
                className="text-pink-300 italic"
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Wedding Planning 💒
              </motion.span>
              <span className="text-[#E8DCC4]">•</span>
              <motion.span 
                className="text-blue-300 italic"
                animate={{ rotate: [2, -2, 2] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                Photography 📸
              </motion.span>
              <span className="text-[#E8DCC4]">•</span>
              <motion.span 
                className="text-purple-300 italic"
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                Media Magic 🎬
              </motion.span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-400 to-rose-400 text-white hover:from-pink-500 hover:to-rose-500 text-xl px-10 py-8 font-black rounded-full border-4 border-white shadow-[6px_6px_0_#2C2C2C] hover:shadow-[3px_3px_0_#2C2C2C] transition-all"
                  style={{ fontFamily: 'var(--font-playful)' }}
                >
                  Let's Talk! 🚀
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: -2 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-white text-[#2C2C2C] hover:bg-yellow-100 text-xl px-10 py-8 font-black rounded-full border-4 border-[#2C2C2C] shadow-[6px_6px_0_#2C2C2C] hover:shadow-[3px_3px_0_#2C2C2C] transition-all"
                  style={{ fontFamily: 'var(--font-playful)' }}
                >
                  View Work ✨
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bouncing arrow */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#E8DCC4] text-4xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#2C2C2C] relative overflow-hidden">
        {/* Background doodles */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <circle cx="10%" cy="20%" r="100" fill="#F59E0B" />
            <circle cx="90%" cy="80%" r="150" fill="#EC4899" />
            <circle cx="50%" cy="50%" r="80" fill="#8B5CF6" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-[#E8DCC4] mb-4 relative inline-block"
              style={{ 
                fontFamily: 'var(--font-playful)',
                textShadow: '3px 3px 0 rgba(245, 158, 11, 0.5)'
              }}
              animate={{ rotate: [-1, 1, -1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Our Super Services! 🎯
              <motion.div className="absolute -top-8 -right-8 text-5xl" animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>⭐</motion.div>
            </motion.h2>
            <p className="text-[#E8DCC4]/80 text-xl font-bold italic" style={{ fontFamily: 'var(--font-playful)' }}>
              Everything you need for amazing celebrations!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
                >
                  <Card className="bg-[#F5E6D3] border-4 border-[#2C2C2C] overflow-hidden h-full group cursor-pointer shadow-[8px_8px_0_#2C2C2C] hover:shadow-[4px_4px_0_#2C2C2C] transition-all">
                    <div className="relative h-64 overflow-hidden border-b-4 border-[#2C2C2C]">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className={`absolute top-4 right-4 bg-gradient-to-br ${service.color} p-4 rounded-full border-4 border-white shadow-lg`}>
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="text-4xl">{service.emoji}</span>
                        </motion.div>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-yellow-400 px-4 py-2 rounded-full border-3 border-[#2C2C2C] font-black text-sm transform -rotate-3 shadow-md">
                        Top Rated! ⭐
                      </div>
                    </div>
                    <CardContent className="p-6 bg-[#F5E6D3]">
                      <h3 className="text-3xl font-black text-[#2C2C2C] mb-3 relative" style={{ fontFamily: 'var(--font-playful)' }}>
                        {service.title}
                        <svg className="absolute -bottom-2 left-0 w-3/4" height="8" viewBox="0 0 200 8">
                          <path d="M5,5 Q50,2 100,4 T195,3" stroke={service.color.includes('pink') ? '#EC4899' : service.color.includes('blue') ? '#60A5FA' : '#A78BFA'} strokeWidth="4" fill="none" strokeLinecap="round" />
                        </svg>
                      </h3>
                      <p className="text-[#2C2C2C]/80 mb-4 font-medium italic">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center text-[#2C2C2C] font-bold"
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      <motion.div whileHover={{ scale: 1.05, rotate: 1 }} whileTap={{ scale: 0.95 }}>
                        <Button className={`w-full bg-gradient-to-r ${service.color} text-white font-black rounded-full border-3 border-[#2C2C2C] shadow-[4px_4px_0_#2C2C2C] hover:shadow-[2px_2px_0_#2C2C2C] transition-all`}>
                          Learn More! →
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section - Circular Animated Carousel */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-[#E8DCC4] via-[#F5E6D3] to-[#E8DCC4] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative"
          >
            <motion.div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-6xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              ⭐
            </motion.div>
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-[#2C2C2C] mb-4 relative inline-block"
              style={{ 
                fontFamily: 'var(--font-playful)',
                textShadow: '3px 3px 0 rgba(236, 72, 153, 0.3)'
              }}
              animate={{ rotate: [-1, 1, -1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Our Amazing Work! 📸
              <svg className="absolute -bottom-4 left-0 w-full" height="15" viewBox="0 0 200 15">
                <path d="M5,10 Q50,3 100,8 T195,7" stroke="#EC4899" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </motion.h2>
            <p className="text-[#2C2C2C]/70 text-xl font-bold italic mt-6" style={{ fontFamily: 'var(--font-playful)' }}>
              Check out our latest projects! ✨
            </p>
          </motion.div>

          {/* Circular Carousel Container - BIGGER SIZE */}
          <div className="relative max-w-7xl mx-auto">
            <div className="relative h-[800px] flex items-center justify-center">
              {portfolioProjects.map((project, index) => {
                const isActive = currentGallerySlide === index
                const isPrev = currentGallerySlide === (index + 1) % portfolioProjects.length
                const isNext = (currentGallerySlide + 1) % portfolioProjects.length === index
                
                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                      scale: isActive ? 1 : isPrev || isNext ? 0.6 : 0.5,
                      x: isActive ? 0 : isPrev ? -500 : isNext ? 500 : 0,
                      zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <div className="relative w-[700px] h-[700px]">
                      {/* Circular Image Container - BIGGER */}
                      <motion.div
                        className="relative w-full h-full rounded-full overflow-hidden border-8 border-[#2C2C2C] shadow-[12px_12px_0_#2C2C2C]"
                        animate={isActive ? { rotate: [0, 2, -2, 0] } : {}}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30`} />
                      </motion.div>

                      {/* Project Details Overlay - BIGGER */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[85%]"
                        >
                          <div className="bg-white rounded-3xl p-8 border-4 border-[#2C2C2C] shadow-[10px_10px_0_#2C2C2C]">
                            <motion.div
                              className={`inline-block px-5 py-2 rounded-full bg-gradient-to-r ${project.color} text-white font-black text-base mb-4 border-3 border-[#2C2C2C]`}
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              {project.type}
                            </motion.div>
                            <h3 className="text-3xl font-black text-[#2C2C2C] mb-3" style={{ fontFamily: 'var(--font-playful)' }}>
                              {project.title}
                            </h3>
                            <p className="text-[#2C2C2C]/70 font-medium italic mb-4 text-lg">
                              {project.description}
                            </p>
                            <div className="flex justify-between items-center border-t-2 border-dashed border-[#2C2C2C]/20 pt-4">
                              <div>
                                <p className="text-sm font-bold text-[#2C2C2C]/60">CLIENT</p>
                                <p className="text-lg font-black text-[#2C2C2C]">{project.client}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm font-bold text-[#2C2C2C]/60">DATE</p>
                                <p className="text-lg font-black text-[#2C2C2C]">{project.date}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Beautiful Left/Right Controls */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-8 pointer-events-none">
              {/* Left Arrow Button */}
              <motion.button
                onClick={prevSlide}
                className="pointer-events-auto w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center border-4 border-white shadow-[6px_6px_0_#2C2C2C] hover:shadow-[3px_3px_0_#2C2C2C] transition-all group"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{ x: [-2, 0, -2] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </motion.svg>
              </motion.button>

              {/* Right Arrow Button */}
              <motion.button
                onClick={nextSlide}
                className="pointer-events-auto w-20 h-20 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center border-4 border-white shadow-[6px_6px_0_#2C2C2C] hover:shadow-[3px_3px_0_#2C2C2C] transition-all group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </motion.svg>
              </motion.button>
            </div>

            {/* Progress Indicator Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {portfolioProjects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentGallerySlide(index)}
                  className={`rounded-full border-3 border-[#2C2C2C] transition-all cursor-pointer ${
                    currentGallerySlide === index ? 'w-12 h-4' : 'w-4 h-4'
                  }`}
                  style={{
                    background: currentGallerySlide === index
                      ? 'linear-gradient(to right, #EC4899, #8B5CF6)'
                      : '#E8DCC4'
                  }}
                  animate={currentGallerySlide === index ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#2C2C2C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-9xl">💬</div>
          <div className="absolute bottom-10 right-10 text-9xl">⭐</div>
          <div className="absolute top-1/2 left-1/2 text-9xl">💝</div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-[#E8DCC4] mb-4"
              style={{ 
                fontFamily: 'var(--font-playful)',
                textShadow: '3px 3px 0 rgba(245, 158, 11, 0.5)'
              }}
              animate={{ rotate: [-1, 1, -1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Happy Clients! 😍
            </motion.h2>
            <p className="text-[#E8DCC4]/80 text-xl font-bold italic" style={{ fontFamily: 'var(--font-playful)' }}>
              See what people are saying!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
              >
                <Card className="bg-[#F5E6D3] border-4 border-[#E8DCC4] h-full shadow-[6px_6px_0_#E8DCC4] hover:shadow-[3px_3px_0_#E8DCC4] transition-all">
                  <CardContent className="p-6">
                    <div className="flex mb-4 gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          animate={{ rotate: [0, 10, -10, 0] }}
                        >
                          <Star className="text-yellow-400 fill-yellow-400" size={24} />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-[#2C2C2C] mb-4 text-lg italic font-medium">"{testimonial.text}"</p>
                    <div className="border-t-4 border-dashed border-[#2C2C2C]/20 pt-4">
                      <p className="text-[#2C2C2C] font-black text-lg flex items-center gap-2">
                        <span className="text-2xl">{testimonial.emoji}</span>
                        {testimonial.name}
                      </p>
                      <p className="text-[#2C2C2C]/60 font-bold text-sm">{testimonial.event}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-300 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div className="absolute top-10 left-10 text-6xl" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>⭐</motion.div>
          <motion.div className="absolute bottom-10 right-10 text-6xl" animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>✨</motion.div>
          <motion.div className="absolute top-1/2 left-1/4 text-6xl" animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity }}>🎉</motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Events!', emoji: '🎊' },
              { number: '1000+', label: 'Happy Clients!', emoji: '😍' },
              { number: '50+', label: 'Awards!', emoji: '🏆' },
              { number: '10+', label: 'Years!', emoji: '🚀' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-center bg-white rounded-3xl p-6 border-4 border-[#2C2C2C] shadow-[6px_6px_0_#2C2C2C]"
              >
                <motion.div className="text-4xl mb-2" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  {stat.emoji}
                </motion.div>
                <motion.h3
                  className="text-4xl md:text-5xl font-black text-[#2C2C2C] mb-2"
                  style={{ fontFamily: 'var(--font-playful)' }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-[#2C2C2C] font-bold" style={{ fontFamily: 'var(--font-playful)' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#2C2C2C] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-[#E8DCC4] mb-4"
              style={{ 
                fontFamily: 'var(--font-playful)',
                textShadow: '3px 3px 0 rgba(245, 158, 11, 0.5)'
              }}
              animate={{ rotate: [-1, 1, -1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Let's Chat! 💬
            </motion.h2>
            <p className="text-[#E8DCC4]/80 text-xl font-bold italic" style={{ fontFamily: 'var(--font-playful)' }}>
              Ready to create something amazing?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: Phone, label: 'Phone', value: '+91 98765 43210', emoji: '📞' },
                { icon: Mail, label: 'Email', value: 'info@elegantevents.com', emoji: '✉️' },
                { icon: MapPin, label: 'Location', value: 'Mumbai, India', emoji: '📍' },
                { icon: Calendar, label: 'Hours', value: 'Mon-Sat: 9AM-8PM', emoji: '⏰' }
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={idx}
                    className="flex items-start space-x-4 bg-[#3A3A3A] p-6 rounded-2xl border-4 border-[#E8DCC4] shadow-[4px_4px_0_#E8DCC4]"
                    whileHover={{ x: 10, rotate: 1 }}
                  >
                    <motion.div
                      className="text-4xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                    >
                      {item.emoji}
                    </motion.div>
                    <div>
                      <h3 className="text-[#E8DCC4] font-black mb-1 text-xl" style={{ fontFamily: 'var(--font-playful)' }}>{item.label}</h3>
                      <p className="text-[#E8DCC4]/70 font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#F5E6D3] border-4 border-[#E8DCC4] shadow-[8px_8px_0_#E8DCC4]">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <Input placeholder="Your Name ✏️" className="bg-white border-3 border-[#2C2C2C] text-[#2C2C2C] placeholder:text-[#2C2C2C]/50 font-bold rounded-xl" />
                    <Input type="email" placeholder="Your Email 📧" className="bg-white border-3 border-[#2C2C2C] text-[#2C2C2C] placeholder:text-[#2C2C2C]/50 font-bold rounded-xl" />
                    <Input placeholder="Phone Number 📱" className="bg-white border-3 border-[#2C2C2C] text-[#2C2C2C] placeholder:text-[#2C2C2C]/50 font-bold rounded-xl" />
                    <Textarea placeholder="Tell us about your event... 🎉" rows={5} className="bg-white border-3 border-[#2C2C2C] text-[#2C2C2C] placeholder:text-[#2C2C2C]/50 font-bold rounded-xl" />
                    <motion.div whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }}>
                      <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:from-pink-500 hover:to-purple-500 font-black text-lg rounded-full border-4 border-[#2C2C2C] shadow-[4px_4px_0_#2C2C2C] hover:shadow-[2px_2px_0_#2C2C2C] transition-all" style={{ fontFamily: 'var(--font-playful)' }}>
                        Send Message! 🚀
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-[#E8DCC4] py-12 border-t-4 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-black mb-4" style={{ fontFamily: 'var(--font-playful)' }}>Elegant Events ✨</h3>
              <p className="text-[#E8DCC4]/70 font-medium">Creating unforgettable moments!</p>
            </div>
            <div>
              <h4 className="font-black mb-4 text-xl" style={{ fontFamily: 'var(--font-playful)' }}>Services 🎯</h4>
              <ul className="space-y-2 text-[#E8DCC4]/70 font-medium">
                <li className="flex items-center gap-2">
                  <Heart size={18} className="text-pink-400" />
                  <span>Wedding Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <Camera size={18} className="text-blue-400" />
                  <span>Photography</span>
                </li>
                <li className="flex items-center gap-2">
                  <Megaphone size={18} className="text-purple-400" />
                  <span>Media Production</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calendar size={18} className="text-yellow-400" />
                  <span>Event Management</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 text-xl" style={{ fontFamily: 'var(--font-playful)' }}>Links ⚡</h4>
              <ul className="space-y-2 text-[#E8DCC4]/70 font-medium">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 text-xl" style={{ fontFamily: 'var(--font-playful)' }}>Follow Us! 🌟</h4>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, name: 'Facebook', color: 'from-blue-500 to-blue-700' },
                  { icon: Instagram, name: 'Instagram', color: 'from-pink-500 via-purple-500 to-orange-500' },
                  { icon: Twitter, name: 'Twitter', color: 'from-cyan-400 to-blue-500' }
                ].map((social, idx) => {
                  const SocialIcon = social.icon
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center cursor-pointer border-3 border-white shadow-lg`}
                    >
                      <SocialIcon className="text-white" size={24} strokeWidth={2.5} />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="border-t-2 border-dashed border-[#E8DCC4]/20 pt-8 text-center">
            <p className="text-[#E8DCC4]/70 font-bold" style={{ fontFamily: 'var(--font-playful)' }}>
              Made with 💝 © 2025 Elegant Events. All rights reserved!
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}