import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';
import './placeholders.css';
import Header from './components/Header';
import HeroParallax from './components/HeroParallax';
import MenuSection from './components/MenuSection';
import OpeningHours from './components/OpeningHours';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import CookieBanner from './components/CookieBanner';

const HomePage = () => (
  <>
    <Header />
    <HeroParallax />
    <MenuSection />
    <OpeningHours />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/impressum" element={
              <>
                <Header />
                <Impressum />
                <Footer />
              </>
            } />
            <Route path="/datenschutz" element={
              <>
                <Header />
                <Datenschutz />
                <Footer />
              </>
            } />
          </Routes>
          <CookieBanner />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;