import React, { useState } from 'react';
import './MenuSection.css';
import MenuPopup from './MenuPopup';
import { menuData } from '../data/menuData';

const MenuSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const menuCategories = [
    { title: 'BIER', image: '/images/sp-bier.png', alt: 'Beer', key: 'bier' },
    { title: 'WEIN', image: '/images/sp-wine.png', alt: 'Wine', key: 'wein' },
    { title: 'COCKTAILS & SPIRITS', image: '/images/sp-coktails.png', alt: 'Cocktails and Spirits', key: 'cocktails' },
    { title: 'SOFTGETRÄNKE', image: '/images/sp-softgetraenke.png', alt: 'Soft Drinks', key: 'softgetraenke' },
    { title: 'KAFFEE & TEE', image: '/images/sp-kaffee-tee.png', alt: 'Coffee and Tea', key: 'kaffee' },
    { title: 'WÄRME KÜCHE', image: '/images/sp-pizza.png', alt: 'Warm Kitchen', key: 'pizza' }
  ];

  const handleCardClick = (category) => {
    setSelectedCategory(menuData[category.key]);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedCategory(null);
  };

  // Spotlight effect handler
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--spotlight-x', `${x}px`);
    card.style.setProperty('--spotlight-y', `${y}px`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--spotlight-x', '50%');
    card.style.setProperty('--spotlight-y', '50%');
  };

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2 className="section-title">Unsere Speisenkarte</h2>
        
        <div className="menu-grid">
          {menuCategories.map((category, index) => (
            <div 
              key={index} 
              className="menu-card spotlight-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(category)}
              style={{
                '--spotlight-x': '50%',
                '--spotlight-y': '50%',
                cursor: 'pointer'
              }}
            >
              <div className="menu-card-image">
                <img src={category.image} alt={category.alt} />
                <div className="menu-card-overlay">
                  <h3 className="menu-card-title">{category.title}</h3>
                </div>
              </div>

            </div>
          ))}
        </div>
        
        <div className="food-availability">
          <p className="availability-text">ESSEN VERFÜGBAR: 17:00 - 21:30</p>
        </div>
      </div>

      <MenuPopup 
        isOpen={isPopupOpen}
        onClose={closePopup}
        menuData={selectedCategory}
      />
    </section>
  );
};

export default MenuSection;