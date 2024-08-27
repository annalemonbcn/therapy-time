import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { ITherapistsListProps } from './types'
import TherapistCard from 'src/components/therapistCard'
import { Therapist } from 'src/data/types'
import { theme } from 'theme'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from 'src/navigation/homeNavigator/types'

const TherapistsList = ({ therapists }: ITherapistsListProps) => {
  const navigation = useNavigation<NavigationProp>()
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
