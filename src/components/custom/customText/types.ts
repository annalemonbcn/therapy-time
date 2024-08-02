import { PropsWithChildren } from 'react'
import { Colors, FontWeight, FontSize } from '../../../../types'

interface ICustomTextProps extends PropsWithChildren {
  color?: Colors
  fontWeight?: FontWeight
  'font-size'?: FontSize
}

export { Colors, FontSize, ICustomTextProps }
