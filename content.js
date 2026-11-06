/* ==========================================================
   content.js  -  EDIT THIS FILE to change what the site says.
   You never need to touch index.html to update your text.

   How to read this file:
   - Text goes inside quotes: "like this"
   - Lists use square brackets: [ "one", "two" ]
   - Each item in a list is separated by a comma
   - Anything in [BRACKETS] is a placeholder: replace it
   - Leave a link as "" (empty) and it will hide itself
   ========================================================== */

window.SITE = {

  // ---------- Top bar ----------
  location: "Rochester, NY",
  timeZone: "America/New_York",   // the clock in the top bar uses this

  // ---------- Profile card ----------
  name: "Selena Yang",
  headline: "Geospatial data science · Business Analytics & Sustainability",

  // Small green-dot line above your name. Leave "" to hide it.
  status: "Open to new ideas and opportunities",

  // Your headshot file (in this same folder). Leave "" to show a [YOUR PHOTO] frame.
  photo: "selena.jpg",

  // ---------- Overview card ----------
  // Each string is one paragraph.
  about: [
    "I'm fascinated by what changes when you add \"where?\" to a question. Where should we build renewable energy? Where is a supply chain exposed to climate risk? Where can better environmental information help a community make a better decision?",
    "I'm studying Business Analytics and Sustainability at the University of Rochester. Most of my work starts with a question I want to follow further. That has led me to build an independent climate exposure tool, explore renewable energy site suitability, and work on clean energy siting at Kelvolta. I enjoy figuring out whether an analysis is useful just as much as making it work.",
    "Lately I'm digging into climate resilience, environmental change and infrastructure planning, and exploring how machine learning and satellite data show what's happening on the ground. I learn by finding a gap, asking a question, building just enough to test an idea, then keeping going."
  ],

  // Small pills under the overview. Add your tools here, e.g. "Python", "QGIS", "SQL".
  // Use an empty list [] to hide them.
  skills: [
    "Renewable energy siting",
    "Supply chain risk",
    "Satellite data",
    "Machine learning",
    "Infrastructure planning"
  ],

  // ---------- Links ----------
  // Email: just the address. Others: full web addresses starting with https://
  links: {
    email: "shanya1449@gmail.com",      // e.g. "you@example.com"
    linkedin: "www.linkedin.com/in/selena-yang1",   // e.g. "https://www.linkedin.com/in/your-name"
    github: "",     // e.g. "https://github.com/your-username"
    resume: ""      // e.g. "resume.pdf" (put the PDF in this folder)
  },

  // ---------- Projects ----------
  school: "University of Rochester",
  studying: "Business Analytics & Sustainability",
  coords: "43.1566° N, 77.6088° W",
  intro: "Hello, there! I'm Selena, a geospatial data science student at the University of Rochester. I add where? to questions about climate, energy and infrastructure. I'm also learning how machine learning and satellite data show what's happening on the ground.",

  // category: the small grey line under the title
  // link:     where the arrow goes (a case study page, repo, or live tool). "" = not clickable yet
  // thumb:    which drawing to show until you have a real image: "map", "grid", "ridge", "empty"
  // image:    a real screenshot file in this folder, e.g. "solar-map.png". Replaces the drawing.
  // filter:  which filter button it appears under. Must match a name in `filters` below.
  // tools:   small grey line under the title
  // ratio:   shape of the image frame: "4/5", "3/2", "1/1" or "4/3" (mix them for the masonry look)
  // image:   a screenshot file in this folder, e.g. "solar-map.png". "" shows a grey [IMAGE] frame
  // link:    where clicking goes ("" = not clickable yet)
  filters: ["Climate risk", "Renewable energy", "Satellite & ML"],

  projects: [
    { id: "ny-wind", title: "New York wind site suitability", filter: "Renewable energy",
      tools: "GIS · Python, ArcGIS", year: "2026",
      ratio: "4/3", image: "ny-wind-suitability.jpg", link: "",
      // `study` makes this tile open its own page (project.html). Remove it to make the tile non-clickable.
      study: {
        industry: "Renewable energy",
        location: "New York State",
        data: "NREL / AWS TrueWind wind resource data (OpenEI), USGS NLCD 2019 land cover (Cornell CUGIR), NY Protected Areas Database v2.0 (NY Natural Heritage Program), US Census county boundaries, and LBNL’s “Queued Up” interconnection queue dataset (NYISO)",
        methods: "Python, ArcGIS",
        summary: "A wind-siting suitability model for New York State, checked against real NYISO interconnection-queue data to see whether physical suitability actually predicts where wind development happens, and to explain the gap where it doesn’t.",
        // Each section is a heading plus paragraphs. Add, delete or reorder them freely.
        sections: [
          { heading: "Overview",
            body: ["New York’s interconnection queue is enormous — enough proposed wind capacity to blow past the state’s 2030 clean energy target several times over. Only about one in five of those megawatts has ever gone operational. That’s the kind of number that makes you ask: where is all of this supposed to go, and does it actually go there? So before touching a single interconnection record, I built a map of where wind power should make sense in New York, based on nothing but wind, land, and law. Then I went and checked whether reality agreed."] },
          { heading: "Methodology",
            body: ["The suitability model runs on three layers at 200 meters: how windy a place actually is (NREL's wind power class, rescaled 0 to 1), what's sitting on the ground there (NLCD land cover, reclassified into a rough buildability score), and whether anyone's legally allowed to build there at all (NYPAD protected areas, a hard no, not a penalty). Wind counts for 65% of the final score, land cover for 35%; protected land gets set to zero no matter how good the other two numbers look, because a legal impossibility shouldn't get averaged away. Then came the part where theory meets paperwork: LBNL's interconnection queue data, filtered down to onshore wind projects that actually filed with NYISO, aggregated up to the county level since the queue doesn't give exact coordinates. To compare a 0-to-1 suitability score against megawatts running into the thousands, I converted both to percentile ranks, not 'how good is this county,' but 'how does this county rank against its 61 neighbors.' Split each axis at its median, and every county falls into one of four boxes: Matches, Missed opportunity, Built anyway, or Correctly avoided. I built the whole thing twice, once in Python and once in ArcGIS, mostly so one version could catch the other's mistakes."] },
          { heading: "Results",
            body: ["The best technical fit for wind turns out to be the Southern Tier and the hills of western New York: solid wind, open land, nobody protecting it. The Adirondacks, oddly, score worse than you'd expect, they have the single best wind resource in the entire state, but they're also deeply forested and heavily protected, so the model politely declines to recommend them. The more interesting story shows up once you add in what actually got built. Seven counties in the Finger Lakes, Ontario, Wayne, Seneca, Cortland, Chemung, Schoharie, Tompkins, score well above average on paper and have attracted almost no wind development at all. Meanwhile five North Country counties, Franklin, Lewis, Herkimer, St. Lawrence, Oneida, score below the state median and somehow account for a huge share of everything that's actually been proposed or built. The map, in other words, is not the territory."] },
          { heading: "Thought process",
            body: ["I picked NYISO partly because I know the region, but mostly because its queue already tells you something is off, a 22% completion rate is not subtle. The 65/35 wind-to-land weighting is an honest guess, not a cited constant; if I revisit this, that's the first number I'd go looking for a better source on. Building the pipeline twice turned out to be the most useful decision in the whole project, not the most efficient one. It's how I caught a real data problem: several 'onshore' wind projects in the queue turned out to be offshore wind cabling ashore through NYC and Long Island substations, which would have quietly inflated exactly the wrong counties if I hadn't checked capacity and substation names against real projects."] },
          { heading: "Limitations & next steps",
            body: ["The queue counts what got proposed, not what got built, a project can sit in it for a decade before anyone decides anything. So 'development activity' here is a proxy, and a slightly generous one. The explanation for why the Finger Lakes said no and the North Country said yes leans on local news coverage and legal filings rather than anything I can call causal, and for three of the seven 'missed opportunity' counties I never found a documented reason at all, which is its own kind of finding, maybe. Next time: better-sourced land-cover weights, actual parcel-level ownership data instead of county averages, and a transmission-cost layer instead of inferring grid constraints from news articles. And eventually, the same question for solar."] }
        ],
        // More pictures for the page: file name + a short caption. Put the files in this folder.
        images: [
          { file: "ny-wind-suitability.jpg", caption: "[Suitability map: describe the color scale and what it means]" }
        ]
      }
    },
    { id: "climate-exposure", title: "Climate exposure tool for apparel supply chains", filter: "Climate risk",
      tools: "Python · Open Supply Hub · WRI Aqueduct · ND-GAIN", year: "2026",
      ratio: "4/3", image: "climate-tool-draft.jpg", link: "",
    study: {
        industry: "Apparel & outdoor",
        location: "Global supply chains (Patagonia as the test case)",
        data: "Open Supply Hub facility registry, WRI Aqueduct 3.0 (water stress, drought, riverine and coastal flood risk), ND-GAIN Country Index (vulnerability and water scores), and Google AlphaEarth satellite embeddings via Google Earth Engine",
        methods: "Python (pandas, geopandas), spatial joins, Google Earth Engine",
        summary: "An independent tool that maps a brand's supply chain against public climate hazard and satellite data, built to work for any company in the registry, and tested first on Patagonia's 50 verified facilities. It is still in progress: the data pipeline and a satellite change signal are built, and the final scoring and interactive map are next.",
        sections: [
          { heading: "Overview",
            body: ["Companies publish their own climate risk reports, which tells you what they say about their exposure. I wanted to see what public data says on its own. So I'm building a tool that takes a brand's facility locations and checks each one against independent hazard data, with the goal that it works for any apparel or outdoor brand, not just one. I started with Patagonia because it has a public climate risk report I can eventually compare against.",
                   "The project is in progress. The data pipeline and a satellite change signal are working. The final exposure score, the interactive map and the comparison with Patagonia's own report are still ahead."] },
          { heading: "Methodology",
            body: ["Each facility starts as a row in a table, and each step adds columns to it. First, I downloaded Patagonia's facilities from Open Supply Hub, filtered by the verified contributor rather than a name search. A name search pulled in unrelated businesses named after the Patagonia region, and the contributor filter gave the 50 correct sites. I cleaned that file down to the columns I needed: name, country and coordinates.",
                   "Second, I joined country-level scores from ND-GAIN, using its vulnerability score and its water sub-score. I used the vulnerability score rather than the combined index because the index also folds in readiness, which is a different idea from exposure. The country codes didn't match between datasets (two letters versus three), so I converted them with a reference library instead of a hand-built table.",
                   "Third, I ran a spatial join against WRI Aqueduct 3.0, which asks which basin polygon each facility point falls inside. That gives each facility its own water stress, drought, riverine flood and coastal flood scores. I used Aqueduct's generic indicators rather than its textile-weighted composite, because one number at a time is easier to explain and defend. I checked that both layers used the same coordinate system before joining.",
                   "Fourth, I added a satellite change signal. For each facility I pulled Google's 64-value satellite embedding for 2018 and for 2024 and measured the distance between them. A distance of zero means no detectable change at that location, and a larger number means its satellite fingerprint shifted more. I averaged the signal over a 500 m radius around each facility and ran the loop across all 50."] },
          { heading: "Results",
            body: ["The main results so far are about data and method, not final risk rankings. Every one of the 50 facilities now has country-level vulnerability scores, four facility-level hazard scores and a satellite change score. The satellite scores range from about 0.22 to 0.75. The highest ones cluster in Vietnam, which is consistent with its rapid industrial development, but I haven't yet confirmed that against the imagery, so I'm treating it as a lead and not a finding.",
                   "The clearest result so far is a methods one. Sampling the satellite signal at a single 10 m pixel turned out to be unreliable. For one Bangladesh facility the single-pixel score was the highest of four I tested, but its 500 m average was the lowest. A single pixel can look like a facility's whole story or completely mislead, with no way to tell which from the number alone. Moving from one pixel to even a 100 m area did most of the stabilizing, and from 250 m to 2000 m the scores settled into a much tighter band."] },
          { heading: "Thought process",
            body: ["I try to keep every step simple enough to explain out loud. That's why I chose generic hazard indicators, one country-level score at a time and a plain average to start, instead of a blended black box. I'd rather defend a simple method than present a clever one I can't unpack.",
                   "The buffer test changed my mind about one decision. I started with single-pixel sampling because it was the obvious first thing to try. Comparing it to area averages on facilities where the two disagreed showed it was the real outlier. I chose 500 m on physical grounds, large enough to cover a facility compound and its surroundings but small enough to avoid pulling in unrelated land, since the data didn't point to one best radius.",
                   "I also left one real gap visible instead of papering over it. One facility in Jordan has no drought score because Aqueduct's own source data has none for that area. I kept it as missing and averaged only the indicators that exist for it."] },
          { heading: "Limitations & next steps",
            body: ["Several pieces are not done. The final exposure score is drafted (a hazard average blended with a country water score) but not finalized or documented, so I'm not publishing facility rankings yet. ND-GAIN scores are country-level, so every facility in a country gets the same one. Aqueduct 3.0 describes a historical baseline, not future conditions. The satellite change signal shows that a place changed, not why, and not whether the change is a climate risk. The sample is also small: 50 facilities from one brand.",
                   "Next, I'll finish and document the scoring, then build the interactive map with a brand selector and popups showing the underlying numbers. Then I'll compare the output against what Patagonia disclosed in its own climate risk report. Where the two match, that's evidence the tool works. Where they don't, I'll write up why. After that, I'll run it on a second brand, and I want to extend it so it can score any new location, not just known facilities."] }
        ],
        images: [
          { file: "climate-tool-draft.jpg", caption: "Concept mockup of the finished tool. Facilities, regions and ratings shown are illustrative placeholders, not real results." }
        ]
      }
    }
  ],


  // ---------- Blog ----------
  // url: link to the post (leave "" until it exists). Use an empty list [] to hide the Blog card.
  blog: [
    { title: "[POST TITLE: what you learned building the exposure tool]", topic: "[TOPIC]", url: "" },
    { title: "[POST TITLE: a method note on solar suitability]", topic: "[TOPIC]", url: "" },
    { title: "[POST TITLE: learning satellite data and ML]", topic: "[TOPIC]", url: "" }
  ],

  // ---------- Contact card ----------
  contactText: "Working on a place-based question that needs a map, a model, or better spatial data? I’d love to hear about it."
};
