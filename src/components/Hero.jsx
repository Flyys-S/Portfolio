import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <p className="hero-role">AI Engineer</p>
      <h1 className="hero-name">Rafly Rajwa Syahputra</h1>
      <p className="hero-tagline">I build intelligent solutions that bridge the gap between technology and human experience.</p>
      <Link to="/projects" className="btn">View My Work</Link>
    </section>
  )
}

export default Hero