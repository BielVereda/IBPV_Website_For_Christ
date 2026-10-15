import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Anniversary from './components/Anniversary'
import About from './components/About'
import Ministries from './components/Ministries'
import Pastors from './components/Pastors'
import Cultos from './components/Cultos'
import Baptism from './components/Baptism'
import PrayerForm from './components/PrayerForm'
import Donation from './components/Donation'
import MyKids from './components/MyKids'
import MapLocation from './components/MapLocation'
import Footer from './components/Footer'
import './index.css'

function App() {
  useEffect(() => {
    // Scroll suave (roda do mouse) + navegação suave por âncoras (#id)
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      allowNestedScroll: true,
      autoRaf: true,
    })
    window.lenis = lenis

    const handleAnchorClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const id = decodeURIComponent(link.getAttribute('href').slice(1))
      if (!id) return
      const target = document.getElementById(id)
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target, { offset: 0, duration: 1.4, force: true })
      history.replaceState(null, '', `#${id}`)
    }
    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
      delete window.lenis
    }
  }, [])

  useEffect(() => {
    // Reveal Observer logic
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const revealSelectors = [
      '.about-visual',
      '.about-content',
      '.pastor-card',
      '.culto-card',
      '.prayer-content',
      '.prayer-form-wrap',
      '.instituto-content',
      '.instituto-visual',
      '.oferta-card',
      '.location-info',
      '.map-wrap',
      '.section-header',
      '.event-card',
      '.baptism-content',
      '.baptism-visual',
      '.baptism-cta',
      '.mykids-content',
    ]

    revealSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el, i) => {
        el.setAttribute('data-reveal', '')
        if (i > 0 && i < 4) el.setAttribute('data-reveal-delay', String(i))
        revealObserver.observe(el)
      })
    })

    return () => {
      revealObserver.disconnect()
    }
  }, [])

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Events />
        <Anniversary />
        <About />
        <Ministries />
        <Pastors />
        <Cultos />
        <Baptism />
        <PrayerForm />
        <Donation />
        <MyKids />
        <MapLocation />
      </main>
      <Footer />
    </>
  )
}

export default App