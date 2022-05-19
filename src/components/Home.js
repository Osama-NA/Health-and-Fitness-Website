import HomeInfo from './nested-components/HomeInfo';
import HomeImage from './nested-components/HomeImageContainer';
import ServicesContainer from './nested-components/ServicesContainer';
import ContactForm from './nested-components/ContactForm';
import RecommendedLinks from './nested-components/RecommendedLinks';
import { useEffect, useContext, useRef } from 'react';
import { useLocation } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import { ScrollContext } from '../context/Scroll'

import '../styles/desktop/Main.scss';
import '../styles/tablet/Main.scss';
import '../styles/mobile/Main.scss';

import '../styles/desktop/Services.scss';
import '../styles/tablet/Services.scss';
import '../styles/mobile/Services.scss';

import '../styles/desktop/Contact.scss';
import '../styles/tablet/Contact.scss';
import '../styles/mobile/Contact.scss';

const Home = () => {
    const location = useLocation();
    
    const [searchParams] = useSearchParams();

    const { scroll } = useContext(ScrollContext);

    const contactFormRef = useRef(null);

    useEffect(() => {
        if (location.pathname === "/" && location.search !== "?to=Contact") {
            window.scrollTo(0, 0)
        }
    }, [location.pathname, location.search]);

    // Checks if browser search params contains "to"
    // "to=Contact" is added to search params when user click "Contact" in navigation menu
    // on page render or on update of global state(scroll), if "to=Contact", page scrolls to contact form
    useEffect(() => {
        const scrollTo = searchParams.get("to");
        if (scrollTo === "Contact") {
            contactFormRef.current.scrollIntoView();
        }
    }, [searchParams, scroll])

    return (
        <main className="home">
            <Main />
            <Services />
            <Contact contactFormRef={contactFormRef} />
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

const Contact = ({ contactFormRef}) => {
    return(
        <>
            <section className="contact-section">
                <ContactForm contactFormRef={contactFormRef} />
                <RecommendedLinks />
            </section>
        </>
    )
}

export default Home;