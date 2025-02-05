import React from "react";
import styles from './HeaderComponent.module.css';  // Import file CSS module

const HeaderComponent = () => {
    return (
        <header className={styles.header}>
            <img src="/images.png" alt="Logo" />
            <nav>
                <ul className={styles.nav}>
                    <li className={styles.navItem}><a href="#" className={styles.navLink}>Home</a></li>
                    <li className={styles.navItem}><a href="#" className={styles.navLink}>About</a></li>
                    <li className={styles.navItem}><a href="#" className={styles.navLink}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderComponent;
