import { useEffect } from 'react'
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
