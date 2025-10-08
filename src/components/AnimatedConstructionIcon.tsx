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

        {/* Construction Site with Heavy Machinery */}
        <div className="absolute z-10">
          <svg
            width="300"
            height="220"
            viewBox="0 0 300 220"
            className="animate-float"
          >
            <defs>
              <linearGradient id="yellow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFA500" />
                <stop offset="100%" stopColor="#FF8C00" />
              </linearGradient>
              <linearGradient id="ground" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B4513" />
                <stop offset="100%" stopColor="#A0522D" />
              </linearGradient>
              <linearGradient id="metal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C0C0C0" />
                <stop offset="100%" stopColor="#808080" />
              </linearGradient>
            </defs>

            {/* Ground/Dirt */}
            <rect x="0" y="180" width="300" height="40" fill="url(#ground)"/>

            {/* Dirt texture lines */}
            <path d="M0 185 Q30 182 60 185 T120 185 T180 185 T240 185 T300 185" stroke="#654321" strokeWidth="1" fill="none"/>
            <path d="M0 190 Q40 187 80 190 T160 190 T240 190 T300 190" stroke="#654321" strokeWidth="1" fill="none"/>

            {/* Excavator */}
            <g className="animate-work">
              {/* Tracks */}
              <rect x="50" y="170" width="40" height="12" fill="#333" rx="6"/>
              <circle cx="55" cy="176" r="3" fill="#666"/>
              <circle cx="65" cy="176" r="3" fill="#666"/>
              <circle cx="75" cy="176" r="3" fill="#666"/>
              <circle cx="85" cy="176" r="3" fill="#666"/>

              {/* Body */}
              <rect x="60" y="150" width="20" height="20" fill="url(#yellow)" rx="2"/>

              {/* Cab */}
              <rect x="75" y="145" width="12" height="15" fill="url(#yellow)" rx="2"/>
              <rect x="77" y="147" width="8" height="6" fill="#87CEEB" opacity="0.7"/>

              {/* Boom (animated) */}
              <g className="animate-dig">
                <line x1="85" y1="155" x2="110" y2="135" stroke="url(#metal)" strokeWidth="4"/>
                <line x1="110" y1="135" x2="130" y2="150" stroke="url(#metal)" strokeWidth="3"/>

                {/* Bucket */}
                <path d="M130 150 L140 155 L135 165 L125 160 Z" fill="url(#metal)"/>
              </g>

              {/* Hydraulic cylinders */}
              <line x1="85" y1="155" x2="95" y2="145" stroke="#666" strokeWidth="2"/>
              <line x1="110" y1="135" x2="115" y2="142" stroke="#666" strokeWidth="2"/>
            </g>

            {/* Bulldozer */}
            <g className="animate-push" transform="translate(160, 0)">
              {/* Tracks */}
              <rect x="20" y="170" width="50" height="12" fill="#333" rx="6"/>
              <circle cx="25" cy="176" r="3" fill="#666"/>
              <circle cx="35" cy="176" r="3" fill="#666"/>
              <circle cx="45" cy="176" r="3" fill="#666"/>
              <circle cx="55" cy="176" r="3" fill="#666"/>
              <circle cx="65" cy="176" r="3" fill="#666"/>

              {/* Body */}
              <rect x="25" y="145" width="35" height="25" fill="url(#yellow)" rx="3"/>

              {/* Cab */}
              <rect x="45" y="135" width="15" height="20" fill="url(#yellow)" rx="2"/>
              <rect x="47" y="137" width="11" height="8" fill="#87CEEB" opacity="0.7"/>

              {/* Blade */}
              <rect x="15" y="160" width="4" height="15" fill="url(#metal)"/>
              <path d="M15 160 L10 165 L10 175 L15 175 Z" fill="url(#metal)"/>

              {/* Engine/Exhaust */}
              <rect x="30" y="140" width="3" height="8" fill="#333"/>
            </g>

            {/* Dump Truck */}
            <g className="animate-drive" transform="translate(220, 0)">
              {/* Wheels */}
              <circle cx="25" cy="175" r="6" fill="#333"/>
              <circle cx="45" cy="175" r="6" fill="#333"/>
              <circle cx="55" cy="175" r="6" fill="#333"/>

              {/* Chassis */}
              <rect x="20" y="160" width="40" height="15" fill="url(#yellow)" rx="2"/>

              {/* Cab */}
              <rect x="15" y="145" width="15" height="20" fill="url(#yellow)" rx="2"/>
              <rect x="17" y="147" width="11" height="8" fill="#87CEEB" opacity="0.7"/>

              {/* Dump Bed */}
              <path d="M30 160 L30 140 L55 140 L60 160 Z" fill="url(#metal)" stroke="#666" strokeWidth="1"/>

              {/* Load */}
              <ellipse cx="45" cy="145" rx="12" ry="4" fill="url(#ground)"/>
            </g>

            {/* Construction Barriers */}
            <g>
              <rect x="30" y="165" width="3" height="12" fill="orange"/>
              <rect x="40" y="165" width="3" height="12" fill="orange"/>
              <rect x="120" y="165" width="3" height="12" fill="orange"/>
              <rect x="130" y="165" width="3" height="12" fill="orange"/>
            </g>

            {/* Material Piles */}
            <ellipse cx="100" cy="175" rx="20" ry="6" fill="#D2691E" className="animate-pulse-subtle"/>
            <ellipse cx="200" cy="175" rx="15" ry="5" fill="#696969" className="animate-pulse-subtle"/>

            {/* Construction Signs */}
            <g>
              <rect x="270" y="150" width="15" height="20" fill="yellow" stroke="#333" strokeWidth="1"/>
              <text x="277" y="165" fontSize="8" fill="#333" textAnchor="middle">⚠</text>
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

        @keyframes work {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(2deg); }
        }

        @keyframes dig {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }

        @keyframes push {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(2px); }
        }

        @keyframes drive {
          0% { transform: translateX(0px); }
          50% { transform: translateX(1px); }
          100% { transform: translateX(0px); }
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

        .animate-work {
          animation: work 3s ease-in-out infinite;
          transform-origin: center bottom;
        }

        .animate-dig {
          animation: dig 2s ease-in-out infinite;
          transform-origin: 85px 155px;
        }

        .animate-push {
          animation: push 4s ease-in-out infinite;
        }

        .animate-drive {
          animation: drive 3s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}