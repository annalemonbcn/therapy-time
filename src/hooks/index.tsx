import { Inter_700Bold, Inter_400Regular, useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter'
import { useNavigation } from '@react-navigation/native'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserBooking } from 'src/data/types'
import { setUserBookings, setUserName, setUserProfilePicture } from 'src/features/user/userSlice'
import { NavigationProp } from 'src/navigation/homeNavigator/types'
import { useGetBookingsQuery, useGetNameQuery, useGetProfilePictureQuery } from 'src/services/user'
import { RootState } from 'src/store'

const useGetUuid = () => useSelector((state: RootState) => state.user.user.basicInfo.uuid)

const useGetUserLocation = () => useSelector((state: RootState) => state.user.user.basicInfo.location)

export { useGetUuid, useGetUserLocation }

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
