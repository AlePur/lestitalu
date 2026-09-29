import farmWork from '../assets/farm-work.png';
import gardenGallery from '../assets/garden-gallery.png';
import interior from '../assets/interior.jpg';
import knits from '../assets/knits.png';
import oakGallery from '../assets/oak-gallery.png';
import rugWall from '../assets/rug-wall.png';
import slippers from '../assets/slippers.png';
import tools from '../assets/tools.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Gallery.module.css';

const TILE_IMAGES = [oakGallery, gardenGallery, tools, farmWork];
const BOTTOM_IMAGES = [rugWall, knits, slippers];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="galerii" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={`kicker kicker--gold ${styles.kicker}`}>{t.gallery.kicker}</p>
            <h2 className="h2 h2--fixed h2--dark">{t.gallery.title}</h2>
          </div>
          <a href="#" className="link-arrow link-arrow--gold">
            {t.gallery.allLink}
          </a>
        </div>
        <div className={styles.mosaic}>
          <div className={`figure ${styles.heroTile}`}>
            <img src={interior} alt={t.gallery.hero.alt} className={styles.heroImage} />
            <div className={styles.heroCaption}>
              <p>{t.gallery.hero.caption}</p>
            </div>
          </div>
          {t.gallery.tiles.map((tile, index) => (
            <div key={tile.caption} className={`figure ${styles.tile}`}>
              <img src={TILE_IMAGES[index]} alt={tile.alt} />
              <div className="figure__caption figure__caption--dark">{tile.caption}</div>
            </div>
          ))}
        </div>
        <div className={styles.bottomRow}>
          {t.gallery.bottomTiles.map((tile, index) => (
            <div key={tile.title} className={`figure ${styles.bottomTile}`}>
              <img src={BOTTOM_IMAGES[index]} alt={tile.alt} />
              <div className={`figure__caption figure__caption--dark ${styles.bottomCaption}`}>
                <p className={styles.bottomTitle}>{tile.title}</p>
                <p className={styles.bottomSubtitle}>{tile.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
