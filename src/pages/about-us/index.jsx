import Navbar from '@/components/Common/Navbar/Navbar';
import Footer from '@/components/Common/footer/Footer';
import React from 'react';
import Hero from './Sections/AboutUsHero/Hero';
import OurTeamMembers from './Sections/OurTeamMembers/OurTeamMembers';

const index = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <OurTeamMembers/>
            <Footer/>
        </div>
    );
};

export default index;