import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HomeRootStackParamList } from 'src/navigation/homeNavigator/types'

type BookingFormShape = {
  day: string
  hour: string
}

type AppointmentProps = NativeStackScreenProps<HomeRootStackParamList, 'Appointment'>
type RouteProp = AppointmentProps['route']

export { BookingFormShape, AppointmentProps, RouteProp }
