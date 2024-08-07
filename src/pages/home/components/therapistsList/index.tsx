import { FlatList, StyleSheet, View } from 'react-native'
import { ITherapistsListProps } from './types'
import { useGetFilteredTherapists } from './hooks'
import Therapist from '../therapist'
import { theme } from 'theme'

const Separator = <View style={{ height: 1, backgroundColor: theme.colors.b400 }} />

const TherapistsList = ({ sessionType }: ITherapistsListProps) => {
  const { filteredList } = useGetFilteredTherapists(sessionType)

  return (
    <FlatList
      data={filteredList}
      keyExtractor={(therapist) => therapist.basicInfo.id}
      renderItem={(obj) => <Therapist therapist={obj.item} />}
      ItemSeparatorComponent={() => Separator}
      style={styles.list}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    marginTop: theme.space.xl2,
    paddingHorizontal: theme.space.md,
    width: '100%',
    backgroundColor: theme.colors.b50,
    borderRadius: theme.borders.radius.lg
  }
})

export default TherapistsList
