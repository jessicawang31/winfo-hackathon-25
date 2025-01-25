import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { SearchBar } from './SearchBar';
import { Gamification } from './Gamification';
import { ProductCard } from './ProductCard';
import { TipsCard } from './TipsCard';
import '../../css/Home.css';

export function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <SearchBar />
        <Gamification />

        <div className="for-you-section">
          <h2>For You</h2>
          <div className="cards-scroll">
            {/* Render multiple ProductCards */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

        <div className="tips-section">
          <h2>Sustainable Tips</h2>
          <div className="cards-scroll">
            {/* Render multiple TipsCards */}
            <TipsCard />
            <TipsCard />
            <TipsCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
