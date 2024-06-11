import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Offers from '../Offers/Offers';
import Counter from '../Counter/Counter';
import TeamShow from '../TeamShow/TeamShow';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Address from '../Address/Address';
import TimerSection from '../TimerSection/TimerSection';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Offers></Offers>
            <Counter></Counter>
            <TimerSection></TimerSection>
            <TeamShow></TeamShow>
            <Reviews></Reviews>
            <Contact></Contact>
            <Address></Address>
        </div>
    );
};

export default Home;