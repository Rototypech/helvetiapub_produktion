export const menuData = {
  bier: {
    title: 'BIER',
    items: [
      { name: 'Pilsner', price: '€4.50', description: 'Crisp and refreshing Czech-style pilsner' },
      { name: 'Weissbier', price: '€4.80', description: 'Traditional Bavarian wheat beer' },
      { name: 'IPA', price: '€5.20', description: 'Hoppy India Pale Ale with citrus notes' },
      { name: 'Guinness', price: '€5.50', description: 'Classic Irish stout on tap' },
      { name: 'Local Craft Beer', price: '€5.80', description: 'Rotating selection of local brewery specials' }
    ]
  },
  
  wein: {
    title: 'WEIN',
    items: [
      { name: 'Riesling', price: '€6.50', description: 'Crisp German white wine' },
      { name: 'Pinot Noir', price: '€7.20', description: 'Elegant red wine from Burgundy' },
      { name: 'Sauvignon Blanc', price: '€6.80', description: 'Fresh New Zealand white' },
      { name: 'Cabernet Sauvignon', price: '€7.50', description: 'Bold Californian red' },
      { name: 'House Wine', price: '€5.50', description: 'Daily selection by the glass' }
    ]
  },
  
  cocktails: {
    title: 'Cocktails & Spirits',
    items: [
      // Cocktails – CHF 12.00 / ca. 25 cl
      { name: 'Margarita', price: 'CHF 12.00', description: 'Tequila, Cointreau, frische Limette' },
      { name: 'Mojito', price: 'CHF 12.00', description: 'Rum, Limette, Rohrzucker, frische Minze, Soda' },
      { name: 'Hugo', price: 'CHF 12.00', description: 'Holunder, Prosecco, Minze, Soda' },
      { name: 'Mimosa', price: 'CHF 12.00', description: 'Orangensaft & Prosecco' },
      { name: 'Passion Vodka', price: 'CHF 12.00', description: 'Absolut, Passionsfrucht, Limette' },
      
      // Mocktails (alkoholfrei) – CHF 9.00 / ca. 25 cl
      { name: 'Virgin Hugo', price: 'CHF 9.00', description: 'Holunder, Limetten, Minze, Soda (alkoholfrei)' },
      { name: 'Nojito', price: 'CHF 9.00', description: 'Soda, Minze, Limette, Rohrzucker (alkoholfrei)' },
      { name: 'Sunrise Fizzy', price: 'CHF 9.00', description: 'Orangensaft, Zitronensaft, Grenadin, Soda (alkoholfrei)' },
      { name: 'Sunset Spritz', price: 'CHF 9.00', description: 'San Bitter, Orangensaft, Soda (alkoholfrei)' },
      
      // Longdrinks – CHF 12.00 / ca. 20 cl
      { name: 'Gin Tonic', price: 'CHF 12.00', description: 'Gordon\'s + Tonic Water' },
      { name: 'Vodka Lemon', price: 'CHF 12.00', description: 'Absolut + Bitter Lemon' },
      { name: 'Vodka Red Bull', price: 'CHF 12.00', description: 'Absolut + Red Bull' },
      { name: 'Cuba Libre', price: 'CHF 12.00', description: 'Havana Club + Cola + Limette' },
      { name: 'Campari Orange', price: 'CHF 12.00', description: 'Campari + Orangensaft' },
      { name: 'Cynar Tonic', price: 'CHF 12.00', description: 'Cynar + Tonic Water' },
      { name: 'Negroni', price: 'CHF 12.00', description: 'Gin + Campari + Martini' },
      { name: 'Aperol Spritz', price: 'CHF 12.00', description: 'Aperol + Prosecco + Soda' },
      { name: 'Tequila Sunrise', price: 'CHF 12.00', description: 'Tequila + Orangensaft + Grenadin' },
      { name: 'Blue Lagoon', price: 'CHF 12.00', description: 'Vodka + Blue Curaçao + Zitrone' },
      { name: 'Long Island Iced Tea', price: 'CHF 12.00', description: 'Die volle Ladung in einem Glas 🍹🍺' },
      
      // Whisky / Whiskey – CHF 8.00 / 4 cl
      { name: 'Jameson', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Jack Daniel\'s', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Johnnie Walker Red Label', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Ballantine\'s', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      
      // Rum – CHF 8.00 / 4 cl
      { name: 'Bacardi White', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Bacardi Black', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Havana Club Especial', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Captain Morgan Spiced', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      
      // Vodka – CHF 8.00 / 4 cl
      { name: 'Absolut Vodka', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Trojka Red / Green / White', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      
      // Gin – CHF 8.00 / 4 cl
      { name: 'Bombay Sapphire', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Gordon\'s Dry', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Gordon\'s Rosé', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Gordon\'s 0.0', price: 'CHF 8.00', description: '4 cl (alkoholfrei)' },
      
      // Tequila – CHF 8.00 / 4 cl
      { name: 'Sierra Tequila', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      
      // Liköre & Aperitifs – CHF 8.00 / 4 cl
      { name: 'Baileys Irish Cream', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Berliner Luft', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Kleiner Feigling', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Cointreau', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Blue Curaçao', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Campari', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Aperol', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Martini Bianco / Rosato', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      
      // Brandy / Kräuter – CHF 8.00 / 4 cl
      { name: 'Veterano', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Blason', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' },
      { name: 'Appenzeller', price: 'CHF 8.00', description: '4 cl (pur oder auf Eis)' }
    ]
  },
  
  softgetraenke: {
    title: 'SOFTGETRÄNKE',
    items: [
      { name: 'Coca Cola', price: '€3.50', description: 'Classic cola' },
      { name: 'Sprite', price: '€3.50', description: 'Lemon-lime soda' },
      { name: 'Orange Juice', price: '€4.00', description: 'Freshly squeezed' },
      { name: 'Mineral Water', price: '€2.80', description: 'Still or sparkling' },
      { name: 'Apple Juice', price: '€3.80', description: 'Pure apple juice' }
    ]
  },
  
  kaffee: {
    title: 'KAFFEE & TEE',
    items: [
      { name: 'Espresso', price: '€2.50', description: 'Strong Italian coffee' },
      { name: 'Cappuccino', price: '€3.50', description: 'Espresso with steamed milk foam' },
      { name: 'Latte', price: '€4.00', description: 'Espresso with steamed milk' },
      { name: 'Green Tea', price: '€3.00', description: 'Premium Japanese sencha' },
      { name: 'Black Tea', price: '€2.80', description: 'English breakfast blend' },
      { name: 'Herbal Tea', price: '€3.20', description: 'Chamomile or peppermint' }
    ]
  },
  
  pizza: {
    title: 'WÄRME KÜCHE',
    items: [
      { name: 'Margherita Pizza', price: '€12.50', description: 'Tomato, mozzarella, fresh basil' },
      { name: 'Pepperoni Pizza', price: '€14.50', description: 'Spicy salami with mozzarella' },
      { name: 'Schnitzel', price: '€16.80', description: 'Breaded pork cutlet with potato salad' },
      { name: 'Bratwurst', price: '€11.50', description: 'Grilled sausage with sauerkraut' },
      { name: 'Cheese Platter', price: '€13.20', description: 'Selection of local cheeses with bread' },
      { name: 'Soup of the Day', price: '€6.50', description: 'Ask your server for today\'s special' }
    ]
  }
};