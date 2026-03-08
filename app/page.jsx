import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import JET from '../components/sections/JET'
import Articles from '../components/sections/Articles'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'

export const metadata = {
  title: 'Modern AI Professional — AI Competence for the Work That Actually Matters',
  description:
    'A knowledge platform for working professionals who want to use AI with skill, judgment, and confidence. Built around the J.E.T. Model: Judgment, Execution, Trust.',
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <JET />
        <Articles />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
