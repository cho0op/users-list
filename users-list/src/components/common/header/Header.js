import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className={styles.wrapper}>
                <div className={styles.content}>                    
                    <div className={styles.rect}>
                        <NavLink className={styles.link} to='/'>Contacts</NavLink>
                        <NavLink className={styles.link} to='/aboutus'>About us</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;