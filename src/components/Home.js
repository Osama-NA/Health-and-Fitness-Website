import React from 'react';
import '../styles/desktop/Home.scss';
import '../styles/tablet/Home.scss';
import '../styles/mobile/Home.scss';
import HomeContent from './nested-components/HomeContent';
import HomeImage from './nested-components/HomeImageContainer';

const Home = () => { 
    return (
        <main className="home">
            <HomeContent />
            <HomeImage />
        </main>
    )
}

export default Home;