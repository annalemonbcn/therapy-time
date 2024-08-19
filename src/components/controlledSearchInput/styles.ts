import { TextInput, View } from 'react-native'
import styled from 'styled-components'
import { IconType } from '../custom/controlledTextInput/types'
import { theme } from 'theme'

const StyledInputContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const StyledInputWrapper = styled(View)<{ type: IconType }>`
  flex: 2;
  flex-direction: row;
  gap: ${theme.space.sm}px;

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

export { StyledInputContainer, StyledInputWrapper, StyledInput }
