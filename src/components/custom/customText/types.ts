import { PropsWithChildren } from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { Colors, FontSize, FontWeight } from 'types'

interface ICustomTextProps extends PropsWithChildren {
  color?: Colors
  fontWeight?: FontWeight
  size?: FontSize
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined
  style?: StyleProp<TextStyle> | undefined
}

export { ICustomTextProps }
