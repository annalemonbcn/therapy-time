import { NativeStackScreenProps } from '@react-navigation/native-stack'

type HomeRootStackParamList = {
  Home: undefined
  'Doctor Details': { id: string }
}
type HomeProps = NativeStackScreenProps<HomeRootStackParamList, 'Home'>
type NavigationProp = HomeProps['navigation']

export { HomeRootStackParamList, NavigationProp }
