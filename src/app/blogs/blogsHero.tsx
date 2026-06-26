'use client'
import BlogsGlowingOrb from './blogsGlowingOrb';

export default function BlogsHero() {
  const scrollToBlogs = () => {
    document.getElementById('blogs-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <BlogsGlowingOrb />

      <div className="hero-label">
        <span>SESI Blog</span>
      </div>

      <h1>
        Powering Ideas<br />
        for a <span className="gold">Sustainable<br />Future</span>
      </h1>

      <p className="hero-sub">
        Insights, innovations and stories driving the solar revolution in India and beyond.
      </p>

      <div className="hero-btns">
        <button className="btn-primary" onClick={scrollToBlogs}>Explore Blogs →</button>
      </div>
    </section>
  )
}
