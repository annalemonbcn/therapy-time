import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from './theme'
import { Inter_700Bold, Inter_400Regular, useFonts } from '@expo-google-fonts/inter'
import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import Header from './src/components/header'
import { getStatusBarHeight } from './src/utils'
import Home from './src/pages/home'
import { useLoadInitialConfig } from 'src/hooks'

export default function App() {
  const { loaded, error } = useLoadInitialConfig()

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) return null

  return (
    <View style={styles.container}>
      <Header />
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
