import { Image, StyleSheet, Text, View } from 'react-native'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import { GOOGLE_API_KEY } from 'src/db/googleApi'
import { getStatusBarHeight } from 'src/utils'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

const Map = () => {
  const location = useSelector((state: RootState) => state.user.user.basicInfo.location)

  const mapStaticUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:Me%7C${location.latitude},${location.longitude}&key=${GOOGLE_API_KEY}`

  return (
    <View style={styles.pageContainer}>
      <Text>Address: {location.address}</Text>
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
