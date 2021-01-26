import styles from '../styles/sns.module.css';
import twitter from '../images/icon_twitter.svg';
import qiita from '../images/icon_qiita.svg';

function Sns() {
    return (
        <div>
            <div>
                <section>
                    <h2>Contact &amp; SNS</h2>
                    <ul className={styles.accounts}>
                        <li>
                            <a href="https://twitter.com/A64384528" target="_blank" rel="noreferrer"><img src={twitter} alt="twitterアカウント" />@A64384528</a>
                        </li>
                        <li>
                            <a href="https://qiita.com/jun_kato" target="_blank" rel="noreferrer"><img src={qiita} alt="qiitaアカウント" />@jun_kato</a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Sns;