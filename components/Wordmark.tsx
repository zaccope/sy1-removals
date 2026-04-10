interface WordmarkProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Wordmark({ size = 'md', className = '' }: WordmarkProps) {
  const heightClass =
    size === 'sm' ? 'h-11 md:h-12' : size === 'lg' ? 'h-20' : 'h-14 md:h-16'

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/images/LOGO.jpg"
        alt="SY1 Removals — Shrewsbury House & Garden Clearance"
        className={`${heightClass} w-auto object-contain mix-blend-lighten`}
      />
    </div>
  )
}
