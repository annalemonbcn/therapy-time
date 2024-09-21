import { View } from 'react-native'
import styled from 'styled-components'
import { IHorizontalContainerProps } from './types'
import { theme } from '../../../../theme'
import { Colors } from 'types'

const StyledHorizontalContainer = styled(View)<IHorizontalContainerProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding-top: ${({ paddingVertical }) => (paddingVertical ? `${theme.space[paddingVertical]}px` : 0)};
  padding-bottom: ${({ paddingVertical }) => (paddingVertical ? `${theme.space[paddingVertical]}px` : 0)};
  padding-left: ${({ paddingHorizontal }) => (paddingHorizontal ? `${theme.space[paddingHorizontal]}px` : 0)};
  padding-right: ${({ paddingHorizontal }) => (paddingHorizontal ? `${theme.space[paddingHorizontal]}px` : 0)};

  background-color: ${({ backgroundColor }) => backgroundColor && theme.colors[backgroundColor as Colors]};

  flex-direction: row;
  gap: ${({ gap }) => (gap ? `${theme.space[gap]}px` : 0)};
  justify-content: ${({ horizontalCenter }) => (horizontalCenter ? horizontalCenter : 'inherit')};
  align-items: ${({ verticalCenter }) => (verticalCenter ? verticalCenter : 'inherit')};
`

StyledHorizontalContainer.defaultProps = {
  backgroundColor: 'transparent'
}

export { StyledHorizontalContainer }
