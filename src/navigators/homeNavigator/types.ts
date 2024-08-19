import { NativeStackScreenProps } from '@react-navigation/native-stack'

type RootStackParamList = {
  Home: undefined
  'Doctor Details': { id: string }
}
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
type NavigationProp = HomeProps['navigation']

export { RootStackParamList, NavigationProp }
