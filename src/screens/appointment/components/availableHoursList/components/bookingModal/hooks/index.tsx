import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { therapistsApi, useGetTherapistsQuery } from 'src/services/therapists'
const extractNumber = (str: string) => {
  const match = str.match(/\d+$/)
  if (!match) return
  return parseInt(match[0]) - 1
}

const useGetTherapists = () => {
  const { data, isFetching, isSuccess } = useGetTherapistsQuery()

  const isLoading = isFetching

  const therapists = useMemo(() => {
    if (isLoading || !isSuccess) return []

    return data
  }, [data, isLoading, isSuccess])

  return {
    data: therapists,
    isLoading
  }
}

const useGetDbTherapistId = (localTherapistId: string) => {
  const { data, isLoading } = useGetTherapists()

  if (isLoading) return ''

  const therapistsIdsMap = new Map()
  data.map((therapist) =>
    therapistsIdsMap.set(therapist.basicInfo.id, extractNumber(therapist.basicInfo.id)?.toString())
  )

  return therapistsIdsMap.get(localTherapistId)
}

export { useGetDbTherapistId }
