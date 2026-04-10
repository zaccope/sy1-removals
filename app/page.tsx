import { ShieldCheck, Clock, HandCoins, Star } from '@phosphor-icons/react/dist/ssr'
import ScrollReveal from '@/components/ScrollReveal'
import HeroCta from '@/components/HeroCta'
import ServiceGrid from '@/components/ServiceGrid'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import CrownMark from '@/components/CrownMark'
import Wordmark from '@/components/Wordmark'

export default function Home() {
  return (
    <main className="bg-ink-950 text-ink-100 overflow-hidden">
      {/* ───────────── Hero ───────────── */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        {/* Background imagery */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-950/95 to-ink-900/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/70" />
          {/* Gold glow */}
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
                Moving homes,{' '}
                <span className="italic text-gold-sheen font-medium">handled properly.</span>
              </h1>

              <p className="text-lg md:text-xl text-ink-200 leading-relaxed max-w-xl mb-10 font-light">
                A careful, fully-insured removals team serving Shrewsbury and the whole of Shropshire.
                From single items to five-bed houses — we treat your belongings like our own.
              </p>

              <HeroCta />

              {/* Trust strip */}
              <div className="mt-14 pt-8 border-t border-gold-800/20 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <p className="font-heading text-2xl md:text-3xl text-gold-sheen font-semibold">Insured</p>
                  <p className="text-[11px] tracking-widest uppercase text-ink-300 mt-1">Fully covered</p>
                </div>
                <div>
                  <p className="font-heading text-2xl md:text-3xl text-gold-sheen font-semibold">Fair</p>
                  <p className="text-[11px] tracking-widest uppercase text-ink-300 mt-1">Fixed quotes</p>
                </div>
                <div>
                  <p className="font-heading text-2xl md:text-3xl text-gold-sheen font-semibold">Local</p>
                  <p className="text-[11px] tracking-widest uppercase text-ink-300 mt-1">Shrewsbury-based</p>
                </div>
              </div>
            </div>

            {/* Large crown flourish on desktop */}
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-600/10 blur-3xl rounded-full" />
                <CrownMark className="relative w-[380px] h-[380px] opacity-90" />
                <div className="absolute inset-0 border border-gold-800/20 rounded-full scale-110 animate-pulse" style={{ animationDuration: '6s' }} />
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
              { icon: ShieldCheck, title: 'Goods in Transit', subtitle: 'Every item insured' },
              { icon: Clock, title: 'On Time, Every Time', subtitle: 'Punctual from the first job' },
              { icon: HandCoins, title: 'No Hidden Fees', subtitle: 'Fixed quote, no surprises' },
              { icon: Star, title: 'Five-Star Care', subtitle: 'Wrapped, strapped, protected' },
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
                — What we do
              </p>
              <h2 className="font-heading text-4xl md:text-6xl tracking-tight leading-[1.05] text-ink-50">
                Every kind of move,{' '}
                <span className="italic text-gold-sheen">handled by one crew.</span>
              </h2>
              <p className="text-ink-300 leading-relaxed mt-6 max-w-xl text-[15px]">
                Whether it&rsquo;s one sofa across town or an entire family home across the county,
                we come prepared with the right van, the right kit, and the right attitude.
              </p>
            </div>
          </ScrollReveal>

          <ServiceGrid />
        </div>
      </section>

      {/* ───────────── About ───────────── */}
      <section id="about" className="relative py-24 md:py-32 bg-ink-900 border-y border-gold-800/15 overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold-800/5 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            <ScrollReveal className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/5] relative overflow-hidden rounded-sm border border-gold-800/30">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                    alt="Professional removals team at work"
                    className="w-full h-full object-cover grayscale contrast-110 brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold-600/20" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-8 -right-4 md:-right-8 bg-ink-950 border border-gold-700/50 p-6 rounded-sm max-w-[220px] hairline">
                  <CrownMark className="w-10 h-10 mb-3" />
                  <p className="font-heading italic text-gold-300 text-sm leading-snug">
                    &ldquo;Careful hands. Honest quotes. The standard we hold ourselves to.&rdquo;
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
                  <span className="italic text-gold-sheen">Built on reputation.</span>
                </h2>
                <div className="space-y-5 text-ink-200 leading-relaxed max-w-xl">
                  <p>
                    SY1 Removals was founded in Shrewsbury with one simple principle: treat every
                    customer&rsquo;s belongings as if they were our own. No corner-cutting, no hidden
                    surprises, no rushed jobs that leave furniture scratched or boxes missing.
                  </p>
                  <p>
                    Moving is one of the most stressful things most people ever do. Our job is to
                    take that stress off your shoulders — turning up when we say we will, packing
                    carefully, driving carefully, and putting everything exactly where you want it
                    at the other end.
                  </p>
                  <p>
                    From a single wardrobe to an entire five-bed family home, we bring the same
                    level of care to every job. It&rsquo;s why most of our work now comes from
                    word-of-mouth — and it&rsquo;s why the people we move once tend to call us again.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
                  <div className="border-l-2 border-gold-600 pl-4">
                    <p className="font-heading text-3xl text-gold-sheen font-semibold">Local</p>
                    <p className="text-sm text-ink-300 mt-1">Born &amp; based in Shrewsbury</p>
                  </div>
                  <div className="border-l-2 border-gold-600 pl-4">
                    <p className="font-heading text-3xl text-gold-sheen font-semibold">Trusted</p>
                    <p className="text-sm text-ink-300 mt-1">Word-of-mouth reputation</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────── Why Us ───────────── */}
      <section id="why-us" className="relative py-24 md:py-32">
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
                title: 'Everything gets wrapped and strapped',
                body: 'Furniture blankets, corner protectors, bubble wrap for fragiles, proper ratchet straps in the van. No shortcuts, no banged corners.',
              },
              {
                number: '03',
                title: 'Fair, fixed quotes — no surprises',
                body: 'You get one number up front. No hourly rate that balloons on moving day. No mystery fuel charges. What we quote is what you pay.',
              },
              {
                number: '04',
                title: 'Fully insured, completely covered',
                body: 'Goods-in-transit insurance on every move. In the unlikely event something goes wrong, you are properly protected — not left out of pocket.',
              },
              {
                number: '05',
                title: 'Flexible hours — evenings & weekends',
                body: 'Not everyone can move on a Tuesday morning. We work around your diary — including evenings, weekends, and short-notice jobs where we can.',
              },
              {
                number: '06',
                title: 'You deal with the owner, every time',
                body: 'No faceless call centre, no middlemen. You speak to the person who turns up on moving day. That means real accountability and real communication.',
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
      <section id="contact" className="relative py-24 md:py-32 bg-ink-900 border-t border-gold-800/15 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gold-700/5 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <ScrollReveal className="lg:col-span-5">
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-gold-500 mb-5 font-medium">
                  — Get in touch
                </p>
                <h2 className="font-heading text-4xl md:text-6xl tracking-tight leading-[1.05] text-ink-50 mb-6">
                  Let&rsquo;s plan{' '}
                  <span className="italic text-gold-sheen">your move.</span>
                </h2>
                <p className="text-ink-300 leading-relaxed mb-12 max-w-md text-[15px]">
                  Tell us a few details about what you need moving and when. We&rsquo;ll get back to
                  you within a few hours with a fair, fixed quote — no obligation.
                </p>

                <ContactInfo />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} className="lg:col-span-7">
              <div className="bg-ink-950/60 border border-gold-800/30 rounded-sm p-8 md:p-10 hairline">
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
