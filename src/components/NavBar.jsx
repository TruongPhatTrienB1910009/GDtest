import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import styles from './style/NavBar.module.css';
const NavBar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navBar}>
                <NavLink
                    to="/"
                    className={styles.link}
                >
                    <FontAwesomeIcon icon={faHouse} style={{marginRight: '6px'}}/>Home
                </NavLink>
            </nav>
        </div>
    )
}

export default NavBar