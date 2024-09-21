import { useMemo } from 'react'
import { useGetBookingsQuery } from 'src/services/user'
import { useGetUuid } from 'src/utils/utils'
import { sortBookings } from '../utils'

const useAppointmentsScreen = () => {
  const uuid = useGetUuid()
  const { data, isFetching, isSuccess } = useGetBookingsQuery({ uuid })

  const isLoading = isFetching

  const bookings = useMemo(() => {
    if (isLoading || !isSuccess) return []
    return sortBookings(data.bookings)
  }, [data, isLoading, isSuccess])

  return { data: bookings, isLoading }
}

export { useAppointmentsScreen }
