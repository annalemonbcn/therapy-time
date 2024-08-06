import { useMemo } from 'react'
import { SessionType } from 'src/data/types'
import { getFilteredTherapists } from 'src/utils'

const useGetFilteredTherapists = (sessionType: SessionType) => {
  const filteredList = useMemo(() => getFilteredTherapists(sessionType), [sessionType])

  return { filteredList }
}

export { useGetFilteredTherapists }
