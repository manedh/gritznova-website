import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, Mail, Phone, MapPin, Send, Zap } from 'lucide-react';
import {
  solutions,
  products,
  services,
  processSteps,
  industries,
  security
} from '../data/content';
import SectionLabel from '../components/SectionLabel';
import IconLink from '../components/IconLink';
import { HeroVisual } from '../components/hero/hero-visual';
import DashboardVisual from '../components/DashboardVisual';
import Navbar from '../components/Navbar';

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        }),
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function Home() {
  useReveal();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(products[1]);
  const [activeService, setActiveService] = useState(services[0]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    need: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitLockRef = useRef(false);
  const lastSubmittedSignatureRef = useRef('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const normalize = (value) => String(value ?? '').trim().replace(/\s+/g, ' ');

  const validateField = (field, value, currentForm = form) => {
    const clean = normalize(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    switch (field) {
      case 'name':
        if (!clean) return 'Please enter your full name.';
        if (clean.length < 2) return 'Name must be at least 2 characters.';
        if (clean.length > 80) return 'Name must be 80 characters or less.';
        if (!/^[\p{L}\p{M}][\p{L}\p{M} .'-]*$/u.test(clean)) {
          return 'Please enter a valid name.';
        }
        return '';

      case 'email':
        if (!clean) return 'Please enter your business email.';
        if (clean.length > 254) return 'Email address is too long.';
        if (!emailPattern.test(clean)) return 'Please enter a valid email address.';
        return '';

      case 'company':
        if (!clean) return '';
        if (clean.length < 2) return 'Company name must be at least 3 characters.';
        if (clean.length > 120) return 'Company name must be 120 characters or less.';
        return '';

      case 'phone': {
        if (!clean) return '';

        if (!/^\+?[0-9()\s.-]+$/.test(clean)) {
          return 'Please enter a valid mobile number.';
        }

        const digits = clean.replace(/\D/g, '');

        if (digits.length !== 10 && digits.length !== 12) {
          return 'Please enter a valid 10-digit mobile number.';
        }

        const mobileDigits =
          digits.length === 12 && digits.startsWith('91')
            ? digits.slice(2)
            : digits;

        if (!/^[6-9]\d{9}$/.test(mobileDigits)) {
          return 'Mobile number must start with 6, 7, 8 or 9.';
        }

        return '';
      }

      case 'need':
        if (!currentForm.need) return 'Please select a service.';
        return '';

      case 'message':
        if (!clean) return 'Please tell us about your project.';
        if (clean.length < 10) return 'Message must be at least 10 characters.';
        if (clean.length > 2000) return 'Message must be 2000 characters or less.';
        return '';

      default:
        return '';
    }
  };

  const validateForm = () => {
    const fields = ['name', 'email', 'company', 'phone', 'need', 'message'];
    const nextErrors = {};

    fields.forEach((field) => {
      const message = validateField(field, form[field], form);

      if (message) {
        nextErrors[field] = message;
      }
    });

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value
    }));

    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: ''
      }));
    }

    if (errors.form) {
      setErrors((current) => ({
        ...current,
        form: ''
      }));
    }
  };

  const blurField = (field) => {
    const message = validateField(field, form[field], form);

    setErrors((current) => ({
      ...current,
      [field]: message
    }));
  };

  const getSubmissionSignature = () =>
    ['name', 'email', 'company', 'phone', 'need', 'message']
      .map((field) => normalize(form[field]).toLowerCase())
      .join('|');

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      company: '',
      phone: '',
      need: '',
      message: ''
    });

    setErrors({});
    setSubmitted(false);
    setIsSubmitting(false);
    submitLockRef.current = false;
  };

  const submit = async (e) => {
    e.preventDefault();

    if (submitLockRef.current || isSubmitting) return;

    if (!validateForm()) return;

    const signature = getSubmissionSignature();

    if (lastSubmittedSignatureRef.current === signature) {
      setErrors({
        form: 'This enquiry has already been submitted. Please change the details before sending it again.'
      });

      return;
    }

    submitLockRef.current = true;
    setIsSubmitting(true);

    try {
      await Promise.resolve();

      lastSubmittedSignatureRef.current = signature;
      setSubmitted(true);
      setErrors({});
    } catch (error) {
      console.error('Submission failed:', error);

      setErrors({
        form: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      submitLockRef.current = false;
    }
  };

  return (
    <>
      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onQuote={() => go('contact')}
      />

      <main>
        <section id="home" className="hero section-dark">
          <div className="hero-grid" />

          <div className="container hero-layout">
            <div className="hero-copy reveal">
              <SectionLabel>
                SOFTWARE · AI · CLOUD · ENGINEERING
              </SectionLabel>

              <h1>
                Build.
                <br />
                <span>Automate.</span>
                <br />
                Scale.
              </h1>

              <p className="hero-lead">
                Engineering intelligent software, AI systems, and cloud
                infrastructure for businesses ready to grow.
              </p>

              <p className="hero-body">
  GRITZNOVA helps businesses build, modernize, and scale reliable digital products with software, cloud, and AI solutions.
</p>

              <div className="hero-actions">
                <button
                  className="btn btn-primary cta-blue"
                  onClick={() => go('solutions')}
                >
                  Explore Our Solutions <ArrowRight size={16} />
                </button>

                <button
                  className="btn btn-link cta-blue"
                  onClick={() => go('contact')}
                >
                  Talk to Our Team

                  <span className="circle-arrow">
                    <IconLink />
                  </span>
                </button>
              </div>

              <div className="hero-proof">
                <span>✓ BUILT FOR CHANGE</span>
                <span>✓ ENGINEERING THINKING</span>
              </div>
            </div>

            <div className="hero-visual reveal delay-1">
              <HeroVisual className="hero3d" />
            </div>
          </div>

          <div className="ticker">
            <div className="ticker-track">
              {[
                'AI-POWERED',
                'CLOUD NATIVE',
                'API FIRST',
                'SECURE BY DESIGN',
                'SCALABLE ARCHITECTURE',
                '24/7 SUPPORT',
                'AI-POWERED',
                'CLOUD NATIVE'
              ].map((x, i) => (
                <span key={i}>
                  {x}
                  <b>•</b>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="intro section-light">
          <div className="container">
            <div className="intro-head reveal">
              <div>
                <SectionLabel>A COMPLETE TECHNOLOGY LIFECYCLE</SectionLabel>

                <h2>
                  Technology built around
                  <br />
                  your business
                </h2>
              </div>

              <div className="intro-side">
                <p>
                  We combine software engineering, cloud infrastructure,
                  artificial intelligence, automation, and product thinking
                  to solve real business problems.
                </p>

                <p>
                  Whether you are launching a new product, replacing legacy
                  software, automating repetitive operations, or scaling an
                  existing platform, GRITZNOVA works across the complete
                  technology lifecycle.
                </p>

                <button
                  className="text-link"
                  onClick={() => go('process')}
                >
                  See how we work <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="lifecycle reveal">
              <div className="life-line" />

              {[
                'Discover',
                'Design',
                'Develop',
                'Deploy',
                'Optimize',
                'Support'
              ].map((x, i) => (
                <div className="life-step" key={x}>
                  <span>0{i + 1}</span>
                  <b>{x}</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="solutions"
          className="solutions section-dark section-padding"
        >
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <SectionLabel>CAPABILITIES</SectionLabel>
                <h2>What we build</h2>
              </div>

              <p>
                Practical technology systems that connect ambitious business
                goals to dependable execution.
              </p>
            </div>

            <div className="solution-grid">
              {solutions.map(({ icon: Icon, ...s }, i) => (
                <article
                  className={`solution-card solution-card-${i + 1} reveal delay-${(i % 3) + 1}`}
                  key={s.title}
                >
                  <div className="card-top">
                    <span>0{i + 1}</span>
                    <Icon size={20} />
                  </div>

                  <h3>{s.title}</h3>
                  <p>{s.text}</p>

                  <span className="card-arrow">
                    <IconLink />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="products"
          className="products section-light section-padding"
        >
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <SectionLabel>OUR PRODUCTS</SectionLabel>
                <h2>Products built for real-world operations</h2>
              </div>

              <p>
                GRITZNOVA develops focused technology products designed to turn
                complex operational work into a clearer, faster advantage.
              </p>
            </div>

            <div className="product-layout reveal">
              <div className="product-list">
  {products.map((p) => (
    <div
      className={`product-mobile-card ${
        activeProduct.id === p.id ? 'selected' : ''
      }`}
      key={p.id}
    >
      <button
        className={`product-item product-${p.id} ${
          activeProduct.id === p.id ? 'selected' : ''
        }`}
        onClick={() => setActiveProduct(p)}
      >
        <div className="product-icon">
          {(() => {
            const ProductIcon = p.icon;
            return <ProductIcon size={18} />;
          })()}
        </div>

        <div>
          <span>{p.tag}</span>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
        </div>

        <ArrowRight size={16} />
      </button>

      {/* MOBILE ONLY: selected product image */}
      {activeProduct.id === p.id && (
        <div className="mobile-product-image">
          <DashboardVisual product={p} />
        </div>
      )}
    </div>
  ))}
</div>

             <div className="product-preview">
  <DashboardVisual product={activeProduct} />
</div>
            </div>

            <div className="product-feature-row">
              <span>
                <Check /> Real-time dashboards
              </span>

              <span>
                <Check /> Enterprise-grade security
              </span>

              <span>
                <Check /> Open APIs & integrations
              </span>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="services section-dark section-padding"
        >
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <SectionLabel>HOW WE HELP</SectionLabel>

                <h2>
                  Engineering from idea to
                  <br />
                  production
                </h2>
              </div>

              <p>
                From strategy to shipping and ongoing support, our engineering
                teams can work alongside your business at every stage.
              </p>
            </div>

            <div className="services-layout reveal">
              <div className="service-tabs">
                {services.map((s) => (
                  <button
                    className={`service-tab service-${s.id} ${
                      activeService.id === s.id ? 'active' : ''
                    }`}
                    key={s.id}
                    onClick={() => setActiveService(s)}
                  >
                    <span className="service-number">
                      {s.number}
                    </span>

       <span
  className="service-tab-icon"
  style={{
    color: '#ffffff',
    display: 'inline-flex',
    flexShrink: 0
  }}
>
  <s.icon
    size={18}
    color="#ffffff"
    stroke="#ffffff"
  />
</span>

                    <b>{s.title}</b>
                  </button>
                ))}
              </div>

              <div className="service-detail">
                <div className="service-icon">
                  {(() => {
                    const ServiceIcon = activeService.icon;

                    return <ServiceIcon size={20} />;
                  })()}
                </div>

                <SectionLabel>
                  SERVICE {activeService.number}
                </SectionLabel>

                <h3>{activeService.title}</h3>

                <p>{activeService.text}</p>

                <div className="service-points">
                  {activeService.points.map((p) => (
                    <span key={p}>
                      <Check size={14} />
                      {p}
                    </span>
                  ))}
                </div>

                <a href="#contact" className="detail-link">
                  Discuss this capability <IconLink />
                </a>
              </div>
            </div>
          </div>
        </section>

      
        <section
          id="about"
          className="why section-dark section-padding"
        >
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <SectionLabel>WHY GRITZNOVA</SectionLabel>

                <h2>
                  Technology partner
                  <br />
                  for the long run
                </h2>
              </div>

              <p>
                Engineering choices should support the business long after
                the first release. Our approach emphasizes maintainability,
                clarity, security, and continuous improvement.
              </p>
            </div>

            <div className="why-grid">
              {[
                [
                  'Engineering First',
                  'Solutions designed with maintainability, scalability, security, and performance in mind.'
                ],
                [
                  'Business Focused',
                  'Technology decisions connected to real business objectives.'
                ],
                [
                  'Scalable Architecture',
                  'Systems designed to support growth in users, data, traffic, and functionality.'
                ],
                [
                  'AI Ready',
                  'Identify practical opportunities to introduce AI and automation.'
                ],
                [
                  'Transparent Delivery',
                  'Clear communication, milestones, and visibility throughout development.'
                ],
                [
                  'Long-Term Support',
                  'Our relationship continues beyond product launch.'
                ]
              ].map(([t, d], i) => (
                <article
                  className="why-card reveal"
                  key={t}
                >
                  <span>0{i + 1}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="process"
          className="process section-light section-padding"
        >
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <SectionLabel>DELIVERY MODEL</SectionLabel>
                <h2>From idea to impact</h2>
              </div>

              <p>
                A structured engineering process keeps scope clear, delivery
                measurable, and technology aligned with outcomes.
              </p>
            </div>

            <div className="process-timeline">
              {processSteps.map(([num, title, text], i) => (
                <div
                  className="process-step reveal"
                  key={num}
                >
                  <div className="process-dot">
                    <span>{num}</span>
                  </div>

                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>

                  {i < processSteps.length - 1 && (
                    <div className="process-connector" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="industries section-dark section-padding">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <SectionLabel>WHO WE WORK WITH</SectionLabel>

                <h2>
                  Built for businesses
                  <br />
                  at every stage
                </h2>
              </div>
            </div>

            <div className="industry-grid">
              {industries.map(([t, d], i) => (
                <article
                  className="industry-card reveal"
                  key={t}
                >
                  <span>0{i + 1}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                  <IconLink />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="security section-light section-padding">
          <div className="container">
            <div className="security-wrap reveal">
              <div className="security-copy">
                <SectionLabel>SECURITY BY DESIGN</SectionLabel>

                <h2>
                  Security built into the engineering process
                </h2>

                <p>
                  Security is not an afterthought. Solutions can incorporate
                  secure architecture, access control, API security, data
                  protection, monitoring, logging, backup, and recovery
                  strategies.
                </p>
              </div>

              <div className="security-grid">
                {security.map(([Icon, t]) => (
                  <div key={t}>
                    <Icon size={18} />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="company section-light section-padding">
          <div className="container company-layout reveal">
            <div className="company-copy">
              <SectionLabel>ABOUT GRITZNOVA</SectionLabel>

              <h2>
                Engineers building technology that matters
              </h2>

              <p>
                GRITZNOVA is a Bangalore-based software engineering and
                technology company focused on building reliable digital
                products, cloud platforms, AI solutions, and business
                automation systems.
              </p>

              <p>
                We work with businesses across different stages — from
                early-stage product development to enterprise modernization.
              </p>

              <div className="formula">
                <span>Engineering Expertise</span>
                <b>+</b>
                <span>Business Understanding</span>
                <b>+</b>
                <span>AI Innovation</span>
                <b>+</b>
                <span>Cloud Technology</span>
              </div>

              <h3>
                Build technology that creates measurable business value.
              </h3>
            </div>

            <div className="company-art">
              <div className="orb orb-1" />
              <div className="orb orb-2" />

              <div className="code-window">
                <div className="window-bar">
                  <i />
                  <i />
                  <i />
                </div>

                <pre>{`const system = {
  reliable: true,
  intelligent: true,
  scalable: true,
  humanCentered: true
};

ship(system);`}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className="stats section-dark">
          <div className="container stats-grid reveal">
            <div>
              <b>8+</b>
              <span>Years combined expertise</span>
            </div>

            <div>
              <b>India</b>
              <span>& international client serving</span>
            </div>

            <div>
              <b>AI.Software</b>
              <span>Automation.Cloud</span>
            </div>
          </div>
        </section>

        <section className="cta section-dark">
          <div className="container cta-box reveal">
            <div>
              <SectionLabel>START A PROJECT</SectionLabel>

              <h2>
                Have an idea?
                <br />
                <span>Let’s build it.</span>
              </h2>

              <p>
                From a new product to an AI automation system or cloud
                modernization project, tell us what you’re trying to build.
              </p>
            </div>

            <div className="cta-actions">
              <button
                className="btn btn-primary cta-blue"
                onClick={() => go('contact')}
              >
                Start a Conversation <ArrowRight size={16} />
              </button>

              <button
                className="btn btn-outline cta-blue"
                onClick={() => go('services')}
              >
                Explore Our Services
              </button>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact section-light section-padding"
        >
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <SectionLabel>CONTACT</SectionLabel>
                <h2>Let’s build something meaningful</h2>
              </div>

              <p>
                Tell us about your project, product idea, technology challenge,
                or automation requirement. Our team will get back to you with
                the next steps.
              </p>
            </div>

            <div className="contact-layout reveal">
              <div className="contact-info">
                <a href="mailto:connect@gritznova.com">
                  <Mail />

                  <span>
                    <small>Email</small>
                    connect@gritznova.com
                  </span>
                </a>

                <a href="tel:+917559660623">
                  <Phone />

                  <span>
                    <small>Phone</small>
                    +91 7559660623
                  </span>
                </a>

                <div>
                  <MapPin />

                  <span>
                    <small>Address</small>
                    Prestige Tech Platina, Kadabisanahalli,
                    <br />
                    Bangalore, Karnataka – 560087, India
                  </span>
                </div>

                <div className="contact-note">
                  <Zap size={18} />

                  <p>
                    For project enquiries, include your goals, timeline, and
                    the technology challenge you want to solve.
                  </p>
                </div>
              </div>

              <form
                className="contact-form"
                onSubmit={submit}
                noValidate
                aria-label="Project enquiry form"
              >
                {submitted ? (
                  <div className="form-success">
                    <div>
                      <Check size={26} />
                    </div>

                    <h3>Enquiry Sent Successfully</h3>

                    <p>
                      Thank you for contacting GRITZNOVA. Our team will review
                      your enquiry and get back to you shortly.
                    </p>

                    {errors.form && (
                      <div
                        className="form-error-banner"
                        role="alert"
                      >
                        {errors.form}
                      </div>
                    )}

                    <button
                      type="button"
                      className="btn btn-primary cta-blue"
                      onClick={resetForm}
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="form-row">
                      <label>
                        Full Name
                        <span className="required-mark">*</span>

                        <input
                          value={form.name}
                          onChange={(e) =>
                            updateField('name', e.target.value)
                          }
                          onBlur={() => blurField('name')}
                          required
                          placeholder="Your name"
                          autoComplete="name"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={
                            errors.name
                              ? 'name-error'
                              : undefined
                          }
                        />

                        {errors.name && (
                          <span
                            id="name-error"
                            className="field-error"
                          >
                            {errors.name}
                          </span>
                        )}
                      </label>

                      <label>
                        Business Email
                        <span className="required-mark">*</span>

                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            updateField('email', e.target.value)
                          }
                          onBlur={() => blurField('email')}
                          required
                          placeholder="you@company.com"
                          autoComplete="email"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={
                            errors.email
                              ? 'email-error'
                              : undefined
                          }
                        />

                        {errors.email && (
                          <span
                            id="email-error"
                            className="field-error"
                          >
                            {errors.email}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="form-row">
                      <label>
                        Company

                        <input
                          value={form.company}
                          onChange={(e) =>
                            updateField('company', e.target.value)
                          }
                          onBlur={() => blurField('company')}
                          placeholder="Company name"
                          autoComplete="organization"
                          aria-invalid={Boolean(errors.company)}
                          aria-describedby={
                            errors.company
                              ? 'company-error'
                              : undefined
                          }
                        />

                        {errors.company && (
                          <span
                            id="company-error"
                            className="field-error"
                          >
                            {errors.company}
                          </span>
                        )}
                      </label>
                        <label>
  Phone Number
  <span className="required-mark">*</span>

  <input
    type="tel"
    inputMode="tel"
    maxLength={17}
    value={form.phone}
    onChange={(e) =>
      updateField('phone', e.target.value)
    }
    onBlur={() => blurField('phone')}
    required
    placeholder="+91"
    autoComplete="tel"
    aria-invalid={Boolean(errors.phone)}
    aria-describedby={
      errors.phone
        ? 'phone-error'
        : undefined
    }
  />
</label>
                     
                    </div>

                    <div className="form-row">
                      <label>
                        What are you looking to build?
                        <span className="required-mark">*</span>

                        <select
                          value={form.need}
                          onChange={(e) =>
                            updateField('need', e.target.value)
                          }
                          onBlur={() => blurField('need')}
                          required
                          aria-invalid={Boolean(errors.need)}
                          aria-describedby={
                            errors.need
                              ? 'need-error'
                              : undefined
                          }
                        >
                          <option value="">
                            Select a service
                          </option>

                          <option>Custom software</option>
                          <option>AI / Generative AI</option>
                          <option>Agentic AI</option>
                          <option>Cloud / DevOps</option>
                          <option>Systems integration</option>
                          <option>Managed IT</option>
                          <option>Others</option>
                        </select>

                        {errors.need && (
                          <span
                            id="need-error"
                            className="field-error"
                          >
                            {errors.need}
                          </span>
                        )}
                      </label>

                    
                    </div>

                    <label>
                      Message
                      <span className="required-mark">*</span>

                      <textarea
                        value={form.message}
                        onChange={(e) =>
                          updateField('message', e.target.value)
                        }
                        onBlur={() => blurField('message')}
                        required
                        placeholder="Tell us about your project, goals, and timeline..."
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={
                          errors.message
                            ? 'message-error'
                            : undefined
                        }
                      />

                      {errors.message && (
                        <span
                          id="message-error"
                          className="field-error"
                        >
                          {errors.message}
                        </span>
                      )}
                    </label>

                    {errors.form && (
                      <div
                        className="form-error-banner"
                        role="alert"
                      >
                        {errors.form}
                      </div>
                    )}

                    <button
                      className="btn btn-primary form-submit cta-blue"
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting
                        ? 'Submitting…'
                        : 'Send Inquiry'}

                      {!isSubmitting && <Send size={16} />}
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
