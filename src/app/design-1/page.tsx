'use client';

import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] });

const SERVICES = [
  {
    title: 'Site Services',
    description:
      'Land clearing, earthworks, excavation, grading, driveways, drainage, and erosion control for residential and commercial sites across Central Florida.',
    items: ['Land Clearing', 'Earthworks & Excavation', 'Grading & Drainage', 'Erosion Control', 'Driveway Installation'],
    img: '/images/site1.jpg',
    alt: 'Site clearing and grading in Central Florida',
    badge: 'Res. & Commercial',
  },
  {
    title: 'Tree Services',
    description:
      'ISA-certified arborist services including removal, trimming, palm pruning, installation, and storm clean-up for properties of every size.',
    items: ['Tree Removal', 'Tree Trimming', 'Palm Pruning', 'Tree Installation', 'Storm Clean-Up'],
    img: '/images/tree1.jpg',
    alt: 'Certified arborist tree removal work',
    badge: 'ISA Certified',
  },
  {
    title: 'Fence Services',
    description:
      'Perimeter, pasture, and privacy fencing in wood, vinyl, and aluminum — installed to last on residential neighborhoods and rural acreage.',
    items: ['Wood Fencing', 'Vinyl Fencing', 'Aluminum Fencing', 'Pasture Fencing', 'Perimeter & Privacy'],
    img: '/images/fence1.jpg',
    alt: 'Wood fence installation project',
    badge: 'All Styles',
  },
];

const STATS = [
  { value: '2017', label: 'Established', note: 'Started as a single tractor service' },
  { value: 'ISA', label: 'Certified Arborist', note: 'Tree Risk Assessment Qualified' },
  { value: 'R+C', label: 'Res. & Commercial', note: 'All property types covered' },
  { value: 'C.FL', label: 'Central Florida', note: 'DeLand, DeLeon Springs & beyond' },
];

const WHY = [
  {
    icon: '◈',
    title: 'A Decade of Field Experience',
    body: 'CEO Tyler Hoag has 10+ years in utility forestry and construction. HLS began as a single tractor service and grew into a full site and tree operation.',
  },
  {
    icon: '◎',
    title: 'ISA Certified & Risk Qualified',
    body: 'Our tree crew is led by an ISA Certified Arborist who is also Tree Risk Assessment Qualified — your trees evaluated by a credentialed professional.',
  },
  {
    icon: '◐',
    title: 'Residential & Commercial Ready',
    body: 'From a single backyard to multi-acre commercial parcels — knowledgeable crews that respect your property and deliver results on schedule.',
  },
  {
    icon: '◉',
    title: 'Locally Based in DeLand',
    body: 'We are based near DeLand, FL and know the soil, climate, and land of Central Florida. Safety-first crews who understand the local environment.',
  },
];

const PORTFOLIO = [
  { src: '/images/fence8.jpg', alt: 'Privacy fence installation', caption: 'Privacy Fence — Residential' },
  { src: '/images/site1.jpg', alt: 'Land clearing project', caption: 'Land Clearing — 4-Acre Site' },
  { src: '/images/tree3.jpg', alt: 'Tree removal', caption: 'Tree Removal — Storm Damage' },
  { src: '/images/fence4.jpg', alt: 'Aluminum fence', caption: 'Aluminum Fence — Commercial' },
  { src: '/images/tree10.jpg', alt: 'Tree trimming', caption: 'Tree Trimming — Residential' },
  { src: '/images/site18.jpg', alt: 'Site grading', caption: 'Site Grading — Development' },
];

export default function Design1() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).setAttribute('data-visible', 'true');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className={`${inter.className} ${styles.page}`}>
      {/* ── Back ── */}
      <Link href="/" className={styles.backLink}>← Back</Link>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>Central Florida · Est. 2017</div>
          <h1 className={styles.heroTitle}>
            Land Services<br />Built for<br />Central Florida.
          </h1>
          <p className={styles.heroSub}>
            Site work, tree services, and fencing for residential &amp; commercial
            properties. Serving DeLand and surrounding areas since 2017.
          </p>
          <div className={styles.heroCtas}>
            <a href="tel:+13865610003" className={styles.btnPrimary}>
              Call (386) 561-0003
            </a>
            <a href="#estimate" className={styles.btnSecondary}>
              Request an Estimate
            </a>
          </div>
          <div className={styles.heroTrust}>
            <span>✓ ISA Certified Arborist</span>
            <span>✓ Residential &amp; Commercial</span>
            <span>✓ Safety-First Crews</span>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <Image
            src="/images/site1.jpg"
            alt="HLS site work in progress"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className={styles.heroMediaTint} />
          <div className={styles.heroMediaBadge}>
            <span>Hoag Land Services</span>
            <span>DeLand, FL</span>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.services} id="services">
        <div className={styles.container}>
          <div className={styles.sectionHead} data-reveal>
            <div className={styles.eyebrow}>What We Do</div>
            <h2 className={styles.sectionTitle}>Three Core Services</h2>
            <p className={styles.sectionSub}>
              Straight-forward services for site work, tree work, and fencing.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {SERVICES.map((s) => (
              <article key={s.title} className={styles.serviceCard} data-reveal>
                <div className={styles.serviceImgWrap}>
                  <Image src={s.img} alt={s.alt} fill style={{ objectFit: 'cover' }} />
                  <span className={styles.serviceBadge}>{s.badge}</span>
                </div>
                <div className={styles.serviceBody}>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.description}</p>
                  <ul className={styles.serviceItems}>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href="#estimate" className={styles.serviceLink}>
                    Request Estimate →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.sectionHead} data-reveal>
            <div className={styles.eyebrow}>Why HLS</div>
            <h2 className={styles.sectionTitle}>Experienced. Certified. Local.</h2>
          </div>
          <div className={styles.statsRow}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statBlock} data-reveal>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={styles.statNote}>{s.note}</div>
              </div>
            ))}
          </div>
          <div className={styles.whyGrid}>
            {WHY.map((w) => (
              <div key={w.title} className={styles.whyItem} data-reveal>
                <div className={styles.whyIcon}>{w.icon}</div>
                <div>
                  <strong>{w.title}</strong>
                  <p>{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className={styles.portfolio} id="portfolio">
        <div className={styles.container}>
          <div className={styles.sectionHead} data-reveal>
            <div className={styles.eyebrow}>Recent Work</div>
            <h2 className={styles.sectionTitle}>Project Portfolio</h2>
            <p className={styles.sectionSub}>
              A selection of recent residential and commercial projects in Central Florida.
            </p>
          </div>
          <div className={styles.portfolioGrid}>
            {PORTFOLIO.map((p, i) => (
              <div key={i} className={styles.portfolioItem} data-reveal>
                <Image src={p.src} alt={p.alt} fill style={{ objectFit: 'cover' }} />
                <div className={styles.portfolioOverlay}>
                  <span className={styles.portfolioCaption}>{p.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className={styles.areaSection}>
        <div className={styles.container}>
          <div className={styles.areaSplit} data-reveal>
            <div>
              <div className={styles.eyebrow}>Coverage</div>
              <h2 className={styles.sectionTitle}>Serving Central Florida</h2>
              <p className={styles.sectionSub}>
                Based near DeLand — we primarily serve these areas:
              </p>
              <div className={styles.areaList}>
                {['DeLand, FL', 'DeLeon Springs, FL', 'Surrounding Rural Central Florida', 'Residential Neighborhoods', 'Acreage Properties', 'Commercial Sites'].map((a) => (
                  <div key={a} className={styles.areaRow}>
                    <span className={styles.areaCheck} />
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.areaContactCard}>
              <div className={styles.eyebrow}>Direct Contact</div>
              <p>Not sure if we cover your area? Give us a call — we&apos;ll let you know right away.</p>
              <a href="tel:+13865610003" className={styles.areaPhone}>(386) 561-0003</a>
              <a href="mailto:tyler@hlsdeland.com" className={styles.areaEmail}>tyler@hlsdeland.com</a>
              <p className={styles.areaNote}>
                If you reach us after hours, leave a brief message with your name,
                property location, and what you&apos;re looking to do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta} id="estimate">
        <div className={styles.container}>
          <div className={styles.ctaInner} data-reveal>
            <div className={styles.eyebrowLight}>Ready to Start?</div>
            <h2 className={styles.ctaTitle}>Walk Your Property With Us.</h2>
            <p className={styles.ctaSub}>
              Tell us what you need and we&apos;ll follow up with next steps.
              No pressure — just a straight answer.
            </p>
            <div className={styles.ctaBtns}>
              <a href="tel:+13865610003" className={styles.ctaBtnPrimary}>
                Call (386) 561-0003
              </a>
              <a href="mailto:tyler@hlsdeland.com" className={styles.ctaBtnSecondary}>
                tyler@hlsdeland.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerBrand}>Hoag Land Services</div>
              <p className={styles.footerTagline}>
                Site work, tree services, and fencing for residential &amp; commercial properties.
              </p>
              <p className={styles.footerEst}>Hoag Land Services, LLC · Est. 2017</p>
            </div>
            <div>
              <div className={styles.footerHeading}>Services</div>
              <ul className={styles.footerList}>
                <li>Site Services</li>
                <li>Tree Services</li>
                <li>Fence Services</li>
              </ul>
            </div>
            <div>
              <div className={styles.footerHeading}>Locations</div>
              <ul className={styles.footerList}>
                <li>DeLand, FL</li>
                <li>DeLeon Springs, FL</li>
                <li>Central Florida</li>
              </ul>
            </div>
            <div>
              <div className={styles.footerHeading}>Contact</div>
              <ul className={styles.footerList}>
                <li><a href="tel:+13865610003">(386) 561-0003</a></li>
                <li><a href="mailto:tyler@hlsdeland.com">tyler@hlsdeland.com</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span>© 2025 Hoag Land Services. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
