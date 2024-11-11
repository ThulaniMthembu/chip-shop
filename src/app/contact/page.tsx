'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { motion } from "framer-motion"
import { Clock, MapPin, Phone, Mail, Facebook, Instagram, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Basic implementations of Input and Textarea components
const Input = ({ id, value, onChange, required, className, type = "text" }: {
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  type?: string;
}) => (
  <input
    id={id}
    type={type}
    value={value}
    onChange={onChange}
    required={required}
    className={`w-full p-2 rounded ${className}`}
  />
)

const Textarea = ({ id, value, onChange, required, className, rows = 4 }: {
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
  rows?: number;
}) => (
  <textarea
    id={id}
    value={value}
    onChange={onChange}
    required={required}
    className={`w-full p-2 rounded ${className}`}
    rows={rows}
  />
)

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <motion.div
      className="min-h-screen bg-[#323232] text-white py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl mt-12 font-bold text-center mb-12 text-white">Get in Touch</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="bg-gray-800 shadow-xl border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-6 text-white">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-200">Phone</h3>
                  <p className="text-gray-300">011 496 2888</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-200">Email</h3>
                  <p className="text-gray-300">info@thechipshop.co.za</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-200">Address</h3>
                  <p className="text-gray-300">Shop 3, Tiffany&apos;s Centre, Corner Rifle Range & Hendrick Potgieter Road, Ormonde, Johannesburg</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-200">Hours</h3>
                  <ul className="text-gray-300">
                    <li>Monday - Thursday: 9:00 am – 7:30 pm</li>
                    <li>Friday - Saturday: 9:00 am – 8:00 pm</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-gray-800 shadow-xl border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-6 text-white">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">Name</label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    required
                    className="bg-gray-700 text-white border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    required
                    className="bg-gray-700 text-white border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">Message</label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                    required
                    className="bg-gray-700 text-white border-gray-600"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <Card className="mt-8 bg-gray-800 shadow-xl overflow-hidden border-gray-700">
          <CardContent className="p-0 h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.4700084466826!2d27.996115075085388!3d-26.246405065693512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9509217b7bc413%3A0xb75b81282c07b063!2sThe%20Chip%20Shop!5e0!3m2!1sen!2sza!4v1731121439431!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Chip Shop Location"
            />
          </CardContent>
        </Card>

        {/* Social Media and CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-6">Follow Us</h2>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.facebook.com/thechipshopormonde/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full transition-colors duration-300 flex items-center justify-center"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/thechipshop_ormonde/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram profile"
              className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white w-12 h-12 rounded-full transition-colors duration-300 flex items-center justify-center"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors duration-300">
            Visit Us Today
          </Button>
        </div>
      </div>
    </motion.div>
  )
}