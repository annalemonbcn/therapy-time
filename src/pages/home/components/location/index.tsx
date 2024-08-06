import { StyleSheet, View } from 'react-native'
import Text from 'src/components/custom/customText'
import Entypo from '@expo/vector-icons/Entypo'
import HorizontalContainer from 'src/components/custom/horizontalContainer'
import { theme } from 'theme'

const Location = () => (
  <View style={styles.locationContainer}>
    <Text color="b500" size="s2">
      Location
    </Text>
    <HorizontalContainer verticalCenter>
      <Entypo name="location-pin" size={24} color="black" />
      <Text color="b700" size="s2" fontWeight="bold">
        Sample Location
      </Text>
      <Entypo name="chevron-small-down" size={24} color="black" />
    </HorizontalContainer>
  </View>
)

export default Location

const styles = StyleSheet.create({
  locationContainer: {
    alignSelf: 'flex-start',
    paddingVertical: 8
  }
})
