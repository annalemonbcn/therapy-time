import { UserBooking } from 'src/data/types'
import { FilterBy, Tabs } from './types'

const filterBookings = (bookings: UserBooking[], filterBy: FilterBy): UserBooking[] => {
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
      return (
        bookingDate > today ||
        (bookingDate.getTime() - today.getTime() < 24 * 60 * 60 * 1000 && bookingDate.getHours() >= today.getHours())
      )
    }
  })
}

const sortBookings = (bookings: UserBooking[]) => {
  if (!bookings) return

  const bookingsDups = [...bookings]
  return bookingsDups.sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}:00`)
    const dateB = new Date(`${b.date}T${b.time}:00`)

    return dateA.getTime() - dateB.getTime()
  })
}

export { sortBookings, filterBookings }
