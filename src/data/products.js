export const PRODUCTS = [
  {
    id: 'original-volt',
    name: 'Electric Volt',
    subtitle: 'The Original Clean Voltage',
    tagline: 'Razor-sharp citrus spark with crisp lime and a high-octane botanical kick.',
    flavor: 'Crisp Lime & Botanical Citrus',
    colorName: 'emerald',
    accentColor: '#10b981',
    accentGlow: 'rgba(16, 185, 129, 0.4)',
    accentGradient: 'from-emerald-500 to-teal-400',
    borderGlow: 'hover:border-emerald-500/60',
    image: '/assets/can_original.jpg',
    badge: 'FLAGSHIP FORMULA',
    rating: 4.96,
    reviewsCount: 4820,
    caffeine: '200mg',
    sugar: '0g',
    calories: '10',
    carbonation: 'High Crisp',
    flavorNotes: {
      citrus: 95,
      sweetness: 40,
      tartness: 85,
      intensity: 90,
    },
    pricing: {
      '4-pack': { price: 11.99, perCan: 3.00, popular: false },
      '12-pack': { price: 29.99, perCan: 2.50, popular: true, savings: 'Save 17%' },
      '24-pack': { price: 54.99, perCan: 2.29, popular: false, savings: 'Save 24%' },
    },
    nutrition: {
      servingSize: '1 Can (500mL / 16.9 fl oz)',
      servingsPerContainer: '1',
      calories: 10,
      totalFat: '0g',
      sodium: '110mg',
      totalCarb: '2g',
      totalSugars: '0g',
      addedSugars: '0g',
      protein: '0g',
      potassium: '140mg (4% DV)',
      magnesium: '45mg (10% DV)',
      niacin: '20mg (125% DV)',
      vitaminB6: '2.5mg (150% DV)',
      vitaminB12: '6mcg (250% DV)',
      pantothenicAcid: '5mg (100% DV)',
      activeComplex: [
        { name: 'Natural Caffeine (Green Tea Seed)', amount: '200mg', purpose: 'Smooth sustained alertness without spikes' },
        { name: 'L-Theanine (Suntheanine®)', amount: '150mg', purpose: 'Calm cognitive focus, eliminates jitter' },
        { name: 'Alpha-GPC 50%', amount: '100mg', purpose: 'Memory recall & neurotransmitter support' },
        { name: 'Electrolyte Mineral Matrix', amount: '350mg', purpose: 'Pink Himalayan salt, magnesium, potassium' },
        { name: 'Taurine (Vegan)', amount: '1000mg', purpose: 'Cellular hydration & muscle endurance' }
      ]
    },
    highlights: [
      'Zero sugar, zero crash guaranteed',
      '200mg Organic caffeine from Green Tea Extract',
      'Infused with Suntheanine® L-Theanine for calm focus',
      '4 Key Electrolytes for rapid cellular hydration',
      'Lightly carbonated with mountain spring water'
    ]
  },
  {
    id: 'cyber-berry',
    name: 'Cyber Berry',
    subtitle: 'Electric Violet Rush',
    tagline: 'Deep cosmic wild blackberry fused with crushed blue raspberry and sub-atomic electric tartness.',
    flavor: 'Wild Blackberry & Electric Blue Raz',
    colorName: 'purple',
    accentColor: '#a855f7',
    accentGlow: 'rgba(168, 85, 247, 0.4)',
    accentGradient: 'from-purple-500 to-fuchsia-400',
    borderGlow: 'hover:border-purple-500/60',
    image: '/assets/can_berry.jpg',
    badge: 'FAN FAVORITE',
    rating: 4.98,
    reviewsCount: 5210,
    caffeine: '200mg',
    sugar: '0g',
    calories: '10',
    carbonation: 'Medium Punch',
    flavorNotes: {
      citrus: 55,
      sweetness: 70,
      tartness: 80,
      intensity: 95,
    },
    pricing: {
      '4-pack': { price: 11.99, perCan: 3.00, popular: false },
      '12-pack': { price: 29.99, perCan: 2.50, popular: true, savings: 'Save 17%' },
      '24-pack': { price: 54.99, perCan: 2.29, popular: false, savings: 'Save 24%' },
    },
    nutrition: {
      servingSize: '1 Can (500mL / 16.9 fl oz)',
      servingsPerContainer: '1',
      calories: 10,
      totalFat: '0g',
      sodium: '110mg',
      totalCarb: '2g',
      totalSugars: '0g',
      addedSugars: '0g',
      protein: '0g',
      potassium: '140mg (4% DV)',
      magnesium: '45mg (10% DV)',
      niacin: '20mg (125% DV)',
      vitaminB6: '2.5mg (150% DV)',
      vitaminB12: '6mcg (250% DV)',
      pantothenicAcid: '5mg (100% DV)',
      activeComplex: [
        { name: 'Natural Caffeine (Green Coffee Bean)', amount: '200mg', purpose: 'Rapid mental stamina' },
        { name: 'L-Theanine (Suntheanine®)', amount: '150mg', purpose: 'Alpha wave stimulation' },
        { name: 'Wild Berry Polyphenols', amount: '250mg', purpose: 'Potent cellular antioxidant protection' },
        { name: 'Electrolyte Mineral Matrix', amount: '350mg', purpose: 'Hydration recovery complex' },
        { name: 'N-Acetyl L-Tyrosine', amount: '200mg', purpose: 'Dopamine synthesis under high stress' }
      ]
    },
    highlights: [
      'Bold crushed antioxidant-rich wild berry taste',
      'Zero artificial colors (pigmented with purple carrot juice)',
      'Dual nootropic matrix for high-pressure decision making',
      'Smooth carbonation with zero syrupy aftertaste',
      '100% Vegan, non-GMO, keto certified'
    ]
  },
  {
    id: 'solar-flare',
    name: 'Solar Flare',
    subtitle: 'High-Noon Heatwave',
    tagline: 'Tropical golden mango colliding with juicy blood orange and an incandescent burst of solar brightness.',
    flavor: 'Ripe Mango & Blood Orange Surge',
    colorName: 'orange',
    accentColor: '#f97316',
    accentGlow: 'rgba(249, 115, 22, 0.4)',
    accentGradient: 'from-amber-500 to-orange-500',
    borderGlow: 'hover:border-orange-500/60',
    image: '/assets/can_solar.jpg',
    badge: 'SUMMER SPECIAL',
    rating: 4.92,
    reviewsCount: 3190,
    caffeine: '200mg',
    sugar: '0g',
    calories: '15',
    carbonation: 'Sparkling Fizz',
    flavorNotes: {
      citrus: 75,
      sweetness: 80,
      tartness: 60,
      intensity: 85,
    },
    pricing: {
      '4-pack': { price: 11.99, perCan: 3.00, popular: false },
      '12-pack': { price: 29.99, perCan: 2.50, popular: true, savings: 'Save 17%' },
      '24-pack': { price: 54.99, perCan: 2.29, popular: false, savings: 'Save 24%' },
    },
    nutrition: {
      servingSize: '1 Can (500mL / 16.9 fl oz)',
      servingsPerContainer: '1',
      calories: 15,
      totalFat: '0g',
      sodium: '105mg',
      totalCarb: '3g',
      totalSugars: '0g',
      addedSugars: '0g',
      protein: '0g',
      potassium: '160mg (5% DV)',
      magnesium: '45mg (10% DV)',
      niacin: '20mg (125% DV)',
      vitaminB6: '2.5mg (150% DV)',
      vitaminB12: '6mcg (250% DV)',
      pantothenicAcid: '5mg (100% DV)',
      activeComplex: [
        { name: 'Natural Caffeine (Green Coffee & Guarana)', amount: '200mg', purpose: 'Extended athletic energy' },
        { name: 'L-Citrulline Malate', amount: '500mg', purpose: 'Enhanced nitric oxide & blood flow' },
        { name: 'Organic Coconut Water Powder', amount: '300mg', purpose: 'Natural potassium & electrolyte replenishment' },
        { name: 'Alpha-GPC 50%', amount: '100mg', purpose: 'Neuromuscular firing rate' },
        { name: 'Electrolyte Mineral Matrix', amount: '350mg', purpose: 'Sodium, magnesium, ionic trace minerals' }
      ]
    },
    highlights: [
      'Tropical juicy mango & sun-ripened blood orange',
      'Infused with coconut water powder for rapid rehydration',
      'L-Citrulline boost for endurance athletes and gym goers',
      'Naturally sweetened with fermented monk fruit & stevia leaf',
      'Zero bitter aftertaste, 100% refreshment'
    ]
  },
  {
    id: 'arctic-zero',
    name: 'Arctic Zero',
    subtitle: 'Sub-Zero Glacier Chill',
    tagline: 'Ultra-crisp sub-zero frosted blue citrus with an icy glacier rush that awakens your senses in seconds.',
    flavor: 'Glacier Blue Citrus & Sub-Zero Mint',
    colorName: 'cyan',
    accentColor: '#38bdf8',
    accentGlow: 'rgba(56, 189, 248, 0.4)',
    accentGradient: 'from-cyan-400 to-sky-500',
    borderGlow: 'hover:border-cyan-500/60',
    image: '/assets/can_arctic.jpg',
    badge: 'ZERO CALORIES',
    rating: 4.95,
    reviewsCount: 3840,
    caffeine: '200mg',
    sugar: '0g',
    calories: '0',
    carbonation: 'Crisp Glacier Frost',
    flavorNotes: {
      citrus: 80,
      sweetness: 35,
      tartness: 70,
      intensity: 90,
    },
    pricing: {
      '4-pack': { price: 11.99, perCan: 3.00, popular: false },
      '12-pack': { price: 29.99, perCan: 2.50, popular: true, savings: 'Save 17%' },
      '24-pack': { price: 54.99, perCan: 2.29, popular: false, savings: 'Save 24%' },
    },
    nutrition: {
      servingSize: '1 Can (500mL / 16.9 fl oz)',
      servingsPerContainer: '1',
      calories: 0,
      totalFat: '0g',
      sodium: '115mg',
      totalCarb: '0g',
      totalSugars: '0g',
      addedSugars: '0g',
      protein: '0g',
      potassium: '140mg (4% DV)',
      magnesium: '50mg (12% DV)',
      niacin: '20mg (125% DV)',
      vitaminB6: '2.5mg (150% DV)',
      vitaminB12: '6mcg (250% DV)',
      pantothenicAcid: '5mg (100% DV)',
      activeComplex: [
        { name: 'Natural Caffeine (Pure Botanical Extract)', amount: '200mg', purpose: 'Crisp instant awakening' },
        { name: 'L-Theanine', amount: '150mg', purpose: 'Zen clarity with zero jitter' },
        { name: 'Aquamin™ Marine Magnesium', amount: '50mg', purpose: 'Bioactive deep sea minerals' },
        { name: 'Korean Panax Ginseng Extract', amount: '100mg', purpose: 'Physical stamina & stress resilience' },
        { name: 'Taurine (Vegan)', amount: '1000mg', purpose: 'Thermoregulation & endurance' }
      ]
    },
    highlights: [
      'Absolute Zero: 0 calories, 0 sugar, 0 net carbs',
      'Icy cold glacier sensation with crisp mountain finish',
      'Aquamin™ marine minerals harvested from pristine coastal waters',
      'Cleanest label in energy drinks — no chemical fillers',
      'Engineered for peak mental clarity and flow state'
    ]
  }
];

export const AMBASSADORS = [
  {
    name: 'Kai "Vortex" Sterling',
    role: 'Apex Legends World Champion & Twitch Streamer',
    team: 'Team Voltage Esports',
    quote: 'During 12-hour tournament grinds, traditional energy drinks cause my hands to shake and my aim to slip. POWER ONE gives me laser focus and zero twitching.',
    flavor: 'Cyber Berry',
    stats: '142ms Avg Reaction Time',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Dr. Elena Rostova',
    role: 'Lead AI Neuro-Robotics Researcher',
    team: 'Cortex Labs Zurich',
    quote: 'The 1:1 ratio of Suntheanine to caffeine paired with Alpha-GPC is scientifically verified for sustained prefrontal cortex blood flow. It is my daily co-pilot.',
    flavor: 'Arctic Zero',
    stats: '16h Daily Cognitive Flow',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Marcus "Apex" Vance',
    role: 'Formula Drift Pro Driver & Stunt Specialist',
    team: 'Vance Racing',
    quote: 'When you are sliding sideways at 95mph 2 inches from a concrete wall, you need absolute clarity. POWER ONE is in my drink system every single race.',
    flavor: 'Electric Volt',
    stats: '3x National Podium',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Maya Lin',
    role: 'Ultra-Marathoner & CrossFit Games Athlete',
    team: 'Iron Endurance',
    quote: 'The coconut electrolytes and Himalayan pink salt keep my muscle cramps at zero, while the 200mg green caffeine powers me through mile 30 without nausea.',
    flavor: 'Solar Flare',
    stats: '100-Mile Finisher',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  }
];

export const REVIEWS_DATA = [
  {
    id: 1,
    author: 'Devon K.',
    badge: 'Verified Buyer',
    category: 'Gamers',
    rating: 5,
    date: '2 days ago',
    title: 'No more 3 PM eye twitches or crash',
    text: 'I used to drink 2-3 standard energy drinks during dev sprints and my heart would thump out of my chest. POWER ONE Electric Volt gives me steady laser focus for 6+ hours with ZERO crash. Tastes incredible too.',
    flavor: 'Electric Volt',
    pack: '12-Pack Case'
  },
  {
    id: 2,
    author: 'Sarah M.',
    badge: 'Verified Buyer',
    category: 'Athletes',
    rating: 5,
    date: '5 days ago',
    title: 'Best pre-workout replacement ever',
    text: 'Replaced my chemically flavored pre-workout powder with Solar Flare. The coconut electrolytes and nootropics give me an unreal mind-muscle connection during heavy lifting.',
    flavor: 'Solar Flare',
    pack: '24-Pack Master Box'
  },
  {
    id: 3,
    author: 'Alex T.',
    badge: 'Verified Buyer',
    category: 'Software Engineers & Creators',
    rating: 5,
    date: '1 week ago',
    title: 'Cyber Berry is addictive (in the best way)',
    text: 'The berry flavor tastes like real crushed fruit, not medicine. I appreciate that they publish full dosages on the can instead of hiding behind a proprietary blend.',
    flavor: 'Cyber Berry',
    pack: '12-Pack Case'
  },
  {
    id: 4,
    author: 'Jason R.',
    badge: 'Verified Buyer',
    category: 'Night Shifters',
    rating: 5,
    date: '1 week ago',
    title: 'Surviving 12-hour ER shifts effortlessly',
    text: 'As an ER nurse on night shift, finding clean caffeine that does not ruin my stomach is critical. Arctic Zero is crisp, refreshing, and keeps me alert when it matters most.',
    flavor: 'Arctic Zero',
    pack: '24-Pack Master Box'
  },
  {
    id: 5,
    author: 'Chloe L.',
    badge: 'Verified Buyer',
    category: 'Gamers',
    rating: 5,
    date: '2 weeks ago',
    title: 'Cleanest energy drink on the market',
    text: 'Zero artificial dyes, real electrolytes, and Suntheanine. The branding looks phenomenal on my desk and the flavor puts traditional brands to shame.',
    flavor: 'Electric Volt',
    pack: '12-Pack Case'
  }
];

export const STORES_DATA = [
  {
    city: 'Austin, TX',
    locations: [
      { name: 'Whole Foods Market Flagship', address: '525 N Lamar Blvd, Austin, TX 78703', distance: '0.8 mi', stock: 'In Stock (All Flavors)', status: 'green' },
      { name: 'Target Downtown', address: '2021 Guadalupe St, Austin, TX 78705', distance: '1.4 mi', stock: 'In Stock (Volt, Berry)', status: 'green' },
      { name: 'Equinox Gym & Spa', address: '1007 S Congress Ave, Austin, TX 78704', distance: '2.1 mi', stock: 'Limited Stock', status: 'amber' }
    ]
  },
  {
    city: 'Los Angeles, CA',
    locations: [
      { name: 'Erewhon Market Venice', address: '585 Venice Blvd, Venice, CA 90291', distance: '0.5 mi', stock: 'In Stock (All Flavors)', status: 'green' },
      { name: 'Target West Hollywood', address: '7100 Santa Monica Blvd, West Hollywood, CA 90046', distance: '1.8 mi', stock: 'In Stock', status: 'green' },
      { name: 'Golds Gym Venice', address: '360 Hampton Dr, Venice, CA 90291', distance: '1.2 mi', stock: 'Low Stock', status: 'amber' }
    ]
  },
  {
    city: 'New York, NY',
    locations: [
      { name: 'Whole Foods Market Tribeca', address: '270 Greenwich St, New York, NY 10007', distance: '0.4 mi', stock: 'In Stock (All Flavors)', status: 'green' },
      { name: 'Target Herald Square', address: '112 W 34th St, New York, NY 10120', distance: '1.1 mi', stock: 'In Stock', status: 'green' },
      { name: 'Lifetime Fitness Sky', address: '605 W 42nd St, New York, NY 10036', distance: '1.6 mi', stock: 'In Stock (Volt, Arctic)', status: 'green' }
    ]
  },
  {
    city: 'Miami, FL',
    locations: [
      { name: 'Whole Foods South Beach', address: '1020 Alton Rd, Miami Beach, FL 33139', distance: '0.6 mi', stock: 'In Stock (All Flavors)', status: 'green' },
      { name: 'Target Midtown Miami', address: '3401 N Miami Ave, Miami, FL 33127', distance: '2.0 mi', stock: 'In Stock', status: 'green' },
      { name: 'Anatomy Fitness Wynwood', address: '1220 20th St, Miami Beach, FL 33139', distance: '1.5 mi', stock: 'In Stock', status: 'green' }
    ]
  }
];
