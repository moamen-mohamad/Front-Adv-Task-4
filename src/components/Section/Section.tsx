import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
    header: string;
    paragraph: string;
    children?: ReactNode;
    sectionStyle?: string;
}

const Section = ({ header, paragraph, children, sectionStyle }: SectionProps) => {
    return (
        <section className={sectionStyle}>            <div className={styles.headOfSection}>
            <h2 className={styles.header}>{header}</h2>
            <p className={styles.paragraph}>{paragraph}</p>
        </div>
            {children}
        </section>
    )
}

export default Section
