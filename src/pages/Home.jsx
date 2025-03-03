// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import Guide from '../components/Guide';
import FeatureProductComponent from '../components/FeatureProductComponent';
import CategoryScroll from '../components/categoriesScroll'

function Home() {


  return (
    <div className="home">
      <Hero />
      <CategoryScroll />
      <FeatureProductComponent />
      <Guide />
    </div>
  );
}

export default Home;
