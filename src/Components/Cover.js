import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from '../styles/cover.module.css';

function Cover() {
    return (
        <div className={styles.cover}>
            <div>
                <Fade arrows={false} duration={4000}>
                    <div>
                        <div className={`${styles.art} ${styles.art1}`}></div>
                    </div>
                    <div>
                        <div className={`${styles.art} ${styles.art2}`}></div>
                    </div>
                    <div>
                        <div className={`${styles.art} ${styles.art3}`}></div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Cover;