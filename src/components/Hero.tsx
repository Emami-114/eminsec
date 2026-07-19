import { useEffect, useRef } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import profileImage from '../assets/profile.png'

function useHeroMotion(heroRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const hero = heroRef.current
    if (!hero || matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      const progress = Math.min(Math.max(-hero.getBoundingClientRect().top / innerHeight, 0), 1)
      hero.style.setProperty('--hero-progress', progress.toString())
      frame = 0
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    addEventListener('scroll', onScroll, { passive: true })
    return () => {
      removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [heroRef])
}

function HeroContent() {
  return (
    <div className="hero-content">
      <p className="hero-status"><span /> Available for selected projects · Berlin / Remote</p>
      <h1><span>I break</span><strong>what I build.</strong><em>Then I build it safer.</em></h1>
      <div className="hero-bottom">
        <p>Ich bin Abdul Emami — Freelancer für Pentesting und Softwareentwicklung. Ich finde reale Angriffswege und übersetze sie direkt in belastbaren Code.</p>
        <a className="hero-cta" href="#contact">Projekt anfragen <ArrowUpRight /></a>
      </div>
    </div>
  )
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  useHeroMotion(heroRef)

  return (
    <main className="hero" id="home" ref={heroRef}>
      <div className="hero-stage">
        <img className="hero-portrait" src={profileImage} alt="Portrait von Abdul Emami, Pentester und Softwareentwickler" />
        <div className="hero-shade" />
        <div className="hero-scan" aria-hidden="true" />
        <HeroContent />
        <a className="scroll-cue" href="#services"><ArrowDown /><span>Scroll to explore</span></a>
        <span className="hero-coordinate" aria-hidden="true">52.5200° N / 13.4050° E</span>
      </div>
    </main>
  )
}

