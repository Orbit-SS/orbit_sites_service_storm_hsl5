'use client';

import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from './page.module.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '700'] });

const SERVICES = [
  {
    num: '01',
    title: 'SITE SERVICES',
    items: ['LAND CLEARING', 'EARTHWORKS & EXCAVATION', 'EROSION CONTROL', 'DRAINAGE', 'DRIVEWAYS'],
    note: 'RESIDENTIAL & COMMERCIAL · DELAND & CENTRAL FL',
  },
  {
    num: '02',
    title: 'TREE SERVICES',
    items: ['TREE REMOVAL', 'TREE TRIMMING', 'PALM PRUNING', 'TREE INSTALLATION', 'STORM CLEAN-UP'],
    note: 'ISA CERTIFIED ARBORIST · RISK ASSESSMENT QUALIFIED',
  },
  {
    num: '03',
    title: 'FENCE SERVICES',
    items: ['WOOD FENCING', 'VINYL FENCING', 'ALUMINUM FENCING', 'PASTURE FENCING', 'PERIMETER & PRIVACY'],
    note: 'ALL STYLES · RESIDENTIAL & COMMERCIAL',
  },
];

const TRUST = [
  { big: '2017', label: 'ESTABLISHED', sub: 'DELAND, FL' },
  { big: 'ISA', label: 'CERTIFICATION', sub: 'TREE RISK QUALIFIED' },
  { big: '10+', label: 'YEARS FIELD EXP', sub: 'UTILITY FORESTRY + CONSTRUCTION' },
  { big: 'R+C', label: 'BOTH PROPERTY TYPES', sub: 'RES. & COMMERCIAL' },
];

const PORTFOLIO = [
  { src: '/images/fence8.jpg', alt: 'Fence job', label: 'FENCE' },
  { src: '/images/tree18.jpg', alt: 'Tree removal', label: 'TREE' },
  { src: '/images/site1.jpg', alt: 'Site work', label: 'SITE' },
  { src: '/images/fence1.jpg', alt: 'Fence installation', label: 'FENCE' },
  { src: '/images/tree1.jpg', alt: 'Tree work', label: 'TREE' },
  { src: '/images/site18.jpg', alt: 'Land clearing', label: 'SITE' },
];

const AREAS = ['DELAND', 'DELEON SPRINGS', 'RURAL CENTRAL FL', 'RESIDENTIAL NEIGHBORHOODS', 'ACREAGE PROPERTIES', 'COMMERCIAL SITES'];

export default function Design4() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-raw]');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).setAttribute('data-on', '1');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className={`${spaceGrotesk.className} ${styles.page}`}>
      <Link href="/" className={styles.back}>← BACK</Link>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBorder}>
          <div className={styles.heroTag}>HOAG LAND SERVICES LLC — DELAND, FL — EST. 2017</div>
          <h1 className={styles.heroTitle}>
            WE CLEAR<br />
            WE CUT<br />
            WE FENCE.
          </h1>
          <div className={styles.heroSub}>
            <span>SITE WORK</span>
            <span className={styles.heroDash}>—</span>
            <span>TREE SERVICES</span>
            <span className={styles.heroDash}>—</span>
            <span>FENCING</span>
          </div>
          <p className={styles.heroDesc}>
            Central Florida residential &amp; commercial land services.
            One call. Straight quote. Done right.
          </p>
          <div className={styles.heroCtas}>
            <a href="tel:+13865610003" className={styles.ctaPrimary}>
              CALL NOW: (386) 561-0003
            </a>
            <a href="#services" className={styles.ctaSecondary}>
              SEE SERVICES ↓
            </a>
          </div>
        </div>
        <div className={styles.heroTagline}>CERTIFIED · EXPERIENCED · LOCAL</div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.services} id="services">
        <div className={styles.servicesLabel} data-raw>WHAT WE DO:</div>
        <div className={styles.servicesGrid}>
          {SERVICES.map((s) => (
            <div key={s.num} className={styles.serviceBox} data-raw>
              <div className={styles.serviceNum}>{s.num}</div>
              <div className={styles.serviceDivider} />
              <div className={styles.serviceTitle}>{s.title}</div>
              <ul className={styles.serviceList}>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.serviceNote}>{s.note}</div>
              <a href="#contact" className={styles.serviceBtn}>GET QUOTE →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className={styles.whySection}>
        <div className={styles.whyLabel} data-raw>WHY HLS:</div>
        <div className={styles.trustGrid}>
          {TRUST.map((t, i) => (
            <div
              key={t.big}
              className={`${styles.trustBlock} ${i % 2 === 0 ? styles.trustBlockLight : styles.trustBlockDark}`}
              data-raw
            >
              <div className={styles.trustBig}>{t.big}</div>
              <div className={styles.trustLabel}>{t.label}</div>
              <div className={styles.trustSub}>{t.sub}</div>
            </div>
          ))}
        </div>
        <div className={styles.whyFacts} data-raw>
          <div className={styles.factBlock}>
            <div className={styles.factHead}>10+ YEARS IN THE FIELD</div>
            <p>CEO Tyler Hoag started with a single tractor in DeLand. Now it&apos;s a full site service and certified tree operation. The foundation was built before HLS was even a name.</p>
          </div>
          <div className={styles.factBlock}>
            <div className={styles.factHead}>ISA CERTIFIED — NOT OPTIONAL</div>
            <p>Our tree crew holds ISA Arborist certification and Tree Risk Assessment Qualification. That&apos;s not marketing. That&apos;s the credential that matters when there&apos;s a 60-foot oak next to your house.</p>
          </div>
          <div className={styles.factBlock}>
            <div className={styles.factHead}>RESIDENTIAL & COMMERCIAL</div>
            <p>Homeowner with a half-acre? Commercial developer with 40 acres? Same crew. Same standards. We don&apos;t adjust quality based on lot size.</p>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className={styles.portfolio}>
        <div className={styles.portfolioLabel} data-raw>THE WORK:</div>
        <div className={styles.portfolioGrid}>
          {PORTFOLIO.map((p, i) => (
            <div key={i} className={styles.portfolioItem} data-raw>
              <Image src={p.src} alt={p.alt} fill style={{ objectFit: 'cover' }} />
              <div className={styles.portfolioTag}>{p.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className={styles.areaSection}>
        <div className={styles.areaLabel} data-raw>WHERE WE WORK:</div>
        <div className={styles.areaGrid}>
          {AREAS.map((a) => (
            <div key={a} className={styles.areaCell} data-raw>{a}</div>
          ))}
        </div>
        <div className={styles.areaNote} data-raw>
          BASED IN DELAND, FL — SERVING CENTRAL FLORIDA — CALL TO CONFIRM YOUR AREA
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta} id="contact">
        <div className={styles.ctaBlock} data-raw>
          <div className={styles.ctaLabel}>READY? CALL NOW.</div>
          <a href="tel:+13865610003" className={styles.ctaNumber}>
            (386) 561-0003
          </a>
          <div className={styles.ctaOr}>OR</div>
          <a href="mailto:tyler@hlsdeland.com" className={styles.ctaEmail}>
            TYLER@HLSDELAND.COM
          </a>
          <p className={styles.ctaNote}>
            TELL US YOUR PROPERTY LOCATION AND WHAT YOU NEED. WE WILL WALK IT AND GIVE YOU A STRAIGHT ANSWER.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>HLS</div>
          <div className={styles.footerInfo}>
            <span>HOAG LAND SERVICES, LLC</span>
            <span>EST. 2017 · DELAND, FL</span>
            <span>SITE · TREE · FENCE</span>
          </div>
        </div>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <div className={styles.footerColHead}>SERVICES</div>
            <ul>
              <li>SITE SERVICES</li>
              <li>TREE SERVICES</li>
              <li>FENCE SERVICES</li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerColHead}>AREA</div>
            <ul>
              <li>DELAND, FL</li>
              <li>DELEON SPRINGS, FL</li>
              <li>CENTRAL FLORIDA</li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerColHead}>CONTACT</div>
            <ul>
              <li><a href="tel:+13865610003">(386) 561-0003</a></li>
              <li><a href="mailto:tyler@hlsdeland.com">TYLER@HLSDELAND.COM</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          © 2025 HOAG LAND SERVICES. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
