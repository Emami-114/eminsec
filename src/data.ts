import {
  Binary,
  Blocks,
  CloudCog,
  CodeXml,
  Crosshair,
  Fingerprint,
  LockKeyhole,
  Radar,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  id: string
  label: string
  title: string
  summary: string
  outcome: string
  bullets: string[]
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'offensive',
    label: 'Pentesting',
    title: 'Ich suche nicht nach Warnungen. Ich suche nach dem Weg hinein.',
    summary: 'Ich teste Webanwendungen, APIs und Cloud-Umgebungen manuell. Jeder relevante Befund wird reproduziert, eingeordnet und so beschrieben, dass dein Team ihn beheben kann.',
    outcome: 'Exploit-Nachweis + priorisierter Fix-Plan',
    bullets: ['Web- & API-Pentesting', 'Whitebox- & Greybox-Assessments', 'Cloud- & Identity-Angriffsflächen'],
    icon: Crosshair,
  },
  {
    id: 'engineering',
    label: 'Coding',
    title: 'Ich entwickle Software mit dem Blick eines Angreifers.',
    summary: 'Von Kotlin- und SwiftUI-Apps bis zu sicheren .NET-Backends: Ich baue digitale Produkte mit klarer Architektur, wartbarem Code und einem Sicherheitsmodell, das nicht erst später ergänzt wird.',
    outcome: 'Produktionsreifer Code + klare Übergabe',
    bullets: ['Kotlin & Jetpack Compose', 'Swift & SwiftUI', 'C# / .NET Backends'],
    icon: CodeXml,
  },
  {
    id: 'security-engineering',
    label: 'Security Engineering',
    title: 'Zwischen Finding und Fix geht kein Kontext verloren.',
    summary: 'Wenn Pentest und Entwicklung zusammengehören, begleite ich die Behebung direkt im Code: vom Threat Model über sichere Authentifizierung bis zu automatisierten Security Checks.',
    outcome: 'Nachhaltige Behebung statt PDF-Ablage',
    bullets: ['Threat Modeling', 'Code Review & Hardening', 'CI/CD Security Gates'],
    icon: CloudCog,
  },
]

export const processSteps = [
  { marker: 'T−05', title: 'Scope & Threat Map', text: 'Gemeinsam klären wir Assets, Vertrauensgrenzen und das reale Ziel des Projekts.' },
  { marker: 'T−01', title: 'Setup', text: 'Ich prüfe Zugänge, Testdaten und sichere Kommunikationswege.' },
  { marker: 'T+00', title: 'Build or Break', text: 'Ich entwickle fokussiert oder teste Angriffswege manuell und nachvollziehbar.' },
  { marker: 'T+07', title: 'Handoff & Retest', text: 'Du erhältst saubere Ergebnisse, klare nächste Schritte und auf Wunsch einen Retest.' },
]

export const capabilities = [
  { label: 'Application', icon: Blocks },
  { label: 'Identity', icon: Fingerprint },
  { label: 'Cryptography', icon: LockKeyhole },
  { label: 'Cloud', icon: CloudCog },
  { label: 'Detection', icon: Radar },
  { label: 'Source Code', icon: Binary },
]

export const trustStandards = ['OWASP ASVS', 'PTES', 'NIST SSDF', 'CWE', 'CVSS 4.0', 'ISO 27001-ready']


