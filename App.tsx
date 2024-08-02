import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from './theme'
import { Inter_700Bold, Inter_400Regular, useFonts } from '@expo-google-fonts/inter'
import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import Header from './src/components/header'

export default function App() {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.b0,
    alignItems: 'center',
    paddingTop: 70
  }
})
