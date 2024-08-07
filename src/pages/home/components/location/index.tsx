import { StyleSheet, View } from 'react-native'
import Text from 'src/components/custom/customText'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Entypo from '@expo/vector-icons/Entypo'
import { theme } from 'theme'

const Location = () => {
  // TODO: create a UserContext with info about his location

  let location = undefined

  // if(!location) open location modal

  location = 'Location'

  return (
    <View style={styles.locationContainer}>
      <Text color="b500" size="s2">
        Location
      </Text>
      <HorizontalContainer verticalCenter gap="sm2">
        <FontAwesome6 name="location-dot" size={20} color="black" />
        <Text color="b700" fontWeight="semi-bold">
          {location}
        </Text>
        <Entypo name="chevron-small-down" size={24} color="black" />
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
