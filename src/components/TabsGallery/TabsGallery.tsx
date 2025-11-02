import { useState } from "react";
import styles from "./TabsGallery.module.css";

interface Property {
    TabName: string;
    images: string[];
}

const TabsGallery = () => {
    const [activeTab, setActiveTab] = useState("Industrial Property");

    const properties: Property[] = [
        {
            TabName: "Industrial Property",
            images: ["/Front-Adv-Task-4/assets/images/Residential-1.jpg", "/Front-Adv-Task-4/assets/images/Residential-2.jpg", "/Front-Adv-Task-4/assets/images/Residential-3.jpg"],
        },
        {
            TabName: "Agriculture Property",
            images: ["/Front-Adv-Task-4/assets/images/Residential-2.jpg", "/Front-Adv-Task-4/assets/images/Residential-3.jpg", "/Front-Adv-Task-4/assets/images/Residential-1.jpg"],
        },
        {
            TabName: "Commercial Property",
            images: ["/Front-Adv-Task-4/assets/images/Residential-3.jpg", "/Front-Adv-Task-4/assets/images/Residential-1.jpg", "/Front-Adv-Task-4/assets/images/Residential-2.jpg"],
        },
        {
            TabName: "Residential Property",
            images: ["/Front-Adv-Task-4/assets/images/Residential-1.jpg", "/Front-Adv-Task-4/assets/images/Residential-2.jpg", "/Front-Adv-Task-4/assets/images/Residential-3.jpg"],
        },
    ];

    const currentProperty = properties.find((p) => p.TabName === activeTab);

    return (
        <div className={styles.containerTabs}>
            <div className={styles.tabs}>
                {properties.map((property) => (
                    <button
                        key={property.TabName}
                        onClick={() => setActiveTab(property.TabName)}
                        className={`${styles.tab} ${activeTab === property.TabName ? styles.active : ""
                            }`}
                    >
                        {property.TabName}
                    </button>
                ))}
            </div>

            <div className={styles.gallery}>
                {currentProperty?.images.map((src, Index) => (
                    <div key={Index}>
                        <div>
                            <span>Featured</span>
                            <span>3D</span>
                        </div>
                        <img src={src} alt={activeTab} className={styles.image} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabsGallery;
