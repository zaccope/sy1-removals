import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const dynamic = 'force-dynamic'

export const alt = 'SY1 Removals — Shrewsbury House & Garden Clearance'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function OpengraphImage() {
  const logoBuffer = readFileSync(join(process.cwd(), 'public/images/LOGO.jpg'))
  const logoSrc = `data:image/jpeg;base64,${logoBuffer.toString('base64')}`

  const afterBuffer = readFileSync(join(process.cwd(), 'public/images/3.jpg'))
  const afterSrc = `data:image/jpeg;base64,${afterBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#0B0B0D',
          backgroundImage:
            'radial-gradient(ellipse at 20% 20%, rgba(217, 168, 70, 0.18), transparent 55%), radial-gradient(ellipse at 80% 90%, rgba(169, 126, 29, 0.14), transparent 55%)',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Decorative outer border */}
        <div
          style={{
            position: 'absolute',
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: '1px solid rgba(217, 168, 70, 0.28)',
            borderRadius: 4,
            display: 'flex',
          }}
        />

        {/* LEFT — Copy */}
        <div
          style={{
            flex: '1 1 60%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '70px 0 70px 80px',
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: '#D9A846',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            — Shrewsbury &amp; Shropshire
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: 84,
                fontWeight: 700,
                color: '#F2F2F4',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span>Cleared, swept,</span>
              <span style={{ fontStyle: 'italic', color: '#E2B866' }}>sorted properly.</span>
            </div>
            <div
              style={{
                fontSize: 24,
                color: '#A8A8B0',
                marginTop: 28,
                maxWidth: 540,
                fontFamily: 'system-ui, sans-serif',
                lineHeight: 1.35,
              }}
            >
              House clearances, garden strip-outs &amp; fly-tip removals — handled by a licensed, insured local crew.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            <div
              style={{
                fontSize: 28,
                color: '#F2F2F4',
                fontWeight: 600,
              }}
            >
              07508 757024
            </div>
            <div
              style={{
                width: 1,
                height: 22,
                backgroundColor: 'rgba(217, 168, 70, 0.4)',
                display: 'flex',
              }}
            />
            <div
              style={{
                fontSize: 16,
                color: 'rgba(217, 168, 70, 0.75)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              sy1-removals.vercel.app
            </div>
          </div>
        </div>

        {/* RIGHT — Logo + photo */}
        <div
          style={{
            flex: '1 1 40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '70px 80px 70px 20px',
            gap: 28,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt="SY1 Removals"
            width={300}
            height={300}
            style={{
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 40px rgba(217,168,70,0.25))',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
