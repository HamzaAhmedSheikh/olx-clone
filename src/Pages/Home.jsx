import React from 'react'
import Header from '../Component/Header';
import Navbar from '../Component/Navbar';
import ImageMain from '../Component/ImageMain';
import Recommendation from '../Component/Recommendation';
import Footer from '../Component/footer/MainFooter';

import '../App.css';

export default function Home() {
    return (
        <div className='Home'>
            <Header />
            <Navbar />
            <ImageMain />
            <Recommendation />            
            <Footer />
        </div>
    )
}
