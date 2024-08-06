import { FlatList } from 'react-native'
import { ITherapistsListProps } from './types'
import { useGetFilteredTherapists } from './hooks'
import Therapist from '../therapist'

const TherapistsList = ({ sessionType }: ITherapistsListProps) => {
  const { filteredList } = useGetFilteredTherapists(sessionType)

  return (
    <FlatList
      data={filteredList}
      keyExtractor={(therapist) => therapist.basicInfo.id}
      renderItem={(obj) => <Therapist therapist={obj.item} />}
    />
  )
}

export default TherapistsList
