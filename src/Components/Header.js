import { NavLink } from 'react-router-dom';
import styles from '../styles/header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <nav>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink exact to="/Skill">Skill</NavLink></li>
                    <li><NavLink exact to="/Work">Work</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;