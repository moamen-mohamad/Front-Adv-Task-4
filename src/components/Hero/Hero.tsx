import styles from "./Hero.module.css";


type FiltterInfo = {
    id: number;
    img: string;
    header: string;
    paragraph: string;
};

const Hero = () => {

    const filtterInfo: Array<FiltterInfo> = [
        { id: 1, img: "/Front-Adv-Task-4/assets/images/location.svg", header: "Location", paragraph: "Ahmedabad, India" },
        { id: 2, img: "/Front-Adv-Task-4/assets/images/dollar.svg", header: "Price", paragraph: "$1000 - $10,000" },
        { id: 3, img: "/Front-Adv-Task-4/assets/images/house.svg", header: "Type of Property", paragraph: "Apartment" },
    ];
    return (
        <div className={styles.hero}>
            <h1>Discover a place you will love to live</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.</p>
            <div className={styles.filtter}>
                {filtterInfo.map((box) => (
                    <div className={styles.box} key={box.id}>
                        <img src={box.img} alt={box.header} />
                        <div>
                            <h4>{box.header}</h4>
                            <p>{box.paragraph}</p>
                        </div>
                    </div>
                ))}
            </div >
        </div >
    )
}

export default Hero
