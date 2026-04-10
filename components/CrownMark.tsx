interface CrownMarkProps {
  className?: string
}

// Heraldic crown + monogram — echoes the SY1 Removals logo badge.
export default function CrownMark({ className = 'w-10 h-10' }: CrownMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2D9A8" />
          <stop offset="40%" stopColor="#E2B866" />
          <stop offset="70%" stopColor="#D9A846" />
          <stop offset="100%" stopColor="#A97E1D" />
        </linearGradient>
      </defs>

      {/* Outer ring */}
      <circle
        cx="32"
        cy="32"
        r="29"
        stroke="url(#goldGrad)"
        strokeWidth="1.25"
        opacity="0.85"
      />
      <circle
        cx="32"
        cy="32"
        r="26"
        stroke="url(#goldGrad)"
        strokeWidth="0.6"
        opacity="0.55"
      />

      {/* Crown */}
      <path
        d="M20 20 L24 14 L28 20 L32 13 L36 20 L40 14 L44 20 L44 24 L20 24 Z"
        fill="url(#goldGrad)"
      />
      <circle cx="24" cy="14" r="1.3" fill="url(#goldGrad)" />
      <circle cx="32" cy="13" r="1.6" fill="url(#goldGrad)" />
      <circle cx="40" cy="14" r="1.3" fill="url(#goldGrad)" />

      {/* Shield */}
      <path
        d="M22 26 L42 26 L42 38 Q42 46 32 51 Q22 46 22 38 Z"
        fill="url(#goldGrad)"
        opacity="0.95"
      />

      {/* Monogram S */}
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fontFamily="Playfair Display, Georgia, serif"
        fontSize="18"
        fontWeight="700"
        fill="#0B0B0D"
      >
        S
      </text>
    </svg>
  )
}
