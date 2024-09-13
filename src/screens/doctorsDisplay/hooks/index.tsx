import { useMemo } from 'react'
import { TagsEnum, Therapist } from 'src/data/types'
import { useGetTherapistsQuery } from 'src/services/therapists'

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

const filterByCategory = (therapists: Therapist[], category: TagsEnum) =>
  therapists.filter((therapist) => therapist.sessionInfo.tags.includes(category))

const filterByName = (therapists: Therapist[], query: string) =>
  therapists.filter((therapist) => therapist.basicInfo.name.toLowerCase().includes(query.toLowerCase()))

const useFilterTherapists = (therapists: Therapist[], category: TagsEnum, query?: string) => {
  const filteredTherapists = useMemo(() => {
    if (query) return filterByName(therapists, query)

    if (category === TagsEnum.All) return therapists
    return filterByCategory(therapists, category)
  }, [therapists, category, query])

  return filteredTherapists
}

export { useDoctorsDisplay, useFilterTherapists, filterByName }
