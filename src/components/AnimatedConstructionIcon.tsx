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

        {/* Active Construction Site */}
        <div className="absolute z-10">
          <svg
            width="280"
            height="240"
            viewBox="0 0 280 240"
            className="animate-float"
          >
            <defs>
              <linearGradient id="building" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary)/0.8)" />
              </linearGradient>
              <linearGradient id="crane" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" />
                <stop offset="100%" stopColor="hsl(var(--accent)/0.8)" />
              </linearGradient>
              <linearGradient id="concrete" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#666" />
                <stop offset="100%" stopColor="#999" />
              </linearGradient>
            </defs>

            {/* Ground/Foundation */}
            <rect x="20" y="200" width="240" height="20" fill="url(#concrete)"/>

            {/* Building Under Construction */}
            <g>
              {/* Foundation */}
              <rect x="60" y="180" width="80" height="20" fill="url(#concrete)"/>

              {/* Building Frame - Multiple Floors */}
              <rect x="65" y="120" width="70" height="60" fill="none" stroke="url(#building)" strokeWidth="3"/>
              <rect x="65" y="80" width="70" height="40" fill="none" stroke="url(#building)" strokeWidth="3"/>
              <rect x="65" y="50" width="70" height="30" fill="none" stroke="url(#building)" strokeWidth="3"/>

              {/* Vertical Columns */}
              <line x1="75" y1="50" x2="75" y2="180" stroke="url(#building)" strokeWidth="2"/>
              <line x1="100" y1="50" x2="100" y2="180" stroke="url(#building)" strokeWidth="2"/>
              <line x1="125" y1="50" x2="125" y2="180" stroke="url(#building)" strokeWidth="2"/>

              {/* Floor Slabs */}
              <line x1="65" y1="120" x2="135" y2="120" stroke="url(#building)" strokeWidth="3"/>
              <line x1="65" y1="80" x2="135" y2="80" stroke="url(#building)" strokeWidth="3"/>

              {/* Rebar/Reinforcement (animated) */}
              <g className="animate-build-up">
                <circle cx="85" cy="100" r="2" fill="hsl(var(--accent))" className="animate-pulse-subtle"/>
                <circle cx="115" cy="100" r="2" fill="hsl(var(--accent))" className="animate-pulse-subtle"/>
                <circle cx="85" cy="60" r="2" fill="hsl(var(--accent))" className="animate-pulse-subtle"/>
                <circle cx="115" cy="60" r="2" fill="hsl(var(--accent))" className="animate-pulse-subtle"/>
              </g>
            </g>

            {/* Tower Crane */}
            <g className="animate-sway">
              {/* Mast */}
              <line x1="180" y1="200" x2="180" y2="30" stroke="url(#crane)" strokeWidth="4"/>

              {/* Jib (horizontal arm) */}
              <line x1="180" y1="40" x2="250" y2="35" stroke="url(#crane)" strokeWidth="3"/>
              <line x1="180" y1="40" x2="150" y2="45" stroke="url(#crane)" strokeWidth="3"/>

              {/* Counter-jib */}
              <line x1="150" y1="45" x2="120" y2="50" stroke="url(#crane)" strokeWidth="2"/>
              <rect x="115" y="48" width="8" height="4" fill="url(#crane)"/>

              {/* Hook and Load (animated) */}
              <g className="animate-lift">
                <line x1="230" y1="35" x2="230" y2="120" stroke="hsl(var(--accent))" strokeWidth="1.5"/>
                <rect x="225" y="120" width="10" height="8" fill="hsl(var(--primary))" className="animate-pulse-subtle"/>
              </g>

              {/* Operator Cab */}
              <rect x="175" y="35" width="8" height="6" fill="url(#crane)"/>
            </g>

            {/* Concrete Mixer Truck */}
            <g className="animate-drive">
              <rect x="30" y="185" width="25" height="12" fill="url(#concrete)" rx="2"/>
              {/* Cab */}
              <rect x="30" y="175" width="8" height="10" fill="hsl(var(--primary))"/>
              {/* Mixing Drum */}
              <ellipse cx="42" cy="191" rx="8" ry="6" fill="url(#concrete)" className="animate-spin-slow"/>
              {/* Wheels */}
              <circle cx="35" cy="200" r="3" fill="#333"/>
              <circle cx="50" cy="200" r="3" fill="#333"/>
            </g>

            {/* Construction Workers (simplified) */}
            <g>
              <circle cx="90" cy="175" r="3" fill="hsl(var(--accent))"/>
              <rect x="88" y="178" width="4" height="8" fill="hsl(var(--primary))"/>

              <circle cx="110" cy="175" r="3" fill="hsl(var(--accent))"/>
              <rect x="108" y="178" width="4" height="8" fill="hsl(var(--primary))"/>
            </g>

            {/* Material Piles */}
            <ellipse cx="200" cy="195" rx="15" ry="5" fill="hsl(var(--muted))" className="animate-pulse-subtle"/>
            <ellipse cx="220" cy="195" rx="12" ry="4" fill="hsl(var(--accent)/0.5)" className="animate-pulse-subtle"/>

            {/* Safety Barriers */}
            <g>
              <rect x="40" y="190" width="2" height="8" fill="orange"/>
              <rect x="45" y="190" width="2" height="8" fill="orange"/>
              <rect x="50" y="190" width="2" height="8" fill="orange"/>
              <line x1="40" y1="192" x2="52" y2="192" stroke="orange" strokeWidth="1"/>
            </g>
          </svg>
        </div>

        {/* Floating Construction Elements */}
        <div className="absolute top-8 right-8 z-20 animate-float-delayed">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="hsl(var(--accent))">
            {/* Hard Hat */}
            <path d="M8 20 Q8 12 16 12 Q24 12 24 20 L8 20" fill="hsl(var(--accent))"/>
            <rect x="6" y="20" width="20" height="2" fill="hsl(var(--primary))"/>
          </svg>
        </div>

        <div className="absolute bottom-8 left-8 z-20 animate-float-slow">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="hsl(var(--primary))">
            {/* Hammer */}
            <rect x="10" y="15" width="8" height="2" fill="hsl(var(--primary))"/>
            <rect x="17" y="10" width="4" height="8" fill="hsl(var(--accent))"/>
            <line x1="12" y1="16" x2="5" y2="23" stroke="hsl(var(--primary))" strokeWidth="2"/>
          </svg>
        </div>

        <div className="absolute top-16 left-16 z-15 animate-float">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="hsl(var(--accent))">
            {/* Wrench */}
            <path d="M6 6 L18 18 M6 18 L18 6" stroke="hsl(var(--accent))" strokeWidth="2"/>
            <circle cx="6" cy="6" r="3" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
            <circle cx="18" cy="18" r="3" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
          </svg>
        </div>

        {/* Construction Site Grid */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="site-grid" width="25" height="25" patternUnits="userSpaceOnUse">
                <path d="M 25 0 L 0 0 0 25" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#site-grid)" />
          </svg>
        </div>

        {/* Dust/Activity Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-yellow/5 rounded-xl"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-4px) scale(1.01); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(1deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-2px) rotate(-0.5deg); }
        }

        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(1.5deg); }
        }

        @keyframes lift {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes drive {
          0% { transform: translateX(0px); }
          50% { transform: translateX(3px); }
          100% { transform: translateX(0px); }
        }

        @keyframes build-up {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }

        .animate-sway {
          animation: sway 6s ease-in-out infinite;
          transform-origin: bottom center;
        }

        .animate-lift {
          animation: lift 4s ease-in-out infinite;
        }

        .animate-drive {
          animation: drive 3s ease-in-out infinite;
        }

        .animate-build-up {
          animation: build-up 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}