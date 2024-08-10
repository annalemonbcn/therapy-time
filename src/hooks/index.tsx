import { useEffect } from 'react'
import { Inter_700Bold, Inter_400Regular, useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen'

const useLoadInitialConfig = () => {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold
  })

  return { loaded, error }
}

export { useLoadInitialConfig }
