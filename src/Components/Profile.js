import styles from '../styles/profile.module.css';

function Profile() {
    return (
        <div className="mainBlock">
            <div className="mainBlockMargin">
                <section>
                    <div className={styles.name}>
                        <div className={styles.icon}></div>
                        <h2>加藤</h2>
                    </div>
                    <p className="text">
                        えんじにあです。
                    </p>
                </section>
            </div>
        </div>
    );
}

export default Profile;