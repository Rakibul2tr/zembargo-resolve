import React from 'react';
import HomeBanner from '../../Share/HomeBanner/HomeBanner';
import AboutUs from './Homepage/AboutUs/AboutUs';
import Contact from './Homepage/Contact/Contact';
import CoverageArea from './Homepage/CoverageArea/CoverageArea';
import FaqQuestionAnswer from './Homepage/FaqQuestionAnswer/FaqQuestionAnswer';
import HowItsWork from './Homepage/HowItsWork/HowItsWork';
import ItemsPicked from './Homepage/ItemsPicked/ItemsPicked';
import OurServices from './Homepage/OurServices/OurServices';
import Reliability from './Homepage/Reliability/Reliability';

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <AboutUs/>
            <OurServices/>
            
            <Reliability />
            <CoverageArea/>
            <HowItsWork/>
            <ItemsPicked/>
            <FaqQuestionAnswer/>
            <Contact/>
        </div>
    );
};

export default Home;