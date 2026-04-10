'use client';

import { Oswald } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './page.module.css';

const oswald = Oswald({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

const SERVICES = [
  {
    num: '01',
    title: 'Site Services',
    sub: 'LAND · GRADE · DRAIN',
    desc: 'Land clearing, earthworks and excavation, erosion control, environmental services, driveways, and drainage. Residential and commercial. Safety-first crews serving DeLand and Central Florida.',
    img: '/images/site1.jpg',
    alt: 'Site clearing — land and equipment work',
  },
  {
    num: '02',
    title: 'Tree Services',
    sub: 'TRIM · REMOVE · RESTORE',
    desc: 'ISA Certified Arborist and Tree Risk Assessment Qualified. Tree removal, trimming, palm pruning, installation, and storm clean-up. Your property in the hands of someone who knows trees.',
    img: '/images/tree8.jpg',
    alt: 'Tree service crew at work',
  },
  {
    num: '03',
    title: 'Fence Services',
    sub: 'WOOD · VINYL · ALUMINUM',
    desc: 'Perimeter, pasture, and privacy fencing. Wood, vinyl, and aluminum options. We fence residential neighborhoods, rural acreage, and everything in between.',
    img: '/images/fence7.jpg',
    alt: 'Fence installation on rural property',
  },
];

const STATS = [
  { num: '7+', label: 'Years in Business', note: 'Est. 2017, DeLand FL' },
  { num: '2', label: 'ISA Certifications', note: 'Arborist & Risk Qualified' },
  { num: '3', label: 'Core Services', note: 'Site · Tree · Fence' },
  { num: '∞', label: 'Acre Properties', note: 'Small lots to large parcels' },
];

const PORTFOLIO = [
  { src: '/images/fence1.jpg', alt: 'Fence project', label: 'FENCING' },
  { src: '/images/tree3.jpg', alt: 'Tree removal', label: 'TREE WORK' },
  { src: '/images/site18.jpg', alt: 'Site clearing', label: 'SITE WORK' },
  { src: '/images/fence6.jpg', alt: 'Wood fence', label: 'FENCING' },
  { src: '/images/tree16.jpg', alt: 'Tree trimming', label: 'TREE WORK' },
  { src: '/images/tree18.jpg', alt: 'Storm cleanup', label: 'STORM WORK' },
];

export default function Design2() {
  const filmRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = document.querySelectorAll('[data-slide]');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).setAttribute('data-in', 'true');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className={`${oswald.className} ${styles.page}`}>
      <Link href="/" className={styles.back}>← BACK</Link>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/fence8.jpg"
            alt="HLS fence work — Central Florida"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
            priority
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>CENTRAL FLORIDA · EST. 2017</div>
          <div className={styles.heroRule} />
          <h1 className={styles.heroTitle}>HOAG<br />LAND<br />SERVICES</h1>
          <div className={styles.heroRule} />
          <p className={styles.heroSub}>
            SITE WORK — TREE SERVICES — FENCING
          </p>
          <p className={styles.heroBody}>
            Residential &amp; commercial land services in DeLand and Central Florida.
            Straight talk. Real work. Done right.
          </p>
          <div className={styles.heroCtas}>
            <a href="tel:+13865610003" className={styles.btnPrimary}>
              CALL (386) 561-0003
            </a>
            <a href="#services" className={styles.btnSecondary}>
              VIEW SERVICES
            </a>
          </div>
        </div>
        <div className={styles.heroScroll}>SCROLL</div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.services} id="services">
        <div className={styles.servicesHeader} data-slide>
          <div className={styles.sectionTag}>WHAT WE DO</div>
          <h2 className={styles.sectionTitle}>THREE SERVICES.<br />ONE CREW.</h2>
        </div>
        {SERVICES.map((s, i) => (
          <div
            key={s.num}
            className={`${styles.serviceStrip} ${i % 2 === 1 ? styles.serviceStripFlip : ''}`}
            data-slide
          >
            <div className={styles.serviceImgWrap}>
              <Image src={s.img} alt={s.alt} fill style={{ objectFit: 'cover' }} />
              <div className={styles.serviceNum}>{s.num}</div>
            </div>
            <div className={styles.serviceContent}>
              <div className={styles.serviceSub}>{s.sub}</div>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <div className={styles.serviceRule} />
              <p className={styles.serviceDesc}>{s.desc}</p>
              <a href="#contact" className={styles.serviceBtn}>GET A QUOTE →</a>
            </div>
          </div>
        ))}
      </section>

      {/* ── WHY US ── */}
      <section className={styles.whySection}>
        <div className={styles.whyHeader} data-slide>
          <div className={styles.sectionTag}>WHY HLS</div>
          <h2 className={styles.sectionTitle}>THE NUMBERS<br />SPEAK.</h2>
        </div>
        <div className={styles.statsRow}>
          {STATS.map((s) => (
            <div key={s.num} className={styles.statBlock} data-slide>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statNote}>{s.note}</div>
            </div>
          ))}
        </div>
        <div className={styles.whyBody} data-slide>
          <div className={styles.whyFact}>
            <div className={styles.whyFactHead}>A DECADE IN THE FIELD</div>
            <p>CEO Tyler Hoag has 10+ years in utility forestry and construction. What started as a single tractor service is now a full site and tree operation with a knowledgeable crew.</p>
          </div>
          <div className={styles.whyFact}>
            <div className={styles.whyFactHead}>ISA CERTIFIED ARBORIST</div>
            <p>Not just a chainsaw operation. We hold ISA Arborist certification and Tree Risk Assessment Qualification — the right credentials for the right job.</p>
          </div>
          <div className={styles.whyFact}>
            <div className={styles.whyFactHead}>RESIDENTIAL &amp; COMMERCIAL</div>
            <p>From a homeowner's backyard to a multi-acre commercial parcel — same knowledgeable crew, same respect for your property, same results.</p>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className={styles.portfolio}>
        <div className={styles.portfolioHeader} data-slide>
          <div className={styles.sectionTag}>RECENT WORK</div>
          <h2 className={styles.sectionTitle}>THE WORK<br />SHOWS IT.</h2>
        </div>
        <div className={styles.filmStrip} ref={filmRef}>
          {PORTFOLIO.map((p, i) => (
            <div key={i} className={styles.filmItem}>
              <Image src={p.src} alt={p.alt} fill style={{ objectFit: 'cover' }} />
              <div className={styles.filmLabel}>{p.label}</div>
            </div>
          ))}
        </div>
        <div className={styles.filmHint}>← SCROLL TO BROWSE →</div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className={styles.areaSection}>
        <div className={styles.areaInner} data-slide>
          <div className={styles.sectionTag}>WHERE WE WORK</div>
          <h2 className={styles.sectionTitle}>CENTRAL FLORIDA.<br />WE KNOW THE LAND.</h2>
          <div className={styles.areaRule} />
          <div className={styles.areaList}>
            <span>DELAND, FL</span>
            <span className={styles.areaDot}>·</span>
            <span>DELEON SPRINGS, FL</span>
            <span className={styles.areaDot}>·</span>
            <span>RURAL CENTRAL FLORIDA</span>
            <span className={styles.areaDot}>·</span>
            <span>RESIDENTIAL NEIGHBORHOODS</span>
            <span className={styles.areaDot}>·</span>
            <span>ACREAGE PROPERTIES</span>
            <span className={styles.areaDot}>·</span>
            <span>COMMERCIAL SITES</span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta} id="contact">
        <div className={styles.ctaInner} data-slide>
          <div className={styles.ctaBg}>
            <Image
              src="/images/tree19.jpg"
              alt="Tree work — Hoag Land Services"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className={styles.ctaOverlay} />
          <div className={styles.ctaContent}>
            <div className={styles.sectionTag}>READY?</div>
            <h2 className={styles.ctaTitle}>TELL US ABOUT<br />YOUR PROPERTY.</h2>
            <div className={styles.ctaRule} />
            <p className={styles.ctaBody}>
              We&apos;ll walk your land, answer your questions, and give you a straight quote.
              No pressure. No runaround.
            </p>
            <a href="tel:+13865610003" className={styles.ctaPhone}>(386) 561-0003</a>
            <a href="mailto:tyler@hlsdeland.com" className={styles.ctaEmail}>tyler@hlsdeland.com</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>HLS</div>
          <div className={styles.footerMeta}>
            <span>HOAG LAND SERVICES, LLC</span>
            <span>EST. 2017</span>
            <span>DELAND, FL</span>
          </div>
        </div>
        <div className={styles.footerRule} />
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.footerLabel}>SERVICES</div>
            <ul className={styles.footerList}>
              <li>Site Services</li>
              <li>Tree Services</li>
              <li>Fence Services</li>
            </ul>
          </div>
          <div>
            <div className={styles.footerLabel}>AREA</div>
            <ul className={styles.footerList}>
              <li>DeLand, FL</li>
              <li>DeLeon Springs, FL</li>
              <li>Central Florida</li>
            </ul>
          </div>
          <div>
            <div className={styles.footerLabel}>CONTACT</div>
            <ul className={styles.footerList}>
              <li><a href="tel:+13865610003">(386) 561-0003</a></li>
              <li><a href="mailto:tyler@hlsdeland.com">tyler@hlsdeland.com</a></li>
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
