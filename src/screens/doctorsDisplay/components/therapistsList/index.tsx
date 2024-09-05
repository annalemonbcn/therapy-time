import { FlatList, StyleSheet } from 'react-native'
import { ITherapistsListProps } from './types'
import TherapistCard from 'src/components/therapistCard'
import { Therapist } from 'src/data/types'
import { theme } from 'theme'
import { useNavigate } from 'src/hooks'

const TherapistsList = ({ therapists }: ITherapistsListProps) => {
  const navigation = useNavigate()
  const handleItemPress = (item: Therapist) => navigation.navigate('Doctor Details', { id: item.basicInfo.id })

  return (
    <FlatList
      data={therapists}
      keyExtractor={(therapist) => therapist.basicInfo.id}
      renderItem={({ item }) => (
        <TherapistCard therapist={item} onPress={() => handleItemPress(item)} showReviews={true} />
      )}
      style={styles.list}
      scrollEnabled={false}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    marginVertical: theme.space.sm2,
    paddingHorizontal: theme.space.sm2
  }
})

export default TherapistsList
