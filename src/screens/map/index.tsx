import { Image, StyleSheet, Text, View } from 'react-native'
import { STATUS_BAR_HEIGHT } from 'src/utils'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

const Map = () => {
  const location = useSelector((state: RootState) => state.user.user.basicInfo.location)

  const mapStaticUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:Me%7C${location.latitude},${location.longitude}&key=${process.env.EXPO_PUBLIC_GOOGLE_API_KEY}`

  return (
    <View style={styles.pageContainer}>
      <Text>Address: {location.address}</Text>
      <Text>Latitude: {location.latitude}</Text>
      <Text>Longitude: {location.longitude}</Text>
      {location.latitude && (
        <View>
          <Image source={{ uri: mapStaticUrl }} style={{ width: 300, height: 300, backgroundColor: 'grey' }} />
        </View>
      )}
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: STATUS_BAR_HEIGHT
  }
})
