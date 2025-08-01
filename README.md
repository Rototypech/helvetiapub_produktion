# Helvetia Pub Landing Page

A React-based landing page for Helvetia Pub, a traditional Swiss pub in Brienz with over 100 years of history.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Image Assets

To complete the design, you'll need to add the following images to the `public` folder:

### Required Images:
- `logo-helvetia.png` - Helvetia Pub logo
- `pub-interior.jpg` - Interior photo of the pub for hero section background
- `pub-exterior.jpg` - Exterior photo for opening hours section background

### Menu Category Images:
- `beer.jpg` - Beer category image
- `wine.jpg` - Wine category image  
- `drinks.jpg` - Drinks/shots category image
- `soft-drinks.jpg` - Soft drinks category image
- `coffee-tea.jpg` - Coffee and tea category image
- `warm-kitchen.jpg` - Warm kitchen/food category image
- `appetizers.jpg` - Appetizers category image

Currently, the application uses CSS gradient placeholders for these images. Replace them with actual photos to complete the design.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Modern React Components**: Built with functional React components and hooks
- **CSS Grid & Flexbox**: Modern CSS layout techniques for perfect alignment
- **Smooth Animations**: Hover effects and transitions throughout
- **Semantic HTML**: Proper semantic structure for accessibility

## Components Structure

- `Header.js` - Navigation header with logo and menu
- `Hero.js` - Main hero section with call-to-action
- `MenuSection.js` - Menu categories grid
- `OpeningHours.js` - Opening hours display with schedule
- `Contact.js` - Contact information and map links
- `Footer.js` - Footer with links and copyright

## Customization

All text content is in German as per the original design. To customize:

1. Update text content in component files
2. Modify colors in CSS files (main brand color: `#4a7c59`)
3. Replace placeholder images with actual photos
4. Update contact information in `Contact.js`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Removes the single build dependency

## Browser Support

This application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

© 2024 Helvetia Pub. All rights reserved.