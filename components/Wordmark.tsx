import CrownMark from './CrownMark'

interface WordmarkProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Wordmark({ size = 'md', className = '' }: WordmarkProps) {
  const markSize = size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-14 h-14' : 'w-11 h-11'
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg'
  const subSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-[11px]' : 'text-[10px]'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <CrownMark className={markSize} />
      <div className="flex flex-col leading-none">
        <span className={`font-heading ${textSize} tracking-[0.18em] text-gold-sheen font-semibold`}>
          SY1&nbsp;REMOVALS
        </span>
        <span className={`font-body ${subSize} tracking-[0.35em] text-gold-600/70 mt-1 uppercase`}>
          Est. 2024 · Shrewsbury
        </span>
      </div>
    </div>
  )
}
