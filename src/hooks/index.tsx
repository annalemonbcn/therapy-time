import { Inter_700Bold, Inter_400Regular, useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter'
import { useNavigation } from '@react-navigation/native'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserBooking } from 'src/data/types'
import { setUserBookings, setUserName, setUserProfilePicture } from 'src/features/user/userSlice'
import { NavigationProp } from 'src/navigation/homeNavigator/types'
import { useGetBookingsQuery, useGetNameQuery, useGetProfilePictureQuery } from 'src/services/user'
import { RootState } from 'src/store'

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

const fetchName = (uuid: string) => {
  const { data, isLoading, isSuccess } = useGetNameQuery({ uuid })

  const name = useMemo(() => {
    if (isLoading || !isSuccess) return ''
    return data.name
  }, [isLoading, isSuccess])

  return name
}
const setNameToLocalStore = (name: string) => {
  if (!name) return
  const dispatch = useDispatch()
  dispatch(setUserName(name))
}

const fetchProfilePicture = (uuid: string) => {
  const { data, isLoading, isSuccess } = useGetProfilePictureQuery({ uuid })

  const profilePicture = useMemo(() => {
    if (isLoading || !isSuccess) return ''
    return data.profilePicture
  }, [isLoading, isSuccess])

  return profilePicture
}
const setProfilePictureToLocalStore = (profilePicture: string) => {
  if (!profilePicture) return
  const dispatch = useDispatch()
  dispatch(setUserProfilePicture(profilePicture))
}

const fetchBookings = (uuid: string) => {
  const { data, isLoading, isSuccess } = useGetBookingsQuery({ uuid })

  const bookings = useMemo(() => {
    if (isLoading || !isSuccess) return []
    return data.bookings
  }, [isLoading, isSuccess])

  return bookings
}
const setBookingsToLocalStore = (bookings: UserBooking[]) => {
  if (!bookings) return
  const dispatch = useDispatch()
  dispatch(setUserBookings(bookings))
}
const fetchBasicInfoFromDb = async () => {
  const uuid = useSelector((state: RootState) => state.user.user.basicInfo.uuid)

  const name = fetchName(uuid)
  if (name) setNameToLocalStore(name)

  const profilePicture = fetchProfilePicture(uuid)
  if (profilePicture) setProfilePictureToLocalStore(profilePicture)

  const bookings = fetchBookings(uuid)
  if (bookings) setBookingsToLocalStore(bookings)
}

const useLoadInitialInfo = () => {
  fetchBasicInfoFromDb()
}

export { useLoadInitialInfo }
