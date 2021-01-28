import styles from '../styles/sns.module.css';
import twitter from '../images/icon_twitter.svg';
import qiita from '../images/icon_qiita.svg';
import github from '../images/icon_github.svg';

function Sns() {
    return (
        <div className="mainBlock">
            <div className="mainBlockMargin">
                <section>
                    <h2 className="headingH2">Contact &amp; SNS</h2>
                    <ul className={styles.accounts}>
                        <li>
                            <a href="https://twitter.com/A64384528" target="_blank" rel="noreferrer"><img src={twitter} alt="twitterアカウント" />@A64384528</a>
                        </li>
                        <li>
                            <a href="https://qiita.com/jun_kato" target="_blank" rel="noreferrer"><img src={qiita} alt="qiitaアカウント" />@jun_kato</a>
                        </li>
                        <li>
                            <a href="https://github.com/junichi4250" target="_blank" rel="noreferrer"><img src={github} alt="githubアカウント" />junichi4250</a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Sns;