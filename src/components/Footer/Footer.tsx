import styles from "./Footer.module.css";

const Footer = () => {
    const sections = [
        {
            title: "Service",
            links: ["Payment & Tax", "Features", "View Booking", "Support"],
        },
        {
            title: "About",
            links: ["About us", "News", "Pricing", "New Property"],
        }
    ]

    const socials = [
        { name: "Facebook", icon: "/Front-Adv-Task-4/assets/images/facebook.svg", url: "#" },
        { name: "Twitter", icon: "/Front-Adv-Task-4/assets/images/twitter.svg", url: "#" },
        { name: "LinkedIn", icon: "/Front-Adv-Task-4/assets/images/linkedin.svg", url: "#" },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <div className={styles.main}>
                    <img src="/Front-Adv-Task-4/assets/images/full-logo.svg" alt="Logo" className={styles.logo} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.</p>
                </div>
                <div className={styles.sections}>
                    {sections.map((section) => (
                        <div key={section.title} className={styles.section}>
                            <h3>{section.title}</h3>
                            <ul>
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className={styles.section}>
                        <h3>Our Location</h3>
                        <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                        <div className={styles.socialIcons}>
                            {socials.map((social) => (
                                <a key={social.name} href={social.url} aria-label={social.name}>
                                    <img src={social.icon} alt={social.name} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>Copyright 2024 flora. All Rights Reserved</p>
                <div>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
