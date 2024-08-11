import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { theme } from 'theme'
import { ButtonProps, ICustomButtonProps } from './types'
import Text from '../customText'

const StyledTouchable = styled(TouchableOpacity)<ICustomButtonProps>`
  padding: ${theme.space.md}px;

  justify-content: center;
  align-items: center;

  border-radius: ${theme.borders.radius.xl2}px;

  ${({ primary }) =>
    primary &&
    `
      background-color: ${theme.colors.main};
    `}

  ${({ secondary }) => {
    const borderWidth = `${theme.borders.sizes.sm}px`

    return (
      secondary &&
      `
      background-color: ${theme.colors.b0};
      border-width: ${borderWidth};
      border-color: ${theme.colors.main};
    `
    )
  }}
`

const StyledText = styled(Text)<ButtonProps>`
  font-family: ${theme.typography.fontWeight.bold};

  ${({ primary }) => primary && `color: ${theme.colors.b0}`}
  ${({ secondary }) => secondary && `color: ${theme.colors.main}`}
`

export { StyledTouchable, StyledText }
