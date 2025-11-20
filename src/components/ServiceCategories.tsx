'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function ServiceCategories() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const categories = [
    {
      id: 'residential',
      title: 'RESIDENTIAL',
      subtitle: 'SINGLE AND MULTI-FAMILY',
      image: '/residential-category.jpg',
      description: 'Expert structural engineering for homes, ADUs, and multi-family residential projects',
    },
    {
      id: 'commercial',
      title: 'COMMERCIAL AND',
      subtitle: 'INDUSTRIAL',
      image: '/commercial-category.jpg',
      description: 'Comprehensive engineering solutions for commercial buildings and industrial facilities',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative h-[500px] md:h-[600px] rounded-lg overflow-hidden cursor-pointer"
              onClick={scrollToContact}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${category.image})`,
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-center px-6 text-white">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                  {category.title}
                  <br />
                  {category.subtitle}
                </h2>

                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white border-2 hover:bg-white hover:text-black transition-all duration-300 px-8 py-6 text-lg rounded-full group-hover:scale-110"
                  onClick={scrollToContact}
                >
                  VIEW
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="mt-6 text-sm md:text-base opacity-90 max-w-md">
                  {category.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary/50 transition-all duration-300 rounded-lg pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
