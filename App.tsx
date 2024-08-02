import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from './theme'
import { Inter_700Bold, Inter_400Regular, useFonts } from '@expo-google-fonts/inter'
import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import CustomText from './src/components/customText'

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
      <CustomText color="lightPurple" fontWeight="bold" font-size="s6">
        Open up App.tsx to start working on your app!
      </CustomText>
      <StatusBar style="auto" />
    </View>
  )
}

// TEST if fontFamily works
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.b0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
