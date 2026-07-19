import { type FormEvent, useState } from 'react'
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react'

type SubmitState = 'idle' | 'sending' | 'sent' | 'error'
const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined

async function sendContactForm(form: HTMLFormElement) {
  if (!formEndpoint) throw new Error('Das Formular ist noch nicht mit Formspree verbunden.')
  const selectedScopes = form.querySelectorAll<HTMLInputElement>('input[name="scope"]:checked')
  if (selectedScopes.length === 0) {
    form.querySelector<HTMLInputElement>('input[name="scope"]')?.focus()
    throw new Error('Bitte wähle mindestens einen Bereich aus.')
  }
  const response = await fetch(formEndpoint, {
    method: 'POST',
    body: new FormData(form),
    headers: { Accept: 'application/json' },
  })
  if (!response.ok) throw new Error('Die Anfrage konnte nicht versendet werden. Bitte nutze die E-Mail-Adresse.')
}

function useContactSubmission() {
  const [status, setStatus] = useState<SubmitState>('idle')
  const [error, setError] = useState('')
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')
    setError('')
    try {
      await sendContactForm(form)
      form.reset()
      setStatus('sent')
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Unbekannter Fehler beim Versand.')
      setStatus('error')
    }
  }
  return { status, error, submit, reset: () => setStatus('idle') }
}

function ContactForm() {
  const submission = useContactSubmission()
  if (submission.status === 'sent') return <div className="form-success"><CheckCircle2 /><h3>Anfrage versendet.</h3><p>Ich melde mich mit den nächsten sinnvollen Schritten.</p><button onClick={submission.reset}>Weitere Anfrage</button></div>
  return (
    <form className="contact-form" onSubmit={submission.submit} aria-busy={submission.status === 'sending'}>
      <input type="hidden" name="_subject" value="Neue Projektanfrage über eminsec.de" />
      <label><span>Name</span><input name="name" autoComplete="name" placeholder="Max Mustermann" required /></label>
      <label><span>E-Mail</span><input type="email" name="email" autoComplete="email" placeholder="max@unternehmen.de" required /></label>
      <fieldset className="scope-field">
        <legend>Wobei kann ich helfen?</legend>
        <p>Mehrfachauswahl möglich</p>
        <div className="scope-options">
          <label><input type="checkbox" name="scope" value="Web- & API-Pentesting" /><span>Web- & API-Pentesting</span></label>
          <label><input type="checkbox" name="scope" value="Physisches Pentesting" /><span>Physisches Pentesting</span></label>
          <label><input type="checkbox" name="scope" value="Cloud-Pentesting" /><span>Cloud-Pentesting</span></label>
          <label><input type="checkbox" name="scope" value="Netzwerk- & Active-Directory-Pentesting" /><span>Netzwerk & Active Directory</span></label>
          <label><input type="checkbox" name="scope" value="Domain- & DNS-Sicherheitstest" /><span>Domain- & DNS-Test</span></label>
          <label><input type="checkbox" name="scope" value="Secure Software Development" /><span>Secure Software Development</span></label>
        </div>
      </fieldset>
      <label className="full-field"><span>Kurzbeschreibung</span><textarea name="message" placeholder="System, Ziel und gewünschter Zeitraum" rows={4} required /></label>
      {submission.error && <p className="form-error full-field" role="alert">{submission.error}</p>}
      <button className="button button-primary" type="submit" disabled={submission.status === 'sending'}>{submission.status === 'sending' ? 'Wird versendet …' : 'Projekt anfragen'} <ArrowRight /></button>
      <p className="form-note">Bitte keine vertraulichen Zugangsdaten übermitteln.</p>
    </form>
  )
}

function Footer() {
  return (
    <footer>
      <div><strong>ABDUL<span>/EMAMI</span></strong><p>Freelance Pentesting & Software Development<br />Berlin · Remote in der EU</p></div>
      <div className="footer-links"><a href="#projects">Projekte</a><a href="#videos">Videos</a><a href="mailto:kontakt@eminsec.de">kontakt@eminsec.de</a></div>
      <p className="copyright">© {new Date().getFullYear()} Abdul Emami</p>
    </footer>
  )
}

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-copy"><span className="section-kicker">Direkter Kontakt / 06</span><h2>Was willst du bauen — oder brechen?</h2><p>Schreib mir kurz, worum es geht. Ich ordne den Scope ein und sage dir offen, ob und wie ich helfen kann.</p><a href="mailto:kontakt@eminsec.de"><Mail /> kontakt@eminsec.de</a></div>
      <ContactForm />
      <Footer />
    </section>
  )
}



