import styled from 'styled-components'
import { Text } from 'react-native'
import { Colors, FontSize, ICustomTextProps } from './types'
import { theme } from '../../../../theme' // --> add global path

const StyledText = styled(Text)<ICustomTextProps>`
  font-family: ${({ fontWeight }) =>
    fontWeight === 'bold' ? theme.typography.fontWeight.bold : theme.typography.fontWeight.regular};
  font-size: ${(props) => props['font-size'] && theme.typography.fontSize[props['font-size']]};
  color: ${({ color }) => color && theme.colors[color]};
`

StyledText.defaultProps = {
  color: theme.colors.main as Colors,
  'font-size': theme.typography.fontSize.s4 as FontSize
}

export { StyledText }
