import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col items-start md:items-start space-y-4">
            <div className="bg-white p-2 rounded-lg">
              <Image
                src="/logo-image.png"
                alt="The Chip Shop Logo"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold">The Chip Shop</h2>
            <p className="text-sm">Est. 1999</p>
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              Halaal Certified
            </span>
          </div>
          
          <div className="flex flex-col space-y-4 items-start md:items-start">
            <h3 className="text-lg font-semibold">Contact & Location</h3>
            <p className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>011 496 2888</span>
            </p>
            <p className="flex items-start space-x-2 text-start md:text-left">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
              <span>
                Shop 6, Tiffani Centre<br />
                C/o Alwen & Dorado Ave,<br />
                Ormonde, Johannesburg, 2091
              </span>
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 items-start md:items-start">
            <h3 className="text-lg font-semibold">Opening Hours</h3>
            <p className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Mon - Thu: 9am – 7:30pm</span>
            </p>
            <p className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Fri - Sat: 9am – 8pm</span>
            </p>
            <p className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Sun: Closed</span>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-red-500 flex flex-col md:flex-row justify-between items-start">
          <div className="flex space-x-4 md:mb-0 mb-3">
            <Link
              href="https://facebook.com/thechipshopormonde"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/thechipshop_ormonde/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
          <p className="text-sm text-start md:text-right">
            © {new Date().getFullYear()} The Chip Shop. All rights reserved.
          </p>
        </div>
        
        <div className="mt-4 mb-3 text-center text-sm text-white-500">
          <Link href="https://devmajxr.co.za" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-[#fca311] transition-colors">
            website by Dev-Majxr
          </Link>
        </div>
      </div>
    </footer>
  )
}