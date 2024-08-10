import { StyleSheet, View } from 'react-native'
import { theme } from './theme'
import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import Header from './src/components/header'
import { getStatusBarHeight } from './src/utils'
import Home from './src/pages/home'
import { useLoadInitialConfig } from 'src/hooks'
import { UserProvider, useUserContext } from 'src/context/UserProvider'
import LocationScreen from 'src/pages/locationScreen'

export default function App() {
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

const AppDisplay = () => {
  const { userLocation } = useUserContext()
  if (!userLocation) return <LocationScreen />

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Home />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.b200,
    alignItems: 'center',
    paddingTop: getStatusBarHeight()
  },
  body: {
    // backgroundColor: 'pink',
    width: '100%',
    paddingHorizontal: 32, // -> canviar per theme.space.lg
    alignItems: 'center'
  }
})
