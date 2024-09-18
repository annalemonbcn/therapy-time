import { Image, StyleSheet, Text, View } from 'react-native'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import { GOOGLE_API_KEY } from 'src/db/googleApi'
import { getStatusBarHeight } from 'src/utils'

const Map = () => {
  const [location, setLocation] = useState({
    latitude: '',
    longitude: ''
  })
  const [address, setAddress] = useState('')

  useEffect(() => {
    ;(async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') return
      const location = await Location.getCurrentPositionAsync({})
      const latitudeString = location.coords.latitude.toString()
      const longitudeString = location.coords.longitude.toString()
      setLocation({
        latitude: latitudeString,
        longitude: longitudeString
      })
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      if (location.latitude) {
        const REVERSE_GEOCODING_URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${GOOGLE_API_KEY}`
        const response = await fetch(REVERSE_GEOCODING_URL)
        const data = await response.json()
        if (data.results.length >= 1) setAddress(data.results.at(0).formatted_address)
      }
    })()
  }, [location])

  const mapStaticUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:Me%7C${location.latitude},${location.longitude}&key=${GOOGLE_API_KEY}`

  return (
    <View style={styles.pageContainer}>
      <Text>Address: {address}</Text>
      <Text>Latitude: {location.latitude}</Text>
      <Text>Longitude: {location.longitude}</Text>
      <View>
        <Image source={{ uri: mapStaticUrl }} style={{ width: 300, height: 300, backgroundColor: 'grey' }} />
      </View>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  pageContainer: {
    marginTop: getStatusBarHeight()
  }
})
