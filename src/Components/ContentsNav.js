import { Link } from 'react-router-dom';
import styles from '../styles/contentsNav.module.css';

function ContentsNav() {
    return (
        <div className="mainBlock">
            <div className={`mainBlockMargin ${styles.contentsNav}`}>
                <section className={styles.skillLink}>
                    <Link to="/Skill">
                        <div className={styles.contntArt}></div>
                        <div className={styles.heading}><h2 className={styles.h2}>Skill</h2></div>
                    </Link>
                </section>
                <section className={styles.workLink}>
                    <Link to="/Work">
                        <div className={styles.contntArt}></div>
                        <div className={styles.heading}><h2 className={styles.h2}>Work</h2></div>
                    </Link>
                </section>
            </div>
        </div>
    );
}

export default ContentsNav;