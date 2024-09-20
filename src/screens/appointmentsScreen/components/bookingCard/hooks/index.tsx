import { useState } from 'react'
import { useCancelBookingMutation } from 'src/services/user'

const useBookingCardActions = () => {
  const cancelAppointment = () => {
    const [loading, setLoading] = useState(false)

    const [cancelBooking] = useCancelBookingMutation() //user
  }

  return { cancelAppointment }
}

export { useBookingCardActions }
