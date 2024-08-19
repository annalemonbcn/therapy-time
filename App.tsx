import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import Home from './src/screens/home'
import { useLoadInitialConfig } from 'src/hooks'
import { UserProvider, useUserContext } from 'src/context/UserProvider'
import LocationScreen from 'src/screens/locationScreen'
import DoctorDetails from 'src/screens/doctorDetails'
import { useFonts } from 'expo-font'

const AppDisplay = () => {
  const { userLocation } = useUserContext()

  if (!userLocation) return <LocationScreen />

  return <Home />
  return <DoctorDetails />
}

const App = () => {
  const { loaded, error } = useLoadInitialConfig()

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) return null

  return (
    <UserProvider>
      <AppDisplay />
    </UserProvider>
  )
}

export default App
