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

        {/* Background Blueprint Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl overflow-hidden">
          <svg width="100%" height="100%" className="absolute inset-0 opacity-20">
            <defs>
              <pattern id="blueprint-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.6"/>
                <circle cx="0" cy="0" r="1" fill="hsl(var(--primary))" opacity="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
          </svg>
        </div>

        {/* Central Building Structure */}
        <div className="absolute z-10">
          <svg
            width="160"
            height="140"
            viewBox="0 0 160 140"
            className="animate-float"
          >
            <defs>
              <linearGradient id="building1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary)/0.8)" />
              </linearGradient>
              <linearGradient id="building2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" />
                <stop offset="100%" stopColor="hsl(var(--accent)/0.8)" />
              </linearGradient>
            </defs>

            {/* Foundation/Ground */}
            <rect x="20" y="120" width="120" height="8" fill="hsl(var(--muted))" />

            {/* Main Building */}
            <path d="M 40 120 L 40 50 L 80 30 L 120 50 L 120 120 Z" fill="url(#building1)" stroke="hsl(var(--primary))" strokeWidth="1"/>

            {/* Building Windows */}
            <rect x="50" y="60" width="8" height="8" fill="hsl(var(--background))" />
            <rect x="65" y="60" width="8" height="8" fill="hsl(var(--background))" />
            <rect x="50" y="75" width="8" height="8" fill="hsl(var(--background))" />
            <rect x="65" y="75" width="8" height="8" fill="hsl(var(--background))" />
            <rect x="50" y="90" width="8" height="8" fill="hsl(var(--background))" />
            <rect x="65" y="90" width="8" height="8" fill="hsl(var(--background))" />
            <rect x="50" y="105" width="8" height="8" fill="hsl(var(--background))" />
            <rect x="65" y="105" width="8" height="8" fill="hsl(var(--background))" />

            {/* Secondary Building */}
            <rect x="90" y="70" width="25" height="50" fill="url(#building2)" stroke="hsl(var(--accent))" strokeWidth="1"/>
            <rect x="95" y="80" width="5" height="5" fill="hsl(var(--background))" />
            <rect x="105" y="80" width="5" height="5" fill="hsl(var(--background))" />
            <rect x="95" y="90" width="5" height="5" fill="hsl(var(--background))" />
            <rect x="105" y="90" width="5" height="5" fill="hsl(var(--background))" />
            <rect x="95" y="100" width="5" height="5" fill="hsl(var(--background))" />
            <rect x="105" y="100" width="5" height="5" fill="hsl(var(--background))" />

            {/* Construction Crane */}
            <g className="animate-sway">
              <line x1="130" y1="120" x2="130" y2="40" stroke="hsl(var(--primary))" strokeWidth="2"/>
              <line x1="130" y1="50" x2="155" y2="45" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
              <line x1="130" y1="50" x2="105" y2="55" stroke="hsl(var(--primary))" strokeWidth="1"/>
              <rect x="150" y="44" width="4" height="4" fill="hsl(var(--accent))" />
            </g>
          </svg>
        </div>

        {/* Floating Engineering Tools */}
        <div className="absolute top-8 right-12 z-20 animate-float-delayed">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="hsl(var(--accent))">
            {/* T-Square / Ruler */}
            <rect x="5" y="18" width="30" height="2" fill="hsl(var(--accent))" />
            <rect x="4" y="12" width="4" height="12" fill="hsl(var(--accent))" />
            <circle cx="6" cy="20" r="1" fill="hsl(var(--background))" />
            <circle cx="15" cy="20" r="1" fill="hsl(var(--background))" />
            <circle cx="25" cy="20" r="1" fill="hsl(var(--background))" />
          </svg>
        </div>

        {/* Level Tool - Bottom Left */}
        <div className="absolute bottom-8 left-8 z-20 animate-float-slow">
          <svg width="60" height="24" viewBox="0 0 60 24" fill="hsl(var(--primary))">
            {/* Level Body */}
            <rect x="0" y="8" width="60" height="8" fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="1" rx="2"/>
            {/* Bubble Vials */}
            <circle cx="15" cy="12" r="3" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="1"/>
            <circle cx="30" cy="12" r="3" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="1"/>
            <circle cx="45" cy="12" r="3" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="1"/>
            {/* Bubbles */}
            <circle cx="15" cy="12" r="1" fill="hsl(var(--accent))" className="animate-bounce"/>
            <circle cx="30" cy="12" r="1" fill="hsl(var(--accent))"/>
            <circle cx="45" cy="12" r="1" fill="hsl(var(--accent))"/>
          </svg>
        </div>

        {/* Compass Tool - Top Left */}
        <div className="absolute top-12 left-16 z-15 animate-float">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="hsl(var(--accent))">
            {/* Compass Body */}
            <circle cx="16" cy="16" r="12" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.5"/>
            {/* Compass Legs */}
            <line x1="16" y1="16" x2="16" y2="6" stroke="hsl(var(--accent))" strokeWidth="2"/>
            <line x1="16" y1="16" x2="22" y2="20" stroke="hsl(var(--accent))" strokeWidth="2"/>
            {/* Points */}
            <circle cx="16" cy="6" r="1.5" fill="hsl(var(--accent))"/>
            <circle cx="22" cy="20" r="1.5" fill="hsl(var(--primary))"/>
            <circle cx="16" cy="16" r="2" fill="hsl(var(--background))" stroke="hsl(var(--accent))" strokeWidth="1"/>
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
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(2deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(-1deg); }
        }

        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(2deg); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }

        .animate-sway {
          animation: sway 6s ease-in-out infinite;
          transform-origin: bottom center;
        }
      `}</style>
    </div>
  )
}