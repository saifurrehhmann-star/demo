// Service pages are based on offerings already present in the Golden Home site data.
export const SERVICE_PAGES = [
  {
    slug: 'deep-cleaning', title: 'Deep Cleaning', image: '/images/kitchen-clean.jpg',
    intro: 'A detailed home clean for the rooms and surfaces that need extra attention.',
    scope: ['Kitchen and bathroom detailing', 'Living areas, bedrooms and floors', 'A visit scope agreed with you before booking'], group: 'Deep Cleaning',
  },
  {
    slug: 'villa-cleaning', title: 'Villa Deep Cleaning', image: '/images/villa-cleaning.jpg',
    intro: 'Room-by-room deep cleaning planned for villas and townhouses.',
    scope: ['Bedrooms and shared living spaces', 'Kitchen and bathroom detailing', 'Accessible balconies and outdoor areas'], group: 'Deep Cleaning',
  },
  {
    slug: 'apartment-cleaning', title: 'Apartment Deep Cleaning', image: '/images/apartment-cleaning.jpg',
    intro: 'Thorough apartment cleaning, from kitchens and bathrooms to living areas.',
    scope: ['Kitchen surfaces and appliance exteriors', 'Bathroom fixtures and tile surfaces', 'Floors and reachable window tracks'], group: 'Deep Cleaning',
  },
  {
    slug: 'move-in-out', title: 'Move-in / Move-out Cleaning', image: '/images/move-in-out.jpg',
    intro: 'A detailed clean to prepare a home for its next chapter.',
    scope: ['Kitchen and bathroom cleaning', 'Floors, doors and reachable surfaces', 'Cupboards and wardrobes as agreed for the visit'], group: 'Deep Cleaning',
  },
  {
    slug: 'maid-services', title: 'Maid Services', image: '/images/maid-service.jpg',
    intro: 'Regular home cleaning visits shaped around your schedule and priorities.',
    scope: ['Everyday surface and floor care', 'Kitchen and bathroom upkeep', 'Visit frequency discussed when booking'], group: 'Home Cleaning',
  },
  {
    slug: 'furniture-cleaning', title: 'Furniture Cleaning', image: '/images/sofa-after.jpg',
    intro: 'Cleaning options for the upholstered furniture and soft furnishings in your home.',
    scope: ['Sofa and upholstery cleaning options', 'A suitable approach discussed for your fabric', 'Care instructions shared for the selected service'], group: 'Furniture Care',
  },
  {
    slug: 'sofa-cleaning', title: 'Sofa, Carpet & Mattress Cleaning', image: '/images/sofa-after.jpg',
    intro: 'Ask about cleaning options for sofas and other household soft furnishings.',
    scope: ['Share the item type and fabric details', 'Cleaning method confirmed for the material', 'Service scope and quote confirmed before booking'], group: 'Furniture Care',
  },
];

export const servicePathFor = (serviceId) => {
  const aliases = { 'maid-services': 'maid-services', 'furniture-sofa': 'sofa-cleaning' };
  if (serviceId === 'holiday-homes') return '/holiday-homes';
  const slug = aliases[serviceId] || serviceId;
  return SERVICE_PAGES.some((item) => item.slug === slug) ? `/services/${slug}` : '/services';
};

export const SERVICE_GROUPS = [
  { name: 'Deep Cleaning', slugs: ['deep-cleaning', 'villa-cleaning', 'apartment-cleaning', 'move-in-out'] },
  { name: 'Home Cleaning', slugs: ['maid-services'] },
  { name: 'Furniture Care', slugs: ['furniture-cleaning', 'sofa-cleaning'] },
];
