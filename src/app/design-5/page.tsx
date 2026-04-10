'use client';

import { DM_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

const dmMono = DM_Mono({ subsets: ['latin'], weight: ['300', '400', '500'] });

const SERVICES = [
  {
    id: 'SITE',
    title: 'Site Services',
    version: 'v3.2.1',
    desc: 'Land clearing, earthworks, excavation, grading, drainage, erosion control, driveways. Residential & commercial. Safety-first crews.',
    specs: ['Land Clearing', 'Earthworks & Excavation', 'Erosion Control', 'Drainage Systems', 'Driveway Installation'],
    img: '/images/site1.jpg',
  },
  {
    id: 'TREE',
    title: 'Tree Services',
    version: 'v2.8.0',
    desc: 'ISA Certified Arborist. Tree Risk Assessment Qualified. Removal, trimming, palm pruning, installation, storm recovery. The credentials that matter.',
    specs: ['Tree Removal', 'Tree Trimming', 'Palm Pruning', 'Tree Installation', 'Storm Recovery'],
    img: '/images/tree1.jpg',
  },
  {
    id: 'FENCE',
    title: 'Fence Services',
    version: 'v1.9.4',
    desc: 'Perimeter, pasture, and privacy fencing. Wood, vinyl, and aluminum. Residential neighborhoods and rural acreage.',
    specs: ['Wood Fencing', 'Vinyl Fencing', 'Aluminum Fencing', 'Pasture Fencing', 'Privacy Perimeter'],
    img: '/images/fence1.jpg',
  },
];

const STATS = [
  { target: 7, suffix: '+', label: 'YRS OPERATING', sub: 'Est. 2017' },
  { target: 2, suffix: '', label: 'ISA CREDENTIALS', sub: 'Arborist + Risk' },
  { target: 3, suffix: '', label: 'CORE SERVICES', sub: 'Site · Tree · Fence' },
  { target: 100, suffix: '+', label: '% LOCAL', sub: 'Based in DeLand FL' },
];

const PORTFOLIO = [
  { src: '/images/tree18.jpg', alt: 'Tree work', tag: 'TREE_REMOVE.jpg' },
  { src: '/images/fence8.jpg', alt: 'Fence project', tag: 'FENCE_PRIV.jpg' },
  { src: '/images/site1.jpg', alt: 'Site work', tag: 'SITE_CLEAR.jpg' },
  { src: '/images/tree7.jpg', alt: 'Tree service', tag: 'TREE_TRIM.jpg' },
  { src: '/images/fence6.jpg', alt: 'Fence installation', tag: 'FENCE_WOOD.jpg' },
  { src: '/images/tree19.jpg', alt: 'Large tree removal', tag: 'TREE_LARGE.jpg' },
];

const AREAS = [
  'DeLand, FL',
  'DeLeon Springs, FL',
  'Rural Central Florida',
  'Residential Neighborhoods',
  'Acreage Properties',
  'Commercial Sites',
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        let start = 0;
        const duration = 1600;
        const startTime = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - t, 3);
          const current = Math.round(ease * target);
          setVal(current);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function Design5() {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-sig]')) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'none';
            io.unobserve(el);
          }
        }),
      { threshold: 0.06 }
    );
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const offScreen = rect.top >= window.innerHeight || rect.bottom <= 0;
      if (offScreen) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      }
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div className={`${dmMono.className} ${styles.page}`}>
      <Link href="/" className={styles.back}>[← BACK]</Link>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.scanLines} aria-hidden />
        <div className={styles.gridOverlay} aria-hidden />
        <div className={styles.heroInner}>
          <div className={styles.heroTop}>
            <div className={styles.heroStatus}>
              <span className={styles.statusDot} />
              <span>HOAG_LAND_SERVICES.exe — DELAND, FL 32720</span>
            </div>
            <div className={styles.heroBuild}>BUILD 2025.04.10</div>
          </div>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLine}>LAND_SERVICES</span>
            <span className={styles.heroLine}>
              CENTRAL<span className={styles.heroAccent}>_FLORIDA</span>
              <span className={styles.cursor} aria-hidden>_</span>
            </span>
          </h1>
          <div className={styles.heroMeta}>
            <div className={styles.heroMetaRow}>
              <span className={styles.metaLabel}>// CAPABILITIES</span>
              <span className={styles.metaVal}>SITE · TREE · FENCE</span>
            </div>
            <div className={styles.heroMetaRow}>
              <span className={styles.metaLabel}>// COVERAGE</span>
              <span className={styles.metaVal}>DELAND + CENTRAL FL</span>
            </div>
            <div className={styles.heroMetaRow}>
              <span className={styles.metaLabel}>// CERTIFICATION</span>
              <span className={styles.metaVal}>ISA CERTIFIED ARBORIST</span>
            </div>
          </div>
          <div className={styles.heroCtas}>
            <a href="tel:+13865610003" className={styles.btnNeon}>
              &gt; CALL (386) 561-0003
            </a>
            <a href="#services" className={styles.btnGhost}>
              &gt; VIEW SERVICES
            </a>
          </div>
        </div>
        <div className={styles.heroDeco} aria-hidden>
          <div className={styles.decoRing} />
          <div className={styles.decoRingOuter} />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.services} id="services">
        <div className={styles.servicesTabs} data-sig>
          <div className={styles.sectionLabel}>// SERVICES</div>
          <div className={styles.tabBar}>
            {SERVICES.map((s, i) => (
              <button
                key={s.id}
                className={`${styles.tab} ${activeService === i ? styles.tabActive : ''}`}
                onClick={() => setActiveService(i)}
              >
                [{s.id}]
              </button>
            ))}
          </div>
        </div>
        {SERVICES.map((s, i) => (
          <div
            key={s.id}
            className={`${styles.servicePanel} ${activeService === i ? styles.servicePanelActive : ''}`}
            aria-hidden={activeService !== i}
          >
            <div className={styles.servicePanelImg}>
              <Image src={s.img} alt={s.title} fill style={{ objectFit: 'cover' }} />
              <div className={styles.servicePanelImgOverlay} />
              <div className={styles.servicePanelImgTag}>{s.id}_OVERVIEW.jpg</div>
            </div>
            <div className={styles.servicePanelBody}>
              <div className={styles.servicePanelHead}>
                <span className={styles.servicePanelId}>{s.id}</span>
                <span className={styles.servicePanelVer}>{s.version}</span>
              </div>
              <h2 className={styles.servicePanelTitle}>{s.title}</h2>
              <p className={styles.servicePanelDesc}>{s.desc}</p>
              <div className={styles.specList}>
                {s.specs.map((spec) => (
                  <div key={spec} className={styles.specRow}>
                    <span className={styles.specArrow}>→</span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className={styles.servicePanelBtn}>
                &gt; REQUEST ESTIMATE
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* ── WHY US ── */}
      <section className={styles.whySection}>
        <div className={styles.sectionLabel} data-sig>// CREDENTIALS &amp; STATS</div>
        <div className={styles.statsGrid} data-sig>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <div className={styles.statRing}>
                <div className={styles.statRingInner} />
              </div>
              <div className={styles.statVal}>
                <Counter target={s.target} suffix={s.suffix} />
              </div>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statSub}>{s.sub}</div>
            </div>
          ))}
        </div>
        <div className={styles.credGrid} data-sig>
          <div className={styles.credCard}>
            <div className={styles.credHead}>
              <span className={styles.credBracket}>[</span>
              EXPERIENCE
              <span className={styles.credBracket}>]</span>
            </div>
            <p>CEO Tyler Hoag — 10+ years in utility forestry and construction. HLS began as a single tractor service in DeLand. Full site operation and certified tree service since 2019.</p>
          </div>
          <div className={styles.credCard}>
            <div className={styles.credHead}>
              <span className={styles.credBracket}>[</span>
              CERTIFICATION
              <span className={styles.credBracket}>]</span>
            </div>
            <p>ISA Certified Arborist + Tree Risk Assessment Qualified. Two credentials. One standard: your trees are assessed and managed by a verified professional.</p>
          </div>
          <div className={styles.credCard}>
            <div className={styles.credHead}>
              <span className={styles.credBracket}>[</span>
              SCOPE
              <span className={styles.credBracket}>]</span>
            </div>
            <p>Residential and commercial. From a homeowner&apos;s lot to a multi-acre commercial parcel. Safety-first crews who understand Central Florida&apos;s environment.</p>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className={styles.portfolio}>
        <div className={styles.sectionLabel} data-sig>// PROJECT_LOG</div>
        <div className={styles.filmStrip} data-sig>
          {PORTFOLIO.map((p, i) => (
            <div key={i} className={styles.filmItem}>
              <Image src={p.src} alt={p.alt} fill style={{ objectFit: 'cover' }} />
              <div className={styles.filmOverlay}>
                <div className={styles.filmTag}>{p.tag}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.filmHint}>// SCROLL TO BROWSE ↔</div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className={styles.areaSection}>
        <div className={styles.sectionLabel} data-sig>// COVERAGE_MAP</div>
        <div className={styles.terminalBox} data-sig>
          <div className={styles.terminalBar}>
            <span className={styles.terminalDot} />
            <span className={styles.terminalDot} />
            <span className={styles.terminalDot} />
            <span className={styles.terminalTitle}>HLS_COVERAGE.sh</span>
          </div>
          <div className={styles.terminalBody}>
            <div className={styles.termLine}>
              <span className={styles.termPrompt}>$</span>
              <span>./list-service-areas --region="Central Florida"</span>
            </div>
            <div className={styles.termLine}>
              <span className={styles.termComment}>// Loading coverage data...</span>
            </div>
            {AREAS.map((area, i) => (
              <div key={area} className={styles.termLine}>
                <span className={styles.termArrow}>&gt;</span>
                <span className={styles.termArea}>{area}</span>
                <span className={styles.termCheck}>✓ ACTIVE</span>
              </div>
            ))}
            <div className={styles.termLine}>
              <span className={styles.termComment}>// Not listed? Call to confirm coverage.</span>
            </div>
            <div className={styles.termLine}>
              <span className={styles.termPrompt}>$</span>
              <span className={styles.termCursor}>_</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta} id="contact">
        <div className={styles.ctaInner} data-sig>
          <div className={styles.ctaRing} aria-hidden>
            <div className={styles.ctaRingPulse} />
          </div>
          <div className={styles.ctaContent}>
            <div className={styles.sectionLabel}>// INITIATE_CONTACT</div>
            <h2 className={styles.ctaTitle}>READY TO START?</h2>
            <p className={styles.ctaDesc}>
              Walk your property with us. Tell us what you need and we will follow up with next steps.
            </p>
            <a href="tel:+13865610003" className={styles.ctaPhone}>
              &gt; (386) 561-0003
            </a>
            <a href="mailto:tyler@hlsdeland.com" className={styles.ctaEmail}>
              &gt; tyler@hlsdeland.com
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>HLS</div>
            <div className={styles.footerMeta}>
              <span>HOAG_LAND_SERVICES.LLC</span>
              <span>DELAND, FL — EST. 2017</span>
            </div>
          </div>
          <div className={styles.footerCols}>
            <div>
              <div className={styles.footerColHead}>// SERVICES</div>
              <ul>
                <li>Site Services</li>
                <li>Tree Services</li>
                <li>Fence Services</li>
              </ul>
            </div>
            <div>
              <div className={styles.footerColHead}>// COVERAGE</div>
              <ul>
                <li>DeLand, FL</li>
                <li>DeLeon Springs, FL</li>
                <li>Central Florida</li>
              </ul>
            </div>
            <div>
              <div className={styles.footerColHead}>// CONTACT</div>
              <ul>
                <li><a href="tel:+13865610003">(386) 561-0003</a></li>
                <li><a href="mailto:tyler@hlsdeland.com">tyler@hlsdeland.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          // © 2025 HOAG LAND SERVICES — ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
}
