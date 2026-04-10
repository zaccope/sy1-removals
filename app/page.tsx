import { ShieldCheck, Clock, HandCoins, Broom } from '@phosphor-icons/react/dist/ssr'
import ScrollReveal from '@/components/ScrollReveal'
import HeroCta from '@/components/HeroCta'
import ServiceGrid from '@/components/ServiceGrid'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import CrownMark from '@/components/CrownMark'
import Wordmark from '@/components/Wordmark'
import BeforeAfter from '@/components/BeforeAfter'

const beforeAfterPairs = [
  {
    before: '/images/1.jpg',
    after: '/images/3.jpg',
    label: 'Rear yard clearance — Shrewsbury',
  },
  {
    before: '/images/7.jpg',
    after: '/images/9.jpg',
    label: 'Side alley fly-tip removal',
  },
  {
    before: '/images/11.jpg',
    after: '/images/12.jpg',
    label: 'Full interior room clear',
  },
  {
    before: '/images/4.jpg',
    after: '/images/2.jpg',
    label: 'Garden strip-out & rubbish haul',
  },
  {
    before: '/images/10.jpg',
    after: '/images/8.jpg',
    label: 'Shed removal & yard reset',
  },
  {
    before: '/images/5.jpg',
    after: '/images/6.jpg',
    label: 'Outbuilding dismantle',
  },
]

export default function Home() {
  return (
    <main className="bg-ink-950 text-ink-100 overflow-hidden">
      {/* ───────────── Hero ───────────── */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        {/* Background imagery — real work photo, heavily darkened */}
        <div className="absolute inset-0">
          <img
            src="/images/7.jpg"
            alt=""
            className="w-full h-full object-cover opacity-25 grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-950/92 to-ink-900/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/70" />
          {/* Gold atmospheric glow */}
          <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-gold-600/5 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold-800/8 blur-[100px]" />
        </div>

        {/* Grain */}
        <div className="fixed inset-0 z-[1] pointer-events-none bg-noise opacity-[0.15] mix-blend-overlay" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-24 md:pt-40 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold-700/40 bg-gold-900/10 backdrop-blur-sm rounded-sm mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                <span className="text-[11px] tracking-[0.2em] uppercase text-gold-300 font-medium">
                  Shrewsbury · Established 2024
                </span>
              </div>

              <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.95] text-ink-50 mb-8">
                Cleared, swept,{' '}
                <span className="italic text-gold-sheen font-medium">sorted properly.</span>
              </h1>

              <p className="text-lg md:text-xl text-ink-200 leading-relaxed max-w-xl mb-10 font-light">
                A professional clearance crew serving Shrewsbury and the whole of Shropshire.
                House clearances, garden strip-outs, fly-tip removals — we turn up, haul it away,
                and leave the place spotless.
              </p>

              <HeroCta />

              {/* Trust strip */}
              <div className="mt-14 pt-8 border-t border-gold-800/20 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <p className="font-heading text-2xl md:text-3xl text-gold-sheen font-semibold">Same day</p>
                  <p className="text-[11px] tracking-widest uppercase text-ink-300 mt-1">Uplifts available</p>
                </div>
                <div>
                  <p className="font-heading text-2xl md:text-3xl text-gold-sheen font-semibold">Fixed</p>
                  <p className="text-[11px] tracking-widest uppercase text-ink-300 mt-1">Fair quotes</p>
                </div>
                <div>
                  <p className="font-heading text-2xl md:text-3xl text-gold-sheen font-semibold">Local</p>
                  <p className="text-[11px] tracking-widest uppercase text-ink-300 mt-1">Shrewsbury crew</p>
                </div>
              </div>
            </div>

            {/* Hero feature image — real work photo */}
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
              <div className="relative w-full">
                <div className="absolute -inset-4 bg-gold-600/5 blur-3xl rounded-full" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-gold-700/40">
                  <img
                    src="/images/3.jpg"
                    alt="Cleared rear yard, Shrewsbury"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/20" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold-500/15" />

                  {/* Floating tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-gold-sheen text-ink-950 text-[10px] tracking-[0.2em] uppercase font-semibold rounded-sm">
                      After
                    </span>
                  </div>

                  {/* Bottom label */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex items-center gap-3">
                      <CrownMark className="w-8 h-8 flex-shrink-0" />
                      <div>
                        <p className="font-heading italic text-ink-50 text-sm leading-tight">
                          Recent yard clearance
                        </p>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-gold-400/80 mt-0.5">
                          Shrewsbury, SY1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Value Strip ───────────── */}
      <section className="relative py-16 md:py-20 border-y border-gold-800/15 bg-ink-900">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
            {[
              { icon: ShieldCheck, title: 'Licensed Carriers', subtitle: 'Waste disposed responsibly' },
              { icon: Clock, title: 'Same-Day Available', subtitle: 'Fast response on urgent jobs' },
              { icon: HandCoins, title: 'No Hidden Fees', subtitle: 'Fixed quote up front' },
              { icon: Broom, title: 'Broom-Clean Finish', subtitle: 'Every job, every time' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div className="flex flex-col items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-sm border border-gold-700/40 bg-gold-900/15">
                      <Icon weight="duotone" className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="font-heading text-lg text-ink-50 mb-1">{item.title}</p>
                      <p className="text-sm text-ink-300">{item.subtitle}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────────── Services ───────────── */}
      <section id="services" className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-16 md:mb-20">
              <p className="text-[11px] tracking-[0.25em] uppercase text-gold-500 mb-5 font-medium">
                — What we clear
              </p>
              <h2 className="font-heading text-4xl md:text-6xl tracking-tight leading-[1.05] text-ink-50">
                Every kind of clearance,{' '}
                <span className="italic text-gold-sheen">handled by one crew.</span>
              </h2>
              <p className="text-ink-300 leading-relaxed mt-6 max-w-xl text-[15px]">
                Whether it&rsquo;s a single overflowing yard or an entire property that needs
                stripping back, we come prepared with the right vehicles, the right kit, and the
                right attitude — licensed, insured, and ready to work.
              </p>
            </div>
          </ScrollReveal>

          <ServiceGrid />
        </div>
      </section>

      {/* ───────────── Before & After Gallery ───────────── */}
      <section id="work" className="relative py-24 md:py-32 bg-ink-900 border-y border-gold-800/15 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gold-700/5 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
              <div className="max-w-2xl">
                <p className="text-[11px] tracking-[0.25em] uppercase text-gold-500 mb-5 font-medium">
                  — Recent work
                </p>
                <h2 className="font-heading text-4xl md:text-6xl tracking-tight leading-[1.05] text-ink-50">
                  Before &amp;{' '}
                  <span className="italic text-gold-sheen">after.</span>
                </h2>
              </div>
              <p className="text-ink-300 leading-relaxed max-w-sm text-[14px] md:text-right">
                Real jobs across Shrewsbury and Shropshire.
                <span className="hidden md:inline"><br /></span>
                <span className="text-gold-400 font-medium"> Hover</span>
                <span className="md:hidden"> or tap</span> any photo to see the finish.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {beforeAfterPairs.map((pair, i) => (
              <ScrollReveal key={pair.label} delay={i * 70}>
                <BeforeAfter before={pair.before} after={pair.after} label={pair.label} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="mt-14 text-center">
              <p className="text-ink-300 text-[15px] mb-5">
                Got a site that looks worse than these? We&rsquo;ve seen it all.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-gold-600/50 text-gold-300 font-medium tracking-wide rounded-sm hover:bg-gold-500/5 hover:border-gold-500/80 transition-all"
              >
                Request a Free Quote
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────── About ───────────── */}
      <section id="about" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold-800/5 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            <ScrollReveal className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/5] relative overflow-hidden rounded-sm border border-gold-800/30">
                  <img
                    src="/images/9.jpg"
                    alt="Cleared alleyway — Shrewsbury"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold-600/20" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-8 -right-4 md:-right-8 bg-ink-950 border border-gold-700/50 p-6 rounded-sm max-w-[240px] hairline">
                  <CrownMark className="w-10 h-10 mb-3" />
                  <p className="font-heading italic text-gold-300 text-sm leading-snug">
                    &ldquo;We leave every job the way we&rsquo;d want our own home left.&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} className="lg:col-span-7">
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-gold-500 mb-5 font-medium">
                  — About SY1 Removals
                </p>
                <h2 className="font-heading text-4xl md:text-6xl tracking-tight leading-[1.05] text-ink-50 mb-8">
                  Shrewsbury-born.{' '}
                  <span className="italic text-gold-sheen">Built on hard graft.</span>
                </h2>
                <div className="space-y-5 text-ink-200 leading-relaxed max-w-xl">
                  <p>
                    SY1 Removals was founded in Shrewsbury to do one thing properly: clear
                    cluttered, overgrown, and fly-tipped spaces — and leave them better than we
                    found them. No half jobs, no shortcut dumping, no surprise extra charges when
                    we turn up and realise the pile is bigger than it looked.
                  </p>
                  <p>
                    Most of our work is houses, gardens, and yards that have gotten out of hand.
                    Probate clearances. Landlord turnarounds. Hoarded homes. Fly-tipped alleys
                    behind takeaways. Whatever&rsquo;s sitting there, we load it, haul it, and
                    dispose of it the right way.
                  </p>
                  <p>
                    It&rsquo;s physical work, and we take pride in it. The before-and-after photos
                    above speak for themselves — and they&rsquo;re also the reason so much of our
                    work now comes from customers who&rsquo;ve used us once and tell everyone they
                    know.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
                  <div className="border-l-2 border-gold-600 pl-4">
                    <p className="font-heading text-3xl text-gold-sheen font-semibold">Local</p>
                    <p className="text-sm text-ink-300 mt-1">Based &amp; working in Shrewsbury</p>
                  </div>
                  <div className="border-l-2 border-gold-600 pl-4">
                    <p className="font-heading text-3xl text-gold-sheen font-semibold">Honest</p>
                    <p className="text-sm text-ink-300 mt-1">Straight quotes, done jobs</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────── Why Us ───────────── */}
      <section id="why-us" className="relative py-24 md:py-32 bg-ink-900 border-y border-gold-800/15">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <p className="text-[11px] tracking-[0.25em] uppercase text-gold-500 mb-5 font-medium">
                — Why choose us
              </p>
              <h2 className="font-heading text-4xl md:text-6xl tracking-tight leading-[1.05] text-ink-50">
                The little things{' '}
                <span className="italic text-gold-sheen">that matter most.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
            {[
              {
                number: '01',
                title: 'We turn up when we say we will',
                body: 'Punctuality is not optional. We give you a clear arrival window — and we hit it. If we say 8am, we are on your driveway at 7:55.',
              },
              {
                number: '02',
                title: 'Fair, fixed quotes — no surprises',
                body: 'One number up front. No hourly rate that balloons once we\u2019re on site. No mystery tip fees. What we quote is what you pay.',
              },
              {
                number: '03',
                title: 'Licensed waste carriers',
                body: 'Fully registered with the Environment Agency. Waste goes to proper licensed transfer stations — not dumped in a layby.',
              },
              {
                number: '04',
                title: 'We leave it properly clean',
                body: 'Every job finishes with a sweep, a bag-up of the loose bits, and a final walk-through. You get the space back the way you\u2019d want it.',
              },
              {
                number: '05',
                title: 'Flexible hours — evenings & weekends',
                body: 'Landlord with a tight turnaround? Probate deadline looming? We work around your schedule, including short-notice and weekend jobs.',
              },
              {
                number: '06',
                title: 'You deal with the owner, every time',
                body: 'No call centre, no middlemen. You speak to the person who turns up and does the job. That means real accountability and real communication.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.number} delay={i * 70}>
                <div className="flex gap-6">
                  <span className="font-heading text-4xl text-gold-sheen font-light leading-none pt-1">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl text-ink-50 mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-ink-300 leading-relaxed text-[15px]">{item.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Contact ───────────── */}
      <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gold-700/5 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <ScrollReveal className="lg:col-span-5">
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-gold-500 mb-5 font-medium">
                  — Get in touch
                </p>
                <h2 className="font-heading text-4xl md:text-6xl tracking-tight leading-[1.05] text-ink-50 mb-6">
                  Let&rsquo;s clear{' '}
                  <span className="italic text-gold-sheen">your site.</span>
                </h2>
                <p className="text-ink-300 leading-relaxed mb-12 max-w-md text-[15px]">
                  Tell us what needs clearing, roughly where, and when you&rsquo;d like it done.
                  A couple of photos help us quote accurately. We&rsquo;ll get back to you within
                  a few hours with a fair, fixed price — no obligation.
                </p>

                <ContactInfo />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} className="lg:col-span-7">
              <div className="bg-ink-900/80 border border-gold-800/30 rounded-sm p-8 md:p-10 hairline">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────── Footer ───────────── */}
      <footer className="relative py-14 bg-ink-950 border-t border-gold-800/20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <Wordmark size="md" />

            <div className="flex flex-col md:items-end gap-2">
              <p className="text-ink-300 text-sm">
                Shrewsbury · Shropshire · <a href="tel:+447508757024" className="text-gold-400 hover:text-gold-300 transition-colors">07508 757024</a>
              </p>
              <p className="text-ink-400 text-xs tracking-wider">
                © 2026 SY1 Removals · Website by{' '}
                <a
                  href="https://zcubed.digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-500 hover:text-gold-300 transition-colors"
                >
                  Z Cubed Digital
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
