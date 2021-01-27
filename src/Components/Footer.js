import styles from '../styles/footer.module.css';

function Footer() {
    return (
        <div className={styles.copyright}>
            <footer>
                <small className="textSub">
                    <span className={styles.mark}>&copy;</span>
                    <span>2021 KATO'S PORTFOLIO</span>
                </small>
            </footer>
        </div>
    );
}

export default Footer;