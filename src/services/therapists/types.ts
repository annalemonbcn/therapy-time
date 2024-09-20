import { TherapistBooking } from 'src/data/types'

type SetTherapistBookingsRequest = { therapistId: string; bookings: TherapistBooking[] }

type CancelTherapistBookingRequest = { therapistId: string; bookingId: string; status: 'canceled' }

export { SetTherapistBookingsRequest, CancelTherapistBookingRequest }
