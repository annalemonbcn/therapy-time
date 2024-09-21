import { Inter_700Bold, Inter_400Regular, useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from 'src/navigation/homeNavigator/types'

const useLoadInitialConfig = () => {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold
  })

  return { loaded, error }
}

const useNavigate = () => useNavigation<NavigationProp>()

export { useLoadInitialConfig, useNavigate }
