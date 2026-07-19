import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { capabilities, services, type Service } from '../data'

type Selection = { active: number; select: (index: number) => void }

function ServiceTabs({ selection }: { selection: Selection }) {
  return (
    <div className="service-tabs" role="tablist" aria-label="Leistungsbereiche">
      {services.map((service, index) => (
        <button role="tab" aria-selected={selection.active === index} className={selection.active === index ? 'is-active' : ''} onClick={() => selection.select(index)} key={service.id}>
          <span>0{index + 1}</span>{service.label}
        </button>
      ))}
    </div>
  )
}

function ServiceDetail({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <article className="service-detail" key={service.id}>
      <div className="service-icon"><Icon /></div>
      <div><span className="section-kicker">Dein Ergebnis</span><p className="outcome">{service.outcome}</p></div>
      <h3>{service.title}</h3>
      <p className="service-summary">{service.summary}</p>
      <ul>{service.bullets.map((bullet) => <li key={bullet}><ArrowRight /> {bullet}</li>)}</ul>
    </article>
  )
}

function CapabilityRail() {
  return (
    <div className="capability-rail">
      {capabilities.map(({ label, icon: Icon }) => <span key={label}><Icon />{label}</span>)}
    </div>
  )
}

export function Services() {
  const [active, setActive] = useState(0)
  return (
    <section className="services section-light" id="services">
      <div className="section-heading"><span className="section-kicker">Meine Expertise / 01</span><h2>Break it.<br />Build it better.</h2><p>Ein Ansprechpartner für den Angriff, die Behebung und das sichere Weiterbauen.</p></div>
      <div className="services-layout"><ServiceTabs selection={{ active, select: setActive }} /><ServiceDetail service={services[active]} /></div>
      <CapabilityRail />
    </section>
  )
}
