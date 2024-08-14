import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import Home from './src/pages/home'
import { useLoadInitialConfig } from 'src/hooks'
import { UserProvider, useUserContext } from 'src/context/UserProvider'
import LocationScreen from 'src/pages/locationScreen'
import DoctorDetails from 'src/pages/doctorDetails'

const AppDisplay = () => {
  const { userLocation } = useUserContext()

  if (!userLocation) return <LocationScreen />

  return <DoctorDetails />
  return <Home />
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
