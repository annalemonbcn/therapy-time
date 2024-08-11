import { FlatList, StyleSheet, View } from 'react-native'
import { useGetFilteredTherapists } from './hooks'
import TherapistCard from '../therapistCard'
import { theme } from 'theme'
import Text from 'src/components/custom/customText'
import { useState } from 'react'
import BasicModal from 'src/components/customModal'
import { Therapist } from 'src/data/types'
import { useModalContext } from 'src/context/useModalController'

const TherapistsList = () => {
  const { filteredList } = useGetFilteredTherapists()

  const { isOpen, handleOpen, handleClose } = useModalContext()

  const [selectedTherapist, setSelectedTherapist] = useState<Therapist | undefined>(undefined)

  const handlePress = (item: Therapist) => {
    setSelectedTherapist(item)
    handleOpen()
  }

  return (
    <View style={styles.container}>
      <Text fontWeight="bold" style={{ paddingHorizontal: 8 }}>
        {filteredList.length} {filteredList.length > 1 ? 'founds' : 'found'}
      </Text>
      <FlatList
        data={filteredList}
        keyExtractor={(therapist) => therapist.basicInfo.id}
        renderItem={({ item }) => <TherapistCard therapist={item} onPress={() => handlePress(item)} />}
        style={styles.list}
      />
      <BasicModal isOpen={isOpen} closeModal={() => handleClose()} therapist={selectedTherapist} />
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
