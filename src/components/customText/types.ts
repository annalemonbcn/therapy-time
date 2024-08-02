import { PropsWithChildren } from 'react'
import { theme } from '../../../theme'

type Colors =
  | 'main'
  | 'b0'
  | 'b50'
  | 'b100'
  | 'b200'
  | 'b300'
  | 'b400'
  | 'b500'
  | 'b600'
  | 'b700'
  | 'b800'
  | 'b900'
  | 'teal'
  | 'deepTeal'
  | 'lightTeal'
  | 'green'
  | 'paleGreen'
  | 'darkRed'
  | 'pink'
  | 'deepPink'
  | 'lightPink'
  | 'purple'
  | 'lightPurple'
  | 'blue'
  | 'paleBlue'
  | 'orange'

type FontWeight = 'regular' | 'bold'

type FontSize = 's1' | 's2' | 's3' | 's4' | 's5' | 's6'

interface ICustomTextProps extends PropsWithChildren {
  color?: Colors
  fontWeight?: FontWeight
  'font-size'?: FontSize
}

export { Colors, FontSize, ICustomTextProps }
