import { Award, Check } from 'lucide-react'
import { trustStandards } from '../data'

type Credential = { title: string; focus: string }

const credentials: Credential[] = [
  { title: 'CompTIA A+', focus: 'IT Systems & Support' },
  { title: 'CompTIA Network+', focus: 'Networks & Infrastructure' },
  { title: 'CompTIA Security+', focus: 'Security Fundamentals' },
  { title: 'CompTIA PenTest+', focus: 'Offensive Security' },
  { title: 'CompTIA Linux+', focus: 'Linux Systems' },
]

function Credential({ credential }: { credential: Credential }) {
  return (
    <article className="credential">
      <Award aria-hidden="true" />
      <div><span>CompTIA</span><h3>{credential.title}</h3><p>{credential.focus}</p></div>
      <i>Credential</i>
    </article>
  )
}

function Standards() {
  return (
    <div className="standards">
      <span className="section-kicker">Arbeitsgrundlagen</span>
      <div>{trustStandards.map((standard) => <span key={standard}><Check />{standard}</span>)}</div>
    </div>
  )
}

export function Evidence() {
  return (
    <section className="evidence section-light" id="credentials">
      <div className="section-heading evidence-heading"><span className="section-kicker">Zertifikate / 05</span><h2>Security braucht ein belastbares Fundament.</h2><p>Meine CompTIA-Zertifikate decken Systeme, Netzwerke, Linux und offensives Pentesting ab. Credential-Details stelle ich auf Anfrage bereit.</p></div>
      <div className="credential-grid">{credentials.map((credential) => <Credential credential={credential} key={credential.title} />)}</div>
      <Standards />
    </section>
  )
}

