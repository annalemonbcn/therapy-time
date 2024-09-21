import { View } from 'react-native'
import styled from 'styled-components'
import { theme } from 'theme'
import { IPageWrapperProps } from './types'

const StyledPageWrapper = styled(View)<IPageWrapperProps>`
  flex: 1;
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'flex-start')};

  padding-left: ${theme.space.lg}px;
  padding-right: ${theme.space.lg}px;
  background-color: ${theme.colors.b50};
`

export { StyledPageWrapper }
