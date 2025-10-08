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

        {/* Abstract Structural Framework */}
        <div className="absolute z-10">
          <svg
            width="240"
            height="200"
            viewBox="0 0 240 200"
            className="animate-float"
          >
            <defs>
              <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary)/0.6)" />
              </linearGradient>
              <linearGradient id="beam2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" />
                <stop offset="100%" stopColor="hsl(var(--accent)/0.6)" />
              </linearGradient>
            </defs>

            {/* Main Structural Beams - Clean Lines */}
            <g className="animate-fade-in">
              {/* Horizontal Support Beams */}
              <rect x="40" y="60" width="160" height="4" fill="url(#beam1)" rx="2"/>
              <rect x="60" y="100" width="120" height="4" fill="url(#beam1)" rx="2"/>
              <rect x="30" y="140" width="180" height="4" fill="url(#beam1)" rx="2"/>

              {/* Vertical Support Columns */}
              <rect x="70" y="40" width="4" height="120" fill="url(#beam2)" rx="2"/>
              <rect x="120" y="50" width="4" height="110" fill="url(#beam2)" rx="2"/>
              <rect x="170" y="45" width="4" height="115" fill="url(#beam2)" rx="2"/>

              {/* Diagonal Bracing */}
              <path d="M 74 64 L 116 96" stroke="url(#beam2)" strokeWidth="3" strokeLinecap="round"/>
              <path d="M 124 54 L 166 86" stroke="url(#beam2)" strokeWidth="3" strokeLinecap="round"/>

              {/* Connection Nodes */}
              <circle cx="72" cy="62" r="4" fill="hsl(var(--primary))" className="animate-pulse-subtle"/>
              <circle cx="122" cy="62" r="4" fill="hsl(var(--primary))" className="animate-pulse-subtle"/>
              <circle cx="172" cy="62" r="4" fill="hsl(var(--primary))" className="animate-pulse-subtle"/>
              <circle cx="82" cy="102" r="4" fill="hsl(var(--accent))" className="animate-pulse-subtle"/>
              <circle cx="122" cy="102" r="4" fill="hsl(var(--accent))" className="animate-pulse-subtle"/>
              <circle cx="162" cy="102" r="4" fill="hsl(var(--accent))" className="animate-pulse-subtle"/>
            </g>
          </svg>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute top-8 right-8 z-20 animate-float-delayed">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <rect x="4" y="4" width="24" height="24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" rx="2"/>
            <rect x="8" y="8" width="16" height="16" fill="hsl(var(--accent)/0.2)" rx="1"/>
            <circle cx="16" cy="16" r="3" fill="hsl(var(--primary))"/>
          </svg>
        </div>

        <div className="absolute bottom-8 left-8 z-20 animate-float-slow">
          <svg width="28" height="28" viewBox="0 0 28 28">
            <polygon points="14,2 26,22 2,22" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
            <circle cx="14" cy="18" r="2" fill="hsl(var(--accent))"/>
          </svg>
        </div>

        <div className="absolute top-16 left-16 z-15 animate-float">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
            <circle cx="12" cy="12" r="4" fill="hsl(var(--accent)/0.3)"/>
            <circle cx="12" cy="12" r="2" fill="hsl(var(--primary))"/>
          </svg>
        </div>

        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="tech-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
                <circle cx="0" cy="0" r="0.5" fill="hsl(var(--primary))"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grid)" />
          </svg>
        </div>

        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-xl"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-6px) scale(1.01); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(1deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(-0.5deg); }
        }

        @keyframes fade-in {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }

        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 3s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}