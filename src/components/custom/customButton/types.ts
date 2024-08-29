import { TouchableOpacityProps } from 'react-native'

type ICustomButtonProps = TouchableOpacityProps & {
  children: React.ReactNode
  onPress: () => void
  primary?: boolean
  secondary?: boolean
  isTag?: boolean
}

type ButtonProps = Omit<ICustomButtonProps, 'onPress'>

export { ICustomButtonProps, ButtonProps }
