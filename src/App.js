import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Ranking } from './components/Ranking';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ranking' element={<Ranking />} />
        </Routes>
      <Footer />
      </div>
  );
}

export default App;