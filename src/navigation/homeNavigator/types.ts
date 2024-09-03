import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TagsEnum } from 'src/data/types'

type HomeRootStackParamList = {
  Home: undefined
  'Doctors Display': { category: TagsEnum; name?: string }
  'Doctor Details': { id: string }
  Appointment: { therapistId: string }
}
type HomeProps = NativeStackScreenProps<HomeRootStackParamList, 'Home'>
type NavigationProp = HomeProps['navigation']

export { HomeRootStackParamList, NavigationProp }
