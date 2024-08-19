import { TextInput, View } from 'react-native'
import styled from 'styled-components'
import { theme } from 'theme'
import Button from '../customButton'
import { IconType, IStyledButtonProps } from './types'

const StyledInputContainer = styled(View)`
  width: 100%;
  position: relative;
`

const StyledInputWrapper = styled(View)<{ type: IconType }>`
  flex-direction: row;
  gap: ${theme.space.sm}px;

  width: 100%;
  border-radius: ${theme.borders.radius.sm}px;
  padding: ${theme.space.md}px ${theme.space.lg}px;

  ${({ type }) =>
    type === 'primary' &&
    `
      background-color: ${theme.colors.b50};
      border-width: ${theme.borders.sizes.sm}px;
      border-color: ${theme.colors.b300};
    `}

  ${({ type }) =>
    type === 'secondary' &&
    `
    background-color: ${theme.colors.b100};
  `}
`

const StyledInput = styled(TextInput)<{ isTouched?: boolean }>`
  color: ${({ isTouched }) => (isTouched ? theme.colors.main : theme.colors.b400)};
`

const StyledButton = styled(Button)<IStyledButtonProps>`
  ${({ isInside }) =>
    isInside &&
    `
      position: absolute;
      top: ${theme.space.sm2}px;
      right: ${theme.space.sm}px;
    `}
`

export { StyledInputContainer, StyledInputWrapper, StyledInput, StyledButton }
