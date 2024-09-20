import { UserBooking } from 'src/data/types'

type ListBooking = UserBooking & { bookingId: string }

type Tabs = 'upcoming' | 'completed' | 'canceled'
type FilterBy = Tabs

export { ListBooking, Tabs, FilterBy }
