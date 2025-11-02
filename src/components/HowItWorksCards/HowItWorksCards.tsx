import styles from './HowItWorksCards.module.css'
interface HowItWorksCard {
    id: number;
    iconPath: string;
    title: string;
    description: string;
}
const howItWorksCards: Array<HowItWorksCard> = [
    {
        id: 1,
        iconPath: "/Front-Adv-Task-4/assets/images/home-1.svg",
        title: "Search Apartment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    },
    {
        id: 2,
        iconPath: "/Front-Adv-Task-4/assets/images/home-2.svg",
        title: "Select Apartment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    },
    {
        id: 3,
        iconPath: "/Front-Adv-Task-4/assets/images/home-3.svg",
        title: "Confirm Apartment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
    },
];

const HowItWorksCards = () => {
    return (
        <div className={styles.howItWorksCardsContainer}>
            {howItWorksCards.map((card) => (
                <div key={card.id} className={styles.card}>
                    <img src={card.iconPath} alt={card.title} className={styles.image} />
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
    )
}

export default HowItWorksCards


