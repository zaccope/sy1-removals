import { House, Tree, Trash, Toolbox, Key, Warning } from '@phosphor-icons/react/dist/ssr'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    icon: House,
    title: 'House Clearance',
    description:
      'Full property clearances handled with care — probate, downsizing, deceased estates, or hoarded homes. We remove everything, sort what can be donated, and leave the house broom-clean.',
  },
  {
    icon: Tree,
    title: 'Garden & Yard Clearance',
    description:
      'Overgrown gardens, dumped timber, broken furniture, old fence panels. We strip the whole space back to bare ground — ready for a fresh start or a sale-ready tidy-up.',
  },
  {
    icon: Trash,
    title: 'Waste & Rubbish Removal',
    description:
      'Same-day rubbish uplifts for households and small businesses. Bulk waste, bagged rubbish, white goods, mattresses — loaded, hauled away, and disposed of responsibly.',
  },
  {
    icon: Toolbox,
    title: 'Shed & Outbuilding Removal',
    description:
      'Rotten sheds, collapsed lean-tos, old greenhouses. We dismantle, clear the slab, and take every last piece away. What was there yesterday is gone today.',
  },
  {
    icon: Key,
    title: 'End of Tenancy Clearance',
    description:
      'Landlord-ready clearances between tenants. Everything removed, carpets lifted if needed, properties photographed before and after — so you can get it back on the market fast.',
  },
  {
    icon: Warning,
    title: 'Fly-Tip & Bulk Waste',
    description:
      'Someone dumped rubbish at the back of your property? We clear fly-tipped sites for landlords, businesses, and councils — quickly, quietly, and without fuss.',
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
