import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
// import { Ranking } from './components/Ranking';
import {Profile} from './components/Profile';
import {Wishlist} from './components/Wishlist';
import {Explore} from './components/Explore';
import {Routes, Route} from 'react-router-dom';

import './css/App.css';

function App() {
  return (
    <div>
      <div className="app-container">
        <Header />
          <Routes>
            {/* <Route path='/ranking' element={<Ranking />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        <Footer />
        </div>
      </div>
  );
}

export default App;