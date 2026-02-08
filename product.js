const menu = [
  {
    category: "Tatlılar",
    products: [{
      name: "Donut", price: 50
    },
    {
      name: "Berliner", price: 60
    },
    {
      name: "Kreppel", price: 80
    },
    {
      name: "Waffle", price: 200
    },
    {
      name: "Spagetti Krep", price: 200
    },
    {
      name: "Dani Special Waffle", price: 250
    },
      {
      name: "Dani Krep", price: 190
    },
      {
      name: "Dani Box", price: 700
    },
    {
      name: "Makaron", price: 130
    }, {
      name: "Dubai çikolatası", price: 250
    }, {
      name: "Profiterol", price: 140
    }, {
      name: "Koni", price: 50
    }, {
      name: "Çikolatalı Kruvasan", price: 100
    }, {
      name: "Kremalı Kruvasan", price: 150
    }, {
      name: "Meyveli Çikolatalı Kruvasan", price: 150
    }, {
      name: "İzmir Bomba", price: 150
    }, {
      name: "Dani Special Waffle", price: 250
    }, {
      name: "Dani Special Waffle", price: 250
    }, {
      name: "Dani Special Waffle", price: 250
    },
    ]
  },
  {
    category: "Ice Coffee Drink",
    products: [
      { name: "Ice Filtre", price: 110 },
      { name: "Ice Americano", price: 110 },
      { name: "Ice Latte", price: 120 },
      { name: "Ice Flat White", price: 120 },
      { name: "Ice Chai Tea Latte", price: 150 },
      { name: "Ice Caramel Latte", price: 150 },
      { name: "Ice Vaniya Latte", price: 150 },
      { name: "Ice Toffe Nut Latte", price: 150 },
      { name: "Ice Lotus Latte", price: 150 },
      { name: "Ice Mocha", price: 150 },
      { name: "Ice White Mocha", price: 150 },
      { name: "Ice Caramel Mocha", price: 150 },
      { name: "Ice Cinnamon Roll Latte", price: 150 },
      { name: "Ice Pumpkin Latte", price: 150 },
      { name: "Ice Creme Brule", price: 150 },
      { name: "Ice Lotus Latte", price: 150 },
      { name: "Toasted Marshmallow", price: 150 }
    ]
  },

  {
    category: "Frappe",
    products: [
      { name: "Vaniya Frappe", price: 160 },
      { name: "Caramel Frappe", price: 160 },
      { name: "Mocha Frappe", price: 160 },
      { name: "Çilekli Frappe", price: 160 },
      { name: "Vanilya Frappe", price: 160 }
    ]
  },

  {
    category: "Frozen",
    products: [
      { name: "Mango Frozen", price: 160 },
      { name: "Ananas Frozen", price: 160 },
      { name: "Üzüm Frozen", price: 160 },
      { name: "Çilek Frozen", price: 160 },
      { name: "Çarkıfelek", price: 160 },
      { name: "Yaban Mersini", price: 160 }
    ]
  },

  {
    category: "Milkshake",
    products: [
      { name: "Çilekli Milkshake", price: 140 },
      { name: "Muzlu Milkshake", price: 140 },
      { name: "Oreo Milkshake", price: 140 },
      { name: "Lotus Milkshake", price: 140 },
      { name: "Çikolatalı Milkshake", price: 140 }
    ]
  },

  {
    category: "Ice Special Drink",
    products: [
      { name: "Cool Lime", price: 140 },
      { name: "Berry Hibiscus", price: 90 },
      { name: "Limonata", price: 120 },
      { name: "Çilekli Limonata", price: 120 },
      { name: "Berry Lime", price: 140 }
    ]
  },

  {
    category: "Espresso & More",
    products: [
      { name: "Americano", price: { small: 90, large: 100 } },
      { name: "Filtre", price: { small: 90, large: 100 } },
      { name: "Espresso", price: { small: 60, large: 70 } },
      { name: "Espresso Macchiato", price: { small: 65, large: 75 } },
      { name: "Ristretto Bianco", price: 105 }
    ]
  },

  {
    category: "Hot Coffees",
    products: [
      { name: "Latte", price: { small: 100, large: 110 } },
      { name: "Chai Tea Latte", price: { small: 130, large: 140 } },
      { name: "Caramel Latte", price: { small: 130, large: 140 } },
      { name: "Vanilya Latte", price: { small: 130, large: 140 } },
      { name: "Toffe Nut Latte", price: { small: 130, large: 140 } },
      { name: "Pumpkin Spice Latte", price: { small: 130, large: 140 } },
      { name: "Creme Blure", price: { small: 130, large: 140 } },
      { name: "Lotus Latte", price: { small: 130, large: 140 } },
      { name: "Cinnamon Roll", price: { small: 130, large: 140 } },
      { name: "Caramel Macchiato", price: { small: 130, large: 140 } },
      { name: "Flat White", price: 100 }
    ]
  },

  {
    category: "Mocha",
    products: [
      { name: "Mocha", price: { small: 130, large: 140 } },
      { name: "Caramel Mocha", price: { small: 130, large: 140 } },
      { name: "White Mocha", price: { small: 130, large: 140 } }
    ]
  },

  {
    category: "Sıcak Ekstralar",
    products: [
      { name: "Çay", price: { small: 50, large: 60 } },
      { name: "Türk Kahvesi", price: { small: 60, large: 70 } },
      { name: "Salep", price: { small: 90, large: 100 } },
      { name: "Sıcak Çikolata", price: { small: 90, large: 100 } },
      { name: "Ruby Sıcak Çikolata", price: { small: 90, large: 100 } },
      { name: "Beyaz Sıcak Çikolata", price: { small: 90, large: 100 } },
      { name: "Bitki Çayı", price: 70 }
    ]
  }
];


