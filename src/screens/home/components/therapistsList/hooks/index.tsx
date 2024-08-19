import { useMemo } from 'react'
import { useUserContext } from 'src/context/UserProvider'
import { SessionType } from 'src/data/types'
import { getFilteredTherapists } from 'src/utils'

const useGetFilteredTherapists = () => {
  const { sessionType } = useUserContext()
  const filteredList = useMemo(() => getFilteredTherapists(sessionType), [sessionType])

  return { filteredList }
}

export { useGetFilteredTherapists }
