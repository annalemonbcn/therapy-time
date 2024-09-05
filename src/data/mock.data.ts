import { TagsEnum, Therapist } from './types'

const generateProfilePicture = (name: string) => {
  const convertedName = name.replace(/\s/g, '+')
  return `https://ui-avatars.com/api/?background=random&name=${convertedName}`
}

const mockTherapists: Therapist[] = [
  {
    basicInfo: {
      id: 'therapist1',
      name: 'Ana García',
      description:
        'Experienced therapist specializing in cognitive behavioral therapy and mindfulness. Ana has a passion for helping clients develop resilience and manage stress effectively.',
      profilePicture: generateProfilePicture('Ana García'),
      languages: [
        { id: 'es', name: 'spanish' },
        { id: 'en', name: 'english' }
      ],
      specialty: 'Cognitive Behavioral Therapy'
    },
    location: {
      address: 'Calle Gran Vía, 24',
      CP: '28013',
      city: 'Madrid',
      province: 'Madrid',
      mapsUrl: 'https://maps.example.com/madrid1'
    },
    sessionInfo: {
      type: ['online', 'presential'],
      tags: [TagsEnum.Stress],
      sessionPrice: 60,
      workingSchedule: {
        workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        startHour: '09:30',
        finishHour: '17:30'
      }
    },
    reviews: {
      totalRatings: 1,
      average: 5,
      reviews: [
        {
          user: {
            id: 'user1',
            name: 'Carlos Ruiz',
            description: 'Carlos is an IT professional who found great benefit in therapy sessions.',
            profilePicture: generateProfilePicture('Carlos Ruiz')
          },
          rating: 5,
          text: 'Ana helped me a lot with managing my anxiety. Highly recommended!'
        }
      ]
    },
    bookings: []
  },
  {
    basicInfo: {
      id: 'therapist2',
      name: 'Laura Fernández',
      description:
        'Laura is a clinical psychologist with a focus on trauma recovery and emotional regulation. She combines evidence-based practices with a compassionate approach.',
      profilePicture: generateProfilePicture('Laura Fernández'),
      languages: [
        { id: 'es', name: 'spanish' },
        { id: 'it', name: 'italian' }
      ],
      specialty: 'Bullying Management'
    },
    location: {
      address: 'Avenida de Andalucía, 14',
      CP: '29006',
      city: 'Málaga',
      province: 'Málaga',
      mapsUrl: 'https://maps.example.com/malaga1'
    },
    sessionInfo: {
      type: ['presential'],
      tags: [TagsEnum.Bullying],
      sessionPrice: 75,
      workingSchedule: {
        workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        startHour: '10:00',
        finishHour: '18:00'
      }
    },
    reviews: {
      totalRatings: 1,
      average: 4,
      reviews: [
        {
          user: {
            id: 'user2',
            name: 'Marta Sánchez',
            description: 'Marta is an artist who has greatly improved her emotional well-being.',
            profilePicture: generateProfilePicture('Marta Sánchez')
          },
          rating: 4,
          text: 'Laura has helped my son manage the emotional response caused by bullying'
        }
      ]
    },
    bookings: []
  },
  {
    basicInfo: {
      id: 'therapist3',
      name: 'Javier Martínez',
      description:
        'Specializing in couples therapy, Javier helps partners navigate their relationships with improved communication and conflict resolution techniques.',
      profilePicture: generateProfilePicture('Javier Martínez'),
      languages: [
        { id: 'es', name: 'spanish' },
        { id: 'en', name: 'english' }
      ],
      specialty: 'Couples Therapy'
    },
    location: {
      address: 'Carrer de Balmes, 35',
      CP: '08007',
      city: 'Barcelona',
      province: 'Barcelona',
      mapsUrl: 'https://maps.example.com/barcelona1'
    },
    sessionInfo: {
      type: ['online'],
      tags: [TagsEnum.Couples],
      sessionPrice: 90,
      workingSchedule: {
        workingDays: ['Friday', 'Saturday', 'Sunday'],
        startHour: '08:00',
        finishHour: '16:00'
      }
    },
    reviews: {
      totalRatings: 1,
      average: 4,
      reviews: [
        {
          user: {
            id: 'user3',
            name: 'Juan Pérez',
            description: 'Juan is a businessman who attended couples therapy with his partner.',
            profilePicture: generateProfilePicture('Juan Pérez')
          },
          rating: 4,
          text: 'Javier provided us with tools that truly strengthened our relationship.'
        }
      ]
    },
    bookings: []
  },
  {
    basicInfo: {
      id: 'therapist4',
      name: 'Lucía Rodríguez',
      description:
        'Lucía is a therapist with expertise in family therapy and child development. She works closely with families to address dynamics that impact their overall well-being.',
      profilePicture: generateProfilePicture('Lucía Rodríguez'),
      languages: [
        { id: 'es', name: 'spanish' },
        { id: 'fr', name: 'french' }
      ],
      specialty: 'Family Therapy'
    },
    location: {
      address: 'Calle Mayor, 15',
      CP: '50001',
      city: 'Zaragoza',
      province: 'Zaragoza',
      mapsUrl: 'https://maps.example.com/zaragoza1'
    },
    sessionInfo: {
      type: ['presential'],
      tags: [TagsEnum.Family],
      sessionPrice: 80,
      workingSchedule: {
        workingDays: ['Wednesday', 'Thursday', 'Friday'],
        startHour: '11:30',
        finishHour: '19:30'
      }
    },
    reviews: {
      totalRatings: 1,
      average: 4,
      reviews: [
        {
          user: {
            id: 'user4',
            name: 'Sofía López',
            description: 'Sofía sought family therapy to improve relationships within her home.',
            profilePicture: generateProfilePicture('Sofía Lopez')
          },
          rating: 4,
          text: 'Lucía helped our family communicate better and resolve our issues.'
        }
      ]
    },
    bookings: []
  },
  {
    basicInfo: {
      id: 'therapist5',
      name: 'Pedro Sánchez',
      description:
        'Pedro is an experienced therapist who focuses on anxiety and depression. He uses a mix of cognitive-behavioral and mindfulness techniques to help clients improve their mental health.',
      profilePicture: generateProfilePicture('Pedro Sánchez'),
      languages: [
        { id: 'es', name: 'spanish' },
        { id: 'en', name: 'english' }
      ],
      specialty: 'Anxiety and Depression'
    },
    location: {
      address: 'Paseo de Gracia, 60',
      CP: '08007',
      city: 'Barcelona',
      province: 'Barcelona',
      mapsUrl: 'https://maps.example.com/barcelona2'
    },
    sessionInfo: {
      type: ['online', 'presential'],
      tags: [TagsEnum.Anxiety, TagsEnum.Depression],
      sessionPrice: 70,
      workingSchedule: {
        workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        startHour: '10:30',
        finishHour: '17:30'
      }
    },
    reviews: {
      totalRatings: 1,
      average: 5,
      reviews: [
        {
          user: {
            id: 'user5',
            name: 'Luis Gómez',
            description: "Luis overcame severe anxiety with Pedro's guidance and support.",
            profilePicture: generateProfilePicture('Luis Gómez')
          },
          rating: 5,
          text: "Pedro's approach was exactly what I needed to manage my anxiety."
        }
      ]
    },
    bookings: []
  },
  {
    basicInfo: {
      id: 'therapist6',
      name: 'María López',
      description:
        'María specializes in stress management and burnout recovery, helping professionals regain balance in their lives through personalized therapy sessions.',
      profilePicture: generateProfilePicture('María López'),
      languages: [
        { id: 'es', name: 'spanish' },
        { id: 'fr', name: 'french' }
      ],
      specialty: 'Stress Management'
    },
    location: {
      address: 'Calle de Alcalá, 50',
      CP: '28014',
      city: 'Madrid',
      province: 'Madrid',
      mapsUrl: 'https://maps.example.com/madrid2'
    },
    sessionInfo: {
      type: ['presential'],
      tags: [TagsEnum.Stress],
      sessionPrice: 65,
      workingSchedule: {
        workingDays: ['Saturday', 'Sunday'],
        startHour: '09:00',
        finishHour: '17:00'
      }
    },
    reviews: {
      totalRatings: 1,
      average: 4,
      reviews: [
        {
          user: {
            id: 'user6',
            name: 'Elena Torres',
            description: 'Elena works in finance and found relief from work-related stress.',
            profilePicture: generateProfilePicture('Elena Torres')
          },
          rating: 4,
          text: "María's therapy sessions helped me cope with work stress effectively."
        }
      ]
    },
    bookings: []
  },
  {
    basicInfo: {
      id: 'therapist7',
      name: 'Elena Morales',
      description:
        'Elena is a licensed therapist with expertise in grief counseling and life transitions. She provides a supportive space for clients to process loss and navigate significant life changes.',
      profilePicture: generateProfilePicture('Elena Morales'),
      languages: [
        { id: 'es', name: 'spanish' },
        { id: 'en', name: 'english' }
      ],
      specialty: 'Grief Counseling'
    },
    location: {
      address: 'Calle San Vicente, 32',
      CP: '46002',
      city: 'Valencia',
      province: 'Valencia',
      mapsUrl: 'https://maps.example.com/valencia1'
    },
    sessionInfo: {
      type: ['online', 'presential'],
      tags: [TagsEnum.Grief],
      sessionPrice: 85,
      workingSchedule: {
        workingDays: ['Thursday', 'Friday', 'Saturday'],
        startHour: '11:30',
        finishHour: '19:00'
      }
    },
    reviews: {
      totalRatings: 1,
      average: 5,
      reviews: [
        {
          user: {
            id: 'user7',
            name: 'Gabriel Díaz',
            description:
              "Gabriel sought counseling after a major life transition and found Elena's guidance invaluable.",
            profilePicture: generateProfilePicture('Gabriel Díaz')
          },
          rating: 5,
          text: "Elena's sessions were crucial in helping me cope with my grief."
        }
      ]
    },
    bookings: []
  },
  {
    basicInfo: {
      id: 'therapist8',
      name: 'Isabel Torres',
      description:
        'Isabel is a clinical psychologist focusing on eating disorders and body image issues. She empowers clients to build healthy relationships with food and their bodies.',
      profilePicture: generateProfilePicture('Isabel Torres'),
      languages: [
        { id: 'es', name: 'spanish' },
        { id: 'it', name: 'italian' }
      ],
      specialty: 'Eating Disorders'
    },
    location: {
      address: 'Calle La Rambla, 45',
      CP: '08002',
      city: 'Barcelona',
      province: 'Barcelona',
      mapsUrl: 'https://maps.example.com/barcelona3'
    },
    sessionInfo: {
      type: ['presential'],
      tags: [TagsEnum.EatingDisorders],
      sessionPrice: 100,
      workingSchedule: {
        workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        startHour: '09:00',
        finishHour: '17:00'
      }
    },
    reviews: {
      totalRatings: 1,
      average: 4,
      reviews: [
        {
          user: {
            id: 'user8',
            name: 'Natalia Gómez',
            description: "Natalia struggled with body image issues and found Isabel's approach incredibly supportive.",
            profilePicture: generateProfilePicture('Natalia Gómez')
          },
          rating: 4,
          text: 'Isabel helped me develop a much healthier relationship with food.'
        }
      ]
    },
    bookings: []
  }
]

export { mockTherapists }
