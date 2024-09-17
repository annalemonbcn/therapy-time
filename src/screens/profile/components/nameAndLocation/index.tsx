import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import Text from 'src/components/custom/customText'
import { RootState } from 'src/store'
import { theme } from 'theme'

const NameAndLocation = () => {
  const { name, location } = useSelector((state: RootState) => state.user.user.basicInfo)

  return (
    <View style={styles.nameContainer}>
      <Text fontWeight="bold">{name ? name : 'No name yet'}</Text>
      <Text size="s2">{location}</Text>
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
