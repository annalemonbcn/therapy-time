import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from 'types'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
type HomeScreenNavigationProp = HomeProps['navigation']

export { HomeProps, HomeScreenNavigationProp }
