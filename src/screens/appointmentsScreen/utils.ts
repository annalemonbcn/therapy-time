import { UserBooking } from 'src/data/types'
import { FilterBy, ListBooking, Tabs } from './types'

const filterBookings = (bookings: ListBooking[], filterBy: FilterBy): ListBooking[] => {
  const today = new Date()

  return bookings.filter((booking) => {
    const bookingDate = new Date(`${booking.date}T${booking.time}:00`)
    if (filterBy === 'canceled') {
      return booking.status === 'canceled'
    }

    if (filterBy === 'completed') {
      return bookingDate <= today && booking.status !== 'canceled'
    }

    if (filterBy === 'upcoming') {
      return bookingDate > today || bookingDate.getTime() - today.getTime() < 24 * 60 * 60 * 1000
    }
  })
}

const sortBookings = (bookings: ListBooking[]) =>
  bookings.sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}:00`)
    const dateB = new Date(`${b.date}T${b.time}:00`)

    return dateA.getTime() - dateB.getTime()
  })

const dtoToListBooking = (bookings: UserBooking[]): ListBooking[] | undefined => {
  if (!bookings) return undefined
  const listBookings = bookings.map((booking, idx) => ({
    bookingId: idx.toString(),
    ...booking
  }))
  return sortBookings(listBookings)
}

export { dtoToListBooking, filterBookings }
