import styles from './MostTrendingCards.module.css';

interface MostTrendingCards {
    id: number;
    imagePath: string;
    price: string;
    title: string;
    address: string;
}
const mostTrendingCards: Array<MostTrendingCards> = [
    {
        id: 1,
        imagePath: "/assets/images/house-1.jpg",
        price: "$300000",
        title: "Luxury Apartment in California",
        address: "1901 Thornridge Cir. Shiloh, Hawaii 81063.",
    },
    {
        id: 2,
        imagePath: "/assets/images/house-2.jpg",
        price: "$450000",
        title: "Modern Townhouse with Garage",
        address: "2464 Royal Ln. Mesa, New Jersey 45463.",
    },
    {
        id: 3,
        imagePath: "/assets/images/house-3.jpg",
        price: "$850000",
        title: "Spacious Family Villa",
        address: "3891 Ranchview Dr. Denton, Nevada 48671.",
    },
    {
        id: 4,
        imagePath: "/assets/images/house-4.jpg",
        price: "$210000",
        title: "Cozy Studio in Downtown",
        address: "1794 Poplar Ave. Miami, Florida 33101.",
    },
    {
        id: 5,
        imagePath: "/assets/images/house-5.jpg",
        price: "$1200000",
        title: "Penthouse with Ocean View",
        address: "7563 E. Pecan St. Malibu, California 90265.",
    },
    {
        id: 6,
        imagePath: "/assets/images/house-6.jpg",
        price: "$350000",
        title: "Affordable Starter Home",
        address: "9988 N. Park Rd. Chicago, Illinois 60601.",
    },

];

const MostTrendingCards = () => {
    return (
        <div className={styles.mostTrendingCardsContainer}>
            {mostTrendingCards.map((card) => (
                <div key={card.id} className={styles.card}>
                    <img src={card.imagePath} alt={card.title} />
                    <span>{card.price}</span>
                    <h3>{card.title}</h3>
                    <div>
                        <img src="assets/images/location-2.svg" alt="location-icon" />
                        <p>{card.address}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MostTrendingCards
