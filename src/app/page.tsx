import Link from 'next/link';
import styles from './portal.module.css';

const designs = [
  {
    num: '01',
    name: 'Precision',
    tag: 'Corporate / Client-Safe',
    desc: 'Clean grids, navy & green. For commercial clients who need to see trust fast.',
    color: '#166534',
    href: '/design-1',
  },
  {
    num: '02',
    name: 'Terrain',
    tag: 'Rugged / Outdoor',
    desc: 'Bold type, dark soil palette, burnt orange. For rural landowners who work the land.',
    color: '#c25418',
    href: '/design-2',
  },
  {
    num: '03',
    name: 'Canvas',
    tag: 'Editorial / Magazine',
    desc: 'Warm cream & gold. For premium homeowners building something special.',
    color: '#b8915a',
    href: '/design-3',
  },
  {
    num: '04',
    name: 'RAW',
    tag: 'Brutalist',
    desc: 'Black & yellow, no softness. For developers who want the quote, not the story.',
    color: '#FFE500',
    href: '/design-4',
  },
  {
    num: '05',
    name: 'Signal',
    tag: 'Dark / Kinetic',
    desc: 'Neon green, monospace, animated. For tech-forward commercial developers.',
    color: '#00e87a',
    href: '/design-5',
  },
];

export default function Portal() {
  return (
    <main className={styles.main}>
      <div className={styles.topBar}>
        <span className={styles.client}>Hoag Land Services — DeLand, FL</span>
        <span className={styles.label}>HSL Showcase</span>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroSub}>5 Design Explorations</div>
        <h1 className={styles.heroTitle}>HSL Showcase</h1>
        <p className={styles.heroDesc}>
          Same business, same content — five different directions. Pick the one that fits.
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
