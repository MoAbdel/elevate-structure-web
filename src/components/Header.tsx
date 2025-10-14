'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Phone, Mail, Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { COMPANY_INFO } from '@/lib/constants'

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Wildfire Support Banner */}
      <div className="sticky top-0 z-50 bg-orange-600 text-white py-2 px-4 text-center text-sm">
        <div className="container mx-auto max-w-7xl flex items-center justify-center gap-2">
          <Flame className="h-4 w-4" />
          <span>We&apos;re providing dedicated support to homeowners affected by the LA wildfires.</span>
          <Link href="/fire" className="underline hover:no-underline ml-2 font-medium">
            Learn More
          </Link>
        </div>
      </div>

      <header className="sticky top-8 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-12 flex items-center justify-center">
            <svg viewBox="0 0 120 100" className="h-8 w-12" fill="none">
              <defs>
                <linearGradient id="houseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f5e6b3" />
                  <stop offset="100%" stopColor="#e6d299" />
                </linearGradient>
                <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4a5d23" />
                  <stop offset="100%" stopColor="#3a4a1a" />
                </linearGradient>
              </defs>

              {/* House structure (left side) */}
              <path d="M10 85 L10 50 L30 30 L50 50 L50 85 Z" fill="url(#houseGradient)" stroke="#d4c085" strokeWidth="0.5"/>

              {/* House roof peak */}
              <path d="M15 50 L30 35 L45 50 Z" fill="#e6d299" stroke="#d4c085" strokeWidth="0.5"/>

              {/* House window */}
              <rect x="20" y="60" width="8" height="8" fill="#4a5d23" stroke="#3a4a1a" strokeWidth="0.5"/>
              <line x1="24" y1="60" x2="24" y2="68" stroke="#f5e6b3" strokeWidth="0.5"/>
              <line x1="20" y1="64" x2="28" y2="64" stroke="#f5e6b3" strokeWidth="0.5"/>

              {/* Main building (right side) */}
              <path d="M45 85 L45 15 L45 10 L105 15 L105 85 Z" fill="url(#buildingGradient)" stroke="#3a4a1a" strokeWidth="0.5"/>

              {/* Building windows grid (5 rows, 3 columns) */}
              <rect x="55" y="22" width="4" height="4" fill="#f5e6b3"/>
              <rect x="65" y="22" width="4" height="4" fill="#f5e6b3"/>
              <rect x="75" y="22" width="4" height="4" fill="#f5e6b3"/>

              <rect x="55" y="32" width="4" height="4" fill="#f5e6b3"/>
              <rect x="65" y="32" width="4" height="4" fill="#f5e6b3"/>
              <rect x="75" y="32" width="4" height="4" fill="#f5e6b3"/>

              <rect x="55" y="42" width="4" height="4" fill="#f5e6b3"/>
              <rect x="65" y="42" width="4" height="4" fill="#f5e6b3"/>
              <rect x="75" y="42" width="4" height="4" fill="#f5e6b3"/>

              <rect x="55" y="52" width="4" height="4" fill="#f5e6b3"/>
              <rect x="65" y="52" width="4" height="4" fill="#f5e6b3"/>
              <rect x="75" y="52" width="4" height="4" fill="#f5e6b3"/>

              <rect x="55" y="62" width="4" height="4" fill="#f5e6b3"/>
              <rect x="65" y="62" width="4" height="4" fill="#f5e6b3"/>
              <rect x="75" y="62" width="4" height="4" fill="#f5e6b3"/>
            </svg>
          </div>
          <span className="font-bold text-lg hidden sm:inline-block">
            {COMPANY_INFO.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Contact Info & CTA */}
        <div className="flex items-center space-x-2">
          {/* Phone Number (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4 mr-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Primary CTA */}
          <Button
            onClick={() => scrollToSection('#contact')}
            className="hidden sm:inline-flex"
          >
            Get Free Consultation
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-base font-medium transition-colors hover:text-primary"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="border-t pt-6 space-y-4">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center space-x-2 text-base font-medium hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center space-x-2 text-base font-medium hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>

                {/* Mobile CTA */}
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full"
                  size="lg"
                >
                  Get Free Consultation
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    </>
  )
}