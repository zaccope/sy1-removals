import { House, Buildings, Truck, Package, ArrowsLeftRight, Broom } from '@phosphor-icons/react/dist/ssr'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    icon: House,
    title: 'House Removals',
    description:
      'Full home moves handled door to door. We wrap, load, transport and place everything exactly where you want it — from one-bed flats to five-bed family homes.',
  },
  {
    icon: Buildings,
    title: 'Office & Commercial Moves',
    description:
      'Relocate your business with minimal downtime. Evening and weekend moves available so your team is back up and running without losing a working day.',
  },
  {
    icon: Truck,
    title: 'Man & Van',
    description:
      'Flexible, hourly man-and-van service for smaller jobs. A couple of items, a flat move, IKEA collections, or anything that won\u2019t fit in your own car.',
  },
  {
    icon: Package,
    title: 'Packing Service',
    description:
      'Professional packing using quality materials — boxes, bubble wrap, blankets, and custom crates for fragile items. Everything labelled room-by-room.',
  },
  {
    icon: ArrowsLeftRight,
    title: 'Single Item & Furniture',
    description:
      'Sofas, beds, wardrobes, pianos, appliances. One big item that needs moving? We handle the heavy lifting, the stairs, and the awkward corners.',
  },
  {
    icon: Broom,
    title: 'House Clearance',
    description:
      'End-of-tenancy, estate clearance, or just clearing out the loft. We remove, sort, and responsibly dispose of everything — leaving the property swept clean.',
  },
]

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold-800/20 border border-gold-800/20 rounded-sm overflow-hidden">
      {services.map((service, i) => {
        const Icon = service.icon
        return (
          <ScrollReveal key={service.title} delay={i * 70}>
            <div className="group relative bg-ink-900 p-8 md:p-10 h-full hover:bg-ink-800 transition-colors duration-500">
              <div className="w-12 h-12 flex items-center justify-center rounded-sm border border-gold-700/40 bg-gold-900/20 mb-6 group-hover:border-gold-500/70 group-hover:bg-gold-800/30 transition-colors">
                <Icon weight="duotone" className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-heading text-2xl tracking-tight text-ink-50 mb-3">
                {service.title}
              </h3>
              <p className="text-ink-300 leading-relaxed text-[15px]">{service.description}</p>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </ScrollReveal>
        )
      })}
    </div>
  )
}
