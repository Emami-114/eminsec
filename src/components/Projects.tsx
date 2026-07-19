import { ArrowUpRight, GitBranch } from 'lucide-react'

type Project = {
  name: string
  category: string
  description: string
  stack: string[]
  href: string
  featured?: boolean
}

const projects: Project[] = [
  {
    name: 'MalDeals Backend',
    category: 'Secure API · Backend',
    description: 'Produktionsnahes Deal-Backend mit JWT-Authentifizierung, HMAC-signierten API-Keys, PostgreSQL, MinIO und automatisierter Docker-Deployment-Pipeline.',
    stack: ['.NET 9', 'PostgreSQL', 'Docker', 'JWT', 'CI/CD'],
    href: 'https://github.com/Emami-114/MalDealsBackend',
    featured: true,
  },
  {
    name: 'BiarFood iOS',
    category: 'Mobile · Commerce',
    description: 'Native Food-Delivery-App für iPhone und iPad mit SwiftUI, Firebase, adaptivem Layout und mehrstufigem Checkout inklusive PayPal.',
    stack: ['SwiftUI', 'Firebase', 'MVVM', 'Braintree'],
    href: 'https://github.com/Emami-114/BiarFoodiphone',
  },
  {
    name: 'Leben in Deutschland',
    category: 'Android · Offline first',
    description: 'Android-App zur Vorbereitung auf den Einbürgerungstest mit moderner Compose-Oberfläche, lokaler Datenhaltung und sauberer MVVM-Struktur.',
    stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Hilt'],
    href: 'https://github.com/Emami-114/lebenInDeutschland',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={project.featured ? 'project-card is-featured' : 'project-card'}>
      <div className="project-meta"><span>{project.category}</span><i>Public repository</i></div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      <a href={project.href} target="_blank" rel="noreferrer">Repository öffnen <ArrowUpRight /></a>
    </article>
  )
}

export function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <span className="section-kicker">Ausgewählte Projekte / 02</span>
        <h2>Code, den man<br />öffnen kann.</h2>
        <a href="https://github.com/Emami-114" target="_blank" rel="noreferrer"><GitBranch /> Alle Repositories</a>
      </div>
      <div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.name} />)}</div>
    </section>
  )
}

