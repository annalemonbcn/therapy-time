import { StyleSheet, View } from 'react-native'
import Text from 'src/components/custom/customText'

// TODO: explore https://github.com/oblador/react-native-vector-icons

const Location = () => (
  <View style={styles.locationContainer}>
    <Text color="b500" size="s2">
      Location
    </Text>
    <Text color="b700" size="s2" fontWeight="bold">
      Sample Location
    </Text>
  </View>
)

export default Location

const styles = StyleSheet.create({
  locationContainer: {
    alignSelf: 'flex-start'
  }
})
