import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Quote,
  X,
} from 'lucide-react';
import './styles.css';

/* =========================================================
   REAL PROJECT IMAGES
   21 images used by the project portfolio
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
];

/* =========================================================
   SERVICES
   ========================================================= */

const services = [
  {
    number: '01',
    title: 'Interior Design',
    description:
      'Thoughtful interior environments that combine functionality, comfort, identity, and refined aesthetics.',
  },
  {
    number: '02',
    title: 'Architecture',
    description:
      'Complete architectural design solutions developed around the character, purpose, and context of each project.',
  },
  {
    number: '03',
    title: 'Construction',
    description:
      'Professional construction execution with attention to quality, materials, workmanship, and project coordination.',
  },
  {
    number: '04',
    title: 'Landscape Design',
    description:
      'Outdoor environments designed to connect architecture with nature and create practical, welcoming spaces.',
  },
];

/* =========================================================
   STATS
   ========================================================= */

const stats = [
  {
    number: '10+',
    label: 'Years of Experience',
  },
  {
    number: '50+',
    label: 'Completed Projects',
  },
  {
    number: '30+',
    label: 'Satisfied Clients',
  },
  {
    number: '4',
    label: 'Core Services',
  },
];

/* =========================================================
   TESTIMONIALS
   ========================================================= */

const testimonials = [
  {
    quote:
      'Bright BOX transformed our vision into a space that feels both functional and beautiful. Their attention to detail made a real difference.',
    name: 'Client',
    role: 'Private Client',
  },
  {
    quote:
      'The team was professional throughout the project and delivered a result that exceeded our expectations.',
    name: 'Client',
    role: 'Commercial Client',
  },
  {
    quote:
      'From the initial concept to construction, the process was handled with care, communication, and professionalism.',
    name: 'Client',
    role: 'Residential Client',
  },
];

/* =========================================================
   NAVIGATION
   ========================================================= */

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

/* =========================================================
   APP
   ========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const categories = [
    'All',
    ...new Set(projectData.map((project) => project.category)),
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projectData
      : projectData.filter(
          (project) => project.category === activeCategory
        );

  const nextTestimonial = () => {
    setTestimonialIndex(
      (current) => (current + 1) % testimonials.length
    );
  };

  const previousTestimonial = () => {
    setTestimonialIndex(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="header">
        <div className="container header-inner">

          <a href="#home" className="logo" onClick={closeMobileMenu}>
            <span className="logo-mark">B</span>
            <span className="logo-text">
              <strong>BRIGHT</strong>
              <span>BOX</span>
            </span>
          </a>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="nav-cta"
              onClick={closeMobileMenu}
            >
              Start a Project
              <ArrowRight size={16} />
            </a>
          </nav>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      {/* =====================================================
          HERO
          ===================================================== */}

      <main>

        <section className="hero" id="home">
          <div className="hero-image">
            <img
              src="/images/project-009.jpg"
              alt="Bright BOX interior design project"
            />
          </div>

          <div className="hero-overlay"></div>

          <div className="container hero-content">
            <div className="hero-copy">

              <p className="eyebrow">
                ARCHITECTURE • INTERIOR • CONSTRUCTION
              </p>

              <h1>
                Spaces that
                <br />
                <span>inspire.</span>
              </h1>

              <p className="hero-description">
                We design and build distinctive spaces that bring
                together architecture, interior design, construction,
                and landscape.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="button button-primary">
                  Explore Our Work
                  <ArrowRight size={18} />
                </a>

                <a href="#about" className="button button-outline">
                  Discover Bright BOX
                </a>
              </div>

            </div>
          </div>

          <div className="hero-scroll">
            <span>Scroll to explore</span>
            <ChevronDown size={18} />
          </div>
        </section>

        {/* ===================================================
            ABOUT
            =================================================== */}

        <section className="about section" id="about">
          <div className="container">

            <div className="section-heading">
              <p className="eyebrow">ABOUT BRIGHT BOX</p>

              <h2>
                Creating spaces with
                <br />
                <span>purpose and character.</span>
              </h2>
            </div>

            <div className="about-grid">

              <div className="about-main">
                <p className="large-text">
                  Bright BOX is an architecture, interior design,
                  construction, and landscape company dedicated to
                  creating meaningful environments.
                </p>

                <p>
                  We believe great spaces are more than beautiful.
                  They should respond to the people who use them,
                  the context around them, and the purpose they are
                  designed to serve.
                </p>

                <p>
                  From the first concept through construction and
                  completion, our team brings together creative
                  thinking, technical knowledge, and careful
                  execution.
                </p>

                <a href="#contact" className="text-link">
                  Work with us
                  <ArrowRight size={17} />
                </a>
              </div>

              <div className="about-stats">
                {stats.map((stat) => (
                  <div className="stat" key={stat.label}>
                    <strong>{stat.number}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================
            SERVICES
            =================================================== */}

        <section className="services section section-dark" id="services">
          <div className="container">

            <div className="section-heading section-heading-light">
              <p className="eyebrow">WHAT WE DO</p>

              <h2>
                From concept
                <br />
                <span>to completion.</span>
              </h2>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>

                  <div className="service-number">
                    {service.number}
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="service-arrow">
                    <ArrowRight size={20} />
                  </span>

                </article>
              ))}
            </div>

          </div>
        </section>

        {/* ===================================================
            PROJECTS
            =================================================== */}

        <section className="projects section" id="projects">
          <div className="container">

            <div className="projects-header">

              <div className="section-heading">
                <p className="eyebrow">SELECTED PROJECTS</p>

                <h2>
                  Work we're
                  <br />
                  <span>proud of.</span>
                </h2>
              </div>

              <p className="projects-intro">
                A selection of architecture, interiors,
                commercial spaces, residences, and landscape
                projects completed by Bright BOX.
              </p>

            </div>

            <div className="project-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? 'filter-button active'
                      : 'filter-button'
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <article
                  className="project-card"
                  key={`${project.title}-${index}`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-image">
                    <img
                      src={`/images/${project.image}`}
                      alt={project.title}
                      loading="lazy"
                    />

                    <div className="project-overlay">
                      <span>View Project</span>
                      <ArrowRight size={18} />
                    </div>
                  </div>

                  <div className="project-info">
                    <div>
                      <span className="project-category">
                        {project.category}
                      </span>

                      <h3>{project.title}</h3>

                      <p>
                        {project.location} • {project.year}
                      </p>
                    </div>

                    <span className="project-service">
                      {project.service}
                    </span>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* ===================================================
            PROCESS
            =================================================== */}

        <section className="process section section-light">
          <div className="container">

            <div className="section-heading">
              <p className="eyebrow">OUR PROCESS</p>

              <h2>
                A clear path from
                <br />
                <span>idea to reality.</span>
              </h2>
            </div>

            <div className="process-grid">

              <div className="process-item">
                <span>01</span>
                <h3>Discover</h3>
                <p>
                  We understand your goals, needs, context,
                  budget, and vision.
                </p>
              </div>

              <div className="process-item">
                <span>02</span>
                <h3>Design</h3>
                <p>
                  We develop thoughtful concepts and transform
                  ideas into practical design solutions.
                </p>
              </div>

              <div className="process-item">
                <span>03</span>
                <h3>Develop</h3>
                <p>
                  We refine the design, coordinate technical
                  details, and prepare for execution.
                </p>
              </div>

              <div className="process-item">
                <span>04</span>
                <h3>Deliver</h3>
                <p>
                  We oversee implementation and work toward
                  delivering the finished space to a high standard.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ===================================================
            TESTIMONIAL
            =================================================== */}

        <section className="testimonial section">
          <div className="container">

            <div className="testimonial-inner">

              <Quote className="quote-icon" size={48} />

              <div className="testimonial-content">
                <p className="testimonial-quote">
                  “{testimonials[testimonialIndex].quote}”
                </p>

                <div className="testimonial-author">
                  <strong>
                    {testimonials[testimonialIndex].name}
                  </strong>

                  <span>
                    {testimonials[testimonialIndex].role}
                  </span>
                </div>
              </div>

              <div className="testimonial-controls">

                <button
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>

                <span>
                  {String(testimonialIndex + 1).padStart(2, '0')} /{' '}
                  {String(testimonials.length).padStart(2, '0')}
                </span>

                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>

              </div>

            </div>

          </div>
        </section>

        {/* ===================================================
            CONTACT
            =================================================== */}

        <section className="contact section" id="contact">
          <div className="contact-image">
            <img
              src="/images/project-094.jpg"
              alt="Bright BOX project"
            />
          </div>

          <div className="contact-overlay"></div>

          <div className="container contact-content">

            <div className="contact-copy">
              <p className="eyebrow">LET'S WORK TOGETHER</p>

              <h2>
                Have a project
                <br />
                <span>in mind?</span>
              </h2>

              <p>
                Tell us about your project and let's create
                something meaningful together.
              </p>

              <a
                href="mailto:info@brightbox.com"
                className="button button-light"
              >
                Start a Conversation
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="contact-details">

              <div className="contact-detail">
                <MapPin size={20} />
                <div>
                  <span>Visit Us</span>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="contact-detail">
                <Phone size={20} />
                <div>
                  <span>Call Us</span>
                  <p>+251 911 000 000</p>
                </div>
              </div>

              <div className="contact-detail">
                <Mail size={20} />
                <div>
                  <span>Email Us</span>
                  <p>info@brightbox.com</p>
                </div>
              </div>

              <div className="contact-detail">
                <Clock size={20} />
                <div>
                  <span>Working Hours</span>
                  <p>Monday – Friday, 8:30 – 17:30</p>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="footer">
        <div className="container">

          <div className="footer-top">

            <div className="footer-brand">
              <a href="#home" className="logo">
                <span className="logo-mark">B</span>

                <span className="logo-text">
                  <strong>BRIGHT</strong>
                  <span>BOX</span>
                </span>
              </a>

              <p>
                Architecture, interior design, construction,
                and landscape solutions for meaningful spaces.
              </p>
            </div>

            <div className="footer-links">
              <div>
                <h4>Explore</h4>

                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </div>

              <div>
                <h4>Services</h4>

                <a href="#services">Interior Design</a>
                <a href="#services">Architecture</a>
                <a href="#services">Construction</a>
                <a href="#services">Landscape Design</a>
              </div>
            </div>

            <div className="footer-social">
              <h4>Follow Us</h4>

              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <Facebook size={19} />
                </a>

                <a href="#" aria-label="Instagram">
                  <Instagram size={19} />
                </a>

                <a href="#" aria-label="LinkedIn">
                  <Linkedin size={19} />
                </a>
              </div>
            </div>

          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Bright BOX. All rights
              reserved.
            </p>

            <p>
              Bright Wood Manufacturing and Interior Design PLC
            </p>
          </div>

        </div>
      </footer>

      {/* =====================================================
          PROJECT MODAL
          ===================================================== */}

      {selectedProject && (
        <div
          className="project-modal"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project"
            >
              <X size={24} />
            </button>

            <div className="modal-image">
              <img
                src={`/images/${selectedProject.image}`}
                alt={selectedProject.title}
              />
            </div>

            <div className="modal-info">

              <span className="project-category">
                {selectedProject.category}
              </span>

              <h2>{selectedProject.title}</h2>

              <div className="modal-meta">

                <div>
                  <span>Location</span>
                  <strong>{selectedProject.location}</strong>
                </div>

                <div>
                  <span>Year</span>
                  <strong>{selectedProject.year}</strong>
                </div>

                <div>
                  <span>Service</span>
                  <strong>{selectedProject.service}</strong>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

/* =========================================================
   RENDER
   ========================================================= */

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}