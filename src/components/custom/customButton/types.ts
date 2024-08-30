import { TouchableOpacityProps } from 'react-native'
import { FontSize } from 'types'

type ICustomButtonProps = TouchableOpacityProps & {
  children: React.ReactNode
  onPress: () => void
  primary?: boolean
  secondary?: boolean
  isTag?: boolean
  textFontSize?: FontSize
}

type ButtonProps = Omit<ICustomButtonProps, 'onPress'>

export { ICustomButtonProps, ButtonProps }
