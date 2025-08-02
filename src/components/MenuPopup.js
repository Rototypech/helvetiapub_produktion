import React from 'react';
import './MenuPopup.css';

const MenuPopup = ({ isOpen, onClose, menuData }) => {
  if (!isOpen || !menuData) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="menu-popup-overlay" onClick={handleBackdropClick}>
      <div className="menu-popup">
        <div className="menu-popup-header">
          <h2 className="menu-popup-title">{menuData.title}</h2>
          <button 
            className="menu-popup-close" 
            onClick={onClose}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        
        <div className="menu-popup-content">
          {menuData.categories && menuData.categories.length > 0 ? (
            <div className="menu-categories">
              {menuData.categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="menu-category">
                  <div className="menu-category-header">
                    <h3 className="menu-category-name">{category.categoryName}</h3>
                    <p className="menu-category-description">{category.categoryDescription}</p>
                  </div>
                  <div className="menu-items">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="menu-item">
                        <div className="menu-item-header">
                          <h4 className="menu-item-name">{item.name}</h4>
                          {item.price && (
                            <div className="menu-item-price">{item.price}</div>
                          )}
                        </div>
                        {item.description && (
                          <p className="menu-item-description">{item.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : menuData.items && menuData.items.length > 0 ? (
            <div className="menu-items">
              {menuData.items.map((item, index) => (
                <div key={index} className="menu-item">
                  <div className="menu-item-header">
                    <h3 className="menu-item-name">{item.name}</h3>
                    {item.price && (
                      <div className="menu-item-price">{item.price}</div>
                    )}
                  </div>
                  {item.description && (
                    <p className="menu-item-description">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="no-items">No items available for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPopup;