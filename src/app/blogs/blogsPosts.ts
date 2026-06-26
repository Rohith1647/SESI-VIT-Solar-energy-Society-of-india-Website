export interface Author {
  name: string
  role: string
  avatar: string
  bio: string
}

export interface BlogPost {
  id: number
  category: string
  catClass: string
  title: string
  excerpt: string
  date: string
  readTime: string
  img: string
  externalLink: string
  content: string
  author: Author
  inlineImages: { src: string; caption: string }[]
}

export const POSTS: BlogPost[] = [
  {
    id: 1,
    category: 'Technology', catClass: 'cat-technology',
    title: 'Revolutionizing Renewable Energy: The AuREUS Solar Panel Innovation',
    excerpt: 'Let’s dive into the Heap to find light! A Filipino student turned agricultural waste into a groundbreaking solar innovation.',
    date: 'October 16, 2025', readTime: '6 min read',
    img: '/blogs-images/image.png',
    externalLink: 'https://sesivit.wordpress.com/2025/10/16/revolutionizing-renewable-energy-the-aureus-solar-panel-innovation/',
    author: {
      name: 'Krithik B',
      role: 'Senior Core Member',
      avatar: '/blogs-images/krithik.jpeg',
      bio: 'Krithik B is a member of SESI-VIT who writes about emerging solar innovations, exploring how cutting-edge research translates into real-world renewable energy solutions.',
    },
    inlineImages: [
      { src: '/blogs-images/1stone.jpg', caption: 'Luminescent solar panel prototype capturing ambient UV light.' }
    ],
    content: `
      <p>Let’s dive into the Heap to find light!</p>
      <p>Traveling along the dusty country road to your grandmother’s house, you watch fields bursting with harvested crops: mangoes, calamansi, and other fruits piled high from the earth, ripe yet destined to be discarded. For many farmers here, a season’s hard work often ends in loss — damaged by storms, bruised by handling, or left to rot in the heat. But for a young Filipino engineering student named Carvey Ehren Maigue, these discarded treasures held a spark of hope, a hidden power yet to be tapped.</p>
      <p>Carvey’s journey began with simple curiosity — how could the glowing northern lights inspire a solar panel that worked even on cloudy days? His daily life was a mix of long study hours at Mapúa University and small makeshift experiments in his mother’s kitchen during lockdowns, where <strong>he crushed and distilled juices from wasted fruits, extracting brilliant luminescent particles</strong>. These secret ingredients could catch ultraviolet light rays — invisible to the eye but abundant even under thick clouds — and transform them into precious electricity.</p>
      <p>From the humble roadside harvests to the polished lab prototypes, Carvey’s dedication to <strong>turning waste into watts</strong> illuminated a new path for renewable energy. His <strong>AuREUS solar panels</strong>, named after the aurora borealis, don’t need bright sun to shine; they capture leftover light bouncing off walls and pavements, giving power to the shaded, the vertical, and the overlooked.</p>

      <h3>How AuREUS Solar Panels Work</h3>
      <p>At the core of AuREUS is a clever method of light conversion inspired by the aurora borealis. The technology uses luminescent particles naturally found in certain fruits and vegetables that can absorb high-energy UV light and re-emit it as visible light.</p>
      <p><strong>Process Breakdown:</strong></p>
      <ul>
        <li><strong>Absorption:</strong> Luminescent compounds extracted from agricultural waste absorb ultraviolet rays.</li>
        <li><strong>Re-emission:</strong> These particles convert UV into visible light through a downshifting process.</li>
        <li><strong>Energy Transfer:</strong> The visible light travels to photovoltaic (PV) cells embedded at the edges of the panel, where it is converted into electricity.</li>
      </ul>

      <h3>Key Features and Benefits</h3>
      <p><strong>1. Operates in Low-Light Conditions:</strong> Traditional panels drop in efficiency during cloudy days. Since AuREUS uses UV radiation, which is still present even when the sky is overcast, it can maintain output in conditions where regular solar panels fail.</p>
      <p><strong>2. Integrates with Urban Infrastructure:</strong> Building windows and walls, balconies, facades, public infrastructure, and even wearable devices such as clothing with embedded energy-generating layers.</p>
      <p><strong>3. Made from Agricultural Waste:</strong> The use of discarded fruits and vegetables as raw material is a game-changer. Not only does it make production cheaper, but it also helps tackle the massive issue of food waste. Reports suggest that over 1.2 billion tonnes of food are wasted globally each year. AuREUS offers a circular solution — recycling waste into clean energy.</p>
      <p><strong>4. Low-Cost &amp; Sustainable Manufacturing:</strong> Unlike silicon-based panels that require rare-earth metals and energy-intensive processes, AuREUS can be manufactured at lower cost using locally available organic waste, supporting both economic sustainability and environmental responsibility especially in developing countries.</p>

      <h3>Challenges and Limitations</h3>
      <p><strong>Efficiency:</strong> While traditional panels offer 15–22% efficiency, AuREUS prototypes currently operate at lower conversion rates. Current natural dyes reach around 80% of target performance. Researchers are now exploring synthetic alternatives and bioengineering to improve this.</p>
      <p><strong>Scalability:</strong> The luminescent compounds are only found in select crops — out of 78 tested, only 9 were viable. Scientists are working on lab-produced dyes that mimic the natural absorption-emission behaviour.</p>
      <p><strong>Durability and Lifespan:</strong> Organic materials may degrade faster than silicon when exposed to heat, humidity, and pollutants. While traditional panels last over 25 years, the lifespan of AuREUS materials is still being evaluated.</p>

      <h3>Future of AuREUS and Vertical Solar Integration</h3>
      <p>The real power of AuREUS lies in urban transformation — turning buildings into clean energy hubs without needing large horizontal spaces: skyscraper glass walls, transit hubs, and residential balconies and facades. These integrations would allow energy-positive buildings, reducing reliance on fossil fuels.</p>
      <p>Future development areas include creating long-lasting synthetic dyes, improving luminescent re-emission precision, and combining AuREUS with traditional PV panels for hybrid efficiency. To scale successfully, AuREUS must partner with solar manufacturers, construction firms, and be included in smart city planning policies.</p>

      <h3>Conclusion</h3>
      <p>The development of AuREUS solar panels signals a promising new direction for renewable energy — one that is flexible, sustainable, and inclusive. By utilising UV light and food waste, it addresses two major global issues: energy access and agricultural waste. As research continues, AuREUS could become a mainstream solution especially in cloudy cities, developing regions, or areas where land is at a premium. It invites us to reimagine how we generate power — not just on rooftops, but on every surface touched by sunlight, even through clouds.</p>
    `,
  },
  {
    id: 2,
    category: 'Analysis', catClass: 'cat-analysis',
    title: 'Critical Analysis- Solar Energy Cons',
    excerpt: 'We grew up studying only the sunshine of solar energy; true understanding comes when we also examine its shadows.',
    date: 'September 6, 2025', readTime: '6 min read',
    img: '/blogs-images/cons.png',
    externalLink: 'https://sesivit.wordpress.com/2025/09/06/critical-analysis-solar-energy-cons/',
    author: {
      name: 'Aditya P',
      role: 'Current Cosecretary',
      avatar: '/blogs-images/aditya.png',
      bio: 'Aditya P is a member of SESI-VIT who focuses on critical analysis of renewable energy systems. He examines both the promises and limitations of solar technology with data-driven research.',
    },
    inlineImages: [
      { src: '/blogs-images/blog-solar-field-person.png', caption: 'Large-scale solar installations require 3–5 acres per MW — significantly more than conventional energy sources.' },
    ],
    content: `
      <p><em>We grew up studying only the sunshine of solar energy; true understanding comes when we also examine its shadows.</em></p>

      <h3>Background</h3>
      <p>Solar energy is one of the leading renewable alternatives to existing non-renewable sources that are rapidly depleting. It is harvested by using photovoltaic (PV) cells which convert the sunlight into solar energy. It provides several benefits such as being an energy source that is a non-polluting, green alternative and having low maintenance costs once set up. There are several known pros but as all things in nature it does come with drawbacks.</p>

      <h3>High Initial Cost and Land Requirement</h3>
      <p>The solar panels, though are a valuable investment in the long run by saving long term electricity bills, the cost of initial investment is high and area required is also huge. Even though several countries incentivize the implementation of solar panels, the cost of solar panels without storage in residential set up costs around <strong>$21,900 to $25,200</strong> and around <strong>$98–112 million</strong> for utility-scale set ups. It takes up to 10–15 years just to break even with your investments.</p>
      <p>The area for residential implementation might look small but it takes about 3–5 acres per MW as compared to 1 acre per MW of area for natural gas and coal source for industrial demands. This will pose a serious increase in capital for the industrial perspective and will be a hindrance to scale up the industry due to the large area requirement.</p>
      <p><em>Source: Our World in Data — “How does the land use of different electricity sources compare?”</em></p>

      <h3>Storage</h3>
      <p>Storing harvested energy properly and having a common power station is hard due to a lack of technical advancements in PV units regarding storage.</p>
      <p>The existing storage method still lacks capacity, and overproduction causes grid failures. The Kerala State Electricity Board (KSEB) voiced concerns after suffering a staggering loss of INR 500 crores during 2024–25 due to low daytime demand but higher nighttime demand.</p>
      <p>Kerala, ranking fourth nationally for installed rooftop solar units, still faces high power demand. People with solar units consume only 36% of harvested energy in the daytime, with the rest stored in the grid. Only 45% is utilized at night. The remaining is sold to KSEB, but due to storage constraints, it can buy only 19% of the daily solar energy produced. This disrupts the power banking arrangement and raises costs by 19 paise/unit because of poor storage infrastructure.</p>

      <h3>Low Reliability</h3>
      <p>Solar energy though abundant in nature and can be harnessed for daily usage, its reliability is low. As sunlight is only available during the daytime the energy can only be produced during the daytime and not the nighttime. This energy can be stored in the solar panel itself but the cost analysis is higher than the alternatives.</p>
      <p>In Dharani (Bihar), the first fully solar powered village in India, the people faced the fact that electricity from conventional sources was a better alternative as the solar panels were less reliable due to frequent power outages. Solar energy cost thrice the price of grid electricity and due to poor battery storage the people were unable to fully utilize the energy for daily needs. The idea of off grid source was novel but the limitations posed a serious threat and the dark nights were testimonials of the plight of solar energy.</p>

      <h3>Weather and Geological Dependency</h3>
      <p>The solar panel’s effectiveness and efficiency are highly dependent on the weather pattern and the geological location. Places that are near the equator or have higher altitudes with less cloud coverage and abundant sunlight are always ideal but that’s not the case everywhere. Not all places can have the same situation. Also, the solar panels are highly dependent on the weather — if it is all sunny the amount harvested is high, if it is raining and there is cloud coverage the efficiency decreases, if there are thunderstorms the solar panels might be damaged as well.</p>
      <p>For instance, Indore and Bhopal which are known for their frequent thunderstorms faced massive solar panel loss due to structural damage and panels flying off of the roof during one of the routine pre-monsoon thunderstorms which had wind speed of 120 km/h. This raised a serious concern and panic amongst the people as the thunderstorm accompanied with high wind speed is a common occurrence in these areas.</p>
      <p><em>How will the poor-quality solar roofs that are being mass produced be effective and reliable to its people?</em></p>

      <h3>Low Efficiency</h3>
      <p>Efficiency of solar panels means the ratio of electrical output to the input solar energy. Generally the efficiency is around 15–22%. This causes the required area of solar panels to be large to get the required amount of electricity to run the residential or industrial plant.</p>
      <p>Solar panels tend to degrade at certain spectral wavelengths of light and raise in temperature beyond certain ambient conditions and thus decrease the lifespan and efficiency of the solar unit. The irradiation of such light are unavoidable, and the ambient temperature of 20–30°C is not available at every possible point of the day nor at every geological location, thus making the efficiency of solar panels dwindle and unpredictable as it differs not only with the solar unit but also the optics of sunlight and location of the plant set up.</p>

      <h3>Reserves Scarcity</h3>
      <p>The solar panels demand minerals like copper, nickel, lithium, cobalt, silver, etc., for which current reserves fail to provide for the zero-carbon goal by 2050, based on the report <em>Material and Resource Requirements for the Energy Transition</em> by the Energy Transition Commission (ETC). We face a reserve shortage, but abundant resources are available, though there is a huge gap in current technological advancements to convert these into reserves.</p>
      <p>For example, cobalt demand might reach 11.4 million tonnes but the current reserve is 8 million tonnes. For lithium the demand is around 21.5 million tonnes and the reserve is around 26 million tonnes. For copper the demand is around 1,150 million tonnes but the reserve is around 935 million tonnes. This study looks only at batteries and solar panels, while demand for other purposes will increase it even more. We do have enough resources but they are either in low concentrated ores, hard to excavate, or economically not feasible with present technology.</p>

      <h3>Recycling Issues and Environmental Safety</h3>
      <p>Another major concern with the usage of solar panels is the issues with recycling the solar panels and the environmental hazards it might pose. The solar panels might contain high levels of lithium and cadmium which might pose a serious threat to the environment due to its toxicity and might pollute the soil. Also, the mining, excavating and transporting activities of these ores might also increase the carbon footprint. The improper recycling system at present causes a huge wastage of precious reserves and not only that but also pollutes the environment.</p>

      <h3>In Retrospect</h3>
      <p>The idea of using solar energy as an alternative to the existing non-renewable methods is highly plausible but there are serious research gaps and need for technical advancements to make it a completely reliable alternative. As of now though the pros of solar energy seems huge over other renewable methods and seemingly the pros outweighing the cons — in the long run if we don’t advance and rectify the cons, the cons will overthrow the positives and we will again come to a standstill with the newly found alternative as we did with fossil fuels, coal, etc.</p>
      <p><em>…Progress isn’t choosing between sunshine and shadow, it’s engineering the bridge between them: affordable storage, resilient design, and responsible recycling…</em></p>
      <p><em>…The sun is abundant; reliability is designed through better materials, smarter grids, and standards that keep the lights on after sundown…</em></p>
    `,
  },
  {
    id: 3,
    category: 'Technology', catClass: 'cat-technology',
    title: 'Harnessing the Power of Two: The Rise of Photovoltaic Thermal (PVT) Hybrid Solar Technology',
    excerpt: 'Imagine a world where rooftops convert sunlight into both electricity and usable heat. Welcome to PVT solar technology.',
    date: 'July 17, 2025', readTime: '5 min read',
    img: '/blogs-images/photovoltaic.jpg',
    externalLink: 'https://sesivit.wordpress.com/2025/07/17/harnessing-the-power-of-two-the-rise-of-photovoltaic-thermal-pvt-hybrid-solar-technology/',
    author: {
      name: 'Shivaguru',
      role: 'Senior Core Member',
      avatar: '/blogs-images/shivaguru.jpeg',
      bio: 'Shivaguru is a SESI-VIT researcher investigating hybrid solar technologies and their real-world applications, with a focus on maximising energy yield and sustainability from dual-purpose solar systems.',
    },
    inlineImages: [
      { src: '/blogs-images/blog-pvt-diagram.png', caption: 'The Hybrid PVT solar collector captures both electricity via photovoltaics and thermal energy via IR heat, maximising output from a single surface.' },
      { src: '/blogs-images/blog-pvt-structure.png', caption: 'Internal structure of a PVT panel: PV cells on top, fluid-flow tubes beneath, and insulated channel base — combining two energy systems in one unit.' },
    ],
    content: `
      <p>Imagine a world where rooftops do more than just capture the sun’s light — they convert it into both electricity and usable heat. Welcome to the world of PVT solar collectors, an innovation which provides dual-purpose efficiency.</p>
      <p><strong>★★★★ Rating: 4 out of 5</strong></p>

      <h3>What Is PVT Technology?</h3>
      <p>Photovoltaic Thermal (PVT) Hybrid Solar Technology is a groundbreaking innovation that combines the benefits of photovoltaic (PV) cells (which convert sunlight into electricity) with thermal collectors (which absorb heat). By doing both in a single system, PVT maximizes energy utilization per square metre of sunlight, making it a true hybrid champion in solar energy technology.</p>

      <h3>Why PVT Matters? A Dual Approach to a Global Problem</h3>
      <p>With fossil fuel consumption projected to rise from 85 to 123 million barrels per day by 2025, energy sustainability is more critical than ever. Traditional PV systems generate electricity but allow excess heat to go to waste. PVT systems capitalize on this residual energy, transforming it into useful heat for various applications such as:</p>
      <ul>
        <li>Water heating</li>
        <li>Greenhouse warming</li>
        <li>Solar desalination</li>
        <li>Building-integrated solutions (BIPVT)</li>
      </ul>

      <h3>How Does a PVT System Work?</h3>
      <p>A PVT system typically includes:</p>
      <ul>
        <li><strong>Top Layer:</strong> Silicon-based PV cells converting light into electricity.</li>
        <li><strong>Absorber Plate:</strong> Often made of copper or aluminium, it collects residual heat.</li>
        <li><strong>Heat Transfer Channels:</strong> Circulating fluids (water, air, or glycol) capture and transport the heat.</li>
        <li><strong>Insulated Housing:</strong> Minimises heat loss and ensures durability.</li>
      </ul>

      <h3>Sustainability: More Than Just Clean Energy</h3>
      <p>PVT goes a step further in sustainability by:</p>
      <ul>
        <li>Reducing the need for multiple separate systems.</li>
        <li>Offering decentralized, off-grid energy options especially beneficial for rural India.</li>
        <li>Being scalable for large infrastructure projects.</li>
        <li>Increasing efficiency per material used, helping offset the environmental cost of rare minerals like selenium used in PVs.</li>
      </ul>
      <p>India receives over <strong>5,000 trillion kWh</strong> of solar energy annually. Effectively capturing even a fraction could meet the country’s entire electricity demand. PVT brings us closer to that possibility.</p>

      <h3>Emerging Technologies Pushing PVT Forward</h3>
      <p>The innovation doesn’t stop with hybrid systems. These emerging technologies are enhancing solar performance even further:</p>
      <ul>
        <li><strong>Nanofluids:</strong> Enhancing heat transfer with nanoparticle-infused fluids.</li>
        <li><strong>Gallium Arsenide (GaAs):</strong> Highly efficient but expensive PV materials.</li>
        <li><strong>Dye-Sensitized Solar Cells (DSSCs):</strong> Lower-cost, efficient under low light.</li>
        <li><strong>Perovskite Solar Cells (PSCs):</strong> High conversion efficiency with simple fabrication.</li>
        <li><strong>Organic Solar Cells:</strong> Environmentally friendly and cost-effective.</li>
      </ul>

      <h3>Is PVT Worth It?</h3>
      <p>Although PVT systems require a higher initial investment due to complexity, they deliver higher long-term energy yields. India holds immense potential to lead the global solar transition. With abundant sunlight and growing technological capacity, India can create up to <strong>287 gigatons of carbon space</strong> — nearly half the global budget needed to stay within 1.5°C warming.</p>

      <h3>Thoughts!</h3>
      <p>Photovoltaic Thermal (PVT) technology is more than just a smart engineering solution — it’s a symbol of what’s possible when innovation meets sustainability. As climate concerns grow and energy demands rise, embracing hybrid solutions like PVT isn’t just wise, it’s essential.</p>
      <blockquote><em>“You are energy, and energy cannot be created or destroyed. Energy just changes form.” — Albert Einstein</em></blockquote>
    `,
  },
  {
    id: 4,
    category: 'Education', catClass: 'cat-education',
    title: 'An Introduction to Renewable Energy',
    excerpt: 'Renewable energy is nature’s endless supply of power. It never runs out, as it is continuously restored by natural processes.',
    date: 'September 6, 2025', readTime: '7 min read',
    img: '/blogs-images/image-2-1.png',
    externalLink: 'https://sesivit.wordpress.com/2025/09/06/an-introduction-to-renewable-energy/',
    author: {
      name: 'Nirbhay',
      role: 'Current Chairperson',
      avatar: '/blogs-images/NIRBHAY.jpeg',
      bio: 'Nirbhay is a member of the SESI-VIT Education Cell, creating accessible content on renewable energy fundamentals to help students and the public understand the science behind a sustainable future.',
    },
    inlineImages: [],
    content: `
      <h3>What is Renewable Energy?</h3>
      <p>Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed. In other words, renewable energy is nature’s endless supply of power. It never runs out, as it is continuously restored by natural processes happening around us.</p>

      <h3>Why is it a better alternative to non-renewable energy?</h3>
      <p>Non-Renewable energy takes millions of years to form. These resources cannot be replaced quickly. The major problems of non-renewables are that they cause pollution and global warming, especially fossil fuels. Fossil fuels, when burned to produce energy, cause harmful emissions of greenhouse gases, such as carbon dioxide. To solve the present climate problems, usage of fossil fuels, which are the main cause of pollution, should be shifted to renewable ones.</p>
      <p>Renewables are now cheaper in most countries and generate three times more jobs than fossil fuels.</p>

      <h3>Where India Stands in the Race of Renewable Energy</h3>
      <p>The renewable energy sources like wind energy, solar energy, geothermal energy, ocean energy, biomass energy and fuel cell technology can be used to overcome energy shortage in India. To meet the energy requirement for such a fast-growing economy, India will require an assured supply of 3–4 times more energy than the total energy consumed today. Renewable energy is one of the options to meet this requirement.</p>
      <p>Today, renewables account for about 33% of India’s primary energy consumption. India is increasingly adopting responsible renewable energy techniques and taking positive steps towards carbon emissions, cleaning the air and ensuring a more sustainable future.</p>

      <h3>Sources of Renewable Energy</h3>

      <h3>Solar Energy</h3>
      <p><em>“The amount of solar energy that reaches the Earth is nearly 10,000 times more than the total energy used by all humans.”</em></p>
      <p>The most abundant of all energy resources is <strong>Solar Energy</strong>. The basic mechanism behind solar energy is it converts sunlight into electrical energy through various methods such as photovoltaic cells or through mirrors that concentrate solar radiation.</p>
      <p>The manufacturing of solar panels has drastically increased in the past decade, making them not only affordable but one of the cheapest forms of electricity. In general, solar panels have a lifespan of 30 years, however it may depend on how it is actually used.</p>

      <h3>Wind Energy</h3>
      <p>Wind energy harnesses the kinetic energy of moving air by using large wind turbines located on land (onshore) or in sea or freshwater (offshore). Though average wind speeds vary considerably by location, the world’s technical potential for wind energy exceeds global electricity production. India is a leading player in wind energy, ranking fourth globally in installed wind energy capacity.</p>

      <h3>Geothermal Energy</h3>
      <p>Geothermal energy utilizes the accessible thermal energy from the Earth’s interior. Heat is extracted from geothermal reservoirs using wells or other means. Unlike wind and solar energy, geothermal plants produce power at a constant rate, without regard to weather conditions. Geothermal resources are theoretically more than adequate to supply humanity’s energy needs. Most extraction occurs in areas near tectonic plate boundaries.</p>

      <h3>Hydropower</h3>
      <p>Hydropower was one of the first sources of energy used for electricity generation. It captures the natural energy of flowing water as it moves from higher to lower ground and can be generated in two main ways: through large reservoirs that store water, and through run-of-river systems that use the natural flow of rivers without significant storage.</p>
      <p>Beyond just producing electricity, hydropower reservoirs supply drinking water, support farming through irrigation, help prevent floods and droughts, and deliver reliable energy to communities. The Three Gorges Dam in China is the largest hydropower station in the world, with a capacity of 22,500 MW.</p>

      <h3>Biomass Energy</h3>
      <p>Bioenergy is produced from a variety of organic materials, called biomass, such as wood, charcoal, dung and other manures for heat and power production, and agricultural crops for liquid biofuels. Energy created by burning biomass creates greenhouse gas emissions, but at lower levels than burning fossil fuels. When biomass is burned, the carbon it contains is released back into the atmosphere — however, because this carbon was recently absorbed by the plant through photosynthesis, it’s considered part of a closed carbon cycle, making biomass energy potentially carbon neutral.</p>

      <h3>Future of Renewable Energy in India</h3>
      <p>India, faced with twin challenges on energy and environmental fronts, has no option but to work towards increasing the role of renewables in future energy systems. India with large renewable energy resources (solar PV, wind, solar heating, small hydro and biomass) is set to have large-scale development and deployment of renewable energy projects. It is expected that the contribution from renewables in power generation alone can be of the extent of 60,000 MW in the year 2031–2032.</p>

      <h3>Conclusion</h3>
      <p>Energy security, economic growth and environment protection are the national energy policy drivers of any country. Renewable energy provides enormous benefits and can contribute significantly in the national energy mix with minimal economic, environmental and social costs.</p>
      <blockquote><em>“Energy that is derived from natural processes (e.g. sunlight and wind) that are replenished at a higher rate than they are consumed.” — International Energy Agency (IEA)</em></blockquote>
      <blockquote><em>“The nation that leads in renewable energy will be the nation that leads the world.” — James Cameron</em></blockquote>
      <p><em>Editor: Ananya SSSV</em></p>
    `,
  },
  {
    id: 5,
    category: 'Education', catClass: 'cat-education',
    title: 'Solar Power Myth Buster: Real-World Uses vs. Popular Beliefs',
    excerpt: 'Solar is everywhere — but are we really seeing it? Separating solar fact from fiction, from rooftops to floating farms.',
    date: 'August 3, 2025', readTime: '5 min read',
    img: '/blogs-images/myth buster.jpg',
    externalLink: 'https://sesivit.wordpress.com/2025/08/03/solar-power-myth-buster-real-world-uses-vs-popular-beliefs/',
    author: {
      name: 'Hariharan',
      role: 'Current PNM Head',
      avatar: '/blogs-images/Hariharan.jpeg',
      bio: 'Hariharan is a SESI-VIT content writer who debunks myths and clarifies facts about solar energy through engaging, evidence-based storytelling aimed at a broad audience.',
    },
    inlineImages: [
      { src: '/blogs-images/blog-solar-mirror-farm.png', caption: 'A concentrating solar power (CSP) mirror farm — one of the unexpected real-world uses of solar technology beyond rooftop panels.' },
    ],
    content: `
      <p><em>Why is it even there?! Why is it even here?! 100% confused.</em></p>
      <p><em>The majority agree — yes, solar stands tall, the promising renewable energy of all! With sustainability at hand, solar power’s mighty stand in everything from rooftop setups to global energy blueprints.</em></p>
      <p>Yet with all this popularity grow the weeds of misconception. In order to separate fact from fiction, let’s debunk some of the most longstanding myths by fairly analysing both well-established applications and commonly held beliefs.</p>

      <h3>These common places are well known to all. Or are they?</h3>

      <p><strong>🛕 Rooftop Solar Panels</strong> are now common cards [was a rare card 7 years before]<br>
      From urban homes to rural dwellings, these panels quietly <strong>slash electricity bills</strong> while making households more energy resilient. It’s clean energy right where we live.</p>

      <p><strong>🚦 Street Lights</strong><br>
      The tall poles standing under the hot sun. Many of them are powered <strong>entirely by the sun</strong>. No underground wiring, no constant electricity draw, just solar panels charging by day, and lighting the way by night.</p>

      <p><strong>🚜 Solar Farms</strong><br>
      Sprawling across open fields, solar farms generate massive amounts of electricity — enough to power entire towns. They’re sleeping giants of sustainability, proving that solar isn’t just local — it’s scalable.</p>

      <p><strong>🎈 Solar Balloons and Gliders</strong><br>
      Floating high above the clouds, drifting alone. These lightweight lone flyers are powered entirely by the sun. No fuel, no noise, just clean energy harnessed for atmospheric research and remote sensing — all with <strong>zero emissions</strong> and maximum altitude.</p>

      <blockquote><em>“What seems familiar at first glance often hides an untold story. Solar is everywhere and maybe it’s time we actually noticed it.” — by a solar panel</em></blockquote>

      <h3>Up Next: The Unexpected Solar Spots</h3>

      <p><strong>🛋️ Smart Benches</strong><br>
      Well, everyone is getting smart these days but who expected these benches to get smarter. In modern smart cities, you’ll find solar-powered benches equipped with Wi-Fi hotspots, USB ports, and phone charging stations. Sit down, relax, and give your phone a quick charge under the courtesy of the sun.</p>

      <p><strong>💧 Floating Solar Plants</strong><br>
      Why is this lake looking so blue…. Oh, that’s solar, isn’t it? Absolutely. Floating solar farms are installed on lakes, reservoirs, and even canals. They’re efficient, reduce water evaporation, and save valuable land space — all while looking sleek and futuristic.</p>

      <p><strong>🎒 Wearable Solar Tech</strong><br>
      The fashion now is THE SOLAR DRIP 😎 Today, mini solar cells are being embedded in bags, jackets, and even helmets powering small devices on the go. Call it a real-world solar drip — practical, portable, and planet friendly.</p>

      <h3>Places People Think Solar Exists But Surprisingly Doesn’t</h3>

      <p><strong>🚉 Train Stations &amp; Airports</strong><br>
      We see a few panels on the roof and think, “Wow, this whole terminal must be solar powered!” Not quite. Transportation hubs run 24/7 and consume massive amounts of energy — way more than most solar setups can currently handle. What you see might be a demo, a backup, or just a small slice of the real power puzzle. The rest? Still very much running on the grid.</p>

      <p><strong>🏥 Medical Facilities</strong><br>
      Imagine you’re resting in a hospital ward and suddenly, the power goes out. Now picture this: just one floor above, someone’s in the middle of brain surgery. Scary, right? That’s exactly why hospitals can’t afford even a second of power loss. While some medical facilities use solar for non-critical areas or backup support, running entirely on solar is incredibly rare. The energy demand is just too high, and lives are on the line.</p>

      <p><strong>🏢 Sleek Business Towers</strong><br>
      Glass walls, green rooftops, a few panels — looks like sustainability, right? Well… kind of. Most modern office buildings still rely heavily on the grid. The solar panels? Often more for aesthetics or branding than for full energy supply. Eco-vibe ≠ off-grid power.</p>

      <h3>Bottom Line</h3>
      <p><strong>Seeing solar ≠ running on solar.</strong> Just because the panels are visible, doesn’t mean the place is off-grid or fully sustainable. Let’s not mistake solar <em>presence</em> for solar <em>dependence</em>.</p>

      <h3>Solar Ain’t Magic, It’s Science</h3>
      <p>Solar is growing fast but hype is just faster. So when you hear solar claims, don’t nod along like a robot. Sure, it powers floating farms, space tech, and rooftops, but that doesn’t mean every glass building is sipping sunlight or every resort is off-grid. Also, as powerful as your solar panel is, it’s not brewing your coffee at 2 AM unless you’ve got solid <strong>storage</strong> and a carefully designed system. It’s science, not sorcery.</p>
    `,
  },
  {
    id: 6,
    category: 'Innovation', catClass: 'cat-innovation',
    title: 'From Crisis to Clean Power: How Photovoltaic Cells Are Reshaping Our World',
    excerpt: 'Growing up near a coal plant, Aarav battled asthma. When solar panels arrived, they didn’t just bring power — they brought healing.',
    date: 'July 17, 2025', readTime: '7 min read',
    img: '/blogs-images/arnav.png',
    externalLink: 'https://sesivit.wordpress.com/2025/07/17/from-crisis-to-clean-power-how-photovoltaic-cells-are-reshaping-our-world/',
    author: {
      name: 'Shyam Sundar',
      role: 'Senior',
      avatar: '/blogs-images/Shyam.jpeg',
      bio: 'Shyam Sundar documents real-world breakthroughs in photovoltaic technology, from floating solar projects to perovskite cells, exploring how PV innovation is reshaping lives and communities across India.',
    },
    inlineImages: [
      { src: '/blogs-images/blog-pv-cell-diagram.png', caption: 'How a photovoltaic cell works: solar radiation excites electrons across N-type and P-type silicon layers, generating a DC current of approximately 0.58V.' },
      { src: '/blogs-images/blog-floating-solar.png', caption: 'The Omkareshwar Floating Solar Project on the Narmada River — workers inspect panels that generate power while reducing water evaporation.' },
      { src: '/blogs-images/blog-bhadla-solar-park.png', caption: 'Bhadla Solar Park, Rajasthan — one of the world’s largest solar installations, spanning 14,000+ acres and generating over 2,245 MW of clean energy.' },
    ],
    content: `
      <h3>Aarav’s Breath of Fresh Air</h3>
      <p>Growing up near a coal power plant, Aarav battled asthma and missed school days as thick smoke filled the air. His village had electricity but at the cost of their health.</p>
      <p>Years later, when Aarav returned after studying environmental engineering, he was stunned. Floating solar panels now covered the nearby reservoir, and sleek rooftop PV systems powered homes quietly, cleanly, without a trace of pollution.</p>
      <p><em>“I used to fear the air I breathed,” he said. “Now, solar power lights up our homes without darkening our skies.”</em></p>
      <p>For Aarav and his village, photovoltaic technology didn’t just bring power — it brought healing.</p>
      <blockquote><em>“I’d put my money on the sun and solar energy. What a source of power! I hope we don’t have to wait until oil and coal run out before we tackle that.” — Thomas Edison</em></blockquote>
      <p>Imagine a world without solar panels. In such a world, fossil fuels would dominate, remote villages would remain in darkness, and our fight against climate change would be drastically handicapped. Thankfully, the invention of photovoltaic (PV) cells has opened a new frontier in clean, scalable, and innovative energy.</p>

      <h3>The Science Behind PV Cells</h3>
      <p>Photovoltaic cells convert sunlight into electricity using semiconductor materials. When photons from sunlight hit the cell, they knock electrons loose, generating an electric current. Innovations like tandem solar cells and bifacial panels have greatly improved efficiency, while integration into windows, rooftops, and even floating platforms is expanding their applicability across sectors.</p>

      <h3>What If PV Cells Were Never Invented?</h3>
      <p>Without PV cells, the world would face increased dependence on fossil fuels, accelerated climate change, and limited access to energy especially in remote areas. Technological advancements in green energy, smart grids, and decentralized electrification would lag behind. The absence of solar-powered tools — from vehicles to calculators — would set back innovation in multiple sectors. In essence, the lack of PV technology would compromise global climate goals, making sustainability a distant dream.</p>

      <h3>Real-World Innovation – Omkareshwar Floating Solar Project</h3>
      <p>Located on the reservoir of the Omkareshwar Dam in Madhya Pradesh, this floating solar project is among the world’s largest. Developed under Rewa Ultra Mega Solar Ltd (RUMSL), the project includes:</p>
      <ul>
        <li>Tata Power’s 126 MW segment</li>
        <li>SJVN’s 90 MW segment</li>
        <li>Floating inverter platforms and adaptive anchoring systems</li>
        <li>Estimated generation: ~400 GWh/year</li>
        <li>CO₂ offset: 4.3 lakh tonnes annually</li>
        <li>Water saved: 32.5 million m³ per year</li>
      </ul>
      <p>The project not only provides clean energy but also preserves land and reduces water evaporation. It stands as a model for balancing innovation, ecology, and scale.</p>

      <h3>Bhadla Solar Park – Scaling Solar on Land</h3>
      <p>India’s Bhadla Solar Park in Rajasthan spans 56 square kilometres and generates 2,245 MW of solar energy, making it one of the world’s largest land-based solar parks. With massive financial backing and strategic desert location, Bhadla contributes to reducing greenhouse gas emissions by over 4 million tonnes annually.</p>

      <h3>Breakthroughs in PV Technology</h3>
      <p><em>Recent innovations are making solar power more efficient and flexible:</em></p>
      <ul>
        <li><strong>Perovskite &amp; Tandem Solar Cells:</strong> Higher conversion rates by capturing a wider solar spectrum.</li>
        <li><strong>Bifacial Panels:</strong> Capture light from both sides, increasing output.</li>
        <li><strong>Roll-to-Roll Printing &amp; Thin Films:</strong> Allow flexible, low-cost mass production.</li>
        <li><strong>Building-Integrated PV (BIPV):</strong> Turns rooftops and windows into power-generating units.</li>
        <li><strong>Smart Solar Systems:</strong> Use AI to optimize performance and integrate with smart grids.</li>
      </ul>

      <h3>The Future Shines Bright</h3>
      <blockquote><em>“The use of solar energy has not been opened up because the oil industry does not own the sun.” — Ralph Nader, activist</em></blockquote>
      <p>PV cells have transformed from space-age tech into everyday powerhouses driving clean energy access across the globe. From high-tech floating farms to rooftop panels on schools and hospitals, the impact is massive. As we move toward a carbon-neutral future, photovoltaics are not just tools — they are lifelines of equity, innovation, and sustainability.</p>
    `,
  },
]

export function getPostById(id: number): BlogPost | undefined {
  return POSTS.find(p => p.id === id)
}
