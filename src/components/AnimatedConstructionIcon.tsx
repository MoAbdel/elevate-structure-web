'use client'

import { useEffect, useState } from 'react'

export function AnimatedConstructionIcon() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative flex items-center justify-center w-full h-80 overflow-hidden">
      {/* Main Container */}
      <div className="relative w-72 h-72 flex items-center justify-center">

        {/* Background Circle */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse-slow"></div>

        {/* Large Central Gear */}
        <div className="absolute z-10">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            className="animate-spin-clockwise"
            style={{ animationDuration: '4s' }}
          >
            <defs>
              <linearGradient id="gear1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary)/0.7)" />
              </linearGradient>
            </defs>
            <g fill="url(#gear1)" stroke="hsl(var(--primary))" strokeWidth="1">
              {/* Gear teeth */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30) * Math.PI / 180
                const x2 = 60 + Math.cos(angle) * 55
                const y2 = 60 + Math.sin(angle) * 55
                return (
                  <rect
                    key={i}
                    x={x2 - 3}
                    y={y2 - 8}
                    width="6"
                    height="16"
                    transform={`rotate(${i * 30} ${x2} ${y2})`}
                  />
                )
              })}
              {/* Center circle */}
              <circle cx="60" cy="60" r="35" />
              <circle cx="60" cy="60" r="12" fill="hsl(var(--background))" />
            </g>
          </svg>
        </div>

        {/* Small Gear - Top Right */}
        <div className="absolute top-4 right-8 z-20">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            className="animate-spin-counter-clockwise"
            style={{ animationDuration: '3s' }}
          >
            <defs>
              <linearGradient id="gear2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" />
                <stop offset="100%" stopColor="hsl(var(--accent)/0.7)" />
              </linearGradient>
            </defs>
            <g fill="url(#gear2)" stroke="hsl(var(--accent))" strokeWidth="1">
              {/* Gear teeth */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45) * Math.PI / 180
                const x2 = 30 + Math.cos(angle) * 28
                const y2 = 30 + Math.sin(angle) * 28
                return (
                  <rect
                    key={i}
                    x={x2 - 2}
                    y={y2 - 6}
                    width="4"
                    height="12"
                    transform={`rotate(${i * 45} ${x2} ${y2})`}
                  />
                )
              })}
              {/* Center circle */}
              <circle cx="30" cy="30" r="18" />
              <circle cx="30" cy="30" r="6" fill="hsl(var(--background))" />
            </g>
          </svg>
        </div>

        {/* Medium Gear - Bottom Left */}
        <div className="absolute bottom-6 left-6 z-20">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            className="animate-spin-clockwise"
            style={{ animationDuration: '5s' }}
          >
            <defs>
              <linearGradient id="gear3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary)/0.5)" />
              </linearGradient>
            </defs>
            <g fill="url(#gear3)" stroke="hsl(var(--primary))" strokeWidth="1">
              {/* Gear teeth */}
              {Array.from({ length: 10 }).map((_, i) => {
                const angle = (i * 36) * Math.PI / 180
                const x2 = 40 + Math.cos(angle) * 38
                const y2 = 40 + Math.sin(angle) * 38
                return (
                  <rect
                    key={i}
                    x={x2 - 2.5}
                    y={y2 - 7}
                    width="5"
                    height="14"
                    transform={`rotate(${i * 36} ${x2} ${y2})`}
                  />
                )
              })}
              {/* Center circle */}
              <circle cx="40" cy="40" r="25" />
              <circle cx="40" cy="40" r="8" fill="hsl(var(--background))" />
            </g>
          </svg>
        </div>

        {/* Small Accent Gear - Top Left */}
        <div className="absolute top-8 left-12 z-15">
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            className="animate-spin-counter-clockwise"
            style={{ animationDuration: '2.5s' }}
          >
            <defs>
              <linearGradient id="gear4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" />
                <stop offset="100%" stopColor="hsl(var(--accent)/0.8)" />
              </linearGradient>
            </defs>
            <g fill="url(#gear4)" stroke="hsl(var(--accent))" strokeWidth="1">
              {/* Gear teeth */}
              {Array.from({ length: 6 }).map((_, i) => {
                const angle = (i * 60) * Math.PI / 180
                const x2 = 22.5 + Math.cos(angle) * 21
                const y2 = 22.5 + Math.sin(angle) * 21
                return (
                  <rect
                    key={i}
                    x={x2 - 1.5}
                    y={y2 - 5}
                    width="3"
                    height="10"
                    transform={`rotate(${i * 60} ${x2} ${y2})`}
                  />
                )
              })}
              {/* Center circle */}
              <circle cx="22.5" cy="22.5" r="13" />
              <circle cx="22.5" cy="22.5" r="4" fill="hsl(var(--background))" />
            </g>
          </svg>
        </div>

        {/* Construction Elements */}

        {/* Blueprint Lines */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-16 right-16 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-accent/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
        <div className="absolute top-24 left-20 w-1 h-1 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '1.8s' }}></div>

        {/* Construction Tools */}
        <div className="absolute bottom-4 right-12 opacity-30 animate-float">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="hsl(var(--primary))">
            <path d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3Z" />
            <path d="M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74C8.5 8.3 9.74 4.16 13.09 2.44C16.76 0.5 21.5 2.24 21.5 6.5C21.5 8.21 20.84 9.79 19.62 10.96L13.78 15.3L17.5 10.1Z" />
          </svg>
        </div>

        <div className="absolute top-12 right-4 opacity-25 animate-float-delayed">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="hsl(var(--accent))">
            <path d="M21,16V14L13,9V7A3,3 0 0,0 10,4A3,3 0 0,0 7,7V9L1,12V14L7,11V13L5,14V16L7,15L10,18L13,15L15,16V14L13,13V11L19,14V16H21Z" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-counter-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-5deg); }
        }

        .animate-spin-clockwise {
          animation: spin-clockwise linear infinite;
        }

        .animate-spin-counter-clockwise {
          animation: spin-counter-clockwise linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}