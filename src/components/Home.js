import HomeInfo from './nested-components/HomeInfo';
import HomeImage from './nested-components/HomeImageContainer';
import ServicesContainer from './nested-components/ServicesContainer';
import ContactForm from './nested-components/ContactForm';
import RecommendedLinks from './nested-components/RecommendedLinks';

// MAIN SECTION STYLES
import '../styles/desktop/Main.scss';
import '../styles/tablet/Main.scss';
import '../styles/mobile/Main.scss';

// SERVICES SECTION STYLES
import '../styles/desktop/Services.scss';
import '../styles/tablet/Services.scss';
import '../styles/mobile/Services.scss';

// CONTACT SECTION STYLES
import '../styles/desktop/Contact.scss';
import '../styles/tablet/Contact.scss';
import '../styles/mobile/Contact.scss';

const Home = () => { 
    return (
        <main className="home">
            <Main />
            <Services />
            <Contact />
        </main>
    )
}

const Main = () => {
    return (
        <section className="main-section">
            <HomeInfo />
            <HomeImage />
        </section>
    )
}

const Services = () => {
    return (
        <section className="services-section">
            <ServicesContainer />
            <div className="overlay"></div>
        </section>
    )
}

const Contact = () => {
    return(
        <section className="contact-section">
            <ContactForm />
            <RecommendedLinks />
        </section>
    )
}

export default Home;