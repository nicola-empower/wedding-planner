export const vendors = [
  {
    id: 1,
    name: "Eternal Moments Photography",
    category: "Photography",
    rating: 4.9,
    cost: 2500,
    image: "/photographer.png",
    booked: true,
    description: "Capturing love stories with a timeless, cinematic style. We specialize in candid moments and dramatic portraits.",
    location: "London, UK",
    contact: "+44 7700 900077",
    email: "hello@eternalmoments.co.uk",
    website: "www.eternalmoments.co.uk",
    capacity: null,
  },
  {
    id: 2,
    name: "Sweet Delights Cakes",
    category: "Cakes",
    rating: 4.7,
    cost: 800,
    image: "/cake.png",
    booked: false,
    description: "Bespoke wedding cakes made with organic ingredients and artistic flair. From classic tiered cakes to modern geometric designs.",
    location: "Brighton, UK",
    contact: "+44 7700 900088",
    email: "orders@sweetdelights.co.uk",
    website: "www.sweetdelights.co.uk",
    capacity: null,
  },
  {
    id: 3,
    name: "Floral Fantasies",
    category: "Decor",
    rating: 4.8,
    cost: 1500,
    image: "/flowers.png",
    booked: false,
    description: "Transforming venues into floral wonderlands. We source locally grown blooms for sustainable, breathtaking arrangements.",
    location: "Surrey, UK",
    contact: "+44 7700 900099",
    email: "blooms@floralfantasies.co.uk",
    website: "www.floralfantasies.co.uk",
    capacity: null,
  },
  {
    id: 4,
    name: "The Grand Ballroom",
    category: "Venue",
    rating: 5.0,
    cost: 5000,
    image: "/ballroom.png",
    booked: true,
    description: "A historic venue with crystal chandeliers and floor-to-ceiling windows. The perfect backdrop for your fairytale wedding.",
    location: "Kensington, London",
    contact: "+44 20 7946 0000",
    email: "events@grandballroom.co.uk",
    website: "www.grandballroom.co.uk",
    capacity: "250 Guests",
  },
];

export const guests = [
  { id: 1, name: "Tony Stark", rsvp: "accepted", table: 1, diet: "None", gift: "Arc Reactor Model" },
  { id: 2, name: "Pepper Potts", rsvp: "accepted", table: 1, diet: "Strawberry Allergy", gift: "Espresso Machine" },
  { id: 3, name: "Steve Rogers", rsvp: "accepted", table: 2, diet: "None", gift: "Vintage Shield" },
  { id: 4, name: "Natasha Romanoff", rsvp: "accepted", table: 2, diet: "None", gift: "Ballet Tickets" },
  { id: 5, name: "Bruce Banner", rsvp: "pending", table: null, diet: "Vegan", gift: null },
  { id: 6, name: "Thor Odinson", rsvp: "accepted", table: 3, diet: "High Protein", gift: "Asgardian Mead" },
  { id: 7, name: "Loki Laufeyson", rsvp: "declined", table: null, diet: "None", gift: "Mischief" },
  { id: 8, name: "Peter Parker", rsvp: "accepted", table: 4, diet: "None", gift: "Lego Set" },
  { id: 9, name: "Wanda Maximoff", rsvp: "accepted", table: 4, diet: "None", gift: "Cookbook" },
  { id: 10, name: "Vision", rsvp: "accepted", table: 4, diet: "None", gift: "Chess Set" },
  { id: 11, name: "Sherlock Holmes", rsvp: "accepted", table: 5, diet: "None", gift: "Violin Strings" },
  { id: 12, name: "John Watson", rsvp: "accepted", table: 5, diet: "None", gift: "Medical Kit" },
  { id: 13, name: "Daenerys Targaryen", rsvp: "accepted", table: 6, diet: "Spicy", gift: "Dragon Egg (Replica)" },
  { id: 14, name: "Jon Snow", rsvp: "accepted", table: 6, diet: "None", gift: "Sword Polish" },
  { id: 15, name: "Tyrion Lannister", rsvp: "accepted", table: 6, diet: "None", gift: "Fine Wine" },
];

export const budget = {
  total: 25000,
  paid: 8500,
  estimated: 24500,
  breakdown: [
    { category: "Venue", estimated: 8000, actual: 8000, paid: 4000, due: 4000 },
    { category: "Catering", estimated: 6000, actual: 6500, paid: 1000, due: 5500 },
    { category: "Photography", estimated: 2500, actual: 2500, paid: 1250, due: 1250 },
    { category: "Attire", estimated: 3000, actual: 3200, paid: 2000, due: 1200 },
    { category: "Decor & Flowers", estimated: 2000, actual: 1800, paid: 250, due: 1550 },
    { category: "Entertainment", estimated: 1500, actual: 1500, paid: 0, due: 1500 },
    { category: "Stationery", estimated: 500, actual: 450, paid: 450, due: 0 },
    { category: "Miscellaneous", estimated: 1000, actual: 550, paid: 0, due: 550 },
  ]
};

export const tasks = [
  { id: 1, title: "Book Photographer", due: "2025-01-15", completed: true },
  { id: 2, title: "Send Invitations", due: "2025-02-01", completed: true },
  { id: 3, title: "Finalize Menu", due: "2025-03-01", completed: false },
  { id: 4, title: "Dress Fitting", due: "2025-03-15", completed: false },
];

export const palette = [
  { name: "Sage Green", hex: "#729B79" },
  { name: "Champagne Gold", hex: "#F2D492" },
  { name: "Ivory", hex: "#FFFFF0" },
  { name: "Dusty Rose", hex: "#DCAE96" },
];

export const schedule = [
  { time: "13:00", event: "Ceremony", location: "The Grand Garden" },
  { time: "14:30", event: "Drinks Reception", location: "Terrace" },
  { time: "16:00", event: "Wedding Breakfast", location: "Ballroom" },
  { time: "19:30", event: "First Dance", location: "Ballroom" },
  { time: "21:00", event: "Evening Buffet", location: "Ballroom Foyer" },
  { time: "23:59", event: "Carriages", location: "Main Entrance" },
];

export const menu = {
  starters: [
    { name: "Wild Mushroom Soup", description: "Served with truffle oil and crusty bread" },
    { name: "Smoked Salmon", description: "With capers, lemon, and dill crème fraîche" },
  ],
  mains: [
    { name: "Roast Chicken Supreme", description: "With seasonal vegetables and fondant potato" },
    { name: "Beef Wellington", description: "Served with red wine jus and dauphinoise potatoes" },
    { name: "Butternut Squash Risotto", description: "With sage and parmesan crisp (V)" },
  ],
  desserts: [
    { name: "Sticky Toffee Pudding", description: "With vanilla bean ice cream" },
    { name: "Lemon Tart", description: "Served with raspberry coulis" },
  ],
};

export const weddingDetails = {
  couple: "Susan & Paul",
  date: "2026-08-15",
  theme: {
    name: "Sage Green & Gold",
    description: "A romantic, nature-inspired wedding with sage green, dusty pink, and gold accents.",
    colors: ["#729B79", "#F2D492", "#FFFFF0", "#DCAE96"]
  }
};
