import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory bookings store for demo
const bookings = [];

// Dubai Service Areas Data
const DUBAI_AREAS = [
  { name: 'Downtown Dubai', eta: '30 mins', zone: 'Central' },
  { name: 'Palm Jumeirah', eta: '25 mins', zone: 'Coast' },
  { name: 'Dubai Marina & JBR', eta: '20 mins', zone: 'Coast' },
  { name: 'Emirates Hills & Meadows', eta: '35 mins', zone: 'South' },
  { name: 'Dubai Hills Estate', eta: '30 mins', zone: 'Central' },
  { name: 'Business Bay', eta: '30 mins', zone: 'Central' },
  { name: 'Arabian Ranches 1 & 2', eta: '40 mins', zone: 'East' },
  { name: 'Bluewaters Island', eta: '25 mins', zone: 'Coast' },
  { name: 'Jumeirah Golf Estates', eta: '35 mins', zone: 'South' },
  { name: 'JVC & JVT', eta: '30 mins', zone: 'Central' },
  { name: 'City Walk & DIFC', eta: '25 mins', zone: 'Central' },
  { name: 'Meydan & MBR City', eta: '35 mins', zone: 'Central' }
];

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    brand: 'Golden Home Premium Cleaning Service Dubai',
    currency: 'AED',
    timestamp: new Date().toISOString()
  });
});

// Get Areas
app.get('/api/areas', (req, res) => {
  res.json({ success: true, count: DUBAI_AREAS.length, data: DUBAI_AREAS });
});

// Dynamic AED Price Calculator Endpoint
app.post('/api/calculate', (req, res) => {
  const { propertyType = 'apartment', bedrooms = '2', serviceType = 'deep-clean', frequency = 'weekly', addons = [] } = req.body;

  let base = 0;
  if (propertyType === 'apartment') {
    switch (bedrooms) {
      case 'studio': base = 249; break;
      case '1': base = 329; break;
      case '2': base = 449; break;
      case '3': base = 599; break;
      case '4': base = 799; break;
      default: base = 449;
    }
  } else {
    switch (bedrooms) {
      case '2': base = 599; break;
      case '3': base = 799; break;
      case '4': base = 1049; break;
      case '5': base = 1399; break;
      case '6': base = 1799; break;
      default: base = 1049;
    }
  }

  if (serviceType === 'move-in-out') base = Math.round(base * 1.25);
  if (serviceType === 'sofa-carpet') base = 340;
  if (serviceType === 'ac-duct') base = 420;
  if (serviceType === 'marble-polish') base = 550;

  const addonPrices = {
    oven: 80,
    fridge: 60,
    balcony: 120,
    ac: 150,
    marble: 250,
    mattress: 110
  };

  const addonsTotal = addons.reduce((sum, item) => sum + (addonPrices[item] || 0), 0);
  const subtotalBeforeDiscount = base + addonsTotal;

  let discountPct = 0;
  if (frequency === 'weekly') discountPct = 0.20;
  else if (frequency === 'bi-weekly') discountPct = 0.10;
  else if (frequency === 'monthly') discountPct = 0.05;

  const discountAmount = Math.round(subtotalBeforeDiscount * discountPct);
  const subtotal = subtotalBeforeDiscount - discountAmount;
  const vat = Math.round(subtotal * 0.05);
  const total = subtotal + vat;

  res.json({
    success: true,
    currency: 'AED',
    breakdown: {
      base,
      addonsTotal,
      discountPct: discountPct * 100,
      discountAmount,
      subtotal,
      vat,
      total
    }
  });
});

// Create Booking Endpoint
app.post('/api/bookings', (req, res) => {
  const { name, phone, email, area, building, date, timeSlot, serviceType, total } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ success: false, message: 'Name and Dubai phone number are required.' });
  }

  const bookingRef = `GH-DXB-${Math.floor(1000 + Math.random() * 9000)}`;
  const booking = {
    bookingRef,
    name,
    phone,
    email,
    area,
    building,
    date,
    timeSlot,
    serviceType: serviceType || 'Luxury Deep Cleaning',
    total: total || 449,
    status: 'Confirmed - Crew Dispatched',
    createdAt: new Date().toISOString()
  };

  bookings.push(booking);
  console.log(`[Golden Home Dubai] New Booking Received: ${bookingRef} for ${name} (${area})`);

  res.status(201).json({
    success: true,
    message: 'Booking confirmed successfully. Dispatch coordinator notified.',
    booking
  });
});

// Get recent bookings (mock admin endpoint)
app.get('/api/bookings', (req, res) => {
  res.json({ success: true, count: bookings.length, data: bookings });
});

app.listen(PORT, () => {
  console.log(`✨ Golden Home Dubai Node.js API server running on port ${PORT}`);
});
