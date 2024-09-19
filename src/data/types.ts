type BasicInfo = {
  id: string
  name: string
  description: string
  profilePicture: string
}
type UserBasicInfo = {
  uuid: string
  tokenId: string
  email: string
  name?: string
  profilePicture?: string
  location: {
    latitude: string
    longitude: string
    address: string
  }
}

type LocationInfo = {
  address: string
  CP: string
  city: string
  province: string
  mapsUrl: string
}

type SessionType = 'online' | 'presential'

type Days = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
type Hours =
  | '00'
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'

type Minutes =
  | '00'
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '28'
  | '29'
  | '30'
  | '31'
  | '32'
  | '33'
  | '34'
  | '35'
  | '36'
  | '37'
  | '38'
  | '39'
  | '40'
  | '41'
  | '42'
  | '43'
  | '44'
  | '45'
  | '46'
  | '47'
  | '48'
  | '49'
  | '50'
  | '51'
  | '52'
  | '53'
  | '54'
  | '55'

type CompleteTime = `${Hours}:${Minutes}`

type WorkingSchedule = {
  workingDays: Days[]
  startHour: CompleteTime
  finishHour: CompleteTime
}

enum TagsEnum {
  All = 'All',
  Anxiety = 'Anxiety',
  Bullying = 'Bullying',
  Couples = 'Couples',
  Depression = 'Depression',
  EatingDisorders = 'Eating Disorders',
  Family = 'Family',
  Grief = 'Grief',
  Stress = 'Stress'
}

const tagsArray: TagsEnum[] = Object.values(TagsEnum)

type SessionInfo = {
  type: SessionType[]
  tags: TagsEnum[]
  sessionPrice: number
  workingSchedule: WorkingSchedule
}

type Review = {
  user: BasicInfo
  rating: 1 | 2 | 3 | 4 | 5
  text: string
}

type LanguageId = 'en' | 'fr' | 'it' | 'es'
type LanguageName = 'english' | 'french' | 'italian' | 'spanish'

type Language = {
  id: LanguageId
  name: LanguageName
}

type Booking = {
  date: string
  time: string
}
type TherapistBooking = Booking & { userEmail: string }
type UserBooking = Booking & { therapistId: string }

type Therapist = {
  basicInfo: BasicInfo & {
    languages: Language[]
    specialty: string
  }
  location: LocationInfo
  sessionInfo: SessionInfo
  reviews: {
    totalRatings: number
    average: number | undefined
    reviews: Review[]
  }
  bookings: TherapistBooking[]
}

type User = {
  basicInfo: UserBasicInfo
  bookings: UserBooking[]
}

export {
  Therapist,
  WorkingSchedule,
  Days,
  Review,
  SessionInfo,
  SessionType,
  TagsEnum,
  tagsArray,
  User,
  TherapistBooking,
  UserBooking
}
