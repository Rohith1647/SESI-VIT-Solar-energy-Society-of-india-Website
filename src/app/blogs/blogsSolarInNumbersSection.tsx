'use client'

const SOLAR_STATS = [
  { icon:'☀️', value:'173,000 TW', title:'Solar Energy Reaching Earth', description:'Every moment, the Sun delivers enough energy to Earth to satisfy global electricity demand thousands of times over.'},
  { icon:'⚡', value:'1.6 TW+', title:'Global Installed Capacity', description:'Solar power is one of the fastest-growing renewable energy sources worldwide.'},
  { icon:'📉', value:'90%', title:'Cost Reduction', description:'The cost of solar photovoltaic modules has fallen dramatically since 2010.'},
  { icon:'🌍', value:'1 Billion+', title:'People Benefiting', description:'Solar energy supports homes, schools, industries, and remote communities worldwide.'},
  { icon:'🌱', value:'900M+ Tonnes', title:'CO₂ Avoided Annually', description:'Solar installations help reduce greenhouse gas emissions and fossil fuel dependence.'},
  { icon:'🏠', value:'Millions', title:'Solar Rooftops', description:'Residential rooftop systems continue to expand across the world.'},
  { icon:'🔋', value:'400+ GWh', title:'Battery Storage Capacity', description:'Integrating high-capacity battery storage systems ensures continuous, clean energy supply even when the sun goes down.'},
  { icon:'💼', value:'5.7 Million', title:'Global Green Jobs', description:'The solar energy sector is a leading creator of clean energy employment, supporting millions of green careers worldwide.'},
]

export default function BlogsSolarInNumbersSection() {
  return (
    <section className="solar-numbers-section">
      <div className="solar-numbers-header">
        <span className="section-tag">SOLAR INSIGHTS</span>
        <h2>Solar in <span>Numbers</span></h2>
        <p>A snapshot of the scale, impact, and rapid growth of solar energy around the world.</p>
      </div>
      <div className="solar-numbers-grid">
        {SOLAR_STATS.map((item, index) => (
          <div key={index} className="solar-number-card">
            <div className="solar-number-icon">{item.icon}</div>
            <div className="solar-number-value">{item.value}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
