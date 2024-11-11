'use client'

import { useState, ChangeEvent } from 'react'
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Coffee, Pizza, Sandwich } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

interface MenuItem {
  name: string;
  price: string;
  category: string;
  description?: string;
}

const menuItems: MenuItem[] = [
  // Fries
  { name: "Chips (Small)", price: "R 45,00", category: "Fries" },
  { name: "Russian & Chips", price: "R 78,00", category: "Fries" },
  { name: "Vienna & Chips", price: "R 75,00", category: "Fries" },
  { name: "Frikadel & Chips", price: "R 72,00", category: "Fries" },
  { name: "Small Fish & Chips", price: "R 75,00", category: "Fries" },
  { name: "Chips (Medium)", price: "R 75,00", category: "Fries" },
  { name: "Chips (Large)", price: "R 105,00", category: "Fries" },
  { name: "Chips Extra (Large)", price: "R 145,00", category: "Fries" },
  { name: "Polony & Chips", price: "R 72,00", category: "Fries" },
  { name: "4 French Polony & Chips", price: "R 72,00", category: "Fries" },
  { name: "Big Fish & Chips", price: "R 125,00", category: "Fries" },

  // Roti
  { name: "Steak Roti & Chips", price: "R 115,00", category: "Roti" },
  { name: "Chicken Roti & Chips", price: "R 115,00", category: "Roti" },
  { name: "Rotis (Pack of 5)", price: "R 60,00", category: "Roti" },
  { name: "Plain Roti", price: "R 12,00", category: "Roti" },

  // Schwarmas
  { name: "Chicken Shwarma & Chips", price: "R 105,00", category: "Schwarmas" },
  { name: "Steak Schwarma & Chips", price: "R 105,00", category: "Schwarmas" },

  // Bunny Chows
  { name: "Quarter Steak Bunny Special", price: "R 98,00", category: "Bunny Chows" },
  { name: "Quarter Chip Bunny", price: "R 40,00", category: "Bunny Chows" },
  { name: "Quarter School Boy", price: "R 50,00", category: "Bunny Chows" },
  { name: "Quarter Patti Bunny", price: "R 85,00", category: "Bunny Chows" },
  { name: "Quarter Polony Bunny Special", price: "R 85,00", category: "Bunny Chows" },
  { name: "Quarter Vienna Bunny Special", price: "R 90,00", category: "Bunny Chows" },
  { name: "Quarter Russian Bunny Special", price: "R 95,00", category: "Bunny Chows" },
  { name: "Quarter Chicken Bunny Special", price: "R 98,00", category: "Bunny Chows" },

  // Breakfast
  { name: "Breakfast Special", price: "R 95,00", category: "Breakfast", description: "2 eggs, 2 toasts, 1 Russian, 1 patti, cheese and chips." },

  // Toasted Sandwiches
  { name: "Cheese Sandwich", price: "R 36,00", category: "Toasted Sandwiches" },
  { name: "Cheese & Tomato Sandwich", price: "R 40,00", category: "Toasted Sandwiches" },
  { name: "Cheese & Chips Sandwich", price: "R 58,00", category: "Toasted Sandwiches" },
  { name: "Polony & Cheese Sandwich", price: "R 45,00", category: "Toasted Sandwiches" },
  { name: "Polony Special Sandwich", price: "R 80,00", category: "Toasted Sandwiches" },
  { name: "Steak Sandwich", price: "R 68,00", category: "Toasted Sandwiches" },
  { name: "Steak & Cheese Sandwich", price: "R 72,00", category: "Toasted Sandwiches" },
  { name: "Steak Special Sandwich", price: "R 98,00", category: "Toasted Sandwiches", description: "Toasted Steak, Chip and Cheese" },
  { name: "Chicken & Mayo Sandwich", price: "R 68,00", category: "Toasted Sandwiches" },
  { name: "Chicken Special Sandwich", price: "R 98,00", category: "Toasted Sandwiches" },
  { name: "Frikadel Special Sandwich", price: "R 98,00", category: "Toasted Sandwiches" },
  { name: "Vienna Special Sandwich", price: "R 92,00", category: "Toasted Sandwiches" },
  { name: "Russian Special Sandwich", price: "R 92,00", category: "Toasted Sandwiches" },
  { name: "French Polony Special Sandwich", price: "R 78,00", category: "Toasted Sandwiches" },

  // Dagwoods
  { name: "Steak Dagwood", price: "R 125,00", category: "Dagwoods", description: "Chips inside." },
  { name: "Chicken Dagwood", price: "R 125,00", category: "Dagwoods", description: "Chips inside." },
  { name: "Patti Dagwood", price: "R 120,00", category: "Dagwoods", description: "Chips inside." },
  { name: "Frikadel Dagwood", price: "R 126,00", category: "Dagwoods", description: "Chips inside." },

  // Combos
  { name: "Combo 1 (2 People)", price: "R 150,00", category: "Combos", description: "Chips, 10 polony, 1 Russian and 1 Vienna." },
  { name: "Combo 2 (4 People)", price: "R 290,00", category: "Combos", description: "Chips, 10 polony, 2 Russians, 2 viennas, 1 frikadel and 1 fish." },
  { name: "Combo 3 (8-10 People)", price: "R 445,00", category: "Combos", description: "Chips, 15 polony, 2 Russians, 2 viennas, 1 frikadel and 1 fish." },

  // Rolls
  { name: "Chip Roll", price: "R 50,00", category: "Rolls" },
  { name: "Polony Special Roll", price: "R 85,00", category: "Rolls", description: "Polony, chips, and cheese on a foot-long roll" },
  { name: "Chip & Cheese Roll", price: "R 58,00", category: "Rolls" },
  { name: "Russian Roll", price: "R 47,00", category: "Rolls" },
  { name: "Russian Special Roll", price: "R 95,00", category: "Rolls" },
  { name: "Hotdog", price: "R 47,00", category: "Rolls" },
  { name: "Vienna Special Roll", price: "R 92,00", category: "Rolls" },
  { name: "Steak Special Roll", price: "R 105,00", category: "Rolls" },
  { name: "Frikadel Special Roll", price: "R 100,00", category: "Rolls" },
  { name: "Chicken Special Roll", price: "R 105,00", category: "Rolls" },
  { name: "Wors Roll", price: "R 52,00", category: "Rolls" },
  { name: "Wors Special Roll", price: "R 95,00", category: "Rolls" },

  // Burgers
  { name: "Fish Burger Special", price: "R 100,00", category: "Burgers" },
  { name: "Cheeseburger & Chips", price: "R 95,00", category: "Burgers" },
  { name: "Burger Special", price: "R 95,00", category: "Burgers" },
  { name: "Chicken Cheeseburger & Chips", price: "R 95,00", category: "Burgers" },
  { name: "Chicken Burger Special", price: "R 95,00", category: "Burgers" },
  { name: "Tikka Cheeseburger & Chips", price: "R 98,00", category: "Burgers" },
  { name: "Tikka Burger Special", price: "R 95,00", category: "Burgers" },
  { name: "Frikadel Burger & Chips", price: "R 92,00", category: "Burgers" },
  { name: "Frikadel Burger Special", price: "R 98,00", category: "Burgers" },
  { name: "Steak Burger & Chips", price: "R 98,00", category: "Burgers" },
  { name: "Steak Burger Special", price: "R 92,00", category: "Burgers" },
  { name: "Fish Burger & Chips", price: "R 105,00", category: "Burgers" },

  // Specialties
  { name: "Steak Round Special", price: "R 130,00", category: "Specialties", description: "Steak burger, cheese, chips, patti, polony, French polony, and garnish." },
  { name: "Southside Special", price: "R 105,00", category: "Specialties", description: "Toasted steak, cheese, patti, and egg." },
  { name: "Wits Special", price: "R 115,00", category: "Specialties", description: "Toasted steak, cheese, chips, polony, French polony, and salad." },
  { name: "Handy Special", price: "R 98,00", category: "Specialties", description: "Toasted chicken and mayo, chips, and French polony." },
  { name: "Freeway Special", price: "R 105,00", category: "Specialties", description: "1 packet chips, steak, cheese, and salad." },
  { name: "Nads Special", price: "R 105,00", category: "Specialties", description: "Steak chip roll, cheese, polony, and salad." },

  // Grills
  { name: "Tikka Fillet Box", price: "R 98,00", category: "Grills", description: "Grilled tikka fillet pieces, chips, salad, and 1 roll." },
  { name: "Family Pack", price: "R 255,00", category: "Grills", description: "Full flame-grilled chicken, chips, salad, and 4 rolls." },
  { name: "Full AK", price: "R 370,00", category: "Grills" },
  { name: "T-Bone Special", price: "R 210,00", category: "Grills", description: "300g T-bone, chips, salad, and 1 roll." },
  { name: "Mixed Grill", price: "R 265,00", category: "Grills", description: "300g T-bone, quarter chicken, 1 patti, 1 wors, 2 eggs, and 2 rolls." },
  { name: "Quarter Chicken & Chips, Salad & 1 Roll", price: "R 95,00", category: "Grills" },
  { name: "Half AK", price: "R 240,00", category: "Grills" },

  // Pizzas
  { name: "BBQ Chicken Pizza", price: "R 145,00", category: "Pizzas", description: "Chicken, mushrooms, peppers, and origanum." },
  { name: "Steak Pizza", price: "R 152,00", category: "Pizzas", description: "Steak, mushrooms, peppers, and origanum." },
  { name: "Moe&apos;s Special Pizza", price: "R 205,00", category: "Pizzas", description: "Steak, chips, chillies, Russian, mushrooms, and peppers." },
  { name: "Margherita Pizza", price: "R 110,00", category: "Pizzas", description: "Cheese and tomato." },
  { name: "Vegetarian Pizza", price: "R 125,00", category: "Pizzas", description: "Mushroom, pepper, tomato chunks, and origanum." },
  { name: "Chicken Tikka Pizza", price: "R 152,00", category: "Pizzas", description: "Chicken, peppers, origanum, green chili, mushroom, and tikka sauce." },
  { name: "Chicken Supreme Pizza", price: "R 172,00", category: "Pizzas", description: "Chicken, polony, French polony, peppers, feta, and green chili." },
  { name: "Four Seasons Pizza", price: "R 175,00", category: "Pizzas", description: "Vienna, polony, salami, Russians, mushrooms, and origanum." },
  { name: "Chip Shop Special Pizza", price: "R 155,00", category: "Pizzas", description: "Steak, polony, salami, mushrooms, peppers, olives, feta, and peppadews." },

  // Drinks
  { name: "Kara Mocktails", price: "R 38,00", category: "Drinks", description: "275ml (Various Flavours)" },
  { name: "Coke 440ml", price: "R 28,00", category: "Drinks" },
  { name: "Fanta Orange 440ml", price: "R 28,00", category: "Drinks" },
  { name: "Cream Soda 440ml", price: "R 28,00", category: "Drinks" },
  { name: "Stoney 440ml", price: "R 28,00", category: "Drinks" },
  { name: "Lemon Twist 440ml", price: "R 28,00", category: "Drinks" },
  { name: "Energade 500ml", price: "R 30,00", category: "Drinks" },
  { name: "Still Water 500ml", price: "R 16,00", category: "Drinks" },
  { name: "Aquelle Flavored Water 500ml",
    price: "R 20,00",
    category: "Drinks"
  },
  { name: "Red Bull 250ml", price: "R 40,00", category: "Drinks" },
  { name: "Monster Energy Drink 500ml", price: "R 35,00", category: "Drinks" },
  { name: "Fruitree Guava 330ml", price: "R 30,00", category: "Drinks" },
]

const categoryIcons: Record<string, React.ReactNode> = {
  "Fries": <Utensils className="w-6 h-6" />,
  "Roti": <Utensils className="w-6 h-6" />,
  "Schwarmas": <Utensils className="w-6 h-6" />,
  "Bunny Chows": <Utensils className="w-6 h-6" />,
  "Breakfast": <Coffee className="w-6 h-6" />,
  "Toasted Sandwiches": <Sandwich className="w-6 h-6" />,
  "Dagwoods": <Sandwich className="w-6 h-6" />,
  "Combos": <Utensils className="w-6 h-6" />,
  "Rolls": <Sandwich className="w-6 h-6" />,
  "Burgers": <Sandwich className="w-6 h-6" />,
  "Specialties": <Utensils className="w-6 h-6" />,
  "Grills": <Utensils className="w-6 h-6" />,
  "Pizzas": <Pizza className="w-6 h-6" />,
  "Drinks": <Coffee className="w-6 h-6" />,
}

const categoryImages: Record<string, string> = {
  "Fries": "/menu/fries.jpg",
  "Roti": "/menu/roti.jpg",
  "Schwarmas": "/featured/shawarma.png",
  "Bunny Chows": "/gallery/bunny.png",
  "Breakfast": "/menu/breakfast.jpg",
  "Toasted Sandwiches": "/gallery/sandwiches.jpg",
  "Dagwoods": "/gallery/toast.jpg",
  "Combos": "/gallery/platters.png",
  "Rolls": "/gallery/chiproll.jpg",
  "Burgers": "/gallery/burger.jpg",
  "Specialties": "/gallery/chicken.png",
  "Grills": "/gallery/grilled-meat.jpg",
  "Pizzas": "/gallery/pizza.png",
  "Drinks": "/menu/cola.jpg",
}

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = menuItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, MenuItem[]>)

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/shop/food-menu.jpg)' }}>
      <div className="p-6 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 mt-20 text-white shadow-text">The Chip Shop&apos;s Delicious Menu</h1>
        <div className="mb-8">
          <Input
            type="search"
            placeholder="Search our tasty treats..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full max-w-md mx-auto text-lg p-4 border-2 border-orange-300 focus:border-red-500 rounded-full shadow-lg"
          />
        </div>
        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          <div className="space-y-12">
            {Object.entries(groupedItems).map(([category, items]) => (
              <Card key={category} className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 p-4">
                  <CardTitle className="text-2xl md:text-3xl font-semibold text-white flex items-center">
                    {categoryIcons[category]}
                    <span className="ml-3">{category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="relative w-full h-96 mb-6 rounded-xl overflow-hidden">
                    <Image
                      src={categoryImages[category]}
                      alt={`${category} category`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((item, index) => (
                      <Card key={index} className="bg-white/90 hover:bg-white transition-colors duration-200">
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg font-medium text-gray-800">{item.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="flex justify-between items-center">
                            <Badge variant="secondary" className="bg-orange-100 text-orange-600">
                              {item.price}
                            </Badge>
                            {item.description && (
                              <p className="text-sm text-gray-600 mt-2 italic">{item.description}</p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}