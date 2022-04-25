import React from 'react';
import HomeInfo from './nested-components/HomeInfo';
import HomeImage from './nested-components/HomeImageContainer';
import ServicesContainer from './nested-components/ServicesContainer';

// MAIN SECTION STYLES
import '../styles/desktop/Main.scss';
import '../styles/tablet/Main.scss';
import '../styles/mobile/Main.scss';

// SERVICES SECTION STYLES
import '../styles/desktop/Services.scss';
import '../styles/tablet/Services.scss';
import '../styles/mobile/Services.scss';

const Home = () => { 
    return (
        <main className="home">
            <Main />
            <Services />
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

export default Home;