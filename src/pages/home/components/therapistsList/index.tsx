import { View, Text } from 'react-native'
import { ITherapistsListProps } from './types'
import { getFilteredTherapists } from 'src/utils'
import { useEffect, useMemo } from 'react'
import { useGetFilteredTherapists } from './hooks'

const TherapistsList = ({ sessionType }: ITherapistsListProps) => {
  const { filteredList } = useGetFilteredTherapists(sessionType)

  useEffect(() => console.log('filteredList', filteredList), [filteredList])

  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default TherapistsList
