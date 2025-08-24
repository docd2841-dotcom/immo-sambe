import { Property } from '../types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Terrain Résidentiel Premium',
    type: 'terrain',
    price: 25000000,
    location: 'Douala - Biyem-Assi',
    area: 500,
    description: 'Magnifique terrain résidentiel situé dans le quartier prisé de Biyem-Assi. Parfait pour construire votre villa de rêve. Terrain viabilisé avec accès à l\'eau et à l\'électricité.',
    images: [
      'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    features: ['Viabilisé', 'Titre foncier', 'Accès facile', 'Quartier résidentiel'],
    status: 'disponible',
    coordinates: { lat: 4.0511, lng: 9.7679 },
    agent: {
      name: 'Jean Mballa',
      phone: '+237670123456',
      whatsapp: '+237670123456'
    },
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Villa Moderne 4 Chambres',
    type: 'maison',
    price: 85000000,
    location: 'Yaoundé - Bastos',
    area: 300,
    description: 'Superbe villa moderne de 4 chambres avec piscine et jardin. Située dans le quartier huppé de Bastos, cette propriété offre tout le confort moderne.',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    features: ['4 chambres', 'Piscine', 'Jardin', 'Garage', 'Climatisation'],
    status: 'disponible',
    coordinates: { lat: 3.8480, lng: 11.5021 },
    agent: {
      name: 'Marie Fotso',
      phone: '+237680234567',
      whatsapp: '+237680234567'
    },
    created_at: '2024-01-10T14:30:00Z',
    updated_at: '2024-01-10T14:30:00Z'
  },
  {
    id: '3',
    title: 'Appartement 2 Chambres',
    type: 'appartement',
    price: 35000000,
    location: 'Douala - Akwa',
    area: 80,
    description: 'Bel appartement de 2 chambres au cœur d\'Akwa. Proche de tous les services et commodités. Idéal pour jeune couple ou investissement locatif.',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    features: ['2 chambres', 'Salon', 'Cuisine équipée', 'Balcon', 'Parking'],
    status: 'disponible',
    coordinates: { lat: 4.0435, lng: 9.7069 },
    agent: {
      name: 'Paul Nkomo',
      phone: '+237690345678',
      whatsapp: '+237690345678'
    },
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z'
  },
  {
    id: '4',
    title: 'Studio Moderne',
    type: 'studio',
    price: 15000000,
    location: 'Yaoundé - Melen',
    area: 35,
    description: 'Studio moderne et bien agencé dans le quartier de Melen. Parfait pour étudiant ou jeune professionnel. Proche des universités.',
    images: [
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1797103/pexels-photo-1797103.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Studio', 'Cuisine américaine', 'Salle de bain', 'Balcon'],
    status: 'disponible',
    coordinates: { lat: 3.8667, lng: 11.5167 },
    agent: {
      name: 'Alice Biya',
      phone: '+237670456789',
      whatsapp: '+237670456789'
    },
    created_at: '2024-01-01T16:45:00Z',
    updated_at: '2024-01-01T16:45:00Z'
  },
  {
    id: '5',
    title: 'Chambre Meublée',
    type: 'chambre',
    price: 8000000,
    location: 'Douala - Bonapriso',
    area: 25,
    description: 'Chambre meublée dans une résidence sécurisée à Bonapriso. Idéale pour étudiant ou stagiaire. Accès cuisine commune.',
    images: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Meublée', 'Sécurisée', 'Cuisine commune', 'Internet'],
    status: 'disponible',
    coordinates: { lat: 4.0614, lng: 9.7043 },
    agent: {
      name: 'Robert Essomba',
      phone: '+237680567890',
      whatsapp: '+237680567890'
    },
    created_at: '2023-12-20T11:20:00Z',
    updated_at: '2023-12-20T11:20:00Z'
  },
  {
    id: '6',
    title: 'Domaine Résidentiel - Lots Disponibles',
    type: 'lot',
    price: 50000000,
    location: 'Yaoundé - Odza',
    area: 2000,
    description: 'Grand domaine résidentiel divisé en plusieurs lots. Chaque lot bénéficie d\'un environnement sécurisé avec toutes les commodités modernes.',
    images: [
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Domaine sécurisé', 'Viabilisé', 'Titre foncier', 'Accès bitumé'],
    status: 'disponible',
    coordinates: { lat: 3.8667, lng: 11.5500 },
    agent: {
      name: 'Emmanuel Atangana',
      phone: '+237690678901',
      whatsapp: '+237690678901'
    },
    lots: [
      {
        id: 'lot-1',
        property_id: '6',
        lot_number: 'A-001',
        price: 12000000,
        area: 400,
        status: 'disponible',
        coordinates: { lat: 3.8667, lng: 11.5500 },
        polygon_coordinates: [
          { lat: 3.8667, lng: 11.5500 },
          { lat: 3.8670, lng: 11.5500 },
          { lat: 3.8670, lng: 11.5503 },
          { lat: 3.8667, lng: 11.5503 }
        ]
      },
      {
        id: 'lot-2',
        property_id: '6',
        lot_number: 'A-002',
        price: 15000000,
        area: 500,
        status: 'réservé',
        coordinates: { lat: 3.8670, lng: 11.5500 },
        polygon_coordinates: [
          { lat: 3.8670, lng: 11.5500 },
          { lat: 3.8673, lng: 11.5500 },
          { lat: 3.8673, lng: 11.5503 },
          { lat: 3.8670, lng: 11.5503 }
        ],
        reserved_until: '2024-02-15T23:59:59Z'
      },
      {
        id: 'lot-3',
        property_id: '6',
        lot_number: 'A-003',
        price: 18000000,
        area: 600,
        status: 'vendu',
        coordinates: { lat: 3.8673, lng: 11.5500 },
        polygon_coordinates: [
          { lat: 3.8673, lng: 11.5500 },
          { lat: 3.8676, lng: 11.5500 },
          { lat: 3.8676, lng: 11.5503 },
          { lat: 3.8673, lng: 11.5503 }
        ]
      }
    ],
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z'
  }
];

export const featuredImages = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Douala - Biyem-Assi',
    propertyId: '1'
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Yaoundé - Bastos',
    propertyId: '2'
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Douala - Akwa',
    propertyId: '3'
  },
  {
    id: '4',
    image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Yaoundé - Melen',
    propertyId: '4'
  }
];

export const featuredVideos = [
  {
    id: '1',
    thumbnail: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Douala - Bonapriso',
    propertyId: '5'
  },
  {
    id: '2',
    thumbnail: 'https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Yaoundé - Odza',
    propertyId: '6'
  },
  {
    id: '3',
    thumbnail: 'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Douala - Deido',
    propertyId: '1'
  },
  {
    id: '4',
    thumbnail: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Yaoundé - Essos',
    propertyId: '2'
  }
];