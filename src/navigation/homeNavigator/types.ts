import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TagsEnum } from 'src/data/types'

type HomeRootStackParamList = {
  Home: undefined
  'Doctors List': { category: TagsEnum }
  'Doctor Details': { id: string }
}
type HomeProps = NativeStackScreenProps<HomeRootStackParamList, 'Home'>
type NavigationProp = HomeProps['navigation']

export { HomeRootStackParamList, NavigationProp }
