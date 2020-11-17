import React from 'react'
import Header from '../Component/Header';
import Navbar from '../Component/Navbar';
import ImageMain from '../Component/ImageMain';
import Recommendation from '../Component/Recommendation';
import Footer from '../Component/footer/MainFooter';
import ProductCard from '../Component/ProductCard';


import '../App.css';

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Navbar />
      <ImageMain />     
      <ProductCard />   
      <Recommendation />      
      <Footer />
    </div>
  );
}
