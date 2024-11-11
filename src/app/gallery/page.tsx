'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryItem {
  id: number;
  image: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, image: "/gallery/burger.jpg", title: 'Juicy Burger' },
  { id: 2, image: "/gallery/bunny.png", title: 'Bunny Chow' },
  { id: 3, image: "/gallery/burger-chips.jpg", title: 'Burger and Chips' },
  { id: 4, image: "/gallery/cars.jpg", title: 'Drive-in Experience' },
  { id: 5, image: "/gallery/chicken.png", title: 'Crispy Chicken' },
  { id: 6, image: "/gallery/chiproll.jpg", title: 'Chip Roll Special' },
  { id: 7, image: "/gallery/fish.png", title: 'Fish and Chips' },
  { id: 8, image: "/gallery/grilled-meat.jpg", title: 'Grilled Meat Platter' },
  { id: 9, image: "/gallery/kota.jpg", title: 'Kota Sandwich' },
  { id: 10, image: "/gallery/people.png", title: 'Happy Customers' },
  { id: 11, image: "/gallery/salad.jpg", title: 'Fresh Garden Salad' },
  { id: 12, image: "/gallery/platters.png", title: 'Assorted Platters' },
  { id: 13, image: "/gallery/pizza.png", title: 'Delicious Pizza' },
  { id: 14, image: "/gallery/sandwiches.jpg", title: 'Gourmet Sandwiches' },
  { id: 15, image: "/gallery/toast.jpg", title: 'Toasted Sandwich' },
  { id: 16, image: "/gallery/wraps.png", title: 'Tasty Wraps' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <div className="relative min-h-screen bg-[#323232] text-white">
      <section className="relative py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl mt-12 md:text-5xl font-bold mb-6">
              Our Delicious Gallery
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Feast your eyes on our mouthwatering dishes. From our classic fish and chips to our 
              juicy burgers, every item is prepared with care and the finest ingredients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <CategoryCard category="Fish & Chips" image="/gallery/fish.png" />
            <CategoryCard category="Burgers" image="/gallery/burger.jpg" />
            <CategoryCard category="Beverages" image="/featured/sides.jpg" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Featured Menu Items</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryItems.map((item, index) => (
              <GalleryItem 
                key={item.id} 
                item={item} 
                index={index} 
                setSelectedImage={setSelectedImage}
              />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">See More on Our Social Media</h3>
            <div className="flex justify-center space-x-4">
              <Link href="https://www.instagram.com/thechipshop_ormonde/?hl=en" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </Button>
              </Link>
              <Link href="https://web.facebook.com/thechipshopormonde/photos" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <AnimatePresence>
        {selectedImage !== null && (
          <FullScreenImage
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            galleryItems={galleryItems}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

interface CategoryCardProps {
  category: string;
  image: string;
}

function CategoryCard({ category, image }: CategoryCardProps) {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg h-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image 
        src={image} 
        alt={category} 
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h3 className="text-white text-xl font-bold">{category}</h3>
      </div>
    </motion.div>
  )
}

interface GalleryItemProps {
  item: GalleryItem;
  index: number;
  setSelectedImage: React.Dispatch<React.SetStateAction<number | null>>;
}

function GalleryItem({ item, index, setSelectedImage }: GalleryItemProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => setSelectedImage(item.id)}
    >
      <div className="relative aspect-square">
        <Image 
          src={item.image} 
          alt={item.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      </div>
    </motion.div>
  )
}

interface FullScreenImageProps {
  selectedImage: number;
  setSelectedImage: React.Dispatch<React.SetStateAction<number | null>>;
  galleryItems: GalleryItem[];
}

function FullScreenImage({ selectedImage, setSelectedImage, galleryItems }: FullScreenImageProps) {
  const handleClose = useCallback(() => setSelectedImage(null), [setSelectedImage])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') handleClose()
  }, [handleClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const currentItem = galleryItems.find((item) => item.id === selectedImage)

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
    >
      <div 
        className="relative w-full h-full flex items-center justify-center" 
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 text-white hover:bg-white/20 bg-black/50 rounded-full p-2 z-50"
          onClick={handleClose}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>
        <div className="relative w-full h-full max-w-4xl mx-auto flex items-center justify-center">
          <Image
            src={currentItem?.image || ''}
            alt={currentItem?.title || ''}
            layout="fill"
            objectFit="contain"
            className="select-none"
          />
          {currentItem && (
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-lg font-semibold bg-black bg-opacity-50 inline-block px-4 py-2 rounded">
                {currentItem.title}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}