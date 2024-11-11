"use client"

import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import HamburgerButton from "@/components/hamburger-button"

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [logoSize, setLogoSize] = useState(80)
  const [headerHeight, setHeaderHeight] = useState(80)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const newSize = Math.max(60, 80 - scrollPosition / 10)
      setIsScrolled(scrollPosition > 0)
      setLogoSize(newSize)
      setHeaderHeight(newSize)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const linkStyles = cn(
    "group relative inline-flex items-center justify-center px-2 text-base font-medium uppercase tracking-wide transition-colors",
    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-red-600 after:transition-transform after:duration-300 after:ease-out",
    "hover:after:scale-x-100"
  )

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-white/90 border-b shadow-sm backdrop-blur-sm shadow-gray-200/50"
          : "bg-transparent"
      )}
      style={{
        height: `${headerHeight}px`,
      }}
    >
      <div 
        className={cn(
          "container flex items-center justify-between transition-all duration-300",
          "px-4 sm:px-6 lg:px-8"
        )}
        style={{
          height: `${headerHeight}px`,
        }}
      >
        <Link href="/" className="flex items-center">
          <div className={cn(
            "flex items-center justify-center transition-all duration-300 overflow-hidden",
            isScrolled ? "bg-red-600" : "bg-transparent"
          )}
          style={{
            width: `${logoSize}px`,
            height: `${logoSize}px`,
          }}
          >
            <Image
              src="/logo.png"
              alt="The Chip Shop Logo"
              width={80}
              height={80}
              className="h-full w-full object-cover transition-all duration-300"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center justify-between gap-4 lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-2 lg:gap-4">
              {[
                { href: "/", label: "Home" },
                { href: "/#about", label: "About" },
                { href: "/menu", label: "Menu" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      linkStyles,
                      "text-sm lg:text-base",
                      isScrolled 
                        ? "text-gray-600 hover:text-gray-900" 
                        : "text-white hover:text-gray-200",
                      isActive(item.href) && (isScrolled 
                        ? "text-gray-900 after:scale-x-100" 
                        : "text-white after:scale-x-100")
                    )}
                    style={{
                      height: `${headerHeight}px`,
                    }}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-2 lg:gap-4">
            <Link 
              href="https://www.facebook.com/thechipshopormonde/" 
              target="_blank"
              className={cn(
                linkStyles,
                "h-full px-2 lg:px-4 text-sm lg:text-base",
                isScrolled
                  ? "text-blue-600 hover:text-blue-700"
                  : "text-white hover:text-gray-200"
              )}
            >
              <span className="font-bold">FACEBOOK</span>
            </Link>
            <Link 
              href="https://www.instagram.com/thechipshop_ormonde/?hl=en" 
              target="_blank"
              className={cn(
                linkStyles,
                "h-full px-2 lg:px-4 text-sm lg:text-base",
                isScrolled
                  ? "text-pink-600 hover:text-pink-700"
                  : "text-white hover:text-gray-200"
              )}
            >
              <span className="font-bold">INSTAGRAM</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <HamburgerButton
              isOpen={isMenuOpen}
              onClick={toggleMenu}
              className={cn(
                "lg:hidden transition-colors",
                isScrolled
                  ? "text-gray-800 hover:text-gray-900"
                  : "text-white hover:text-gray-200"
              )}
            />
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-[300px] sm:max-w-[400px] p-0">
            <div className="flex flex-col h-full bg-white">
              <div className="flex items-center justify-between p-4 border-b">
                <SheetTitle className="text-xl font-bold text-gray-900">Menu</SheetTitle>
              </div>
              <nav className="flex-grow overflow-y-auto">
                <div className="flex flex-col py-4">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/#about", label: "About" },
                    { href: "/menu", label: "Menu" },
                    { href: "/gallery", label: "Gallery" },
                    { href: "/contact", label: "Contact" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "px-4 py-2 text-base font-medium transition-colors",
                        "hover:bg-gray-100 hover:text-red-600",
                        isActive(item.href) ? "text-red-600" : "text-gray-900"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </nav>
              <div className="flex flex-col gap-4 p-4 border-t">
                <Link 
                  href="https://www.facebook.com/thechipshopormonde/" 
                  target="_blank"
                  className={cn(
                    linkStyles,
                    "h-12 flex items-center justify-center",
                    "text-blue-600 hover:text-blue-700"
                  )}
                >
                  <span className="font-bold">FACEBOOK</span>
                </Link>
                <Link 
                  href="https://www.instagram.com/thechipshop_ormonde/?hl=en" 
                  target="_blank"
                  className={cn(
                    linkStyles,
                    "h-12 flex items-center justify-center",
                    "text-pink-600 hover:text-pink-700"
                  )}
                >
                  <span className="font-bold">INSTAGRAM</span>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}