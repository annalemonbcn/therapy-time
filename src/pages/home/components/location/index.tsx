import { StyleSheet, View } from 'react-native'
import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import Ionicons from '@expo/vector-icons/Ionicons'
import { theme } from 'theme'
import { useUserContext } from 'src/context/UserProvider'

const Location = () => {
  const { userLocation } = useUserContext()

  if (!userLocation) console.error('No user location')

  return (
    <View style={styles.locationContainer}>
      <Text color="b500" size="s2">
        Location
      </Text>
      <HorizontalContainer verticalCenter="flex-end" gap="sm2">
        <Ionicons name="location-sharp" size={22} color={theme.colors.main} />
        <Text color="b700" fontWeight="semi-bold">
          {userLocation}
        </Text>
        <Ionicons name="chevron-down" size={20} color={theme.colors.main} />
      </HorizontalContainer>
    </View>
  )
}

export default Location

const styles = StyleSheet.create({
  locationContainer: {
    alignSelf: 'flex-start',
    paddingVertical: theme.space.sm2,
    gap: theme.space.xs
  }
})
