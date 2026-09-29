export const DUBAI_AREAS = [
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
  { name: 'Al Barsha & Umm Suqeim', eta: '25 mins', zone: 'West' },
  { name: 'Meydan & MBR City', eta: '35 mins', zone: 'Central' }
];

export const SERVICES_LIST = [
  {
    id: 'villa-cleaning',
    title: 'Villa Deep Cleaning',
    subtitle: 'Comprehensive 85-Point Luxury Care',
    tag: 'Villa Specialist',
    description: 'Specialized deep scrubbing, floor machine buffing, and sanitization for luxury villas and townhouses in Palm Jumeirah, Emirates Hills, and Dubai Hills.',
    priceStarting: 599,
    unit: 'villa',
    image: '/images/villa-cleaning.jpg',
    features: [
      'Multi-story villa deep scrub and tile descaling',
      'Balcony, terrace & patio high-pressure jet wash',
      'Full kitchen degreasing & inside cupboard detailing',
      'All en-suite bathrooms limescale removal',
      'Dubai Municipality certified eco-friendly sanitizers'
    ],
    whatsappMsg: 'Hi, I want to book Villa Deep Cleaning. Please share the Price and What is included.'
  },
  {
    id: 'apartment-cleaning',
    title: 'Apartment Deep Cleaning',
    subtitle: 'Spotless Hotel-Grade Sanitization',
    tag: 'Most Popular',
    description: 'From cozy studios to luxury penthouses in Dubai Marina & Downtown, we clean every corner, skirting board, and vent grill to perfection.',
    priceStarting: 249,
    unit: 'apartment',
    image: '/images/apartment-cleaning.jpg',
    features: [
      'Inside oven, cooker hood & fridge degreasing',
      'Bathroom grout steam sanitization & glass descaling',
      'Window tracks, ledges & balcony sliding door cleaning',
      'Ceiling fan, spotlight and chandelier detailing',
      'HEPA filtration vacuuming against desert dust'
    ],
    whatsappMsg: 'Hi, I want to book Apartment Deep Cleaning. Please share the Price and What is included.'
  },
  {
    id: 'move-in-out',
    title: 'Move-In / Move-Out Cleaning',
    subtitle: '100% Ejari Deposit Pass Guarantee',
    tag: 'Ejari Guaranteed',
    description: 'Guaranteed handover cleaning designed specifically for Dubai tenant inspections, ensuring 100% of your security deposit is returned by your landlord.',
    priceStarting: 449,
    unit: 'residence',
    image: '/images/move-in-out.jpg',
    features: [
      '100% Ejari inspection pass or free re-clean within 24h',
      'Inside all built-in wardrobes, drawers & cabinets',
      'Wall scuff marks and adhesive sticker removal',
      'Full limescale, silicone & calcium restoration',
      'Formal inspection readiness certificate signed'
    ],
    whatsappMsg: 'Hi, I want to book Move-in / Move-out Deep Cleaning. Please share the Price and Ejari Guarantee details.'
  },
  {
    id: 'maid-services',
    title: '5-Star Trained Maid Service',
    subtitle: 'Flexible Hourly & Recurring Housekeeping',
    tag: 'TADBEER Certified',
    description: 'Vetted, English-speaking professional home maids for recurring weekly care, laundry, crisp hotel bed making, and general home upkeep.',
    priceStarting: 45,
    unit: 'hour',
    image: '/images/maid-service.jpg',
    features: [
      'TADBEER-licensed & legally sponsored in UAE',
      'Verified Dubai Police background check & health test',
      'Expert fabric laundry, steaming & crisp ironing',
      'Option to bring professional cleaning materials',
      'Same dedicated maid for recurring weekly visits'
    ],
    whatsappMsg: 'Hi, I want to book Maid Service. Please share available hours and rates.'
  },
  {
    id: 'holiday-homes',
    title: 'Holiday Home & Airbnb Cleaning',
    subtitle: 'Same-Day Fast Guest Turnaround',
    tag: 'Airbnb Superhost Choice',
    description: 'Specialized turnover cleaning for holiday homes and vacation rentals across Dubai. Hotel linen change, guest toiletry setup, and photo inspection report.',
    priceStarting: 199,
    unit: 'turnover',
    image: '/images/holiday-homes.jpg',
    features: [
      'Same-day express turnover between 11:00 AM & 3:00 PM',
      'Laundered hotel-grade linen & towel setup',
      'Restocking guest toiletries & welcome amenities',
      'Damage & forgotten item inspection report with photos',
      'Key lockbox & smart lock synchronization'
    ],
    whatsappMsg: 'Hi, I manage Holiday Homes / Airbnb in Dubai and need turnover cleaning rates.'
  },
  {
    id: 'furniture-sofa',
    title: 'Sofa, Carpet & Mattress Steam Extraction',
    subtitle: 'Anti-Allergen Dust Mite Defense',
    tag: 'German Steam Tech',
    description: 'Deep 160°C hot water steam extraction that eliminates stubborn Dubai desert dust, beverage stains, pet hair, and microscopic allergens.',
    priceStarting: 180,
    unit: 'piece',
    image: '/images/sofa-after.jpg',
    features: [
      'Hot water extraction lifting embedded sand',
      'Destroys 99.9% of dust mites, bacteria & allergens',
      'Safe for velvet, Italian leather, linen & silk rugs',
      'Fast 2-hour rapid dry micro-blower technology',
      'Free Scotchgard stain-repellent protective coat'
    ],
    whatsappMsg: 'Hi, I want to book Sofa & Carpet Steam Cleaning. Please share rates.'
  }
];

export const SKILL_METRICS = [
  { title: 'Villa Deep Cleaning', value: 92 },
  { title: 'Apartment Sanitization', value: 96 },
  { title: 'Ejari Deposit Handover', value: 98 },
  { title: 'Holiday Home Turnovers', value: 88 }
];

export const TRUST_COUNTERS = [
  { count: '1,450+', label: 'Dubai Homes Cleaned' },
  { count: '99.2%', label: 'Ejari Deposit Pass Rate' },
  { count: '5.0 ★', label: 'Google Verified Rating' },
  { count: '45+', label: 'TADBEER Certified Staff' }
];

export const WHATSAPP_REVIEWS = [
  {
    clientName: 'Sarah Al Qasimi',
    community: 'Palm Jumeirah, Frond N',
    date: 'Yesterday at 4:18 PM',
    service: 'Villa Deep Cleaning',
    avatar: 'SQ',
    message: 'Hello Golden Home team! Just inspected our 5-bedroom villa after your team left. The marble floors look like a mirror and the kitchen grease is 100% gone. Thank you so much for sending such polite staff!'
  },
  {
    clientName: 'Marcus Lindqvist',
    community: 'Marina Gate, Dubai Marina',
    date: '3 days ago at 11:45 AM',
    service: 'Move-Out Ejari Guarantee',
    avatar: 'ML',
    message: 'Just had my handover inspection with the Emaar building management and got my FULL AED 12,000 security deposit back without a single deduction. You guys saved me so much hassle. 10/10 recommend!'
  },
  {
    clientName: 'Fatima & Dr. Zayd',
    community: 'Sidra Villa, Dubai Hills Estate',
    date: 'Last week at 6:30 PM',
    service: 'Sofa & Mattress Steam Extraction',
    avatar: 'FZ',
    message: 'We had stubborn desert sand and juice spills on our light beige L-shaped sofa. Your German steam machine made it look brand new! Also appreciated the non-toxic eco smell. See you next month.'
  }
];

export const FAQS = [
  {
    q: 'How much does home deep cleaning cost in Dubai?',
    a: 'Pricing depends on property size and configuration. Apartment deep cleaning starts from AED 249 for studios, while villa deep cleaning starts from AED 599. Hourly maid service is available from AED 45/hr. Use our live instant calculator above for an exact, transparent quote!'
  },
  {
    q: 'Do you clean holiday homes and Airbnb properties?',
    a: 'Yes! We are the preferred cleaning partner for dozens of Dubai holiday home operators and Airbnb Superhosts across Dubai Marina, Downtown, Palm Jumeirah, and JBR. We offer express same-day turnovers with fresh linen, restocking, and photo handover inspection.'
  },
  {
    q: 'What is your 100% Ejari Deposit Pass Guarantee?',
    a: 'Moving out of a Dubai home requires passing a strict landlord and building management inspection. If your landlord points out any cleaning deficiency on your checklist within 24 hours of our service, our supervisor returns and re-cleans that area free of charge.'
  },
  {
    q: 'Do your maids bring their own cleaning materials?',
    a: 'Yes. Our mobile team arrives in our Golden Home liveried van with heavy-duty German Kärcher steam machines, HEPA vacuums, fresh microfiber cloths, and Dubai Municipality-approved non-toxic eco-chemicals. For regular maid service, you can choose with or without supplies.'
  },
  {
    q: 'Are your cleaners legally sponsored and background-checked?',
    a: '100% yes. Every single Golden Home team member is legally sponsored under our UAE trade license, TADBEER compliant, verified by Dubai Police clearance, and covered by AED 1,000,000 comprehensive liability insurance.'
  },
  {
    q: 'Which residential areas of Dubai do you serve?',
    a: 'We cover all residential communities across Dubai including Palm Jumeirah, Downtown Dubai, Dubai Marina, JBR, Emirates Hills, Dubai Hills Estate, Arabian Ranches, JVC, Business Bay, Al Barsha, and Bluewaters.'
  }
];
