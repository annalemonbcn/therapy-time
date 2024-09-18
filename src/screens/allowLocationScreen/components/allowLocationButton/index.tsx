import { StyleSheet } from 'react-native'
import * as Location from 'expo-location'
import Button from 'src/components/custom/customButton'
import { showErrorNotification } from 'src/utils/notifications'
import { GOOGLE_API_KEY } from 'src/db/googleApi'
import { useDispatch } from 'react-redux'
import { setUserLocation } from 'src/features/user/userSlice'

const AllowLocationButton = ({
  loading,
  setLoading
}: {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const dispatch = useDispatch()

  const handleSetLocation = async () => {
    setLoading(true)
    try {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        showErrorNotification('Permission not granted')
        return
      }

      const location = await Location.getCurrentPositionAsync({})

      const address = await getAddressFromCoordinates(
        location.coords.latitude.toString(),
        location.coords.longitude.toString()
      )

      dispatch(
        setUserLocation({
          latitude: location.coords.latitude.toString(),
          longitude: location.coords.longitude.toString(),
          address
        })
      )
    } catch (error) {
      console.error('Error fetching location:', error)
      showErrorNotification('Failed to fetch location')
    } finally {
      setLoading(false)
    }
  }

  const getAddressFromCoordinates = async (lat: string, lng: string): Promise<string> => {
    const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`

    try {
      const response = await fetch(geocodingUrl)
      const data = await response.json()
      const result = data.results[0]

      return `${result.address_components[1].long_name}, ${result.address_components[3].long_name}`
    } catch (error) {
      console.error('Error fetching address:', error)
      throw new Error('Failed to fetch address')
    }
  }

  return (
    <Button primary onPress={handleSetLocation} disabled={loading}>
      Sure, I'd like that
    </Button>
  )
}

export default AllowLocationButton

const styles = StyleSheet.create({})
