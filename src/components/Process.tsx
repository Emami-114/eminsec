import { ArrowUpRight } from 'lucide-react'
import { processSteps } from '../data'

function ProcessStep({ step }: { step: (typeof processSteps)[number] }) {
  return (
    <li>
      <span className="process-marker">{step.marker}</span>
      <div><h3>{step.title}</h3><p>{step.text}</p></div>
      <ArrowUpRight aria-hidden="true" />
    </li>
  )
}

export function Process() {
  return (
    <section className="process section-dark" id="process">
      <div className="process-intro">
        <span className="section-kicker">Arbeitsweise / 04</span>
        <h2>Direkter Kontakt. Klare Ergebnisse.</h2>
        <p>Du arbeitest vom ersten Scope bis zur letzten Übergabe direkt mit mir. Keine Sales-Schleife, keine stille Übergabe an ein anderes Team.</p>
        <a className="text-link text-link-light" href="#contact">Scope besprechen <ArrowUpRight /></a>
      </div>
      <ol className="process-list">{processSteps.map((step) => <ProcessStep step={step} key={step.marker} />)}</ol>
    </section>
  )
}


