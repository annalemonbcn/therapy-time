import styled from 'styled-components'
import { Text } from 'react-native'
import { ICustomTextProps } from './types'
import { theme } from '../../../../theme' // --> add global path

const StyledText = styled(Text)<ICustomTextProps>`
  font-family: ${({ fontWeight }) =>
    fontWeight === 'bold' ? theme.typography.fontWeight.bold : theme.typography.fontWeight.regular};
  font-size: ${({ size }) => (size ? theme.typography.fontSize[size] : theme.typography.fontSize.s3)};
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.main)};
`

export { StyledText }
