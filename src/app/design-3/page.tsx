'use client';

import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from './page.module.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const SERVICES = [
  {
    num: 'I',
    title: 'Site Services',
    caption: 'Land, shaped with intention.',
    desc: 'Land clearing, earthworks and excavation, erosion control, driveways, and drainage. Whether you\'re preparing a homesite or managing a commercial parcel, our crews understand the land and work with respect for it.',
    details: ['Land Clearing', 'Earthworks & Excavation', 'Erosion Control', 'Driveway Installation', 'Drainage Solutions'],
    img: '/images/site4.png',
    alt: 'Precision site work — Central Florida',
  },
  {
    num: 'II',
    title: 'Tree Services',
    caption: 'Every tree tells a story.',
    desc: 'ISA Certified Arborist and Tree Risk Assessment Qualified. Removal, trimming, palm pruning, installation, and storm recovery. We approach each tree as part of your property\'s character.',
    details: ['Tree Removal', 'Tree Trimming', 'Palm Pruning', 'Tree Installation', 'Storm Recovery'],
    img: '/images/tree3.jpg',
    alt: 'Tree care by a certified arborist',
  },
  {
    num: 'III',
    title: 'Fence Services',
    caption: 'The line between wild and yours.',
    desc: 'Wood, vinyl, and aluminum fencing for perimeter, pasture, and privacy. A well-built fence is both practical and beautiful — we install both.',
    details: ['Wood Fencing', 'Vinyl Fencing', 'Aluminum Fencing', 'Pasture Fencing', 'Privacy Screening'],
    img: '/images/fence4.jpg',
    alt: 'Quality fencing installation',
  },
];

const TRUST = [
  { stat: '2017', label: 'Year Established', note: 'What started as a single tractor became a full-service operation.' },
  { stat: 'ISA', label: 'Certified Arborist', note: 'Tree Risk Assessment Qualified. The credentials that matter for your trees.' },
  { stat: 'R+C', label: 'Res. & Commercial', note: 'From private estates to commercial parcels — every property deserves care.' },
  { stat: 'C.FL', label: 'Central Florida', note: 'Rooted in DeLand. We know this land because we live on it.' },
];

const PORTFOLIO = [
  { src: '/images/fence1.jpg', alt: 'Wood fence — residential', caption: 'Cedar Privacy Fence, DeLand' },
  { src: '/images/tree2.jpg', alt: 'Tree work — canopy', caption: 'Oak Removal, Residential' },
  { src: '/images/site1.jpg', alt: 'Land clearing', caption: 'Site Clearing, 3 Acres' },
  { src: '/images/fence9.jpg', alt: 'Pasture fence', caption: 'Pasture Fencing, Rural Property' },
  { src: '/images/tree11.jpg', alt: 'Tree trimming', caption: 'Crown Trimming, Commercial' },
  { src: '/images/tree17.jpg', alt: 'Palm pruning', caption: 'Palm Care, Estate Property' },
];

export default function Design3() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-fade]');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).setAttribute('data-in', 'true');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className={`${playfair.className} ${styles.page}`}>
      <Link href="/" className={styles.back}>← Back</Link>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/tree3.jpg"
            alt="The land — Hoag Land Services"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <div className={styles.heroPre}>Hoag Land Services · DeLand, Florida</div>
          <h1 className={styles.heroTitle}>
            The land<br />
            <em>deserves</em><br />
            the right hands.
          </h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroSub}>
            Site work, tree services, and fencing for residential &amp; commercial properties across Central Florida.
          </p>
          <div className={styles.heroCtas}>
            <a href="tel:+13865610003" className={styles.btnPrimary}>
              Call (386) 561-0003
            </a>
            <a href="#services" className={styles.btnGhost}>
              Explore services
            </a>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span>Scroll</span>
          <span className={styles.heroScrollLine} />
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className={styles.intro} data-fade>
        <div className={styles.introInner}>
          <p className={styles.introText}>
            HLS officially came to life in 2019 under CEO Tyler Hoag —
            but the foundation was built over a decade in utility forestry
            and construction. What began as a single tractor service has
            grown into a certified arborist operation and full site service.
          </p>
          <div className={styles.introRule} />
          <p className={styles.introCite}>
            — Hoag Land Services, LLC · Est. 2017
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.services} id="services">
        <div className={styles.servicesHeader} data-fade>
          <div className={styles.sectionIssue}>No. I–III</div>
          <h2 className={styles.sectionTitle}>The Services</h2>
          <div className={styles.sectionRule} />
        </div>
        {SERVICES.map((s, i) => (
          <div
            key={s.num}
            className={`${styles.serviceBlock} ${i % 2 === 0 ? styles.serviceBlockNormal : styles.serviceBlockReverse}`}
            data-fade
          >
            <div className={styles.serviceImgWrap}>
              <Image src={s.img} alt={s.alt} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.serviceText}>
              <div className={styles.serviceNum}>{s.num}</div>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <div className={styles.serviceCaption}>{s.caption}</div>
              <div className={styles.serviceRule} />
              <p className={styles.serviceDesc}>{s.desc}</p>
              <ul className={styles.serviceDetails}>
                {s.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <a href="#contact" className={styles.serviceLink}>
                Request an estimate →
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* ── WHY US ── */}
      <section className={styles.trustSection}>
        <div className={styles.trustHeader} data-fade>
          <div className={styles.sectionIssue}>Credentials</div>
          <h2 className={styles.sectionTitle}>Why Hoag Land Services</h2>
          <div className={styles.sectionRule} />
        </div>
        <div className={styles.trustGrid}>
          {TRUST.map((t) => (
            <div key={t.stat} className={styles.trustCard} data-fade>
              <div className={styles.trustRule} />
              <div className={styles.trustStat}>{t.stat}</div>
              <div className={styles.trustLabel}>{t.label}</div>
              <p className={styles.trustNote}>{t.note}</p>
            </div>
          ))}
        </div>
        <div className={styles.trustQuote} data-fade>
          <blockquote>
            &ldquo;HLS is supported by knowledgeable, driven and durable team members who surpass customer expectations.&rdquo;
          </blockquote>
          <cite>— Hoag Land Services</cite>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className={styles.portfolio}>
        <div className={styles.portfolioHeader} data-fade>
          <div className={styles.sectionIssue}>Portfolio</div>
          <h2 className={styles.sectionTitle}>Recent Projects</h2>
          <div className={styles.sectionRule} />
        </div>
        <div className={styles.masonryGrid}>
          {PORTFOLIO.map((p, i) => (
            <div key={i} className={`${styles.masonryItem} ${i === 0 || i === 3 ? styles.masonryItemTall : ''}`} data-fade>
              <Image src={p.src} alt={p.alt} fill style={{ objectFit: 'cover' }} />
              <div className={styles.masonryOverlay}>
                <span className={styles.masonryCaption}>{p.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className={styles.areaSection}>
        <div className={styles.areaInner} data-fade>
          <div className={styles.sectionIssue}>Service Area</div>
          <h2 className={styles.sectionTitle}>Central Florida</h2>
          <div className={styles.areaRule} />
          <div className={styles.areaLocations}>
            {['DeLand, Florida', 'DeLeon Springs, Florida', 'Surrounding Rural Central Florida', 'Residential Neighborhoods', 'Acreage Properties', 'Commercial Sites'].map((loc, i) => (
              <div key={loc} className={styles.areaLoc}>
                <span className={styles.areaLocNum}>{String(i + 1).padStart(2, '0')}</span>
                <span>{loc}</span>
              </div>
            ))}
          </div>
          <p className={styles.areaNoteText}>
            We are based near DeLand and typically serve surrounding rural Central Florida. Not sure if we cover your area? Call us directly.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta} id="contact">
        <div className={styles.ctaInner} data-fade>
          <div className={styles.ctaRule} />
          <h2 className={styles.ctaTitle}>
            Ready to walk your<br />
            <em>property with us?</em>
          </h2>
          <div className={styles.ctaRule} />
          <p className={styles.ctaBody}>
            Tell us a little about your property and what you&apos;re hoping to accomplish.
            We will follow up and schedule a time to walk the land.
          </p>
          <div className={styles.ctaContacts}>
            <div className={styles.ctaContactItem}>
              <span className={styles.ctaContactLabel}>Phone</span>
              <a href="tel:+13865610003" className={styles.ctaPhone}>(386) 561-0003</a>
            </div>
            <div className={styles.ctaDivider} />
            <div className={styles.ctaContactItem}>
              <span className={styles.ctaContactLabel}>Email</span>
              <a href="mailto:tyler@hlsdeland.com" className={styles.ctaEmail}>tyler@hlsdeland.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <div className={styles.footerName}>Hoag Land Services</div>
            <div className={styles.footerEstTag}>LLC · Est. 2017 · DeLand, FL</div>
            <p className={styles.footerDesc}>
              Site work, tree services, and fencing for residential &amp; commercial properties.
              Serving DeLand, DeLeon Springs, and surrounding Central Florida areas.
            </p>
          </div>
          <div className={styles.footerNav}>
            <div className={styles.footerNavHead}>Services</div>
            <ul><li>Site Services</li><li>Tree Services</li><li>Fence Services</li></ul>
          </div>
          <div className={styles.footerNav}>
            <div className={styles.footerNavHead}>Contact</div>
            <ul>
              <li><a href="tel:+13865610003">(386) 561-0003</a></li>
              <li><a href="mailto:tyler@hlsdeland.com">tyler@hlsdeland.com</a></li>
              <li>DeLand, FL</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2025 Hoag Land Services. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
