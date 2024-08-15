import { StyleSheet, View } from 'react-native'
import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import { theme } from 'theme'
import { useUserContext } from 'src/context/UserProvider'
import LocationIcon from 'src/components/icons/locationIcon'
import ChevronIcon from 'src/components/icons/chevronIcon'

const Location = () => {
  const { userLocation } = useUserContext()

  if (!userLocation) console.error('No user location')

  return (
    <View style={styles.locationContainer}>
      <Text color="b500" size="s2">
        Location
      </Text>
      <HorizontalContainer verticalCenter="flex-end" gap="sm2">
        <LocationIcon size={22} />
        <Text color="b700" fontWeight="semi-bold">
          {userLocation}
        </Text>
        <ChevronIcon size={20} />
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
