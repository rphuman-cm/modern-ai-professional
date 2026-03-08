import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Features from '../components/Features'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
