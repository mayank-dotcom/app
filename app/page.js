'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Camera, Heart, Megaphone, Menu, X, ChevronRight, Star, Calendar, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Heart,
      title: 'Marriage Planning',
      description: 'Complete wedding solutions for Shaadi, Mehendi, Sangeet, and all Indian wedding ceremonies. We bring your dream wedding to life with meticulous planning and execution.',
      image: 'https://images.unsplash.com/photo-1680490964889-67a5ab8d8b54?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MHx8fHwxNzc0NTE5NzkyfDA&ixlib=rb-4.1.0&q=85',
      features: ['Traditional Ceremonies', 'Venue Decoration', 'Catering Services', 'Guest Management']
    },
    {
      icon: Camera,
      title: 'Professional Photography',
      description: 'Capture your precious moments with our expert photography services. From weddings to baby showers, we preserve memories that last a lifetime.',
      image: 'https://images.unsplash.com/photo-1759767510137-5789ea9c919f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXJ8ZW58MHx8fHwxNzc0NTE5ODM3fDA&ixlib=rb-4.1.0&q=85',
      features: ['Wedding Photography', 'Event Coverage', 'Portrait Sessions', 'Cinematic Videos']
    },
    {
      icon: Megaphone,
      title: 'Media Enterprise',
      description: 'Elevate your brand with our comprehensive media services. Digital marketing, music video production, PR campaigns, and social event endorsements.',
      image: 'https://images.unsplash.com/photo-1575507479993-7bb702d5e966?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHw0fHxjYW1lcmElMjBtZWRpYXxlbnwwfHx8fDE3NzQ1MTk4NDF8MA&ixlib=rb-4.1.0&q=85',
      features: ['Digital Marketing', 'Music Videos', 'PR Campaigns', 'Social Media']
    }
  ]

  const gallery = [
    {
      url: 'https://images.unsplash.com/photo-1680490964562-60ee7fd82944?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MHx8fHwxNzc0NTE5NzkyfDA&ixlib=rb-4.1.0&q=85',
      category: 'Wedding'
    },
    {
      url: 'https://images.pexels.com/photos/1456669/pexels-photo-1456669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'Traditional'
    },
    {
      url: 'https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxtZWhlbmRpfGVufDB8fHx8MTc3NDUxOTc5OXww&ixlib=rb-4.1.0&q=85',
      category: 'Mehendi'
    },
    {
      url: 'https://images.unsplash.com/photo-1587012521796-6359d3678f2a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHxzYW5nZWV0fGVufDB8fHx8MTc3NDUxOTgwNHww&ixlib=rb-4.1.0&q=85',
      category: 'Sangeet'
    },
    {
      url: 'https://images.pexels.com/photos/7205410/pexels-photo-7205410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'Photography'
    },
    {
      url: 'https://images.unsplash.com/photo-1698199071311-bd5fe0e37449?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwyfHxjYW1lcmElMjBtZWRpYXxlbnwwfHx8fDE3NzQ1MTk4NDF8MA&ixlib=rb-4.1.0&q=85',
      category: 'Media'
    }
  ]

  const testimonials = [
    {
      name: 'Priya & Rahul',
      event: 'Wedding Ceremony',
      text: 'Our wedding was absolutely perfect! From the Mehendi to the Shaadi, every detail was beautifully executed. Thank you for making our dreams come true!',
      rating: 5
    },
    {
      name: 'Ananya Sharma',
      event: 'Baby Shower Photography',
      text: 'The photography team captured every precious moment. The photos are stunning and we will cherish them forever. Highly recommended!',
      rating: 5
    },
    {
      name: 'Vikram Enterprises',
      event: 'Digital Marketing Campaign',
      text: 'Their media services took our brand to the next level. Professional, creative, and results-driven. Excellent ROI on our campaign!',
      rating: 5
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5E6D3] to-[#E8DCC4]">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#2C2C2C]/95 backdrop-blur-md border-b border-[#E8DCC4]/20"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold text-[#E8DCC4]"
              whileHover={{ scale: 1.05 }}
            >
              Elegant Events
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#E8DCC4] hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
              <Button className="bg-[#E8DCC4] text-[#2C2C2C] hover:bg-[#F5E6D3]">
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#E8DCC4]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4"
            >
              {['Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-[#E8DCC4] hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="w-full bg-[#E8DCC4] text-[#2C2C2C] hover:bg-[#F5E6D3]">
                Book Now
              </Button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(44, 44, 44, 0.7), rgba(44, 44, 44, 0.7)), url('https://images.unsplash.com/photo-1680490964889-67a5ab8d8b54?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MHx8fHwxNzc0NTE5NzkyfDA&ixlib=rb-4.1.0&q=85')`
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-[#E8DCC4] mb-6"
              animate={{ 
                textShadow: [
                  '0 0 10px rgba(232, 220, 196, 0.3)',
                  '0 0 20px rgba(232, 220, 196, 0.5)',
                  '0 0 10px rgba(232, 220, 196, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Creating Unforgettable Moments
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-[#E8DCC4]/90 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Expert Wedding Planning • Professional Photography • Media Excellence
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-[#E8DCC4] text-[#2C2C2C] hover:bg-[#F5E6D3] text-lg px-8 py-6"
              >
                Explore Services <ChevronRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#E8DCC4] text-[#E8DCC4] hover:bg-[#E8DCC4] hover:text-[#2C2C2C] text-lg px-8 py-6"
              >
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#E8DCC4] rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-[#E8DCC4] rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#2C2C2C]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#E8DCC4] mb-4">Our Services</h2>
            <p className="text-[#E8DCC4]/80 text-lg max-w-2xl mx-auto">
              Comprehensive solutions for all your celebration and media needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-[#3A3A3A] border-[#E8DCC4]/20 overflow-hidden h-full group cursor-pointer">
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C] to-transparent" />
                      <motion.div 
                        className="absolute top-4 right-4 bg-[#E8DCC4] p-3 rounded-full"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="text-[#2C2C2C]" size={24} />
                      </motion.div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-[#E8DCC4] mb-3">{service.title}</h3>
                      <p className="text-[#E8DCC4]/80 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center text-[#E8DCC4]/70"
                          >
                            <ChevronRight size={16} className="mr-2 text-[#E8DCC4]" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6 bg-[#E8DCC4] text-[#2C2C2C] hover:bg-[#F5E6D3]">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-[#E8DCC4] to-[#F5E6D3]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4">Our Portfolio</h2>
            <p className="text-[#2C2C2C]/70 text-lg">
              Glimpses of celebrations we've brought to life
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-80"
              >
                <img
                  src={item.url}
                  alt={item.category}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-[#2C2C2C]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-center">
                    <p className="text-[#E8DCC4] text-xl font-bold">{item.category}</p>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      className="mt-2"
                    >
                      <Camera className="text-[#E8DCC4] mx-auto" size={32} />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#2C2C2C]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#E8DCC4] mb-4">Happy Clients</h2>
            <p className="text-[#E8DCC4]/80 text-lg">
              What our clients say about their experiences
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-[#3A3A3A] border-[#E8DCC4]/20 h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="text-[#E8DCC4] fill-[#E8DCC4]" size={20} />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-[#E8DCC4]/80 mb-4 italic">"{testimonial.text}"</p>
                    <div className="border-t border-[#E8DCC4]/20 pt-4">
                      <p className="text-[#E8DCC4] font-bold">{testimonial.name}</p>
                      <p className="text-[#E8DCC4]/60 text-sm">{testimonial.event}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-[#E8DCC4] to-[#F5E6D3]">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '500+', label: 'Events Completed' },
              { number: '1000+', label: 'Happy Clients' },
              { number: '50+', label: 'Awards Won' },
              { number: '10+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.h3
                  className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-[#2C2C2C]/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#2C2C2C]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#E8DCC4] mb-4">Get In Touch</h2>
            <p className="text-[#E8DCC4]/80 text-lg">
              Let's create something beautiful together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone className="text-[#E8DCC4]" size={24} />
                </motion.div>
                <div>
                  <h3 className="text-[#E8DCC4] font-bold mb-1">Phone</h3>
                  <p className="text-[#E8DCC4]/70">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="text-[#E8DCC4]" size={24} />
                </motion.div>
                <div>
                  <h3 className="text-[#E8DCC4] font-bold mb-1">Email</h3>
                  <p className="text-[#E8DCC4]/70">info@elegantevents.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <MapPin className="text-[#E8DCC4]" size={24} />
                </motion.div>
                <div>
                  <h3 className="text-[#E8DCC4] font-bold mb-1">Location</h3>
                  <p className="text-[#E8DCC4]/70">Mumbai, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Calendar className="text-[#E8DCC4]" size={24} />
                </motion.div>
                <div>
                  <h3 className="text-[#E8DCC4] font-bold mb-1">Working Hours</h3>
                  <p className="text-[#E8DCC4]/70">Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#3A3A3A] border-[#E8DCC4]/20">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        className="bg-[#2C2C2C] border-[#E8DCC4]/20 text-[#E8DCC4] placeholder:text-[#E8DCC4]/50"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="bg-[#2C2C2C] border-[#E8DCC4]/20 text-[#E8DCC4] placeholder:text-[#E8DCC4]/50"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Phone Number"
                        className="bg-[#2C2C2C] border-[#E8DCC4]/20 text-[#E8DCC4] placeholder:text-[#E8DCC4]/50"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Tell us about your event..."
                        rows={5}
                        className="bg-[#2C2C2C] border-[#E8DCC4]/20 text-[#E8DCC4] placeholder:text-[#E8DCC4]/50"
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-[#E8DCC4] text-[#2C2C2C] hover:bg-[#F5E6D3]">
                        Send Message
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
      <footer className="bg-[#1A1A1A] text-[#E8DCC4] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Elegant Events</h3>
              <p className="text-[#E8DCC4]/70">
                Creating unforgettable moments for over a decade.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-[#E8DCC4]/70">
                <li>Wedding Planning</li>
                <li>Photography</li>
                <li>Media Production</li>
                <li>Event Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#E8DCC4]/70">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <motion.div
                    key={social}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-10 h-10 bg-[#E8DCC4] rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-[#2C2C2C] font-bold text-xs">{social[0]}</span>
                  </motion.div>
                ))}
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