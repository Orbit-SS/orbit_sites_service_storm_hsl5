import Link from 'next/link';
import styles from './portal.module.css';

const designs = [
  {
    num: '01',
    name: 'Precision',
    tag: 'Corporate / Client-Safe',
    desc: 'Split-screen authority. Navy & deep green, Inter, razor-clean grids. Built for commercial PMs who need to see trust instantly.',
    color: '#166534',
    href: '/design-1',
  },
  {
    num: '02',
    name: 'Terrain',
    tag: 'Rugged / Outdoor',
    desc: 'Full-bleed drama. Oswald condensed at 10vw, dark soil palette, burnt orange. Built for rural landowners who work the land.',
    color: '#c25418',
    href: '/design-2',
  },
  {
    num: '03',
    name: 'Canvas',
    tag: 'Editorial / Magazine',
    desc: 'Oversized Playfair italic serif, warm cream & antique gold. Speaks to premium homeowners building dream properties.',
    color: '#b8915a',
    href: '/design-3',
  },
  {
    num: '04',
    name: 'RAW',
    tag: 'Brutalist',
    desc: 'Black, electric yellow, zero softness. Construction-site directness for developers who want the quote now, not a brand story.',
    color: '#FFE500',
    href: '/design-4',
  },
  {
    num: '05',
    name: 'Signal',
    tag: 'Dark / Kinetic',
    desc: 'DM Mono monospace, neon green glow, animated scan lines. Tech-forward commercial developers. The design nobody asked for.',
    color: '#00e87a',
    href: '/design-5',
  },
];

export default function Portal() {
  return (
    <main className={styles.main}>
      <div className={styles.topBar}>
        <span className={styles.client}>Hoag Land Services — DeLand, FL</span>
        <span className={styles.label}>Internal Design Presentation</span>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroSub}>5 Design Explorations</div>
        <h1 className={styles.heroTitle}>Which direction<br />fits the business?</h1>
        <p className={styles.heroDesc}>
          Same business. Same real content. Five completely different design philosophies.
          Each targets a different customer, speaks a different visual language.
        </p>
      </div>

      <div className={styles.grid}>
        {designs.map((d) => (
          <Link key={d.num} href={d.href} className={styles.card}>
            <div className={styles.cardNum}>{d.num}</div>
            <div className={styles.cardSwatch} style={{ background: d.color }} />
            <div className={styles.cardName}>{d.name}</div>
            <div className={styles.cardTag}>{d.tag}</div>
            <p className={styles.cardDesc}>{d.desc}</p>
            <div className={styles.cardCta}>
              Preview design <span className={styles.arrow}>→</span>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.footer}>
        <span>© 2025 — Designer internal use only</span>
      </div>
    </main>
  );
}
