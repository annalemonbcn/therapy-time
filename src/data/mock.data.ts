import { Therapist } from './types'

const mockTherapists: Therapist[] = [
  {
    basicInfo: {
      id: 'therapist1',
      name: 'Dr. Jane Smith',
      description: 'Specializes in cognitive-behavioral therapy.',
      profilePicture: 'https://api.dicebear.com/9.x/identicon/svg?seed=Midnight',
      languages: [
        {
          id: 'en',
          name: 'english'
        },
        {
          id: 'es',
          name: 'spanish'
        }
      ]
    },
    location: {
      address: '123 Main St, Anytown, USA',
      CP: '12345',
      city: 'Anytown',
      province: 'USA',
      mapsUrl: 'https://www.google.com/maps/place/123+Main+St,+Anytown,+USA'
    },
    sessionInfo: {
      type: ['online', 'presential'],
      sessionPrice: 150
    },
    reviews: {
      totalRatings: 1,
      average: 5,
      reviews: [
        {
          user: {
            id: 'reviewer1',
            name: 'John Doe',
            description: '',
            profilePicture: ''
          },
          rating: 5,
          text: 'Excellent service!'
        }
      ]
    }
  },
  {
    basicInfo: {
      id: 'therapist2',
      name: 'Dr. Emily Johnson',
      description: 'Expert in family therapy.',
      profilePicture: 'https://api.dicebear.com/9.x/identicon/svg?seed=Miss%20kitty',
      languages: [
        {
          id: 'en',
          name: 'english'
        },
        {
          id: 'fr',
          name: 'french'
        }
      ]
    },
    location: {
      address: '456 Elm St, Anytown, USA',
      CP: '67890',
      city: 'Anytown',
      province: 'USA',
      mapsUrl: 'https://www.google.com/maps/place/456+Elm+St,+Anytown,+USA'
    },
    sessionInfo: {
      type: ['online', 'presential'],
      sessionPrice: 200
    },
    reviews: {
      totalRatings: 1,
      average: 5,
      reviews: [
        {
          user: {
            id: 'reviewer2',
            name: 'Jane Smith',
            description: '',
            profilePicture: ''
          },
          rating: 5,
          text: 'Very helpful!'
        }
      ]
    }
  },
  {
    basicInfo: {
      id: 'therapist3',
      name: 'Dr. Michael Brown',
      description: 'Specializes in sports psychology.',
      profilePicture: 'https://api.dicebear.com/9.x/identicon/svg?seed=Snuggles',
      languages: [
        {
          id: 'en',
          name: 'english'
        }
      ]
    },
    location: {
      address: '789 Oak St, Anytown, USA',
      CP: '23456',
      city: 'Anytown',
      province: 'USA',
      mapsUrl: 'https://www.google.com/maps/place/789+Oak+St,+Anytown,+USA'
    },
    sessionInfo: {
      type: ['online'],
      sessionPrice: 175
    },
    reviews: {
      totalRatings: 1,
      average: 4.8,
      reviews: [
        {
          user: {
            id: 'reviewer3',
            name: "Michael's Client",
            description: '',
            profilePicture: ''
          },
          rating: 4.8,
          text: 'Great sessions!'
        }
      ]
    }
  },
  {
    basicInfo: {
      id: 'therapist4',
      name: 'Dr. Olivia White',
      description: 'Expert in child development.',
      profilePicture: 'https://api.dicebear.com/9.x/identicon/svg?seed=Pumpkin',
      languages: [
        {
          id: 'en',
          name: 'english'
        },
        {
          id: 'es',
          name: 'spanish'
        }
      ]
    },
    location: {
      address: '321 Pine St, Anytown, USA',
      CP: '34567',
      city: 'Anytown',
      province: 'USA',
      mapsUrl: 'https://www.google.com/maps/place/321+Pine+St,+Anytown,+USA'
    },
    sessionInfo: {
      type: ['online'],
      sessionPrice: 180
    },
    reviews: {
      totalRatings: 18,
      average: 4.9,
      reviews: [
        {
          user: {
            id: 'reviewer4',
            name: "Olivia's Parent",
            description: '',
            profilePicture: ''
          },
          rating: 5,
          text: 'Helpful and patient.'
        }
        // Continue adding reviews...
      ]
    }
  },
  {
    basicInfo: {
      id: 'therapist5',
      name: 'Dr. Sarah Green',
      description: 'Focuses on mindfulness and meditation.',
      profilePicture: 'https://api.dicebear.com/9.x/identicon/svg?seed=Felix',
      languages: [
        {
          id: 'it',
          name: 'italian'
        }
      ]
    },
    location: {
      address: '654 Maple St, Anytown, USA',
      CP: '45678',
      city: 'Anytown',
      province: 'USA',
      mapsUrl: 'https://www.google.com/maps/place/654+Maple+St,+Anytown,+USA'
    },
    sessionInfo: {
      type: ['presential'],
      sessionPrice: 190
    },
    reviews: {
      totalRatings: 1,
      average: 4.95,
      reviews: [
        {
          user: {
            id: 'reviewer5',
            name: "Sarah's Student",
            description: '',
            profilePicture: ''
          },
          rating: 4.95,
          text: 'Life-changing experience!'
        }
      ]
    }
  },
  {
    basicInfo: {
      id: 'therapist6',
      name: 'Dr. James Black',
      description: 'Specializes in trauma recovery.',
      profilePicture: 'https://api.dicebear.com/9.x/identicon/svg?seed=Garfield',
      languages: [
        {
          id: 'fr',
          name: 'french'
        }
      ]
    },
    location: {
      address: '987 Birch St, Anytown, USA',
      CP: '56789',
      city: 'Anytown',
      province: 'USA',
      mapsUrl: 'https://www.google.com/maps/place/987+Birch+St,+Anytown,+USA'
    },
    sessionInfo: {
      type: ['presential'],
      sessionPrice: 185
    },
    reviews: {
      totalRatings: 1,
      average: 4.85,
      reviews: [
        {
          user: {
            id: 'reviewer6',
            name: "James' Patient",
            description: '',
            profilePicture: ''
          },
          rating: 4.85,
          text: 'Supportive and understanding.'
        }
      ]
    }
  },
  {
    basicInfo: {
      id: 'therapist7',
      name: 'Dr. Anna Blue',
      description: 'Expert in couples therapy.',
      profilePicture: 'https://api.dicebear.com/9.x/identicon/svg?seed=Whiskers',
      languages: [
        {
          id: 'en',
          name: 'english'
        },
        {
          id: 'it',
          name: 'italian'
        }
      ]
    },
    location: {
      address: '210 Ash St, Anytown, USA',
      CP: '67890',
      city: 'Anytown',
      province: 'USA',
      mapsUrl: 'https://www.google.com/maps/place/210+Ash+St,+Anytown,+USA'
    },
    sessionInfo: {
      type: ['presential'],
      sessionPrice: 195
    },
    reviews: {
      totalRatings: 1,
      average: 4.9,
      reviews: [
        {
          user: {
            id: 'reviewer7',
            name: "Anna's Couple",
            description: '',
            profilePicture: ''
          },
          rating: 4.9,
          text: 'Made our relationship stronger.'
        }
      ]
    }
  },
  {
    basicInfo: {
      id: 'therapist8',
      name: 'Dr. Peter Red',
      description: 'Specializes in stress management.',
      profilePicture: 'https://api.dicebear.com/9.x/identicon/svg?seed=Bandit',
      languages: [
        {
          id: 'en',
          name: 'english'
        }
      ]
    },
    location: {
      address: '741 Cedar St, Anytown, USA',
      CP: '78901',
      city: 'Anytown',
      province: 'USA',
      mapsUrl: 'https://www.google.com/maps/place/741+Cedar+St,+Anytown,+USA'
    },
    sessionInfo: {
      type: ['online', 'presential'],
      sessionPrice: 200
    },
    reviews: {
      totalRatings: 1,
      average: 4.95,
      reviews: [
        {
          user: {
            id: 'reviewer8',
            name: "Peter's Client",
            description: '',
            profilePicture: ''
          },
          rating: 4.95,
          text: 'Helped manage my stress effectively.'
        }
      ]
    }
  }
]

export { mockTherapists }
