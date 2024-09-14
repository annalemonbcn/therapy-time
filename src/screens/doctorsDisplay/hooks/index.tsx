import { useMemo } from 'react'
import { TagsEnum, Therapist } from 'src/data/types'
import { useGetTherapistsQuery } from 'src/services/therapists'
import { filterTherapistsByCategory, filterTherapistsByName } from 'src/utils/doctors'

const useDoctorsDisplay = () => {
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

const useFilterTherapists = (therapists: Therapist[], category: TagsEnum, query?: string) => {
  const filteredTherapists = useMemo(() => {
    if (query) return filterTherapistsByName(therapists, query)

    if (category === TagsEnum.All) return therapists
    return filterTherapistsByCategory(therapists, category)
  }, [therapists, category, query])

  return filteredTherapists
}

export { useDoctorsDisplay, useFilterTherapists }
