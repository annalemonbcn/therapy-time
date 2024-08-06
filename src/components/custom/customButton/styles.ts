import { Pressable } from 'react-native'
import styled from 'styled-components'
import { theme } from 'theme'
import { ButtonProps, ICustomButtonProps } from './types'
import Text from '../customText'

const StyledPressable = styled(Pressable)<ICustomButtonProps>`
  min-width: 150px;
  padding: ${theme.space.md};

  justify-content: center;
  align-items: center;

  border-radius: ${theme.borders.radius.md};

  ${({ primary }) =>
    primary &&
    `
      background-color: ${theme.colors.main};
    `}

  ${({ secondary }) =>
    secondary &&
    `
      background-color: ${theme.colors.b0};
      border-width: ${theme.borders.sizes.sm};
      border-color: ${theme.colors.main};
    `}
`

const StyledText = styled(Text)<ButtonProps>`
  font-family: ${theme.typography.fontWeight.bold};

  ${({ primary }) => primary && `color: ${theme.colors.b0}`}
  ${({ secondary }) => secondary && `color: ${theme.colors.main}`}
`

export { StyledPressable, StyledText }
