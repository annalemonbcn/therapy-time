import { Inter_700Bold, Inter_400Regular, useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { NavigationProp } from 'src/navigation/homeNavigator/types'
import { RootState } from 'src/store'

const useGetUuid = () => useSelector((state: RootState) => state.user.user.basicInfo.uuid)

const useGetUserLocation = () => useSelector((state: RootState) => state.user.user.basicInfo.location.address)

const useGetUserEmail = () => useSelector((state: RootState) => state.user.user.basicInfo.email)

export { useGetUuid, useGetUserLocation, useGetUserEmail }

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
