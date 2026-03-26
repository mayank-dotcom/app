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
  const { scrollYProgress } = useScroll()

  // Hero carousel images - aapki attached images
  const heroImages = [
    'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/ze1mk8or_image.png',
    'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/lq1gy9c8_image.png',
    'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/uslpg1dq_image.png'
  ]

  // Autoplay carousel effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(timer)
  }, [])

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

  const gallery = [
    { url: 'https://images.unsplash.com/photo-1680490964562-60ee7fd82944?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MHx8fHwxNzc0NTE5NzkyfDA&ixlib=rb-4.1.0&q=85', category: 'Wedding', emoji: '💑' },
    { url: 'https://images.pexels.com/photos/1456669/pexels-photo-1456669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', category: 'Traditional', emoji: '👰' },
    { url: 'https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxtZWhlbmRpfGVufDB8fHx8MTc3NDUxOTc5OXww&ixlib=rb-4.1.0&q=85', category: 'Mehendi', emoji: '🎨' },
    { url: 'https://images.unsplash.com/photo-1587012521796-6359d3678f2a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHxzYW5nZWV0fGVufDB8fHx8MTc3NDUxOTgwNHww&ixlib=rb-4.1.0&q=85', category: 'Sangeet', emoji: '💃' },
    { url: 'https://images.pexels.com/photos/7205410/pexels-photo-7205410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', category: 'Photography', emoji: '📷' },
    { url: 'https://images.unsplash.com/photo-1698199071311-bd5fe0e37449?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwyfHxjYW1lcmElMjBtZWRpYXxlbnwwfHx8fDE3NzQ1MTk4NDF8MA&ixlib=rb-4.1.0&q=85', category: 'Media', emoji: '🎬' }
  ]

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

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-[#E8DCC4] via-[#F5E6D3] to-[#E8DCC4] relative">
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
              Check out these awesome celebrations! ✨
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2, y: -10 }}
                className="relative overflow-hidden rounded-3xl group cursor-pointer h-80 border-4 border-[#2C2C2C] shadow-[6px_6px_0_#2C2C2C] hover:shadow-[3px_3px_0_#2C2C2C] transition-all"
              >
                <img src={item.url} alt={item.category} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="absolute bottom-4 left-4 bg-white px-6 py-3 rounded-full border-3 border-[#2C2C2C] font-black shadow-lg"
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="mr-2">{item.emoji}</span>
                  {item.category}
                </motion.div>
              </motion.div>
            ))}
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
                <li>💒 Wedding Planning</li>
                <li>📸 Photography</li>
                <li>🎬 Media Production</li>
                <li>🎉 Event Management</li>
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