import Navbar from '@/components/Common/Navbar/Navbar';
import Footer from '@/components/Common/footer/Footer';
import React from 'react';
import Hero from './Sections/AboutUsHero/Hero';

const index = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Footer/>
        </div>
    );
};

export default index;