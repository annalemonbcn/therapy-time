import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { useLoadInitialConfig } from 'src/hooks'
import { UserProvider, useUserContext } from 'src/context/UserProvider'
import LocationScreen from 'src/screens/locationScreen'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabBar from 'src/navigators/bottomTabBar'

const AppDisplay = () => {
  const { userLocation } = useUserContext()

  if (!userLocation) return <LocationScreen />

  return <BottomTabBar  />
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
    <NavigationContainer>
      <UserProvider>
        <AppDisplay />
      </UserProvider>
    </NavigationContainer>
  )
}

export default App
