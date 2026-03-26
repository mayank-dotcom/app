'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Camera, Heart, Megaphone, Menu, X, ChevronRight, ChevronLeft, Star, Calendar, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Award, Users, Briefcase, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentPortfolio, setCurrentPortfolio] = useState(0)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  // Hero carousel - Wedding, Photography & Marketing images
  const heroImages = [
    'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/8xn9gulj_3930b3176d8769a9eb45faa8ad515da7.jpg',
    'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/pn181fg7_c60fd9aff016d5dacc5e707ffbb29dc6.jpg',
    'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/31qxllwa_12f8e6d5192d1ac11e2fce04892a8963.jpg',
    'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/xiysyvve_c37dbbd5da75fe7a956e189cbf996870.jpg',
    'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/4jfmdcf4_fbbffde653371b03dadcd1c165f5e3a3.jpg'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      icon: Heart,
      title: 'Marriage Planning',
      description: 'Complete wedding solutions for Shaadi, Mehendi, Sangeet, and all Indian wedding ceremonies. We bring your dream wedding to life with meticulous planning and execution.',
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/oabh1767_468661e181f8bbf4583ac0b286606aac.jpg',
      features: ['Traditional Ceremonies', 'Venue Decoration', 'Catering Services', 'Guest Management']
    },
    {
      icon: Camera,
      title: 'Professional Photography',
      description: 'Capture your precious moments with our expert photography services. From weddings to events, we preserve memories that last a lifetime.',
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/pn181fg7_c60fd9aff016d5dacc5e707ffbb29dc6.jpg',
      features: ['Wedding Photography', 'Event Coverage', 'Portrait Sessions', 'Cinematic Videos']
    },
    {
      icon: Megaphone,
      title: 'Media Enterprise',
      description: 'Elevate your brand with our comprehensive media services. Digital marketing, video production, PR campaigns, and social event endorsements.',
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/31qxllwa_12f8e6d5192d1ac11e2fce04892a8963.jpg',
      features: ['Digital Marketing', 'Music Videos', 'PR Campaigns', 'Social Media']
    }
  ]

  // Portfolio carousel with all service projects
  const portfolioProjects = [
    {
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/8xn9gulj_3930b3176d8769a9eb45faa8ad515da7.jpg',
      title: 'Grand Sharma Wedding',
      client: 'Sharma & Gupta Family',
      date: 'December 2024',
      type: 'Full Wedding Planning',
      description: 'Three-day traditional Indian wedding with Mehendi, Sangeet, and grand ceremony for 500+ guests',
      services: ['Venue Management', 'Catering', 'Decoration', 'Photography']
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/pn181fg7_c60fd9aff016d5dacc5e707ffbb29dc6.jpg',
      title: 'Landscape Photography Project',
      client: 'Travel Magazine India',
      date: 'November 2024',
      type: 'Professional Photography',
      description: 'Artistic landscape and travel photography capturing scenic beauty and natural moments',
      services: ['Landscape Photography', 'Travel Documentation', 'Creative Composition', 'Post Processing']
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/31qxllwa_12f8e6d5192d1ac11e2fce04892a8963.jpg',
      title: 'Digital Marketing Campaign',
      client: 'StartupHub Technologies',
      date: 'October 2024',
      type: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategy with analytics, SEO optimization, and social media management',
      services: ['SEO Strategy', 'Social Media Marketing', 'Analytics Dashboard', 'Content Creation']
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/oabh1767_468661e181f8bbf4583ac0b286606aac.jpg',
      title: 'Traditional Ritual Ceremony',
      client: 'Patel Family',
      date: 'September 2024',
      type: 'Wedding Rituals',
      description: 'Sacred wedding rituals with traditional customs and authentic ceremonies',
      services: ['Ritual Coordination', 'Traditional Decor', 'Photography', 'Priest Arrangement']
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/xiysyvve_c37dbbd5da75fe7a956e189cbf996870.jpg',
      title: 'Video Production & Live Streaming',
      client: 'Corporate Events Ltd',
      date: 'August 2024',
      type: 'Media Production',
      description: 'Professional video production with multi-camera setup, drone coverage, and live streaming',
      services: ['Multi-Camera Setup', 'Drone Videography', 'Live Streaming', 'Post Production']
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/wzc2hep5_9150891e2e9ec6729a29662558d5a358.jpg',
      title: 'Sacred Fire Ceremony',
      client: 'Reddy Family',
      date: 'July 2024',
      type: 'Traditional Wedding',
      description: 'Beautiful fire ceremony with traditional blessings and authentic rituals',
      services: ['Event Planning', 'Ritual Management', 'Photography', 'Catering']
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/3bqwfcgf_5e1475a49a264be7fe84fb431a1be4af.jpg',
      title: 'Professional Event Photography',
      client: 'Fashion Week Mumbai',
      date: 'June 2024',
      type: 'Event Photography',
      description: 'High-end professional photography for fashion events and corporate gatherings',
      services: ['Event Coverage', 'Professional Equipment', 'Candid Photography', 'Quick Delivery']
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/f8cvmf67_930dc1ac4570507ca25303a967e0cc2d.jpg',
      title: 'Business Growth Strategy',
      client: 'Innovation Enterprises',
      date: 'May 2024',
      type: 'Marketing Consultation',
      description: 'Strategic business planning with data-driven insights and growth roadmap development',
      services: ['Business Analysis', 'Growth Strategy', 'Market Research', 'Brand Development']
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/h9pr80a1_bbb0cdfdf1548eb0a5ee16dcd79f52c0.jpg',
      title: 'Intimate Wedding Ceremony',
      client: 'Khanna Family',
      date: 'April 2024',
      type: 'Traditional Wedding',
      description: 'Elegant traditional wedding with sacred rituals and beautiful photography moments',
      services: ['Photography', 'Videography', 'Ritual Planning', 'Decoration']
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_celebration-pro-3/artifacts/4jfmdcf4_fbbffde653371b03dadcd1c165f5e3a3.jpg',
      title: 'Joyous Wedding Celebration',
      client: 'Singh Family',
      date: 'March 2024',
      type: 'Complete Wedding',
      description: 'Grand wedding celebration with rose petals shower and traditional ceremonies',
      services: ['Complete Planning', 'Photography', 'Decoration', 'Guest Management']
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPortfolio((prev) => (prev + 1) % portfolioProjects.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const nextPortfolio = () => {
    setCurrentPortfolio((prev) => (prev + 1) % portfolioProjects.length)
  }

  const prevPortfolio = () => {
    setCurrentPortfolio((prev) => (prev - 1 + portfolioProjects.length) % portfolioProjects.length)
  }

  const testimonials = [
    {
      name: 'Priya & Rahul Sharma',
      event: 'Grand Wedding Ceremony',
      text: 'Our wedding was absolutely perfect! From the Mehendi to the Shaadi, every detail was beautifully executed. The team went above and beyond to make our dreams come true!',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=E8DCC4&color=2C2C2C&size=100'
    },
    {
      name: 'Ananya Reddy',
      event: 'Destination Wedding',
      text: 'The photography team captured every precious moment with such artistry. The photos are stunning and we will cherish them forever. Highly professional and creative!',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=Ananya+Reddy&background=E8DCC4&color=2C2C2C&size=100'
    },
    {
      name: 'Vikram Khanna',
      event: 'Corporate Event',
      text: 'Their media services took our brand event to the next level. Professional, creative, and results-driven. The live streaming was flawless. Excellent work!',
      rating: 5,
      image: 'https://ui-avatars.com/api/?name=Vikram+Khanna&background=E8DCC4&color=2C2C2C&size=100'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] to-[#E8DCC4] overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/98 backdrop-blur-md border-b border-[#E8DCC4]/30"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold text-[#E8DCC4]"
              whileHover={{ scale: 1.05 }}
            >
              Elegant Events
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#E8DCC4] hover:text-white transition-colors font-medium"
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.a>
              ))}
              <Button className="bg-[#E8DCC4] text-[#1A1A1A] hover:bg-white font-semibold">
                Book Now
              </Button>
            </div>

            <button className="md:hidden text-[#E8DCC4]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="md:hidden mt-4 space-y-4"
            >
              {['Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-[#E8DCC4]" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <Button className="w-full bg-[#E8DCC4] text-[#1A1A1A] hover:bg-white">
                Book Now
              </Button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section - Reduced Blur */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
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
              <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/50 via-[#1A1A1A]/40 to-[#1A1A1A]/60" />
            </motion.div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Creating Unforgettable Moments
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Expert Wedding Planning • Professional Photography • Media Excellence
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-[#E8DCC4] text-[#1A1A1A] hover:bg-white text-lg px-8 py-6 font-semibold">
                Explore Services <ChevronRight className="ml-2" />
              </Button>
              <Button size="lg" className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A] text-lg px-8 py-6 font-semibold backdrop-blur-sm">
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronRight className="text-white" size={32} style={{ transform: 'rotate(90deg)' }} />
        </motion.div>
      </motion.section>

      {/* Services Section - Reduced Blur */}
      <section id="services" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#E8DCC4] mb-4">Our Services</h2>
            <p className="text-[#E8DCC4]/80 text-lg max-w-2xl mx-auto">
              Comprehensive solutions for all your celebration and media needs
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
                  whileHover={{ y: -10 }}
                >
                  <Card className="bg-[#2C2C2C] border-[#E8DCC4]/20 overflow-hidden h-full group">
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 to-transparent" />
                      <div className="absolute top-4 right-4 bg-[#E8DCC4] p-3 rounded-full">
                        <Icon className="text-[#1A1A1A]" size={24} />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-[#E8DCC4] mb-3">{service.title}</h3>
                      <p className="text-[#E8DCC4]/80 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-[#E8DCC4]/70">
                            <ChevronRight size={16} className="mr-2 text-[#E8DCC4]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-[#E8DCC4] text-[#1A1A1A] hover:bg-white font-semibold">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Carousel Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-[#E8DCC4] to-[#F5E6D3] relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#1A1A1A] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1A1A1A] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            {/* Decorative top line */}
            <motion.div 
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#1A1A1A]" />
              <div className="w-2 h-2 bg-[#1A1A1A] rounded-full" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#1A1A1A]" />
            </motion.div>

            {/* Main heading with decorative elements */}
            <motion.div className="relative inline-block">
              <motion.h2 
                className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-4 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="relative inline-block">
                  Our Portfolio
                  {/* Decorative underline */}
                  <motion.div
                    className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-[#1A1A1A] via-[#E8DCC4] to-[#1A1A1A]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                  {/* Corner decorations */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-[#1A1A1A]"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-[#1A1A1A]"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  />
                </span>
              </motion.h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              className="text-[#1A1A1A]/80 text-xl font-medium max-w-2xl mx-auto mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Recent projects that showcase our <span className="text-[#1A1A1A] font-bold italic">expertise</span> and{' '}
              <span className="text-[#1A1A1A] font-bold italic">dedication</span>
            </motion.p>

            {/* Decorative bottom accent */}
            <motion.div
              className="flex items-center justify-center gap-2 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-2 h-2 bg-[#1A1A1A] rounded-full" />
              <div className="w-3 h-3 bg-[#1A1A1A] rounded-full" />
              <div className="w-2 h-2 bg-[#1A1A1A] rounded-full" />
            </motion.div>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div className="relative h-[600px] overflow-hidden rounded-2xl">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: currentPortfolio === index ? 1 : 0,
                    x: currentPortfolio === index ? 0 : currentPortfolio < index ? 100 : -100,
                    zIndex: currentPortfolio === index ? 10 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent rounded-2xl" />
                    
                    {/* Project Details */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: currentPortfolio === index ? 1 : 0, y: currentPortfolio === index ? 0 : 20 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="inline-block px-4 py-1 bg-[#E8DCC4] text-[#1A1A1A] rounded-full text-sm font-semibold mb-4">
                          {project.type}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h3>
                        <p className="text-lg mb-4 text-white/90">{project.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-white/70 mb-1">CLIENT</p>
                            <p className="font-semibold text-white">{project.client}</p>
                          </div>
                          <div>
                            <p className="text-sm text-white/70 mb-1">DATE</p>
                            <p className="font-semibold text-white">{project.date}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.services.map((service, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                              {service}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevPortfolio}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-20"
            >
              <ChevronLeft className="text-[#1A1A1A]" size={28} />
            </button>
            <button
              onClick={nextPortfolio}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-20"
            >
              <ChevronRight className="text-[#1A1A1A]" size={28} />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {portfolioProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPortfolio(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentPortfolio === index ? 'w-8 bg-[#1A1A1A]' : 'w-2 bg-[#1A1A1A]/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - More Attractive */}
      <section id="testimonials" className="py-20 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#E8DCC4] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8DCC4] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#E8DCC4] mb-4">What Our Clients Say</h2>
            <p className="text-[#E8DCC4]/70 text-lg">Real experiences from real celebrations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-[#2C2C2C] border-[#E8DCC4]/30 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8DCC4]/10 rounded-full blur-2xl" />
                  <CardContent className="p-8 relative">
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                        >
                          <Star className="text-[#E8DCC4] fill-[#E8DCC4]" size={24} />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-[#E8DCC4]/90 mb-6 text-lg italic leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4 pt-6 border-t border-[#E8DCC4]/20">
                      <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-2 border-[#E8DCC4]" />
                      <div>
                        <p className="text-[#E8DCC4] font-bold text-lg">{testimonial.name}</p>
                        <p className="text-[#E8DCC4]/60">{testimonial.event}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - More Attractive */}
      <section className="py-20 bg-gradient-to-br from-[#E8DCC4] via-[#F5E6D3] to-[#E8DCC4] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Events Completed', icon: Briefcase, color: 'from-[#1A1A1A] to-[#2C2C2C]' },
              { number: '1000+', label: 'Happy Clients', icon: Users, color: 'from-[#2C2C2C] to-[#1A1A1A]' },
              { number: '50+', label: 'Awards Won', icon: Award, color: 'from-[#1A1A1A] to-[#2C2C2C]' },
              { number: '10+', label: 'Years Experience', icon: Clock, color: 'from-[#2C2C2C] to-[#1A1A1A]' }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 shadow-xl border border-[#E8DCC4]/20`}>
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 bg-[#E8DCC4] rounded-full mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="text-[#1A1A1A]" size={32} />
                    </motion.div>
                    <motion.h3
                      className="text-4xl md:text-5xl font-bold text-[#E8DCC4] mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.h3>
                    <p className="text-[#E8DCC4]/80 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#E8DCC4] mb-4">Get In Touch</h2>
            <p className="text-[#E8DCC4]/80 text-lg">Let's create something beautiful together</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
                { icon: Mail, label: 'Email', value: 'info@elegantevents.com' },
                { icon: MapPin, label: 'Location', value: 'Mumbai, Maharashtra, India' },
                { icon: Calendar, label: 'Working Hours', value: 'Mon - Sat: 9:00 AM - 8:00 PM' }
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-[#2C2C2C]/50 border border-[#E8DCC4]/10"
                  >
                    <div className="w-12 h-12 bg-[#E8DCC4] rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#1A1A1A]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#E8DCC4] font-bold mb-1">{item.label}</h3>
                      <p className="text-[#E8DCC4]/70">{item.value}</p>
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
              <Card className="bg-[#2C2C2C] border-[#E8DCC4]/20">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <Input placeholder="Your Name" className="bg-[#1A1A1A] border-[#E8DCC4]/30 text-[#E8DCC4] placeholder:text-[#E8DCC4]/50 h-12" />
                    <Input type="email" placeholder="Your Email" className="bg-[#1A1A1A] border-[#E8DCC4]/30 text-[#E8DCC4] placeholder:text-[#E8DCC4]/50 h-12" />
                    <Input placeholder="Phone Number" className="bg-[#1A1A1A] border-[#E8DCC4]/30 text-[#E8DCC4] placeholder:text-[#E8DCC4]/50 h-12" />
                    <Textarea placeholder="Tell us about your event..." rows={5} className="bg-[#1A1A1A] border-[#E8DCC4]/30 text-[#E8DCC4] placeholder:text-[#E8DCC4]/50" />
                    <Button className="w-full bg-[#E8DCC4] text-[#1A1A1A] hover:bg-white font-semibold h-12 text-lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-[#E8DCC4] py-12 border-t border-[#E8DCC4]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Elegant Events</h3>
              <p className="text-[#E8DCC4]/70">Creating unforgettable moments for over a decade.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-[#E8DCC4]/70">
                <li className="flex items-center gap-2 hover:text-[#E8DCC4] transition-colors cursor-pointer">
                  <Heart size={16} className="text-[#E8DCC4]" />
                  <span>Wedding Planning</span>
                </li>
                <li className="flex items-center gap-2 hover:text-[#E8DCC4] transition-colors cursor-pointer">
                  <Camera size={16} className="text-[#E8DCC4]" />
                  <span>Photography</span>
                </li>
                <li className="flex items-center gap-2 hover:text-[#E8DCC4] transition-colors cursor-pointer">
                  <Megaphone size={16} className="text-[#E8DCC4]" />
                  <span>Media Production</span>
                </li>
                <li className="flex items-center gap-2 hover:text-[#E8DCC4] transition-colors cursor-pointer">
                  <Calendar size={16} className="text-[#E8DCC4]" />
                  <span>Event Management</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#E8DCC4]/70">
                <li className="hover:text-[#E8DCC4] transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-[#E8DCC4] transition-colors cursor-pointer">Portfolio</li>
                <li className="hover:text-[#E8DCC4] transition-colors cursor-pointer">Testimonials</li>
                <li className="hover:text-[#E8DCC4] transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, name: 'Facebook' },
                  { icon: Instagram, name: 'Instagram' },
                  { icon: Twitter, name: 'Twitter' }
                ].map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="w-10 h-10 bg-[#E8DCC4] rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <Icon className="text-[#1A1A1A]" size={20} />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="border-t border-[#E8DCC4]/20 pt-8 text-center text-[#E8DCC4]/70">
            <p>&copy; 2025 Elegant Events. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}