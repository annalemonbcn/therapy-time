import { StyleSheet, View } from 'react-native'
import Text from 'src/components/custom/customText'
import { useGetUserLocation, useGetUuid } from 'src/hooks'
import { theme } from 'theme'
import { useGetName } from './hooks'

const NameAndLocation = () => {
  const { address } = useGetUserLocation()
  const name = useGetName()

  return (
    <View style={styles.nameContainer}>
      <Text fontWeight="bold">{name ? name : 'No name'}</Text>
      <Text size="s2">{address}</Text>
    </View>
  )
}

export default NameAndLocation

const styles = StyleSheet.create({
  nameContainer: {
    alignItems: 'center',
    gap: theme.space.xs
  }
})
