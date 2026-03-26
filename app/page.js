'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Camera, Heart, Megaphone, Menu, X, ChevronRight, Star, Calendar, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  // Hero carousel images
  const heroImages = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2070'
  ]

  // Autoplay carousel effect
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
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
      features: ['Traditional Ceremonies', 'Venue Decoration', 'Catering Services', 'Guest Management']
    },
    {
      icon: Camera,
      title: 'Professional Photography',
      description: 'Capture your precious moments with our expert photography services. From weddings to events, we preserve memories that last a lifetime.',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800',
      features: ['Wedding Photography', 'Event Coverage', 'Portrait Sessions', 'Cinematic Videos']
    },
    {
      icon: Megaphone,
      title: 'Media Enterprise',
      description: 'Elevate your brand with our comprehensive media services. Digital marketing, video production, PR campaigns, and social event endorsements.',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800',
      features: ['Digital Marketing', 'Music Videos', 'PR Campaigns', 'Social Media']
    }
  ]

  const gallery = [
    {
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800',
      category: 'Wedding',
      type: 'Traditional Ceremony'
    },
    {
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800',
      category: 'Celebration',
      type: 'Indian Wedding'
    },
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
      category: 'Ceremony',
      type: 'Mehendi Function'
    },
    {
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800',
      category: 'Photography',
      type: 'Event Coverage'
    },
    {
      url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800',
      category: 'Professional',
      type: 'Photo Shoot'
    },
    {
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800',
      category: 'Media',
      type: 'Production'
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
            
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#E8DCC4] hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.a>
              ))}
              <Button className="bg-[#E8DCC4] text-[#2C2C2C] hover:bg-[#F5E6D3]">
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
              {['Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-[#E8DCC4]" onClick={() => setIsMenuOpen(false)}>
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

      {/* Hero Section with Carousel */}
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
              <div className="absolute inset-0 bg-gradient-to-b from-[#2C2C2C]/70 via-[#2C2C2C]/60 to-[#2C2C2C]/80" />
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
              className="text-5xl md:text-7xl font-bold text-[#E8DCC4] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Creating Unforgettable Moments
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-[#E8DCC4]/90 mb-8 max-w-3xl mx-auto"
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
              <Button size="lg" className="bg-[#E8DCC4] text-[#2C2C2C] hover:bg-[#F5E6D3] text-lg px-8 py-6">
                Explore Services <ChevronRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#E8DCC4] text-[#E8DCC4] hover:bg-[#E8DCC4] hover:text-[#2C2C2C] text-lg px-8 py-6">
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
          <ChevronRight className="text-[#E8DCC4] rotate-90" size={32} />
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#2C2C2C]">
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
                  <Card className="bg-[#3A3A3A] border-[#E8DCC4]/20 overflow-hidden h-full group">
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C] to-transparent" />
                      <div className="absolute top-4 right-4 bg-[#E8DCC4] p-3 rounded-full">
                        <Icon className="text-[#2C2C2C]" size={24} />
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
                      <Button className="w-full bg-[#E8DCC4] text-[#2C2C2C] hover:bg-[#F5E6D3]">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-lg shadow-lg group h-80"
              >
                <img src={item.url} alt={item.category} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C] via-transparent to-transparent opacity-60" />
                <motion.div
                  className="absolute inset-0 bg-[#2C2C2C]/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Camera className="text-[#E8DCC4] mb-3" size={40} />
                  <p className="text-[#E8DCC4] text-xl font-bold">{item.category}</p>
                  <p className="text-[#E8DCC4]/70 text-sm">{item.type}</p>
                </motion.div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#E8DCC4] text-[#2C2C2C] px-3 py-1 rounded-full text-sm font-bold">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
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
            <p className="text-[#E8DCC4]/80 text-lg">What our clients say about their experiences</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-[#3A3A3A] border-[#E8DCC4]/20 h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-[#E8DCC4] fill-[#E8DCC4]" size={20} />
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
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-[#E8DCC4] to-[#F5E6D3]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Events Completed' },
              { number: '1000+', label: 'Happy Clients' },
              { number: '50+', label: 'Awards Won' },
              { number: '10+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-2">{stat.number}</h3>
                <p className="text-[#2C2C2C]/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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
            <p className="text-[#E8DCC4]/80 text-lg">Let's create something beautiful together</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <Phone className="text-[#E8DCC4]" size={24} />
                <div>
                  <h3 className="text-[#E8DCC4] font-bold mb-1">Phone</h3>
                  <p className="text-[#E8DCC4]/70">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-[#E8DCC4]" size={24} />
                <div>
                  <h3 className="text-[#E8DCC4] font-bold mb-1">Email</h3>
                  <p className="text-[#E8DCC4]/70">info@elegantevents.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-[#E8DCC4]" size={24} />
                <div>
                  <h3 className="text-[#E8DCC4] font-bold mb-1">Location</h3>
                  <p className="text-[#E8DCC4]/70">Mumbai, Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Calendar className="text-[#E8DCC4]" size={24} />
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
                    <Input placeholder="Your Name" className="bg-[#2C2C2C] border-[#E8DCC4]/20 text-[#E8DCC4] placeholder:text-[#E8DCC4]/50" />
                    <Input type="email" placeholder="Your Email" className="bg-[#2C2C2C] border-[#E8DCC4]/20 text-[#E8DCC4] placeholder:text-[#E8DCC4]/50" />
                    <Input placeholder="Phone Number" className="bg-[#2C2C2C] border-[#E8DCC4]/20 text-[#E8DCC4] placeholder:text-[#E8DCC4]/50" />
                    <Textarea placeholder="Tell us about your event..." rows={5} className="bg-[#2C2C2C] border-[#E8DCC4]/20 text-[#E8DCC4] placeholder:text-[#E8DCC4]/50" />
                    <Button className="w-full bg-[#E8DCC4] text-[#2C2C2C] hover:bg-[#F5E6D3]">Send Message</Button>
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
              <p className="text-[#E8DCC4]/70">Creating unforgettable moments for over a decade.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-[#E8DCC4]/70">
                <li className="flex items-center gap-2">
                  <Heart size={16} className="text-[#E8DCC4]" />
                  <span>Wedding Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <Camera size={16} className="text-[#E8DCC4]" />
                  <span>Photography</span>
                </li>
                <li className="flex items-center gap-2">
                  <Megaphone size={16} className="text-[#E8DCC4]" />
                  <span>Media Production</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#E8DCC4]" />
                  <span>Event Management</span>
                </li>
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
                <motion.div whileHover={{ scale: 1.2 }} className="w-10 h-10 bg-[#E8DCC4] rounded-full flex items-center justify-center cursor-pointer">
                  <Facebook className="text-[#2C2C2C]" size={20} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="w-10 h-10 bg-[#E8DCC4] rounded-full flex items-center justify-center cursor-pointer">
                  <Instagram className="text-[#2C2C2C]" size={20} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="w-10 h-10 bg-[#E8DCC4] rounded-full flex items-center justify-center cursor-pointer">
                  <Twitter className="text-[#2C2C2C]" size={20} />
                </motion.div>
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