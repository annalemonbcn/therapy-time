import { useMemo } from 'react'
import { useGetTherapistByIdQuery } from 'src/services/therapists'

const useGetDoctorDetails = (id: string) => {
  const { data, isFetching, isSuccess } = useGetTherapistByIdQuery(id)

  const isLoading = isFetching

  const therapist = useMemo(() => {
    if (isLoading || !isSuccess) return undefined
    return data
  }, [data, isLoading, isSuccess])

  return therapist
}

export { useGetDoctorDetails }
