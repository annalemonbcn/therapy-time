import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import { theme } from 'theme'
import LocationIcon from 'src/components/icons/locationIcon'
import ChevronIcon from 'src/components/icons/chevronIcon'
import { useGetUserLocation, useNavigate } from 'src/hooks'

const LocationDisplay = () => {
  const userLocation = useGetUserLocation()

  if (!userLocation) console.error('No user location')

  const navigation = useNavigate()

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Change Location')}>
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
      </TouchableWithoutFeedback>
    </View>
  )
}

export default LocationDisplay

const styles = StyleSheet.create({
  container: {
    gap: theme.space.md
  },
  locationContainer: {
    alignSelf: 'flex-start',
    paddingVertical: theme.space.sm2,
    gap: theme.space.xs
  }
})
