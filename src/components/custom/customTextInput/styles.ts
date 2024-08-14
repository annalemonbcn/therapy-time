import { TextInput, View } from 'react-native'
import styled from 'styled-components'
import { theme } from 'theme'
import Button from '../customButton'
import Text from '../customText'
import { IStyledButtonProps } from './types'

const StyledInputWrapper = styled(View)`
  width: 100%;
  position: relative;
`

const StyledInput = styled(TextInput)`
  width: 100%;
  background-color: ${theme.colors.b50};
  border-radius: ${theme.borders.radius.sm}px;
  border-width: ${theme.borders.sizes.sm}px;
  border-color: ${theme.colors.b300};
  padding: ${theme.space.md}px ${theme.space.lg}px;
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

export { StyledInputWrapper, StyledInput, StyledButton }
