import { FlatList, StyleSheet, View } from 'react-native'
import { useGetFilteredTherapists } from './hooks'
import Therapist from '../therapist'
import { theme } from 'theme'
import Text from 'src/components/custom/customText'

const TherapistsList = () => {
  const { filteredList } = useGetFilteredTherapists()

  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{filteredList.length} founds</Text>
      <FlatList
        data={filteredList}
        keyExtractor={(therapist) => therapist.basicInfo.id}
        renderItem={(obj) => <Therapist therapist={obj.item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: theme.space.xl2,
    width: '100%',
  }
})

export default TherapistsList
