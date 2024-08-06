import { useEffect } from 'react'
import { Inter_700Bold, Inter_400Regular, useFonts } from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen'

const useLoadInitialConfig = () => {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  return { loaded, error }
}

export { useLoadInitialConfig }
