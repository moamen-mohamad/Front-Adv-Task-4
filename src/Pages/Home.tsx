import Container from '../components/Container/Container';
import HowItWorksCards from '../components/HowItWorksCards/HowItWorksCards';
import MostTrendingCards from '../components/MostTrendingCards/MostTrendingCards';
import Section from '../components/Section/Section';
import TabsGallery from '../components/TabsGallery/TabsGallery';
import Hero from './../components/Hero/Hero';
import styles from "./../components/Section/Section.module.css";


const Home = () => {
    return (
        <div>
            <Hero />
            <Container>
                <Section
                    header="How it Works"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
                    sectionStyle={styles.section}
                >
                    <HowItWorksCards />
                </Section>
            </Container>
            <Section
                header="Find Dream Home"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
                sectionStyle={styles.findDreamHome}
            />
            <Container>
                <Section
                    header="Most Trending"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
                    sectionStyle={styles.section}
                >
                    <MostTrendingCards />
                </Section>
            </Container>
            <Container>
                <Section
                    header="Best Real Estate Deals"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
                    sectionStyle={styles.section}
                >
                    <TabsGallery />
                </Section>
            </Container>
        </div>
    )
}

export default Home