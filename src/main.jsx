import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Menu,
  X,
  ChevronRight,
  Sofa,
  RefreshCw,
  ClipboardList,
  Sparkles,
  Leaf,
  Users,
  Mail,
  Phone,
} from 'lucide-react';
import './styles.css';

/* =========================================================
   BRIGHT BOX — REAL PROJECT IMAGES
   All 32 image files currently available in /public/images
========================================================= */

const imageFiles = [
  'project-009.jpg',
  'project-012.jpg',
  'project-014.jpg',
  'project-019.jpg',
  'project-022.jpg',
  'project-025.jpg',
  'project-028.jpg',
  'project-030.jpg',
  'project-033.jpg',
  'project-037.jpg',
  'project-039.jpg',
  'project-042.jpg',
  'project-044.jpg',
  'project-050.jpg',
  'project-056.jpg',
  'project-061.jpg',
  'project-064.jpg',
  'project-066.jpg',
  'project-069.jpg',
  'project-073.jpg',
  'project-076.jpg',
  'project-079.jpg',
  'project-081.jpg',
  'project-085.jpg',
  'project-088.jpg',
  'project-091.jpg',
  'project-094.jpg',
  'project-097.jpg',
  'project-099.jpg',
  'project-102.jpg',
  'project-104.jpg',
  'project-109.jpg',
];

/* =========================================================
   PROJECT DATA
========================================================= */

const projectData = [
  {
    category: 'Governmental Office',
    title: 'Green for City Development Office',
    location: 'Addis Ababa',
    year: '2023',
    service: 'Design + Construction',
    image: imageFiles[0],
  },
  {
    category: 'Governmental Office',
    title: 'Addis Ababa City Mayor Residence',
    location: 'Bisrate Gebriel',
    year: '2021',
    service: 'Design + Construction',
    image: imageFiles[1],
  },
  {
    category: 'Governmental Office',
    title: 'National Rehabilitation Commission Office',
    location: 'Legehar, Stadium',
    year: '2024',
    service: 'Design + Construction',
    image: imageFiles[2],
  },
  {
    category: 'Governmental Office',
    title: 'INSA Office',
    location: 'Welo-sefer',
    year: '2024',
    service: 'Design + Construction',
    image: imageFiles[3],
  },
  {
    category: 'Governmental Office',
    title: 'YEKA Sub-City Administration',
    location: 'Megenagna',
    year: '2023',
    service: 'Design + Supervision',
    image: imageFiles[4],
  },
  {
    category: 'Private Office',
    title: 'GEMCORP PLC Office',
    location: 'Bole',
    year: '2024',
    service: 'Design + Construction',
    image: imageFiles[5],
  },
  {
    category: 'Commercial',
    title: 'Base Addis Coffee Shop',
    location: 'CMC, Figa',
    year: '2020',
    service: 'Design',
    image: imageFiles[6],
  },
  {
    category: 'Commercial',
    title: 'GG Women Beauty Salon',
    location: 'Bole',
    year: '2025',
    service: 'Design + Construction',
    image: imageFiles[7],
  },
  {
    category: 'Commercial',
    title: 'Cafe and Restaurant',
    location: 'Urael Square',
    year: '2025',
    service: 'Design + Construction',
    image: imageFiles[8],
  },
  {
    category: 'Residential',
    title: 'Ato Biniam Residence',
    location: 'Bole Bulbula',
    year: '2019',
    service: 'Design + Construction',
    image: imageFiles[9],
  },
  {
    category: 'Residential',
    title: 'CCD Residence Compound',
    location: 'CCD Compound, Tafo',
    year: '2022',
    service: 'Design + Construction',
    image: imageFiles[10],
  },
  {
    category: 'Residential',
    title: 'Haile G/Selasie Residence',
    location: 'Megenagna',
    year: '2025',
    service: 'Design + Construction',
    image: imageFiles[11],
  },
  {
    category: 'Residential',
    title: 'Bekele W/Gebriel Apartment',
    location: 'Kebena',
    year: '2025',
    service: 'Design + Supervision',
    image: imageFiles[12],
  },
  {
    category: 'Residential',
    title: 'Ashenafi Wondimu Apartment',
    location: 'Figa, Yeka',
    year: '2024',
    service: 'Design + Supervision',
    image: imageFiles[13],
  },
  {
    category: 'Landscape',
    title: 'FUT-SAL Play Ground',
    location: 'Ferency Leegasiyon',
    year: '2024',
    service: 'Construction',
    image: imageFiles[14],
  },
  {
    category: 'Landscape',
    title: 'Tsehay Real-Estate Play Ground',
    location: 'CMC, Tsehay Real-estate',
    year: '2024',
    service: 'Design + Construction',
    image: imageFiles[15],
  },
  {
    category: 'Private',
    title: 'Roof Top Terrace Bar and Kitchen',
    location: 'CMC, Altad',
    year: '2024',
    service: 'Design + Construction',
    image: imageFiles[16],
  },
  {
    category: 'Commercial',
    title: 'Clothing Shop',
    location: 'Garad Building, Welo Sefer',
    year: '2023',
    service: 'Design + Construction',
    image: imageFiles[17],
  },
  {
    category: 'Commercial',
    title: 'Cleaning Detergent Shop',
    location: 'Bole, Welo Sefer',
    year: '2022',
    service: 'Design + Construction',
    image: imageFiles[18],
  },
  {
    category: 'Commercial',
    title: 'RAHA Beauty Salon',
    location: 'Bole',
    year: '2024',
    service: 'Design + Construction',
    image: imageFiles[19],
  },
  {
    category: 'Private',
    title: 'Reception Area Design',
    location: 'Arat Kilo',
    year: '2021',
    service: 'Design + Supervision',
    image: imageFiles[20],
  },

  /* =======================================================
     ADDITIONAL REAL IMAGES
     These files exist in the project but did not previously
     have project records.
  ======================================================= */

  {
    category: 'Portfolio',
    title: 'Bright BOX Project 22',
    location: 'Addis Ababa',
    year: '2024',
    service: 'Interior Design',
    image: imageFiles[21],
  },
  {
    category: 'Portfolio',
    title: 'Bright BOX Project 23',
    location: 'Addis Ababa',
    year: '2024',
    service: 'Interior Design',
    image: imageFiles[22],
  },
  {
    category: 'Portfolio',
    title: 'Bright BOX Project 24',
    location: 'Addis Ababa',
    year: '2024',
    service: 'Interior Design',
    image: imageFiles[23],
  },
  {
    category: 'Portfolio',
    title: 'Bright BOX Project 25',
    location: 'Addis Ababa',
    year: '2024',
    service: 'Interior Design',
    image: imageFiles[24],
  },
  {
    category: 'Portfolio',
    title: 'Bright BOX Project 26',
    location: 'Addis Ababa',
    year: '2024',
    service: 'Interior Design',
    image: imageFiles[25],
  },
  {
    category: 'Landscape',
    title: 'Sports Field Project',
    location: 'Addis Ababa',
    year: '2024',
    service: 'Landscape + Construction',
    image: imageFiles[26],
  },
  {
    category: 'Portfolio',
    title: 'Bright BOX Project 28',
    location: 'Addis Ababa',
    year: '2024',
    service: 'Interior Design',
    image: imageFiles[27],
  },
  {
    category: 'Portfolio',
    title: 'Bright BOX Project 29',
    location: 'Addis Ababa',
    year: '2024',
    service: 'Interior Design',
    image: imageFiles[28],
  },
  {
    category: 'Landscape',
    title: 'Landscape Development Project',
    location: 'Addis Ababa',
    year: '2024',
    service: 'Landscape + Construction',
    image: imageFiles[29],
  },
  {
    category: 'Landscape',
    title: 'Sports Ground Project',
    location: 'Addis Ababa',
    year: '2024',
    service: 'Landscape + Construction',
    image: imageFiles[30],
  },
  {
    category: 'Portfolio',
    title: 'Bright BOX Project 32',
    location: 'Addis Ababa',
    year: '2024',
    service: 'Interior Design',
    image: imageFiles[31],
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: Sparkles,
    title: 'Interior Design & Construction',
    text: 'Functional and aesthetic custom space design for residential and commercial program spaces.',
  },
  {
    icon: Sofa,
    title: 'Woodwork & Furniture',
    text: 'Furniture and woodwork crafted through the company workshop to fit each space and style requirement.',
  },
  {
    icon: RefreshCw,
    title: 'Renovation',
    text: 'Redesigning and upgrading existing spaces while maintaining structural integrity.',
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    text: 'Overseeing design projects from start to finish, coordinating contractors, suppliers and artisans.',
  },
];

/* =========================================================
   VALUES
========================================================= */

const values = [
  [
    '01',
    'Creativity & Innovation',
    Sparkles,
    'Pushing boundaries through original ideas, trends and technologies.',
  ],
  [
    '02',
    'Sustainability',
    Leaf,
    'Designing with the future in mind through responsible design practices.',
  ],
  [
    '03',
    'Collaboration',
    Users,
    'Working closely with clients, partners and the creative team.',
  ],
];

/* =========================================================
   APP
========================================================= */

function App() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filtered = useMemo(() => {
    if (filter === 'All') {
      return projectData;
    }

    return projectData.filter((project) => project.category === filter);
  }, [filter]);

  const cats = ['All', ...new Set(projectData.map((project) => project.category))];

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });

    setOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className={scrolled ? 'nav scrolled' : 'nav'}>
        <div className="navin">
          <button className="brand" onClick={() => go('home')}>
            <span className="brandmark">B</span>

            <span>
              BRIGHT
              <br />
              <small>BOX</small>
            </span>
          </button>

          <nav>
            {['About', 'Services', 'Projects', 'Values', 'Contact'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => go(item.toLowerCase())}
                >
                  {item}
                </button>
              )
            )}
          </nav>

          <button
            className="navcta"
            onClick={() => go('contact')}
          >
            Start a project
            <ArrowUpRight size={16} />
          </button>

          <button
            className="menub"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="mobilemenu">
            {['About', 'Services', 'Projects', 'Values', 'Contact'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => go(item.toLowerCase())}
                >
                  {item}
                </button>
              )
            )}

            <button
              className="mobilecta"
              onClick={() => go('contact')}
            >
              Start a project
              <ArrowUpRight size={16} />
            </button>
          </div>
        )}
      </header>

      <main id="home">
        {/* ===================================================
            HERO
        =================================================== */}

        <section className="hero">
          <div className="heroimage">
            <img
              src="/images/project-009.jpg"
              alt="Bright BOX interior design project"
            />

            <div className="grain" />
          </div>

          <div className="heroin">
            <div className="eyebrow">
              INTERIOR DESIGN · CONSTRUCTION · FURNITURE
            </div>

            <h1>
              Spaces with
              <br />
              <em>character.</em>
            </h1>

            <p>
              Transforming spaces into timeless expressions of
              beauty, functionality and individuality.
            </p>

            <div className="herobtns">
              <button
                className="darkbtn"
                onClick={() => go('projects')}
              >
                Explore projects
                <ArrowUpRight size={17} />
              </button>

              <button
                className="lightbtn"
                onClick={() => go('contact')}
              >
                Start a project
                <ArrowUpRight size={17} />
              </button>
            </div>
          </div>

          <div className="herofoot">
            <span>
              BRIGHT WOOD MANUFACTURING
              <br />
              AND INTERIOR DESIGN PLC
            </span>

            <span>ADDIS ABABA · ETHIOPIA</span>
          </div>
        </section>

        {/* ===================================================
            ABOUT
        =================================================== */}

        <section className="intro section" id="about">
          <div className="kicker">01 — ABOUT</div>

          <div className="introgrid">
            <div>
              <h2>
                We design spaces
                <br />
                <span>that feel like you.</span>
              </h2>
            </div>

            <div>
              <p className="lead">
                BRIGHT WOOD MANUFACTURING AND INTERIOR DESIGN PLC
                specializes in interior design and finishing
                construction works, from residential to commercial
                buildings.
              </p>

              <p>
                Our approach is built around innovative design,
                sustainable design and collaboration. Through
                advanced design techniques, we pursue visually
                compelling aesthetics together with superior
                functionality.
              </p>

              <button
                className="textbtn"
                onClick={() => go('services')}
              >
                Discover our capabilities
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* ===================================================
            SERVICES
        =================================================== */}

        <section className="services section" id="services">
          <div className="sectionhead">
            <div>
              <div className="kicker">02 — WHAT WE DO</div>

              <h2>
                From concept
                <br />
                <span>to completion.</span>
              </h2>
            </div>

            <p>
              One creative partner across design, making,
              construction and project coordination.
            </p>
          </div>

          <div className="servicegrid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <article className="service" key={title}>
                <div className="serviceicon">
                  <Icon size={23} />
                </div>

                <div className="servicen">
                  0{index + 1}
                </div>

                <h3>{title}</h3>

                <p>{text}</p>

                <button onClick={() => go('contact')}>
                  Discuss your project
                  <ArrowUpRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* ===================================================
            PROJECTS
        =================================================== */}

        <section className="projects section" id="projects">
          <div className="sectionhead projecthead">
            <div>
              <div className="kicker">03 — SELECTED WORK</div>

              <h2>
                Built with
                <br />
                <span>purpose.</span>
              </h2>
            </div>

            <p>
              Actual Bright BOX portfolio work from the company
              profile.
            </p>
          </div>

          {/* PROJECT FILTERS */}

          <div className="filters">
            {cats.map((category) => (
              <button
                key={category}
                className={filter === category ? 'active' : ''}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PROJECT GRID */}

          <div className="projectgrid">
            {filtered.map((project, index) => (
              <article
                className="project"
                key={`${project.title}-${project.image}`}
                onClick={() => setSelected(project)}
              >
                <div className="pimg">
                  <img
                    src={`/images/${project.image}`}
                    alt={project.title}
                    loading="lazy"
                  />

                  <div className="pnum">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="hoverarrow">
                    <ArrowUpRight />
                  </div>
                </div>

                <div className="pmeta">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <h3>{project.title}</h3>

                <p>
                  {project.location} · {project.service}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ===================================================
            VALUES
        =================================================== */}

        <section className="values section" id="values">
          <div className="kicker">04 — PRINCIPLES</div>

          <div className="valuesintro">
            <h2>
              Three ideas
              <br />
              <span>guide every space.</span>
            </h2>

            <p>
              At Bright BOX, originality, responsibility and
              teamwork are central to the way we design and
              deliver.
            </p>
          </div>

          <div className="valuegrid">
            {values.map(([number, title, Icon, description]) => (
              <article className="value" key={title}>
                <span>{number}</span>

                <Icon size={25} />

                <h3>{title}</h3>

                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ===================================================
            MANIFESTO
        =================================================== */}

        <section className="manifesto">
          <div className="manifestoin">
            <span>OUR VISION</span>

            <h2>
              To inspire and transform space into{' '}
              <em>timeless expressions</em> of beauty,
              functionality and individuality.
            </h2>
          </div>
        </section>

        {/* ===================================================
            PROCESS
        =================================================== */}

        <section className="process section">
          <div className="kicker">05 — THE WAY WE WORK</div>

          <div className="processgrid">
            <div>
              <h2>
                One vision.
                <br />
                <span>One process.</span>
              </h2>

              <p>
                From the first conversation to the finished space,
                we coordinate the details that make a project work.
              </p>
            </div>

            <div className="steps">
              {[
                'Understand',
                'Design',
                'Coordinate',
                'Build',
                'Deliver',
              ].map((step, index) => (
                <div className="step" key={step}>
                  <span>
                    0{index + 1}
                  </span>

                  <strong>{step}</strong>

                  <ChevronRight size={18} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            CONTACT
            IMPORTANT:
            project-096.jpg did NOT exist.
            Use a real image instead.
        =================================================== */}

        <section className="contact" id="contact">
          <div className="contactbg">
            <img
              src="/images/project-094.jpg"
              alt=""
            />
          </div>

          <div className="contactin">
            <div className="kicker light">
              06 — CONTACT
            </div>

            <h2>
              Have a space
              <br />
              <em>in mind?</em>
            </h2>

            <p>
              Let's talk about your next interior, construction,
              furniture or renovation project.
            </p>

            <div className="contactrow">
              <a href="mailto:info@brightbox.et">
                <Mail />

                <span>
                  Email us
                  <br />
                  <b>Start a conversation</b>
                </span>
              </a>

              {/* Replace this placeholder number with the real
                  Bright BOX phone number before deployment. */}

              <a href="tel:+251000000000">
                <Phone />

                <span>
                  Call us
                  <br />
                  <b>Request a consultation</b>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>
        <div className="footergrid">
          <div>
            <button
              className="brand footerbrand"
              onClick={() => go('home')}
            >
              <span className="brandmark">B</span>

              <span>
                BRIGHT
                <br />
                <small>BOX</small>
              </span>
            </button>

            <p>
              Bright Wood Manufacturing and Interior Design PLC.
            </p>
          </div>

          <div>
            <b>Explore</b>

            <button onClick={() => go('about')}>
              About
            </button>

            <button onClick={() => go('services')}>
              Services
            </button>

            <button onClick={() => go('projects')}>
              Projects
            </button>
          </div>

          <div>
            <b>Connect</b>

            <span>Addis Ababa, Ethiopia</span>
            <span>Interior design · Construction</span>
            <span>Woodwork · Furniture</span>
          </div>
        </div>

        <div className="copyright">
          <span>
            © {new Date().getFullYear()} Bright BOX. All rights
            reserved.
          </span>

          <span>
            Crafted for spaces with character.
          </span>
        </div>
      </footer>

      {/* =====================================================
          PROJECT MODAL
      ===================================================== */}

      {selected && (
        <div
          className="modal"
          onClick={() => setSelected(null)}
        >
          <div
            className="modalin"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setSelected(null)}
              aria-label="Close project"
            >
              <X />
            </button>

            <img
              src={`/images/${selected.image}`}
              alt={selected.title}
            />

            <div className="modaltext">
              <span>
                {selected.category} · {selected.year}
              </span>

              <h2>{selected.title}</h2>

              <div className="details">
                <div>
                  <small>LOCATION</small>
                  <b>{selected.location}</b>
                </div>

                <div>
                  <small>SERVICE</small>
                  <b>{selected.service}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

createRoot(
  document.getElementById('root')
).render(
  <App />
);