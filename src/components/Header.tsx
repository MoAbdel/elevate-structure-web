'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Phone, Mail } from 'lucide-react'
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">EED</span>
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
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden xl:inline">Email Us</span>
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
  )
}