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

        {/* Black and White Construction Scene */}
        <div className="absolute z-10">
          <svg
            width="260"
            height="180"
            viewBox="0 0 260 180"
            className="animate-float"
          >
            {/* Ground */}
            <rect x="0" y="140" width="260" height="40" fill="#333"/>

            {/* Dirt pile being moved */}
            <ellipse cx="180" cy="135" rx="25" ry="8" fill="#666" className="animate-pile-move"/>

            {/* Excavator */}
            <g className="animate-work">
              {/* Tracks */}
              <rect x="60" y="125" width="45" height="15" fill="#000" rx="7"/>
              <circle cx="67" cy="132" r="4" fill="#333"/>
              <circle cx="78" cy="132" r="4" fill="#333"/>
              <circle cx="89" cy="132" r="4" fill="#333"/>
              <circle cx="98" cy="132" r="4" fill="#333"/>

              {/* Main Body */}
              <rect x="70" y="105" width="25" height="20" fill="#000" rx="3"/>

              {/* Cab */}
              <rect x="85" y="95" width="15" height="18" fill="#000" rx="2"/>
              <rect x="87" y="97" width="11" height="8" fill="#666" opacity="0.8"/>

              {/* Boom (animated digging arm) */}
              <g className="animate-dig">
                <line x1="95" y1="110" x2="125" y2="85" stroke="#000" strokeWidth="5"/>
                <line x1="125" y1="85" x2="150" y2="105" stroke="#000" strokeWidth="4"/>

                {/* Bucket */}
                <path d="M150 105 L162 112 L158 125 L145 118 Z" fill="#000"/>

                {/* Dirt in bucket */}
                <ellipse cx="153" cy="115" rx="6" ry="3" fill="#666" className="animate-dirt-move"/>
              </g>

              {/* Hydraulic cylinders */}
              <line x1="95" y1="110" x2="108" y2="98" stroke="#333" strokeWidth="3"/>
              <line x1="125" y1="85" x2="132" y2="94" stroke="#333" strokeWidth="2"/>
            </g>
          </svg>
        </div>
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

        @keyframes pile-move {
          0%, 100% { transform: translateX(0px) scale(1); }
          50% { transform: translateX(-5px) scale(0.95); }
        }

        @keyframes dirt-move {
          0%, 100% { opacity: 1; transform: scale(1); }
          25% { opacity: 0.8; transform: scale(1.1); }
          75% { opacity: 0.9; transform: scale(0.9); }
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

        .animate-pile-move {
          animation: pile-move 3s ease-in-out infinite;
        }

        .animate-dirt-move {
          animation: dirt-move 2s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}