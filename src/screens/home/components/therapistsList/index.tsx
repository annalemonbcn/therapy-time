import { FlatList, StyleSheet, View } from 'react-native'
import { useGetFilteredTherapists } from './hooks'
import TherapistCard from '../../../../components/therapistCard'
import { theme } from 'theme'
import Text from 'src/components/custom/customText'
import { Therapist } from 'src/data/types'

const TherapistsList = () => {
  const { filteredList } = useGetFilteredTherapists()

  const handlePress = (item: Therapist) => {
    // TODO: open therapist page
    console.error('Open therapist page')
  }

  return (
    <View style={styles.container}>
      <Text fontWeight="bold" style={{ paddingHorizontal: 8 }}>
        {filteredList.length} {filteredList.length > 1 ? 'founds' : 'found'}
      </Text>
      <View>
        <FlatList
          data={filteredList}
          keyExtractor={(therapist) => therapist.basicInfo.id}
          renderItem={({ item }) => <TherapistCard therapist={item} onPress={() => handlePress(item)} showReviews={true} />}
          style={styles.list}
          scrollEnabled={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: theme.space.xl2,
    width: '100%',
    justifyContent: 'center'
  },
  list: {
    marginVertical: theme.space.sm2,
    paddingHorizontal: 8
  }
})

export default TherapistsList
