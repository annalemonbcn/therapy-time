type BasicInfo = {
  id: string
  name: string
  description: string
  profilePicture: string
}

type LocationInfo = {
  address: string
  CP: string
  city: string
  province: string
  mapsUrl: string
}

type SessionType = 'online' | 'presential'

type SessionInfo = {
  type: SessionType[]
  tags: string[]
  sessionPrice: number
  // availableHours: ??
}

type Review = {
  user: BasicInfo
  rating: number
  text: string
}

type LanguageId = 'en' | 'fr' | 'it' | 'es'
type LanguageName = 'english' | 'french' | 'italian' | 'spanish'

type Language = {
  id: LanguageId
  name: LanguageName
}

type Therapist = {
  basicInfo: BasicInfo & {
    languages: Language[]
  }
  location: LocationInfo
  sessionInfo: SessionInfo
  reviews: {
    totalRatings: number
    average: number
    reviews: Review[]
  }
}

type User = {
  basicInfo: BasicInfo
  location: LocationInfo
  reviews: {
    totalRatings: number
    reviews: Review[]
  }
}

export { Therapist, SessionType }
