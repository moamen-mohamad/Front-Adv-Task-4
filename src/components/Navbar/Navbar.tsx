import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";

type NavLinkItem = {
    id: number;
    label: string;
    path: string;
};

type NavbarProps = {
    logo: string;
    navLinks: NavLinkItem[];
    loginPath: string;
};

function Navbar({ logo, navLinks, loginPath }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>

            <div className={`${styles.linksContainer} ${isOpen ? styles.active : ""}`}>
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `${styles.link} ${isActive ? styles.activeLink : ""}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </NavLink>


                        </li>
                    ))}
                </ul>

                <div className={styles.mobileLoginBtn}>
                    <Link
                        to={loginPath}
                        className={styles.btn}
                        onClick={() => setIsOpen(false)}
                    >
                        Login
                    </Link>
                </div>
            </div>

            <div className={styles.desktopLoginBtn}>
                <Link to={loginPath} className={styles.btn}>
                    Login
                </Link>
            </div>

            <button
                className={styles.menuIcon}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <img
                    src={isOpen ? "/Front-Adv-Task-4/assets/images/close.svg" : "/Front-Adv-Task-4/assets/images/barse.svg"}
                    alt={isOpen ? "Close menu" : "Open menu"}
                    className={styles.menuIconImg}
                />
            </button>

        </nav>
    );
}

export default Navbar;
