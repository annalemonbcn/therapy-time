import { PropsWithChildren } from 'react'
import { Colors, FontSize, FontWeight } from 'types'

interface ICustomTextProps extends PropsWithChildren {
  color?: Colors
  fontWeight?: FontWeight
  size?: FontSize
}

export { ICustomTextProps }
