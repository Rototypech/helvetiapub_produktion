export const menuData = {
  bier: {
    title: 'BIER',
    categories: [
      {
        categoryName: '🍺 Bier vom Fass',
        categoryDescription: 'Frisch gezapft vom Fass',
        items: [
          { name: 'Rugenbräu Spezial 4.8%', price: 'CHF 4.50', description: '3dl' },
          { name: 'Rugenbräu Spezial 4.8%', price: 'CHF 6.00', description: '5dl' }
        ]
      },
      {
        categoryName: '🍾 Bier Flaschen',
        categoryDescription: 'Internationale Bierspezialitäten',
        items: [
          { name: 'Desperados 5.9%', price: 'CHF 6.50', description: '33cl' },
          { name: 'Corona Extra 4.5%', price: 'CHF 6.50', description: '33cl' },
          { name: 'Rugenbräu Spezial Dunkel 5.2%', price: 'CHF 6.50', description: '33cl' },
          { name: 'Rugenbräu Weizen 5.2%', price: 'CHF 6.50', description: '33cl' },
          { name: 'Erdinger Weissbier 5.3%', price: 'CHF 7.00', description: '50cl' }
        ]
      },
      {
        categoryName: '🚫 Ohne Alkohol',
        categoryDescription: 'Alkoholfreie Alternativen',
        items: [
          { name: 'Rugenbräu Alkoholfrei <0.5%', price: 'CHF 4.50', description: '33cl' }
        ]
      }
    ]
  },
  
  wein: {
    title: 'WEIN',
    categories: [
      {
        categoryName: '🍷 Rotweine',
        categoryDescription: 'Offene Rotweine vom Fass',
        items: [
          { name: 'Pinot Noir', price: 'CHF 5.50', description: 'Klassischer, eleganter Rotwein mit feinen Aromen von roten Beeren und weichem Abgang.' },
          { name: 'Tirteo Barbera', price: 'CHF 7.50', description: 'Intensiv, fruchtig und würzig – ein typischer Barbera aus dem Piemont mit Charakter.' }
        ]
      },
      {
        categoryName: '🥂 Weissweine',
        categoryDescription: 'Offene Weissweine vom Fass',
        items: [
          { name: 'Fendant', price: 'CHF 5.50', description: 'Leichter, spritziger Walliser Weisswein mit mineralischer Note – der Klassiker zum Apéro.' },
          { name: 'Johannisberg', price: 'CHF 5.50', description: 'Fruchtbetonter Weisswein aus dem Wallis, vollmundig mit Aromen von reifen Birnen und Honig.' }
        ]
      },
      {
        categoryName: '🌸 Roséwein',
        categoryDescription: 'Eleganter Rosé vom Fass',
        items: [
          { name: 'Œil de Perdrix', price: 'CHF 5.50', description: 'Eleganter Rosé aus Neuenburg – zartfruchtig mit feinem Erdbeerduft.' }
        ]
      }
    ]
  },
  
  cocktails: {
    title: 'COCKTAILS & SPIRITS',
    categories: [
      {
        categoryName: 'Cocktails',
        categoryDescription: 'CHF 12.00 / ca. 25 cl',
        items: [
          { name: 'Long Island Ice Tea', price: 'CHF 12.00', description: '2 cl Bacardi, 2 cl Vodka, 2 cl Tequila, 2 cl Cointreau, 2 cl Zitronensaft, Cola, Limette, Eis' },
          { name: 'Mojito', price: 'CHF 12.00', description: '5 cl Havana Club, 1,5 cl Zuckersirup, 3 BL weißer Zucker, 4 cl Mineralwasser, 1 Limette, Minze, Eis' },
          { name: 'Margarita', price: 'CHF 12.00', description: '1 cl Zuckersirup, 2 cl Zitronensaft, 4 cl Tequila, Eis' },
          { name: 'Mimosa', price: 'CHF 12.00', description: 'Orangensaft, Prosecco' },
          { name: 'Hugo', price: 'CHF 12.00', description: 'Holunderblütensirup, 1 cl Prosecco, 1 cl Mineralwasser, Minze' },
          { name: 'Blue Lagoon', price: 'CHF 12.00', description: '4 cl weißer Vodka, 3 cl Blue Curaçao, 3 cl frisch gepresster Zitronensaft, Sprite, Zitronenscheibe' },
          { name: 'Cuba Libre', price: 'CHF 12.00', description: '4 cl Havana Club Braun, Cola, Limettenstücke, Eis' },
          { name: 'Tequila Sunrise', price: 'CHF 12.00', description: 'Tequila, Orangensaft, Grenadine, Eis' },
          { name: 'Negroni', price: 'CHF 12.00', description: '3 cl Gin (Bombay), 3 cl Martini Rosso, 3 cl Campari, Eis, Orangenzeste oder Scheibe' },
          { name: 'Pink Grapefruit Spritz', price: 'CHF 12.00', description: '2 cl Monin Pamplemousse Sirup, 4 cl Wermut (Martini oder Martini Rosato), Prosecco zum Auffüllen, Eis' },
          { name: 'Gin Pamplemousse', price: 'CHF 12.00', description: '4 cl Gin, 2 cl Monin Pamplemousse Sirup, 2 cl Zitronensaft, Tonic Water zum Auffüllen, Eis' },
          { name: 'Tequila Grapefruit Sour', price: 'CHF 12.00', description: '4 cl Tequila, 2 cl Monin Pamplemousse Sirup, 2 cl Limettensaft, Eis' },
          { name: 'Passionsfruit Caipiroska', price: 'CHF 12.00', description: '5 cl Vodka, 2 cl Monin Passion Fruit, 2–3 Limettenviertel, Crushed Eis' },
          { name: 'Passionsfruit Spritz', price: 'CHF 12.00', description: '2 cl Monin Passion Fruit, 4 cl Martini Bianco oder Prosecco, Soda oder Tonic zum Auffüllen, Limettenscheiben, Eis' },
          { name: 'Limoncello Spritz', price: 'CHF 12.00', description: '4 cl Limoncello, 6 cl Prosecco, 2 cl Soda, Eis, Zitrone' },
          { name: 'Limoncello Tonic', price: 'CHF 12.00', description: '4 cl Limoncello, Tonic Water, Eis' },
          { name: 'Caipirinha', price: 'CHF 12.00', description: '6 cl Cachaça, 1 Stück Limette, 2 EL Rohrzucker, 5 EL Crushed Eis, mit Mineralwasser auffüllen' }
        ]
      },
      {
        categoryName: 'Mocktails (alkoholfrei)',
        categoryDescription: 'CHF 9.00 / ca. 25 cl',
        items: [
          { name: 'Virgin Hugo', price: 'CHF 9.00', description: 'Holunder, Limetten, Minze, Soda' },
          { name: 'Nojito', price: 'CHF 9.00', description: 'Soda, Minze, Limette, Rohrzucker' },
          { name: 'Sunrise Fizzy', price: 'CHF 9.00', description: 'Orangensaft, Zitronensaft, Grenadin, Soda' },
          { name: 'Sunset Spritz', price: 'CHF 9.00', description: 'San Bitter, Orangensaft, Soda' }
        ]
      },
      {
        categoryName: 'Longdrinks',
        categoryDescription: 'CHF 12.00 / ca. 20 cl',
        items: [
          { name: 'Vodka Lemon', price: 'CHF 12.00', description: 'Absolut + Bitter Lemon' },
          { name: 'Campari Orange', price: 'CHF 12.00', description: 'Campari + Orangensaft' },
          { name: 'Gin Tonic', price: 'CHF 12.00', description: 'Gordon\'s + Tonic Water' },
          { name: 'Vodka Red Bull', price: 'CHF 12.00', description: 'Absolut + Red Bull' },
          { name: 'Cynar Tonic', price: 'CHF 12.00', description: 'Cynar + Tonic Water' }
        ]
      },
      {
        categoryName: 'Whisky / Whiskey',
        categoryDescription: 'CHF 8.00 / 4 cl (pur oder auf Eis)',
        items: [
          { name: 'Jameson', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Jack Daniel\'s', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Johnnie Walker Red Label', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Ballantine\'s', price: 'CHF 8.00', description: '4 cl' }
        ]
      },
      {
        categoryName: 'Rum',
        categoryDescription: 'CHF 8.00 / 4 cl (pur oder auf Eis)',
        items: [
          { name: 'Bacardi White', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Bacardi Black', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Havana Club Especial', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Captain Morgan Spiced', price: 'CHF 8.00', description: '4 cl' }
        ]
      },
      {
        categoryName: 'Vodka',
        categoryDescription: 'CHF 8.00 / 4 cl (pur oder auf Eis)',
        items: [
          { name: 'Absolut Vodka', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Trojka Red / Green / White', price: 'CHF 8.00', description: '4 cl' }
        ]
      },
      {
        categoryName: 'Gin',
        categoryDescription: 'CHF 8.00 / 4 cl (pur oder auf Eis)',
        items: [
          { name: 'Bombay Sapphire', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Gordon\'s Dry', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Gordon\'s Rosé', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Gordon\'s 0.0', price: 'CHF 8.00', description: '4 cl (alkoholfrei)' }
        ]
      },
      {
        categoryName: 'Tequila',
        categoryDescription: 'CHF 8.00 / 4 cl (pur oder auf Eis)',
        items: [
          { name: 'Sierra Tequila', price: 'CHF 8.00', description: '4 cl' }
        ]
      },
      {
        categoryName: 'Liköre & Aperitifs',
        categoryDescription: 'CHF 8.00 / 4 cl (pur oder auf Eis)',
        items: [
          { name: 'Baileys Irish Cream', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Berliner Luft', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Kleiner Feigling', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Cointreau', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Blue Curaçao', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Campari', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Aperol', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Martini Bianco / Rosato', price: 'CHF 8.00', description: '4 cl' }
        ]
      },
      {
        categoryName: 'Brandy / Kräuter',
        categoryDescription: 'CHF 8.00 / 4 cl (pur oder auf Eis)',
        items: [
          { name: 'Veterano', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Blason', price: 'CHF 8.00', description: '4 cl' },
          { name: 'Appenzeller', price: 'CHF 8.00', description: '4 cl' }
        ]
      }
    ]
  },
  
  softgetraenke: {
    title: 'SOFTGETRÄNKE',
    categories: [
      {
        categoryName: '🚰 Offen (vom Zapfhahn)',
        categoryDescription: 'Frisch gezapfte Getränke',
        items: [
          { name: 'Mineralwasser', price: 'CHF 4.20', description: '3dl' },
          { name: 'Mineralwasser', price: 'CHF 5.50', description: '5dl' },
          { name: 'Coca Cola', price: 'CHF 4.20', description: '3dl' },
          { name: 'Coca Cola', price: 'CHF 5.50', description: '5dl' },
          { name: 'Ice Tea', price: 'CHF 4.20', description: '3dl' },
          { name: 'Ice Tea', price: 'CHF 5.50', description: '5dl' },
          { name: 'Rivella rot', price: 'CHF 4.20', description: '3dl' },
          { name: 'Rivella rot', price: 'CHF 5.50', description: '5dl' },
          { name: 'Sprite', price: 'CHF 4.20', description: '3dl' },
          { name: 'Sprite', price: 'CHF 5.50', description: '5dl' },
          { name: 'Orangensaft', price: 'CHF 4.50', description: 'Frisch gepresst' }
        ]
      },
      {
        categoryName: '🍾 Flaschen',
        categoryDescription: 'Getränke in Flaschen',
        items: [
          { name: 'Mineral ohne Gas', price: 'CHF 5.00', description: '33cl' },
          { name: 'Cola Zero', price: 'CHF 5.00', description: '33cl' },
          { name: 'Rivella blau', price: 'CHF 5.00', description: '33cl' },
          { name: 'Bitter Lemon', price: 'CHF 5.00', description: '2dl' },
          { name: 'Tonic Water', price: 'CHF 5.00', description: '2dl' },
          { name: 'Fanta', price: 'CHF 5.00', description: '33cl' },
          { name: 'San Bitter', price: 'CHF 5.00', description: '10cl' },
          { name: 'Red Bull', price: 'CHF 6.00', description: '25cl' }
        ]
      }
    ]
  },
  
  kaffee: {
    title: 'KAFFEE & TEE',
    categories: [
      {
        categoryName: '☕ Kaffee Spezialitäten',
        categoryDescription: 'Frisch gebrühter Kaffee und Espresso-Getränke',
        items: [
          { name: 'Kaffee Crème / Schale / Espresso', price: 'CHF 4.50', description: 'Klassischer Kaffee' },
          { name: 'Espresso doppio', price: 'CHF 6.50', description: 'Doppelter Espresso' },
          { name: 'Cappuccino', price: 'CHF 6.00', description: 'Espresso mit Milchschaum' },
          { name: 'Latte Macchiato', price: 'CHF 6.50', description: 'Espresso mit heißer Milch' }
        ]
      },
      {
        categoryName: '🍃 Tee',
        categoryDescription: 'Verschiedene Teesorten',
        items: [
          { name: 'Diverse Tee', price: 'CHF 4.00', description: 'Verschiedene Teesorten' }
        ]
      },
      {
        categoryName: '🥃 Kaffee mit Alkohol',
        categoryDescription: 'Kaffee-Spezialitäten mit Spirituosen',
        items: [
          { name: 'Kaffee Baileys', price: 'CHF 8.50', description: 'Kaffee mit Baileys Irish Cream' },
          { name: 'Kaffee Luz/Fertig', price: 'CHF 7.50', description: 'Kaffee mit Schnaps' },
          { name: 'Coretto Grappa', price: 'CHF 7.50', description: 'Espresso mit Grappa' }
        ]
      }
    ]
  },
  
  pizza: {
    title: 'PIZZA, PASTA & MEHR',
    categories: [
      {
        categoryName: '🍕 Pizza',
        categoryDescription: 'Alle Pizzen auch als ½ Portion erhältlich (Preisreduktion CHF 3.-)',
        items: [
          { name: 'Margherita', price: 'CHF 15.90', description: 'Tomaten und Mozzarella' },
          { name: 'Funghi', price: 'CHF 19.90', description: 'Tomaten, Champignons und Mozzarella' },
          { name: 'Fiorentina', price: 'CHF 19.90', description: 'Tomaten, Spinat, Quark, Knoblauch und Mozzarella' },
          { name: 'Napoli', price: 'CHF 19.50', description: 'Tomaten, Sardellen, Kapern, Oliven und Mozzarella' },
          { name: 'Gorgonzola', price: 'CHF 21.90', description: 'Tomaten, Gorgonzola und Mozzarella' },
          { name: 'Etna', price: 'CHF 19.90', description: 'Tomaten, Speck, scharfe Salami, Zwiebeln, Knoblauch und Mozzarella' },
          { name: 'Hawaii', price: 'CHF 19.80', description: 'Tomaten, Vorderschinken, Ananas und Mozzarella' },
          { name: 'Frutti di Mare', price: 'CHF 20.10', description: 'Tomaten, Meeresfrüchte und Mozzarella' },
          { name: 'Chicken', price: 'CHF 22.90', description: 'Tomaten, Peperoni, Zwiebeln, Pouletbrust und Mozzarella' },
          { name: 'Vegetariana', price: 'CHF 19.90', description: 'Tomaten, Verschiedene Gemüse und Mozzarella' },
          { name: 'Quattro Formaggi', price: 'CHF 19.90', description: 'Tomaten, Verschiedene Käsesorten und Mozzarella' },
          { name: 'Al Tonno', price: 'CHF 19.90', description: 'Tomaten, Thon, Oliven, Zwiebeln und Mozzarella' },
          { name: 'Prosciutto', price: 'CHF 19.80', description: 'Tomaten, Vorderschinken und Mozzarella' },
          { name: 'Prosciutto e Funghi', price: 'CHF 19.90', description: 'Tomaten, Champignons, Vorderschinken und Mozzarella' },
          { name: 'Quattro Stagioni', price: 'CHF 20.90', description: 'Tomaten, Vorderschinken, Artischocken, Champignons, Peperoni und Mozzarella' },
          { name: 'Luigi', price: 'CHF 19.80', description: 'Tomaten, scharfe Salami, Zwiebeln, Oliven und Mozzarella' },
          { name: 'Contadina', price: 'CHF 19.90', description: 'Tomaten, Speck, Zwiebeln und Mozzarella' },
          { name: 'Diti\'s Pizza', price: 'CHF 23.90', description: 'Lassen Sie sich überraschen…' }
        ]
      },
      {
        categoryName: '🍝 Pasta',
        categoryDescription: 'Hausgemachte italienische Pasta',
        items: [
          { name: 'Gemüselasagne', price: 'CHF 19.50', description: 'Frische Gemüselasagne' },
          { name: 'Lasagne Bolognaise', price: 'CHF 21.50', description: 'Klassische Bolognaise-Lasagne' },
          { name: 'Spaghetti Bolognaise', price: 'CHF 21.50', description: 'Spaghetti mit Fleischsauce' },
          { name: 'Spaghetti Carbonara', price: 'CHF 21.00', description: 'Spaghetti mit Speck und Ei' },
          { name: 'Spaghetti Napoli', price: 'CHF 19.50', description: 'Spaghetti mit Tomatensauce' },
          { name: 'Spaghetti Aglio e Olio', price: 'CHF 21.50', description: 'Spaghetti mit Knoblauch und Olivenöl' }
        ]
      },
      {
        categoryName: '🥩 Grilladen',
        categoryDescription: 'Frisch vom Grill serviert',
        items: [
          { name: 'Schweinssteak 180gr', price: 'CHF 29.50', description: 'Serviert mit verschiedenen Salaten' },
          { name: 'Pouletbrust', price: 'CHF 27.50', description: 'Serviert mit verschiedenen Salaten' },
          { name: 'Portion Pommes Frites', price: 'CHF 9.50', description: 'Als Hauptspeise' },
          { name: 'Aufpreis Pommes Frites', price: 'CHF 7.00', description: 'Als Beilage' }
        ]
      },
      {
        categoryName: '🥗 Salate & Vorspeisen',
        categoryDescription: 'Frische Salate und Vorspeisen',
        items: [
          { name: 'Grüner Salat', price: 'CHF 8.00', description: 'Frischer grüner Salat' },
          { name: 'Grosser gemischter Salat', price: 'CHF 9.90', description: 'Grosse Portion gemischter Salat' },
          { name: 'Nüsslisalat', price: 'CHF 12.90', description: 'Mit Speckwürfeli, Ei & Croutons' },
          { name: 'Tomatensalat', price: 'CHF 11.90', description: 'Frische Tomaten' },
          { name: 'Tomaten/Mozzarella Salat', price: 'CHF 21.50', description: 'Caprese-Salat' },
          { name: 'Salat teller', price: 'CHF 19.50', description: 'Gemischter Salatteller' },
          { name: 'Thonsalat garniert', price: 'CHF 21.50', description: 'Thonsalat mit Garnitur' },
          { name: 'Cervelat Salat garniert', price: 'CHF 20.50', description: 'Cervelat-Salat mit Garnitur' },
          { name: 'Cervelat-Käse Salat garniert', price: 'CHF 21.50', description: 'Cervelat-Käse-Salat mit Garnitur' }
        ]
      },
      {
        categoryName: '🍲 Suppen',
        categoryDescription: 'Hausgemachte warme Suppen',
        items: [
          { name: 'Tagessuppe', price: 'CHF 7.50', description: 'Suppe des Tages' },
          { name: 'Tomatencremesuppe', price: 'CHF 7.50', description: 'Cremige Tomatensuppe' },
          { name: 'Pilzcrémesuppe', price: 'CHF 7.50', description: 'Cremige Pilzsuppe' }
        ]
      }
    ]
  }
};