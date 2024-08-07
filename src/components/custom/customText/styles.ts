import styled from 'styled-components'
import { Text } from 'react-native'
import { ICustomTextProps } from './types'
import { theme } from '../../../../theme' // --> add global path

const StyledText = styled(Text)<ICustomTextProps>`
  font-size: ${({ size }) => (size ? `${theme.typography.fontSize[size]}px` : `${theme.typography.fontSize.s3}px`)};
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.main)};

  ${({ fontWeight }) => fontWeight === 'regular' && `font-family: ${theme.typography.fontWeight.regular}`}
  ${({ fontWeight }) => fontWeight === 'semi-bold' && `font-family: ${theme.typography.fontWeight['semi-bold']}`}
  ${({ fontWeight }) => fontWeight === 'bold' && `font-family: ${theme.typography.fontWeight.bold}`}
`

export { StyledText }
