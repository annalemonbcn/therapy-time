import { NativeStackScreenProps } from '@react-navigation/native-stack'

type AuthStackParamList = {
  login: undefined
  signUp: undefined
  forgotPassword: undefined
}

type LoginProps = NativeStackScreenProps<AuthStackParamList, 'login'>
type AuthNavigationProp = LoginProps['navigation']

export { AuthStackParamList, LoginProps, AuthNavigationProp }
