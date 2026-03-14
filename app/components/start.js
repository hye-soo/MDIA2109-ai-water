import styles from './start.module.css';

export default function HeroSection({ onStart }) {
  return (
    <div className={styles.container}>
      {/* Background Particles for interactive feel */}
      <div className={`${styles.bgParticle} ${styles.particle1}`}></div>
      <div className={`${styles.bgParticle} ${styles.particle2}`}></div>
      <div className={`${styles.bgParticle} ${styles.particle3}`}></div>

      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
        </div>
        
        <h1 className={styles.title}>
          Every Prompt
          <span className={styles.titleBlue}>Drinks Water</span>
        </h1>
        
        <p className={styles.subtitle}>
          The invisible water behind artificial intelligence.
        </p>
        
        <button className={styles.startBtn} onClick={onStart}>
          Start Simulation
        </button>
      </div>

      {/* Right Navigation Arrow */}
      <button className={styles.navArrow} onClick={onStart} aria-label="Next">
        <svg className={styles.arrowSvg} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
