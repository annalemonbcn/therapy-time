import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import Text from 'src/components/custom/customText'
import { theme } from 'theme'
import LocationIcon from 'src/components/icons/locationIcon'
import ChevronIcon from 'src/components/icons/chevronIcon'
import { useNavigate } from 'src/hooks'
import { useGetUserLocation } from 'src/utils/utils'

const LocationDisplay = () => {
  const address = useGetUserLocation()

  const navigation = useNavigate()

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Change Location')}>
        <View style={styles.locationContainer}>
          <Text color="b500" size="s2">
            Location
          </Text>
          <View style={styles.addressContainer}>
            <LocationIcon size={22} />
            <Text color="b700" fontWeight="semi-bold">
              {address}
            </Text>
            <ChevronIcon size={20} />
          </View>
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
    gap: theme.space.xs,
    maxWidth: '90%'
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: theme.space.xs2,
    maxWidth: '90%'
  }
})
